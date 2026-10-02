/**
 * URL-Helfer. Die Seite liegt auf GitHub Pages unter einem Unterpfad
 * (/demo-winterdienst-/). Alle internen Links laufen deshalb über withBase(),
 * damit sie später bei eigener Domain (base: '/') ohne Änderung funktionieren.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** '/einsatzgebiet/' → '/demo-winterdienst-/einsatzgebiet/' */
export function withBase(path = '/'): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}`;
}

/** Absolute URL für Canonical, Open Graph und Schema.org */
export function absoluteUrl(path = '/'): string {
  return new URL(withBase(path), import.meta.env.SITE).href;
}

/** Luftlinie in km zwischen zwei Koordinaten (Haversine-Formel) */
export function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
