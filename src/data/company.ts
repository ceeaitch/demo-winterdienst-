/**
 * Zentrale Firmendaten (NAP = Name, Address, Phone).
 * Für den echten Kunden NUR hier austauschen – alle Seiten, das Schema.org-Markup
 * und llms.txt lesen aus dieser Datei. Identische NAP-Daten überall sind ein
 * wichtiges Signal für lokales SEO.
 */

/** Demo-Modus: setzt noindex, zeigt Demo-Badge und Präsentations-Werkzeugleiste. */
export const DEMO_MODE = true;

export const company = {
  name: 'WinterWacht Niederrhein',
  shortName: 'WinterWacht',
  slogan: 'Geräumt. Gestreut. Dokumentiert.',
  description:
    'Professioneller Winterdienst für Unternehmen, Handel und Hausverwaltungen in Krefeld und 20 km Umkreis: Schneeräumung, satzungskonforme Glättebekämpfung, 24/7-Wetterüberwachung und digitales Räumprotokoll als Haftungsnachweis.',
  phone: '+4921510000000',
  phoneDisplay: '02151 000 000',
  // .example ist eine reservierte Domain – garantiert keine echte Adresse
  email: 'kontakt@winterwacht.example',
  address: {
    street: 'Musterstraße 1',
    zip: '47798',
    city: 'Krefeld',
    region: 'Nordrhein-Westfalen',
    country: 'DE',
  },
  geo: { lat: 51.3331, lng: 6.5623 },
  radiusKm: 20,
  season: {
    label: 'Saison 2026/27',
    start: '1. November 2026',
    end: '31. März 2027',
  },
  /** Stand der rechtlichen Angaben (sichtbar auf der Seite – wichtig für GEO/Aktualität) */
  legalAsOf: '01.10.2026',
  /** Live-URL der Demo (für QR-Code & llms.txt) */
  liveUrl: 'https://ceeaitch.github.io/demo-winterdienst-/',
} as const;

/** Bildnachweise (Unsplash License – frei nutzbar, Nennung freiwillig aber fair) */
export const imageCredits = [
  { motiv: 'Nächtlicher Schneefall', author: 'Artem Balashevsky', url: 'https://unsplash.com/photos/BzAErhp0aGU' },
  { motiv: 'Räumfahrzeug im Einsatz', author: 'Jan Antonin Kolar', url: 'https://unsplash.com/photos/XWGNMUz3mCY' },
  { motiv: 'Handräumung eines Zugangs', author: 'Maxim Tolchinskiy', url: 'https://unsplash.com/photos/xslQFqBocyU' },
  { motiv: 'Parkplatz im Schnee', author: 'Bernd Dittrich', url: 'https://unsplash.com/photos/KC237IWAy6Y' },
  { motiv: 'Wohnanlage bei Nacht', author: 'Egor Litvinov', url: 'https://unsplash.com/photos/Lwv8iPW5zb4' },
  { motiv: 'Laterne im Schneefall', author: 'Dmitrii Shirnin', url: 'https://unsplash.com/photos/1NxiwfB6PIA' },
  { motiv: 'Straße bei Nacht', author: 'Artem Balashevsky', url: 'https://unsplash.com/photos/Nz4t3oghE2g' },
  { motiv: 'Gehweg im Winter', author: 'Colin Lloyd', url: 'https://unsplash.com/photos/1Ea_bfuUSes' },
];
