// Pusht een event naar de GTM dataLayer. In Google Tag Manager maak je hiervan
// GA4-events: trigger = "Aangepaste gebeurtenis" met de event-naam hieronder,
// tag = GA4-event. Zo meet je welke CTA tot boekingen leidt en kun je Google
// Ads op échte conversies optimaliseren i.p.v. op kliks.
//
// Gebruikte events: tel_click, whatsapp_click, email_click, generate_lead.
type Params = Record<string, string | number | boolean | undefined>;

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
