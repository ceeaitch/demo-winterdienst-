import { company } from './company';
import { distanceKm } from '../lib/site';

export interface OrtFaq {
  q: string;
  a: string;
}

export interface OrtPage {
  /** H1 der Ortsseite – enthält Leistung + Ort (wichtigstes lokales SEO-Signal) */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Antwort-zuerst-Absatz: wird von Google & KI-Systemen bevorzugt zitiert */
  intro: string;
  /** Lokale Gewerbe-/Einsatzschwerpunkte (recherchiert, Stand 10/2026) */
  schwerpunkte: { title: string; text: string }[];
  /** Hinweis zur örtlichen Satzungslage */
  satzung: string;
  stadtteile?: string[];
  faq: OrtFaq[];
}

export interface Ort {
  slug: string;
  name: string;
  /** Zusatz für Anzeige, z. B. Kreis */
  region: string;
  typ: 'stadtteil' | 'umland';
  lat: number;
  lng: number;
  page?: OrtPage;
}

const alleOrte: Ort[] = [
  // --- Krefelder Stadtteile ---------------------------------------------
  { slug: 'krefeld', name: 'Krefeld-Mitte', region: 'Krefeld', typ: 'stadtteil', lat: 51.3331, lng: 6.5623 },
  {
    slug: 'krefeld-uerdingen',
    name: 'Krefeld-Uerdingen',
    region: 'Krefeld',
    typ: 'stadtteil',
    lat: 51.356,
    lng: 6.638,
    page: {
      h1: 'Winterdienst in Krefeld-Uerdingen für Gewerbe, Logistik & Industrie',
      metaTitle: 'Winterdienst Krefeld-Uerdingen für Gewerbe',
      metaDescription:
        'Winterdienst in Krefeld-Uerdingen: Gehwege, Ladezonen und Parkplätze rund um Chempark und Rheinhafen – bis 7 Uhr geräumt, salzfrei gestreut, dokumentiert.',
      intro:
        'WinterWacht räumt und streut in Krefeld-Uerdingen Gehwege, Zufahrten, Ladezonen und Mitarbeiterparkplätze – mit Schwerpunkt auf Betrieben im Umfeld des Chemparks und des Krefelder Rheinhafens. Bei Glättegefahr starten unsere Touren ab 3 Uhr, damit Ihr Gehweg zur Krefelder 7-Uhr-Frist frei ist. Jeder Einsatz wird mit Zeitstempel, GPS und Foto protokolliert.',
      schwerpunkte: [
        {
          title: 'Umfeld Chempark Krefeld-Uerdingen',
          text: 'Zulieferer, Dienstleister und Büros rund um einen der größten Chemiestandorte am Niederrhein starten früh in den Schichtbetrieb. Wir priorisieren Zufahrten und Mitarbeiterwege vor Schichtbeginn.',
        },
        {
          title: 'Rheinhafen & Industriegebiet Linn',
          text: 'Der Krefelder Rheinhafen ist einer der größten öffentlichen Binnenhäfen in NRW. Für Logistiker räumen wir Rampen, Ladezonen und Lkw-Zufahrten – maschinell und dort, wo Fahrzeuge nicht hinkommen, per Hand.',
        },
        {
          title: 'Einzelhandel & Praxen in der Uerdinger Innenstadt',
          text: 'Kundeneingänge, Treppen und Rampen müssen zur Öffnungszeit sicher sein. Wir kombinieren Frühtour und Kontrollgang am Vormittag.',
        },
      ],
      satzung:
        'Uerdingen ist ein Stadtteil von Krefeld – es gilt die Krefelder Straßenreinigungssatzung: Gehwege werktags von 7 bis 20 Uhr, sonn- und feiertags von 8 bis 20 Uhr räumen und streuen, bei Bedarf mehrmals täglich. Streusalz ist auf Geh- und Radwegen nicht erlaubt.',
      faq: [
        {
          q: 'Gilt in Uerdingen die Krefelder Straßenreinigungssatzung?',
          a: 'Ja. Uerdingen gehört zur Stadt Krefeld, daher gelten dieselben Räumzeiten (werktags 7–20 Uhr, sonn- und feiertags 8–20 Uhr) und das Streusalzverbot auf Geh- und Radwegen.',
        },
        {
          q: 'Räumen Sie auch Ladezonen und Rampen im Hafengebiet?',
          a: 'Ja. Für Logistik- und Industriebetriebe räumen wir Rampen, Ladezonen und Lkw-Zufahrten. Den Umfang legen wir bei einer kostenlosen Objektbegehung fest.',
        },
        {
          q: 'Wie schnell sind Sie bei Glätte in Uerdingen vor Ort?',
          a: 'Uerdingen liegt rund 6 km von unserem Betriebshof entfernt. Bei Glättewarnung beginnen die Touren ab 3 Uhr; Objekte mit frühem Schichtbeginn werden zuerst angefahren.',
        },
      ],
    },
  },
  { slug: 'krefeld-fischeln', name: 'Krefeld-Fischeln', region: 'Krefeld', typ: 'stadtteil', lat: 51.305, lng: 6.577 },
  { slug: 'krefeld-bockum', name: 'Krefeld-Bockum', region: 'Krefeld', typ: 'stadtteil', lat: 51.353, lng: 6.585 },
  { slug: 'krefeld-oppum', name: 'Krefeld-Oppum', region: 'Krefeld', typ: 'stadtteil', lat: 51.324, lng: 6.612 },
  { slug: 'krefeld-linn', name: 'Krefeld-Linn', region: 'Krefeld', typ: 'stadtteil', lat: 51.337, lng: 6.634 },
  { slug: 'krefeld-huels', name: 'Krefeld-Hüls', region: 'Krefeld', typ: 'stadtteil', lat: 51.372, lng: 6.513 },
  { slug: 'krefeld-traar', name: 'Krefeld-Traar', region: 'Krefeld', typ: 'stadtteil', lat: 51.38, lng: 6.6 },
  { slug: 'krefeld-forstwald', name: 'Krefeld-Forstwald', region: 'Krefeld', typ: 'stadtteil', lat: 51.314, lng: 6.505 },

  // --- Umland (≤ 20 km) ----------------------------------------------------
  {
    slug: 'meerbusch',
    name: 'Meerbusch',
    region: 'Rhein-Kreis Neuss',
    typ: 'umland',
    lat: 51.2667,
    lng: 6.6667,
    page: {
      h1: 'Winterdienst in Meerbusch für Gewerbeparks, Handel & Hausverwaltungen',
      metaTitle: 'Winterdienst Meerbusch für Gewerbe & Verwalter',
      metaDescription:
        'Winterdienst in Meerbusch (Büderich, Osterath, Lank-Latum): Räumen und Streuen für Gewerbeparks, Handel und Wohnanlagen – mit digitalem Räumprotokoll.',
      intro:
        'WinterWacht übernimmt den Winterdienst für Unternehmen und Hausverwaltungen in allen Meerbuscher Stadtteilen – von Büderich über Osterath bis Lank-Latum. Wir räumen Gehwege, Zufahrten und Parkflächen, streuen nach den Vorgaben der Meerbuscher Satzung und belegen jeden Einsatz mit einem digitalen Protokoll.',
      stadtteile: ['Büderich', 'Osterath', 'Lank-Latum', 'Strümp', 'Ossum-Bösinghoven', 'Nierst', 'Langst-Kierst', 'Ilverich'],
      schwerpunkte: [
        {
          title: 'Business-Park Mollsfeld (Osterath)',
          text: 'Der Business-Park mit eigener Stadtbahn-Haltestelle und Anschluss an die A44 ist Standort zahlreicher Unternehmen. Wir sichern Zufahrten, Mitarbeiterparkplätze und die Wege von der Haltestelle zum Eingang.',
        },
        {
          title: 'Areal Böhler & Breite Straße (Büderich)',
          text: 'Am ehemaligen Stahlwerksgelände an der Grenze zu Düsseldorf und im Logistikstandort Breite Straße räumen wir großflächig maschinell und die Zugänge per Hand.',
        },
        {
          title: 'Fritz-Wendt-Straße (Strümp) & In der Loh (Lank)',
          text: 'Für den Mittelstand in den Gewerbegebieten Strümp und Lank bieten wir feste Saisonpauschalen – planbar und ohne Überraschungen bei schneereichen Wintern.',
        },
      ],
      satzung:
        'Meerbusch regelt die Anliegerpflichten in einer eigenen Straßenreinigungssatzung. Räumzeiten und zugelassene Streumittel können von Krefeld abweichen – wir prüfen die Vorgaben für jedes Objekt vor Saisonbeginn und richten den Räumplan danach aus.',
      faq: [
        {
          q: 'Gelten in Meerbusch die gleichen Räumzeiten wie in Krefeld?',
          a: 'Nicht automatisch. Meerbusch hat eine eigene Straßenreinigungssatzung. Wir gleichen Zeiten und Streumittel vor Saisonbeginn mit der aktuellen Meerbuscher Satzung ab.',
        },
        {
          q: 'Betreuen Sie Unternehmen im Business-Park Mollsfeld?',
          a: 'Ja. Gewerbeflächen in Osterath inklusive Zufahrten, Parkplätzen und Fußwegen zur Stadtbahn-Haltestelle gehören zu unserem Einsatzgebiet.',
        },
        {
          q: 'Übernehmen Sie Winterdienst für Wohnanlagen in Büderich?',
          a: 'Ja, für Hausverwaltungen und WEGs übernehmen wir Gehwege, Hauszugänge und Mülltonnenwege – inklusive Protokoll, das Sie Eigentümern und Mietern vorlegen können.',
        },
      ],
    },
  },
  {
    slug: 'willich',
    name: 'Willich',
    region: 'Kreis Viersen',
    typ: 'umland',
    lat: 51.2631,
    lng: 6.5492,
    page: {
      h1: 'Winterdienst in Willich – Gewerbegebiet Münchheide, Anrath, Neersen & Schiefbahn',
      metaTitle: 'Winterdienst Willich & Münchheide für Gewerbe',
      metaDescription:
        'Winterdienst in Willich für Betriebe in Münchheide, Anrath, Neersen und Schiefbahn: Räumen, Streuen, 24/7-Bereitschaft und digitales Räumprotokoll.',
      intro:
        'WinterWacht ist Ihr Winterdienst für Unternehmen in Willich – mit Schwerpunkt auf dem Gewerbegebiet Münchheide direkt an der A44. Wir räumen Zufahrten, Ladezonen, Parkplätze und Gehwege vor Schichtbeginn, streuen satzungskonform und dokumentieren jeden Einsatz lückenlos.',
      stadtteile: ['Alt-Willich', 'Anrath', 'Neersen', 'Schiefbahn'],
      schwerpunkte: [
        {
          title: 'Gewerbegebiet Münchheide I–IV',
          text: 'Rund 176 Hektar, über 900 Unternehmen und direkter Anschluss an die A44: Münchheide gehört zu den größten Gewerbegebieten am Niederrhein. Feste Touren sorgen dafür, dass Lkw-Zufahrten und Mitarbeiterparkplätze vor 6 Uhr frei sind.',
        },
        {
          title: 'Handel & Dienstleister in den Ortskernen',
          text: 'In Alt-Willich, Anrath, Neersen und Schiefbahn sichern wir Kundeneingänge, Gehwege und Parkplätze von Geschäften, Praxen und Büros.',
        },
        {
          title: 'Hausverwaltungen & Wohnanlagen',
          text: 'Für Verwalter übernehmen wir den kompletten Winterdienst inklusive Nachweis – damit die Haftung für den Dienstleister nicht zum Risiko wird.',
        },
      ],
      satzung:
        'Willich regelt Reinigungs- und Winterdienstpflichten in einer eigenen städtischen Satzung. Wir prüfen vor Saisonbeginn die für Ihr Objekt geltenden Zeiten und Streumittel und dokumentieren die Umsetzung.',
      faq: [
        {
          q: 'Räumen Sie im Gewerbegebiet Münchheide auch vor Schichtbeginn um 6 Uhr?',
          a: 'Ja. Objekte mit frühem Schichtbeginn planen wir an den Anfang der Tour. Bei Glättewarnung starten wir ab 3 Uhr.',
        },
        {
          q: 'Gilt in Willich die Krefelder Satzung?',
          a: 'Nein. Willich gehört zum Kreis Viersen und hat eigene Regelungen. Wir richten den Räumplan nach der für Ihr Objekt gültigen Willicher Satzung aus.',
        },
        {
          q: 'Wie weit ist Willich von Ihrem Betriebshof entfernt?',
          a: 'Rund 8 km Luftlinie. Willich liegt damit mitten in unserem 20-km-Einsatzgebiet rund um Krefeld.',
        },
      ],
    },
  },
  { slug: 'toenisvorst', name: 'Tönisvorst', region: 'Kreis Viersen', typ: 'umland', lat: 51.3203, lng: 6.4931 },
  { slug: 'kempen', name: 'Kempen', region: 'Kreis Viersen', typ: 'umland', lat: 51.3644, lng: 6.4194 },
  { slug: 'grefrath', name: 'Grefrath', region: 'Kreis Viersen', typ: 'umland', lat: 51.3364, lng: 6.3417 },
  { slug: 'viersen', name: 'Viersen', region: 'Kreis Viersen', typ: 'umland', lat: 51.2556, lng: 6.3947 },
  { slug: 'moers', name: 'Moers', region: 'Kreis Wesel', typ: 'umland', lat: 51.4513, lng: 6.626 },
  { slug: 'neukirchen-vluyn', name: 'Neukirchen-Vluyn', region: 'Kreis Wesel', typ: 'umland', lat: 51.4436, lng: 6.5481 },
  { slug: 'kamp-lintfort', name: 'Kamp-Lintfort', region: 'Kreis Wesel', typ: 'umland', lat: 51.5, lng: 6.546 },
  { slug: 'duisburg-rheinhausen', name: 'Duisburg-Rheinhausen', region: 'Duisburg', typ: 'umland', lat: 51.399, lng: 6.729 },
  { slug: 'duisburg-homberg', name: 'Duisburg-Homberg', region: 'Duisburg', typ: 'umland', lat: 51.456, lng: 6.69 },
  { slug: 'kaarst', name: 'Kaarst', region: 'Rhein-Kreis Neuss', typ: 'umland', lat: 51.2297, lng: 6.6181 },
  { slug: 'neuss', name: 'Neuss', region: 'Rhein-Kreis Neuss', typ: 'umland', lat: 51.2042, lng: 6.6879 },
  { slug: 'korschenbroich', name: 'Korschenbroich', region: 'Rhein-Kreis Neuss', typ: 'umland', lat: 51.1917, lng: 6.5136 },
  { slug: 'duesseldorf-oberkassel', name: 'Düsseldorf-Oberkassel', region: 'Düsseldorf', typ: 'umland', lat: 51.23, lng: 6.757 },
  { slug: 'moenchengladbach', name: 'Mönchengladbach', region: 'Mönchengladbach', typ: 'umland', lat: 51.1805, lng: 6.4428 },
];

/** Nur Orte innerhalb des Einsatzradius, sortiert nach Entfernung */
export const orte = alleOrte
  .map((o) => ({ ...o, km: Math.round(distanceKm(company.geo, o) * 10) / 10 }))
  .filter((o) => o.km <= company.radiusKm)
  .sort((a, b) => a.km - b.km);

export type OrtMitDistanz = (typeof orte)[number];

export const orteMitSeite = orte.filter((o): o is OrtMitDistanz & { page: OrtPage } => Boolean(o.page));
