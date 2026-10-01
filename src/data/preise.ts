/**
 * Richtwerte für den Kostenrechner (DEMO-WERTE – vor Livegang mit dem Kunden abstimmen).
 * Staffelpreis: Jede Stufe gilt nur für die Quadratmeter innerhalb der Stufe
 * (wie bei der Einkommensteuer) → größere Flächen werden pro m² günstiger.
 */
export const preise = {
  mindestpreisSaison: 390,
  staffel: [
    { bisM2: 200, eurProM2: 2.4 },
    { bisM2: 1000, eurProM2: 1.5 },
    { bisM2: 3000, eurProM2: 0.95 },
    { bisM2: Infinity, eurProM2: 0.7 },
  ],
  flaechenarten: [
    { id: 'gehweg', label: 'Gehwege & Zugänge', hint: 'überwiegend Handräumung', faktor: 1 },
    { id: 'mix', label: 'Gemischt', hint: 'Wege + Zufahrt/Hof', faktor: 0.85 },
    { id: 'parkplatz', label: 'Parkplatz & Hof', hint: 'überwiegend maschinell', faktor: 0.7 },
  ],
  optionen: [
    { id: 'frueh', label: 'Frühdienst: garantiert vor 6 Uhr fertig', typ: 'prozent', wert: 0.15 },
    { id: 'abtransport', label: 'Schneeabtransport bei Starkschneefall', typ: 'prozent', wert: 0.12 },
    { id: 'streukisten', label: 'Streugutkisten befüllen & warten', typ: 'fix', wert: 149 },
  ],
  inklusive: [
    'Übernahme der Räum- & Streupflicht per Vertrag',
    '24/7-Wetterüberwachung & Bereitschaft',
    'Digitales Räumprotokoll (Zeit, GPS, Foto)',
    'Satzungskonforme, salzfreie Streumittel auf Gehwegen',
    'Einsätze an 7 Tagen pro Woche bis 20 Uhr',
  ],
  /** Alternative Abrechnung pro Einsatz */
  proEinsatz: { eurProM2: 0.11, anfahrt: 35 },
  saisonMonate: 5,
} as const;

export type Preise = typeof preise;
