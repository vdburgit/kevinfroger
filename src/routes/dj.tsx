import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, FormEvent } from "react";
import { buildSeo } from "@/lib/seo";
import { VERZOEKJE_API, verzoekjeApi, type Verzoek } from "@/lib/verzoekje";

export const Route = createFileRoute("/dj")({
  // Privé beheerscherm: niet indexeren.
  head: () =>
    buildSeo({
      title: "DJ-dashboard | Verzoekje bij de DJ",
      description: "Beheer de live binnengekomen muziekverzoekjes.",
      path: "/dj",
      noindex: true,
    }),
  component: Page,
});

type Fase = "controle" | "login" | "dashboard";
type Tab = "nieuw" | "gedraaid";

function Page() {
  const [fase, setFase] = useState<Fase>("controle");

  // Bij binnenkomst checken of er al een geldige sessie is.
  useEffect(() => {
    let actief = true;
    verzoekjeApi
      .lijst()
      .then(() => actief && setFase("dashboard"))
      .catch(() => actief && setFase("login"));
    return () => {
      actief = false;
    };
  }, []);

  if (fase === "controle") {
    return (
      <Schil>
        <p className="text-white/60">Laden...</p>
      </Schil>
    );
  }
  if (fase === "login") {
    return <Login onIngelogd={() => setFase("dashboard")} />;
  }
  return <Dashboard onUitgelogd={() => setFase("login")} />;
}

