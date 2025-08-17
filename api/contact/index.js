// Azure Functions (Node 18+, CommonJS)
module.exports = async function (context, req) {
  // ---- CORS: sta productie + previews toe ----
  const FALLBACK_ORIGIN = "https://kevinfroger.nl";
  const allowed = new Set(
    (process.env.ALLOWED_ORIGINS || `${FALLBACK_ORIGIN}`)
      .split(",")
      .map(s => s.trim())
      .filter(Boolean)
  );
  const origin = req.headers["origin"] || FALLBACK_ORIGIN;
  const allowOrigin = allowed.has(origin) ? origin : FALLBACK_ORIGIN;

  const baseHeaders = {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type, authorization",
    "Access-Control-Max-Age": "86400",
    "content-type": "application/json"
  };

  if (req.method === "OPTIONS") {
    context.res = { status: 204, headers: baseHeaders };
    return;
  }

  try {
    const data = await readBody(req);

    const name = (data.name || "").toString().trim();
    const email = (data.email || "").toString().trim();
    const message = (data.message || "").toString().trim();
    const phone = (data.phone || "").toString().trim();
    const hp = (data.website || "").toString().trim(); // honeypot

    // Honeypot: als gevuld, doe net alsof het goed ging
    if (hp) {
      context.res = { status: 200, headers: baseHeaders, body: JSON.stringify({ ok: true }) };
      return;
    }

    const errors = [];
    if (!name || name.length > 100) errors.push("name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("email");
    if (!message || message.length > 5000) errors.push("message");
    if (errors.length) {
      context.res = { status: 422, headers: baseHeaders, body: JSON.stringify({ ok: false, errors }) };
      return;
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
    if (!RESEND_API_KEY) {
      context.res = { status: 500, headers: baseHeaders, body: JSON.stringify({ ok: false, error: "Missing RESEND_API_KEY" }) };
      return;
    }

    const to = process.env.CONTACT_TO || "info@kevinfroger.nl";
    const from = process.env.CONTACT_FROM || "no-reply@kevinfroger.nl"; // zorg dat dit domein DKIM/SPF heeft

    const subject = "Nieuw bericht via kevinfroger.nl";
    const html =
      `<h2>Nieuw contactbericht</h2>
       <p><strong>Naam:</strong> ${esc(name)}</p>
       <p><strong>Email:</strong> ${esc(email)}</p>` +
      (phone ? `<p><strong>Telefoon:</strong> ${esc(phone)}</p>` : "") +
      `<p><strong>Bericht:</strong></p>
       <pre style="white-space:pre-wrap">${esc(message)}</pre>`;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({ from, to, subject, html, reply_to: email })
    });

    if (!r.ok) {
      const t = await r.text().catch(() => "");
      context.log("Mailer error:", r.status, t);
      context.res = { status: 502, headers: baseHeaders, body: JSON.stringify({ ok: false, error: "Mailer error" }) };
      return;
    }

    context.res = { status: 200, headers: baseHeaders, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    context.log("Handler error", e);
    context.res = { status: 500, headers: baseHeaders, body: JSON.stringify({ ok: false, error: "Server error" }) };
  }
};

// ---- Helpers ----
function esc(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

async function readBody(req) {
  const ct = (req.headers["content-type"] || "").toLowerCase();
  if (ct.includes("application/json")) {
    if (typeof req.body === "string") return JSON.parse(req.body || "{}");
    return req.body || {};
  }
  if (ct.includes("application/x-www-form-urlencoded")) {
    const text = typeof req.body === "string" ? req.body : (req.rawBody || "");
    const params = new URLSearchParams(text);
    const obj = {};
    for (const [k, v] of params) obj[k] = v;
    return obj;
  }
  // fallback: probeer JSON, anders leeg object
  try { return JSON.parse(req.body || "{}"); } catch { return {}; }
}
