# Präsentation beim Kunden – Leitfaden

**Live-Demo:** https://ceeaitch.github.io/demo-winterdienst-/

<img src="docs/qr-demo.png" alt="QR-Code zur Live-Demo" width="180">

Der QR-Code steckt auch in der Demo selbst: Button **„Demo“** (unten rechts) → **„Auf dem Handy öffnen“**.

---

## Vorbereitung (5 Minuten vorher)

- Demo im Browser öffnen, Bildschirm teilen oder Laptop zum Kunden drehen.
- Handy bereithalten: Der Kunde soll den **Pflicht-Check selbst auf seinem Handy** durchklicken. Das wirkt stärker als jede Folie.
- Zweiter Tab: [Google Rich Results Test](https://search.google.com/test/rich-results) mit der Live-URL.
- Falls „Frostnacht“ noch aktiv ist: Demo-Menü → Schalter aus (der Zustand bleibt pro Browser-Tab gespeichert).

## Klickpfad (ca. 15 Minuten)

| # | Wo | Was zeigen | Kernbotschaft |
|---|----|-----------|---------------|
| 1 | Startseite oben | Schneefall, Headline, Live-Glätte-Ampel | „In 3 Sekunden ist klar, worum es geht – und die Seite lebt.“ |
| 2 | Demo → **Frostnacht simulieren** | Banner, Ampel rot, stärkerer Schnee | „So sieht Ihre Seite in der Nacht aus, in der Kunden panisch suchen.“ |
| 3 | „Die Rechtslage in Krefeld“ | 7-Uhr-Frist, § 823 BGB, Salzverbot, BGH 2025 | „Wir verkaufen nicht Schneeschieben, sondern **Haftungsschutz**.“ |
| 4 | **Pflicht-Check** | Kunde klickt selbst (QR-Code) → Risiko 95/100 → „Angebot anfordern“ | „Aus Unsicherheit wird eine Anfrage – mit vorausgefülltem Text.“ |
| 5 | „Frostnacht mit uns“ | Scrollen: Uhr läuft 02:30 → 07:00, Himmel wird hell | „Der Interessent erlebt den Service, statt ihn zu lesen.“ |
| 6 | Räumprotokoll-Mockup | Zeilen haken sich ab, Stempel „Nachweis gesichert“ | „Das ist Ihr Alleinstellungsmerkmal gegenüber 8 Wettbewerbern.“ |
| 7 | **Kostenrechner** | Fläche schieben, Parkplatz wählen, Frühdienst an | „Anfragen kommen vorqualifiziert – mit realistischer Preiserwartung.“ |
| 8 | Karte → **Meerbusch** | 20-km-Kreis, Klick auf Ort → Ortsseite | „Eine Seite pro Stadt = gefunden werden bei ‚Winterdienst Meerbusch‘.“ |
| 9 | Demo → **SEO-Röntgenblick** | Pinke Überschriften, gelbe Keywords, Schema-Liste | „Das ist die unsichtbare Arbeit, die Google und KI sehen.“ |
| 10 | Ratgeber | 30-Sekunden-Box, Urteils-Tabelle, Quellen, Checkliste | „So wird man in ChatGPT, Perplexity & Google-KI-Antworten **als Quelle genannt** (GEO).“ |
| 11 | Rich Results Test (2. Tab) | Erkannte Daten: LocalBusiness, FAQ, Breadcrumbs, Article | „Google versteht Firma, Leistung und Einsatzgebiet maschinell.“ |

**Zahlen für das Gespräch (Lighthouse, gemessen):** Performance 95–100, Barrierefreiheit 100, SEO 100 im Live-Modus.
(In der Demo zeigt Lighthouse SEO 66 – das ist gewollt: Die Demo ist per `noindex` vor Google versteckt.)

## Typische Einwände

- **„Wir haben doch schon eine Website.“** → Röntgenblick auf die Ortsseite zeigen: Hat die bestehende Seite Ortsseiten, Schema.org, eine Antwort-Struktur für KI? Meist nicht.
- **„Unsere Kunden kommen über Empfehlung.“** → Auch Empfehlungen googeln den Namen. Die Seite verwandelt Neugier in eine Anfrage (Pflicht-Check, Rechner).
- **„Was bringt GEO?“** → Entscheider fragen zunehmend ChatGPT: „Wer macht Winterdienst in Krefeld?“ Zitiert wird, wer klare Fakten mit Quellen liefert – genau das macht der Ratgeber.
- **„Das ist doch nur im Winter relevant.“** → Gerade nicht: Verträge werden **September bis Oktober** geschlossen. Die Seite arbeitet, bevor der erste Schnee fällt.

## Was der Kunde für den Livegang liefern muss

- [ ] Firmendaten (Name, Adresse, Telefon, E-Mail) → `src/data/company.ts`
- [ ] Logo & Farben → `src/components/Logo.astro`, Farben in `src/styles/global.css` (`:root`)
- [ ] **Echte Fotos**: Team, Fahrzeuge, betreute Objekte (am stärksten für Vertrauen)
- [ ] Echte Preise / Staffeln → `src/data/preise.ts`
- [ ] **Echte Bewertungen** (z. B. aus dem Google-Unternehmensprofil) statt der Beispiel-Bewertungen
- [ ] Impressum & Datenschutzerklärung (rechtssicher)
- [ ] Eigene Domain
- [ ] Liste der gewünschten Orte für weitere Ortsseiten

## Technische Schritte zum Livegang

1. `DEMO_MODE = false` in `src/data/company.ts` → entfernt `noindex`, Demo-Badge und Werkzeugleiste.
2. `site`/`base` in `astro.config.mjs` auf die Kundendomain setzen (`base: '/'`).
3. Satzungswerte prüfen: Räumbreiten und Bußgelder der Krefelder Satzung (PDF der Stadt) – bewusst noch nicht auf der Seite.
4. Formular an einen Versanddienst oder ein eigenes Backend anbinden.
5. Karte DSGVO-fest machen: Zwei-Klick-Lösung oder selbst gehostete Kartenkacheln.
6. Google Search Console einrichten und Sitemap (`/sitemap-index.xml`) einreichen.

## Lokale Sichtbarkeit außerhalb der Website (Empfehlung an den Kunden)

- **Google-Unternehmensprofil**: passende Kategorie (z. B. „Schneeräumdienst“), Leistungsgebiet = die Orte aus `orte.ts`, Fotos, Öffnungszeiten.
- **Bewertungen** aktiv nach jedem Saisonende einholen – sie sind einer der stärksten lokalen Rankingfaktoren.
- **Einheitliche Firmendaten (NAP)** in Verzeichnissen: Gelbe Seiten, Das Örtliche, 11880, IHK-Firmenverzeichnis.
- **Saisonale Inhalte**: Im September und Oktober Beiträge zur Vertragsphase, bei Glätte Google-Posts („Unsere Teams sind unterwegs“).
- **Weitere Ortsseiten**: Pro Ort ein Eintrag mit `page`-Inhalt in `src/data/orte.ts` – immer mit echten lokalen Details, nie nur mit ausgetauschtem Ortsnamen.
