// Azure Functions (Node 18+, CommonJS)
module.exports = async function (context, req) {
  const ORIGIN = "https://kevinfroger.nl";
  const corsHeaders = {
    "Access-Control-Allow-Origin": ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type, authorization",
    "Access-Control-Max-Age": "86400"
  };

  if (req.method === "OPTIONS") {
    context.res = { status: 204, headers: corsHeaders };
    return;
  }

  try {
    const data = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const name = (data.name || "").toString().trim();
    const email = (data.email || "").toString().trim();
    const message = (data.message || "").toString().trim();
    const phone = (data.phone || "").toString().trim();
    const hp = (data.website || "").toString().trim(); // honeypot (verborgen veld)

    if (hp) {
      context.res = ok({ ok: true }, corsHeaders);
      return;
    }

    const errors = [];
    if (!name || name.length > 100) errors.push("name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("email");
    if (!message || message.length > 5000) errors.push("message");
    if (errors.length) {
      context.res = json(422, { ok: false, errors }, corsHeaders);
      return;
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
    if (!RESEND_API_KEY) {
      context.res = json(500, { ok: false, error: "Missing RESEND_API_KEY" }, corsHeaders);
      return;
    }

    const to = process.env.CONTACT_TO || "info@kevinfroger.nl";
    const from = process.env.CONTACT_FROM || "no-reply@kevinfroger.nl";
    const subject = "Nieuw bericht via kevinfroger.nl";
    const html = `
      <h2>Nieuw contactbericht</h2>
      <p><strong>Naam:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Telefoon:</strong> ${escapeHtml(phone)}</p>` : ""}
      <p><strong>Bericht:</strong></p>
      <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
    `;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({ from, to, subject, html, reply_to: email })
    });

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      context.log("Mailer error:", r.status, text);
      context.res = json(502, { ok: false, error: "Mailer error" }, corsHeaders);
      return;
    }

    context.res = ok({ ok: true }, corsHeaders);
  } catch (e) {
    context.log("Handler error", e);
    context.res = json(500, { ok: false, error: "Server error" }, corsHeaders);
  }
};

function ok(body, headers) {
  return { status: 200, headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body) };
}
function json(status, body, headers) {
  return { status, headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body) };
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
