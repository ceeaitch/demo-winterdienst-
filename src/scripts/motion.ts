/**
 * Globale Bewegung: weiches Scrollen (Lenis) + Scroll-Animationen (GSAP).
 *
 * Konventionen im HTML:
 *  data-reveal            → Element blendet beim Hineinscrollen ein
 *  data-reveal-stagger    → Kinder blenden nacheinander ein
 *  data-count-to="20"     → Zahl zählt hoch (optional data-count-decimals)
 *  data-parallax="0.2"    → Element verschiebt sich beim Scrollen (Tiefe)
 */
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

function initSmoothScroll() {
  if (reduceMotion) return;
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    anchors: { offset: -80 },
  });
  window.lenis = lenis;
  // Lenis und ScrollTrigger teilen sich denselben Takt → keine Ruckler
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function initReveals() {
  if (reduceMotion) {
    root.classList.add('motion-off');
    return;
  }

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: 'expo.out',
      delay: Number(el.dataset.revealDelay ?? 0),
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    gsap.to(group.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.09,
      scrollTrigger: { trigger: group, start: 'top 85%', once: true },
    });
  });
}

function initCounters() {
  const fmt = (n: number, d: number) =>
    n.toLocaleString('de-DE', { minimumFractionDigits: d, maximumFractionDigits: d });

  document.querySelectorAll<HTMLElement>('[data-count-to]').forEach((el) => {
    const target = Number(el.dataset.countTo);
    const decimals = Number(el.dataset.countDecimals ?? 0);
    if (reduceMotion) {
      el.textContent = fmt(target, decimals);
      return;
    }
    const state = { v: 0 };
    el.textContent = fmt(0, decimals);
    gsap.to(state, {
      v: target,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => {
        el.textContent = fmt(state.v, decimals);
      },
    });
  });
}

function initParallax() {
  if (reduceMotion) return;
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = Number(el.dataset.parallax ?? 0.2);
    const trigger = el.closest<HTMLElement>('[data-parallax-root]') ?? el.parentElement ?? el;
    gsap.fromTo(
      el,
      { yPercent: 0 },
      {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: { trigger, start: 'top top', end: 'bottom top', scrub: true },
      },
    );
  });
}

function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    // Beim Runterscrollen ausblenden, beim Hochscrollen wieder zeigen
    const menuOpen = header.classList.contains('menu-open');
    header.classList.toggle('is-hidden', !menuOpen && y > 400 && y > lastY + 4);
    if (y < lastY - 4 || y < 400) header.classList.remove('is-hidden');
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initProgressBar() {
  const bar = document.querySelector<HTMLElement>('.scroll-progress');
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

initSmoothScroll();
initReveals();
initCounters();
initParallax();
initHeader();
initProgressBar();
root.classList.add('motion-ready');

// Nach dem Laden von Bildern/Schriften Positionen neu berechnen.
// sort() sorgt dafür, dass ScrollTrigger in Seitenreihenfolge berechnet werden
// (wichtig, weil die gepinnte Timeline zusätzlichen Scrollweg einfügt).
window.addEventListener('load', () => {
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
});

// Wenn sich die Seitenhöhe ändert (Quiz-Ergebnis, FAQ aufgeklappt …) neu messen
let resizeTimer = 0;
new ResizeObserver(() => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => ScrollTrigger.refresh(), 250);
}).observe(document.body);
