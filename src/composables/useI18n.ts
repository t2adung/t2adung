import { ref, watch } from 'vue'
import type { Locale, LocalizedString } from '@/data/content'

const STORAGE_KEY = 'portfolio-locale'

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'vi') return stored
  } catch {
    /* ignore */
  }
  return navigator.language?.toLowerCase().startsWith('vi') ? 'vi' : 'en'
}

const locale = ref<Locale>(getInitialLocale())

watch(
  locale,
  (value) => {
    document.documentElement.setAttribute('lang', value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
  },
  { immediate: true },
)

export function useI18n() {
  /** Resolve a localized string against the active locale. */
  const t = (entry: LocalizedString): string => entry[locale.value]

  const setLocale = (value: Locale) => {
    locale.value = value
  }

  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'vi' : 'en'
  }

  return { locale, t, setLocale, toggleLocale }
}
