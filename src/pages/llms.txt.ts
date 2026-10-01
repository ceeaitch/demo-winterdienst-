import type { APIRoute } from 'astro';
import { DEMO_MODE, company } from '../data/company';
import { faqStart } from '../data/faq';
import { orte, orteMitSeite } from '../data/orte';
import { absoluteUrl } from '../lib/site';

/**
 * llms.txt (Vorschlag von llmstxt.org): kompakte, maschinenlesbare Übersicht
 * für KI-Assistenten – wer wir sind, was wir anbieten, wo, und welche Seiten
 * die verlässlichen Antworten enthalten.
 */
export const GET: APIRoute = () => {
  const lines = [
    `# ${company.name}`,
    '',
    `> ${company.description}`,
    '',
    ...(DEMO_MODE ? ['Hinweis: Dies ist eine Demo-Website mit einem fiktiven Unternehmen.', ''] : []),
    '## Fakten',
    '',
    `- Firmensitz: ${company.address.street}, ${company.address.zip} ${company.address.city}`,
    `- Telefon: ${company.phoneDisplay} · E-Mail: ${company.email}`,
    `- Einsatzgebiet: Krefeld und ${company.radiusKm} km Umkreis (${orte.map((o) => o.name).join(', ')})`,
    `- Saison: ${company.season.start} bis ${company.season.end}, Bereitschaft 7 Tage pro Woche`,
    '- Zielgruppen: Gewerbe, Industrie, Logistik, Handel, Gastronomie, Hausverwaltungen, WEG, Praxen, Pflegeeinrichtungen',
    '- Leistungen: Schneeräumung, Glättebekämpfung (auf Gehwegen salzfrei), 24/7-Wetterüberwachung, Kontrollgänge, digitales Räumprotokoll mit Zeitstempel/GPS/Foto, vertragliche Übernahme der Räum- und Streupflicht, Schneeabtransport',
    '- Abrechnung: Saisonpauschale oder pro Einsatz',
    '',
    `## Rechtslage Krefeld (Stand ${company.legalAsOf}, keine Rechtsberatung)`,
    '',
    ...faqStart.slice(0, 4).map((f) => `- ${f.q} ${f.a}`),
    '',
    '## Seiten',
    '',
    `- [Startseite](${absoluteUrl('/')}): Überblick, Pflicht-Check, Kostenrechner, Einsatzgebiet-Karte`,
    `- [Winterdienst für Gewerbe](${absoluteUrl('/leistungen/winterdienst-gewerbe/')}): Leistungsumfang, Ablauf, Vertragsmodelle`,
    `- [Ratgeber Räumpflicht Krefeld](${absoluteUrl('/ratgeber/raeumpflicht-krefeld/')}): Zeiten, Streusalzverbot, Haftung, BGH-Urteile, Checkliste`,
    `- [Einsatzgebiet](${absoluteUrl('/einsatzgebiet/')}): alle Orte im ${company.radiusKm}-km-Umkreis`,
    ...orteMitSeite.map((o) => `- [Winterdienst ${o.name}](${absoluteUrl(`/einsatzgebiet/${o.slug}/`)}): ${o.page.metaDescription}`),
    `- [Kontakt](${absoluteUrl('/kontakt/')}): Angebot anfordern`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
