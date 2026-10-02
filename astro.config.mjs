// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages (Projektseite) liegt unter https://<user>.github.io/<repo>/
// → "site" ist die Domain, "base" der Repo-Name. Bei eigener Domain später:
//    site: 'https://www.kundendomain.de', base: '/'
export default defineConfig({
  site: 'https://ceeaitch.github.io',
  base: '/demo-winterdienst-',
  trailingSlash: 'always',
  // Verlustfreie HTML-Komprimierung (Astro-7-Standard 'jsx' würde Leerzeichen
  // zwischen Text und Links an Zeilenumbrüchen entfernen).
  compressHTML: true,
  integrations: [
    sitemap({
      // Rechtsseiten gehören nicht in die Sitemap
      filter: (page) => !/\/(impressum|datenschutz)\/$/.test(page),
    }),
  ],
});