// ---------------------------------------------------------------------------
// Login
// ---------------------------------------------------------------------------
function Login({ onIngelogd }: { onIngelogd: () => void }) {
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");

  async function login(e: FormEvent) {
    e.preventDefault();
    setBezig(true);
    setFout("");
    try {
      await verzoekjeApi.login(gebruikersnaam, wachtwoord);
      onIngelogd();
    } catch (err) {
      setFout(
        err instanceof TypeError
          ? "Geen verbinding met de server."
          : (err as Error).message || "Inloggen lukte niet.",
      );
    } finally {
      setBezig(false);
    }
  }

  const veld =
    "w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-[#ff4fa3] focus:ring-2 focus:ring-[#ff4fa3]/40";

  return (
    <Schil>
      <main className="w-full max-w-sm">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold">DJ-dashboard</h1>
          <p className="mt-1 text-white/60">Log in om de verzoekjes te beheren.</p>
        </header>
        <form
          onSubmit={login}
          className="rounded-3xl border border-white/12 bg-white/[0.06] p-6 shadow-2xl backdrop-blur"
        >
          <label className="mb-4 block">
            <span className="mb-1.5 block text-sm font-medium text-white/80">Gebruikersnaam</span>
            <input
              value={gebruikersnaam}
              onChange={(e) => setGebruikersnaam(e.target.value)}
              autoCapitalize="off"
              autoComplete="username"
              className={veld}
            />
          </label>
          <label className="mb-5 block">
            <span className="mb-1.5 block text-sm font-medium text-white/80">Wachtwoord</span>
            <input
              type="password"
              value={wachtwoord}
              onChange={(e) => setWachtwoord(e.target.value)}
              autoComplete="current-password"
              className={veld}
            />
          </label>
          {fout && (
            <p className="mb-4 rounded-xl bg-[#ff4fa3]/15 px-4 py-3 text-sm text-[#ff7cbf]">{fout}</p>
          )}
          <button
            type="submit"
            disabled={bezig}
            className="w-full rounded-2xl bg-gradient-to-r from-[#ff4fa3] to-[#a855f7] px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-[#a855f7]/30 transition active:scale-[0.98] disabled:opacity-60"
          >
            {bezig ? "Inloggen..." : "Inloggen"}
          </button>
        </form>
      </main>
    </Schil>
  );
}

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------
function Dashboard({ onUitgelogd }: { onUitgelogd: () => void }) {
  const [verzoeken, setVerzoeken] = useState<Verzoek[]>([]);
  const [tab, setTab] = useState<Tab>("nieuw");
  const [verbonden, setVerbonden] = useState(false);
  const [geladen, setGeladen] = useState(false);
  const geluidAan = useRef(false);
  const [, herrender] = useState(0);

  const laden = useCallback(async () => {
    try {
      const { verzoeken } = await verzoekjeApi.lijst();
      setVerzoeken(verzoeken);
      setGeladen(true);
    } catch (err) {
      if ((err as { status?: number }).status === 401) onUitgelogd();
    }
  }, [onUitgelogd]);

  useEffect(() => {
    laden();
    const bron = new EventSource(`${VERZOEKJE_API}/api/stream`, { withCredentials: true });
    bron.addEventListener("verbonden", () => setVerbonden(true));
    bron.addEventListener("nieuw", () => {
      speelGeluidje(geluidAan.current);
      laden();
    });
    bron.addEventListener("wijziging", () => laden());
    bron.addEventListener("verwijderd", () => laden());
    bron.addEventListener("leeggemaakt", () => laden());
    bron.onerror = () => setVerbonden(false);
    return () => bron.close();
  }, [laden]);

  async function zetStatus(id: number, status: Tab) {
    setVerzoeken((v) => v.map((x) => (x.id === id ? { ...x, status } : x)));
    try {
      await verzoekjeApi.status(id, status);
    } catch {
      laden();
    }
  }

  async function verwijder(id: number) {
    setVerzoeken((v) => v.filter((x) => x.id !== id));
    try {
      await verzoekjeApi.verwijder(id);
    } catch {
      laden();
    }
  }

  async function leegmaken() {
    if (!confirm("Alle gedraaide verzoekjes wissen?")) return;
    setVerzoeken((v) => v.filter((x) => x.status !== "gedraaid"));
    try {
      await verzoekjeApi.leegmaken();
    } catch {
      laden();
    }
  }

  async function uitloggen() {
    try {
      await verzoekjeApi.logout();
    } catch {
      // negeren
    }
    onUitgelogd();
  }

  const open = verzoeken.filter((v) => v.status === "nieuw");
  const gedraaid = verzoeken.filter((v) => v.status === "gedraaid");
  const zichtbaar = tab === "nieuw" ? open : gedraaid;

  return (
    <Schil top>
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">Verzoekjes Live</h1>
            <div className="mt-1 flex items-center gap-2 text-sm text-white/70">
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${
                  verbonden ? "animate-pulse bg-emerald-400" : "bg-white/30"
                }`}
              />
              {verbonden ? "live verbonden" : "verbinding maken..."}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                geluidAan.current = !geluidAan.current;
                herrender((n) => n + 1);
                speelGeluidje(geluidAan.current);
              }}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition active:scale-95"
            >
              {geluidAan.current ? "🔔 Geluid aan" : "🔕 Geluid uit"}
            </button>
            <button
              onClick={uitloggen}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition active:scale-95"
            >
              Uitloggen
            </button>
          </div>
        </header>

        <div className="mb-5 flex gap-2">
          <TabKnop actief={tab === "nieuw"} onClick={() => setTab("nieuw")} kleur="roze">
            Openstaand <Badge>{open.length}</Badge>
          </TabKnop>
          <TabKnop actief={tab === "gedraaid"} onClick={() => setTab("gedraaid")} kleur="groen">
            Gedraaid <Badge>{gedraaid.length}</Badge>
          </TabKnop>
        </div>

        {geladen && zichtbaar.length === 0 ? (
          <p className="mt-16 text-center text-white/50">
            {tab === "nieuw" ? "Nog geen openstaande verzoekjes." : "Nog niets gedraaid."}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {zichtbaar.map((v) => (
              <Kaart
                key={v.id}
                verzoek={v}
                onGedraaid={() => zetStatus(v.id, "gedraaid")}
                onTerug={() => zetStatus(v.id, "nieuw")}
                onWeg={() => verwijder(v.id)}
              />
            ))}
          </div>
        )}

        {tab === "gedraaid" && gedraaid.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={leegmaken}
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/70 transition hover:text-white active:scale-95"
            >
              Gedraaide verzoekjes wissen
            </button>
          </div>
        )}
      </div>
    </Schil>
  );
}

function Kaart({
  verzoek,
  onGedraaid,
  onTerug,
  onWeg,
}: {
  verzoek: Verzoek;
  onGedraaid: () => void;
  onTerug: () => void;
  onWeg: () => void;
}) {
  const open = verzoek.status === "nieuw";
  const tijd = new Date(verzoek.aangemaakt).toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-4 pl-5 shadow-xl backdrop-blur">
      <span
        className={`absolute left-0 top-0 h-full w-1.5 ${open ? "bg-[#ff4fa3]" : "bg-emerald-400"}`}
      />
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-xl font-bold leading-snug text-white">{verzoek.titel}</h2>
        <span className="shrink-0 text-xs text-white/50">{tijd}</span>
      </div>
      {verzoek.artiest && <p className="text-white/70">{verzoek.artiest}</p>}
      {verzoek.naam && <p className="mt-1 text-sm font-medium text-[#f5c97a]">van {verzoek.naam}</p>}
      {verzoek.bericht && (
        <p className="mt-2 rounded-lg border border-[#f5c97a]/40 bg-[#f5c97a]/10 px-3 py-2 text-sm text-[#f5c97a]">
          {verzoek.bericht}
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {open ? (
          <button
            onClick={onGedraaid}
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition active:scale-95"
          >
            Gedraaid
          </button>
        ) : (
          <button
            onClick={onTerug}
            className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition active:scale-95"
          >
            Terug
          </button>
        )}
        <button
          onClick={onWeg}
          className="rounded-lg bg-[#ff4fa3]/90 px-4 py-2 text-sm font-semibold text-white transition active:scale-95"
        >
          Weg
        </button>
      </div>
    </article>
  );
}

function TabKnop({
  actief,
  onClick,
  kleur,
  children,
}: {
  actief: boolean;
  onClick: () => void;
  kleur: "roze" | "groen";
  children: React.ReactNode;
}) {
  const rand = kleur === "roze" ? "border-[#ff4fa3]" : "border-emerald-400";
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-xl border px-5 py-2.5 font-semibold transition ${
        actief ? `bg-white/10 text-white ${rand}` : "border-white/10 bg-white/5 text-white/60"
      }`}
    >
      {children}
    </button>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-w-[1.5rem] items-center justify-center rounded-full bg-black/30 px-2 py-0.5 text-xs">
      {children}
    </span>
  );
}

// Donkere, schermvullende schil voor het beheerscherm (los van de marketingsite).
function Schil({ children, top }: { children: React.ReactNode; top?: boolean }) {
  return (
    <div
      className={`min-h-screen text-[#f5f0ff] ${
        top ? "px-4 py-5 sm:px-8" : "flex items-center justify-center px-4"
      }`}
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, #2c0f4d 0%, #1a0930 55%, #120622 100%)",
      }}
    >
      {children}
    </div>
  );
}

// Subtiel geluidje via de Web Audio API.
let audioCtx: AudioContext | null = null;
function speelGeluidje(aan: boolean) {
  if (!aan) return;
  try {
    const Ctor =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = audioCtx ?? new Ctor();
    const ctx = audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1175, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
    osc.start();
    osc.stop(ctx.currentTime + 0.32);
  } catch {
    // geluid niet beschikbaar
  }
}
