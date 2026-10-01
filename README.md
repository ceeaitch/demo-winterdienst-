# Demo: Winterdienst Krefeld

Demo-Website für einen Winterdienst im Raum Krefeld (20 km Umkreis) – mit Fokus auf lokale Sichtbarkeit (SEO), Sichtbarkeit in KI-Antworten (GEO) und verkaufsstarken, interaktiven Elementen.
Das Unternehmen **„WinterWacht Niederrhein“ ist fiktiv**.

**Live:** https://ceeaitch.github.io/demo-winterdienst-/ · **Kundentermin:** siehe [PRAESENTATION.md](PRAESENTATION.md)

## Funktionen

- Startseite mit Schneefall-Animation, Live-Glätte-Ampel (Open-Meteo), Pflicht-Check-Quiz, gepinnter „Frostnacht“-Timeline, animiertem Räumprotokoll, Kostenrechner, Einsatzgebiet-Karte (Leaflet/OpenStreetMap) und Anfrageformular
- Unterseiten: Leistungen, Einsatzgebiet, 3 Ortsseiten (Uerdingen, Meerbusch, Willich), Ratgeber „Räumpflicht Krefeld“, Kontakt
- SEO/GEO: Schema.org-JSON-LD (LocalBusiness mit 20-km-GeoCircle, Service, FAQPage, Article, BreadcrumbList), Sitemap, robots.txt, `llms.txt`, Open-Graph-Bild
- Präsentations-Werkzeuge (nur im Demo-Modus): „Frostnacht simulieren“, „SEO-Röntgenblick“, QR-Code

## Technik

| Baustein | Zweck |
|---|---|
| [Astro 7](https://astro.build) | Statische Seiten, Bildoptimierung, Ortsseiten aus Daten |
| GSAP + ScrollTrigger, Lenis | Scroll-Animationen, weiches Scrollen |
| Leaflet + OpenStreetMap | Karte ohne API-Key |
| Open-Meteo | Wetterdaten ohne API-Key |
| Fontsource (Inter, Sora) | Schriften lokal → keine Google-Fonts-Verbindung |

## Befehle

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Entwicklungsserver: http://localhost:4321/demo-winterdienst-/
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Wo ändere ich was?

| Datei | Inhalt |
|---|---|
| `src/data/company.ts` | Firmendaten, `DEMO_MODE`, Saison, Bildnachweise |
| `src/data/orte.ts` | Orte, Koordinaten, Inhalte der Ortsseiten |
| `src/data/preise.ts` | Richtwerte für den Kostenrechner |
| `src/data/faq.ts` | FAQ der Startseite |
| `src/styles/global.css` | Farben, Schriften, Abstände (Design-Tokens) |
| `astro.config.mjs` | Domain (`site`) und Unterpfad (`base`) |

## Veröffentlichen (GitHub Pages)

1. Repository auf **öffentlich** stellen (GitHub → Settings → General → Danger Zone → Change visibility).
2. GitHub → Settings → Pages → Source: **GitHub Actions**.
3. Auf `main` pushen bzw. mergen → der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht automatisch.

Die Demo ist per `<meta name="robots" content="noindex">` vor Suchmaschinen geschützt. Für den Livegang `DEMO_MODE = false` setzen (Details in PRAESENTATION.md).

## Hinweise

- Rechtliche Angaben (Stand 01.10.2026) stammen aus der Straßenreinigungssatzung Krefeld, Informationen des Kommunalbetriebs Krefeld und Berichten zu BGH-Urteilen – Quellen stehen im Ratgeber. Keine Rechtsberatung.
- Bewertungen auf der Startseite sind **Beispiele** und als solche gekennzeichnet; bewusst ohne `AggregateRating`-Schema.
- Fotos: Unsplash License, Nachweise im Footer.
