// Koppeling met de "Verzoekje bij de DJ"-backend (API-only server).
// Standaard het subdomein; lokaal te overschrijven met VITE_VERZOEKJE_API
// in een .env (bijvoorbeeld http://localhost:3000).
export const VERZOEKJE_API = (
  import.meta.env.VITE_VERZOEKJE_API || "https://verzoekjes.kevinfroger.nl"
).replace(/\/$/, "");

// De aparte omgeving waar de verzoekjes-app draait (de pagina waar bezoekers het
// verzoekje invullen). Standaard hetzelfde subdomein; te overschrijven met
// VITE_VERZOEKJE_APP.
export const VERZOEKJE_APP_URL = (
  import.meta.env.VITE_VERZOEKJE_APP || "https://verzoekjes.kevinfroger.nl"
).replace(/\/$/, "");

export type Verzoek = {
  id: number;
  titel: string;
  artiest: string | null;
  naam: string | null;
  bericht: string | null;
  status: "nieuw" | "gedraaid";
  geprint: boolean;
  aangemaakt: string;
};

async function vraag<T>(pad: string, opties?: RequestInit): Promise<T> {
  const antwoord = await fetch(`${VERZOEKJE_API}${pad}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...opties,
  });
  if (!antwoord.ok) {
    let bericht = "Er ging iets mis";
    try {
      const data = await antwoord.json();
      if (data?.fout) bericht = data.fout;
    } catch {
      // negeren
    }
    const fout = new Error(bericht) as Error & { status?: number };
    fout.status = antwoord.status;
    throw fout;
  }
  return antwoord.json() as Promise<T>;
}

export const verzoekjeApi = {
  verzoekVersturen: (body: {
    titel: string;
    artiest?: string;
    naam?: string;
    bericht?: string;
  }) => vraag<{ ok: true }>("/api/verzoek", { method: "POST", body: JSON.stringify(body) }),

  login: (gebruikersnaam: string, wachtwoord: string) =>
    vraag<{ ok: true }>("/api/login", {
      method: "POST",
      body: JSON.stringify({ gebruikersnaam, wachtwoord }),
    }),

  logout: () => vraag<{ ok: true }>("/api/logout", { method: "POST" }),

  lijst: () => vraag<{ verzoeken: Verzoek[] }>("/api/lijst"),

  status: (id: number, status: "nieuw" | "gedraaid") =>
    vraag<{ ok: true }>("/api/status", { method: "POST", body: JSON.stringify({ id, status }) }),

  verwijder: (id: number) =>
    vraag<{ ok: true }>("/api/verwijder", { method: "POST", body: JSON.stringify({ id }) }),

  leegmaken: () => vraag<{ ok: true }>("/api/leegmaken", { method: "POST" }),
};
