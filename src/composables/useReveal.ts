import type { Directive } from 'vue'

/**
 * v-reveal — adds `.is-visible` when an element scrolls into view.
 * Progressive enhancement: if IntersectionObserver is missing or motion is
 * reduced, elements are shown immediately.
 */
export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    el.classList.add('reveal')

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
  },
}
