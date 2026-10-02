/**
 * Überträgt Ergebnisse (Pflicht-Check, Kostenrechner) ins Anfrageformular
 * und scrollt dorthin. Weniger Tipparbeit = mehr Anfragen.
 */
export function prefillAnfrage(data: { nachricht?: string; flaeche?: number; quelle: string }) {
  const form = document.querySelector<HTMLFormElement>('#anfrage form');
  if (!form) return;
  const set = (name: string, value: string) => {
    const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
    if (field) field.value = value;
  };
  if (data.nachricht) set('nachricht', data.nachricht);
  if (data.flaeche) set('flaeche', String(data.flaeche));
  set('quelle', data.quelle);

  const target = document.querySelector<HTMLElement>('#anfrage');
  if (!target) return;
  if (window.lenis) window.lenis.scrollTo(target, { offset: -80 });
  else target.scrollIntoView({ behavior: 'smooth' });

  const highlight = form.querySelector<HTMLElement>('[name="nachricht"]');
  highlight?.classList.add('is-prefilled');
  window.setTimeout(() => form.querySelector<HTMLInputElement>('[name="firma"]')?.focus({ preventScroll: true }), 900);
}
