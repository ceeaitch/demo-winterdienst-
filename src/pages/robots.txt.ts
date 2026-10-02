import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/site';

/**
 * robots.txt – wird beim Build erzeugt, damit die Sitemap-URL immer stimmt.
 * Hinweis: Suchmaschinen lesen robots.txt nur im Domain-Root. Auf GitHub Pages
 * (Projektseite unter /repo/) greift sie daher erst mit eigener Domain.
 * Die Demo schützt sich zusätzlich per <meta name="robots" content="noindex">.
 */
export const GET: APIRoute = () => {
  const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot', 'Google-Extended'];
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# KI-Assistenten ausdrücklich erlaubt (Sichtbarkeit in KI-Antworten / GEO)',
    ...aiBots.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${absoluteUrl('/sitemap-index.xml')}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
