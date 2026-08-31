<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useI18n } from '@/composables/useI18n'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { PROFILE, UI } from '@/data/content'

const { theme, toggle } = useTheme()
const { locale, t, toggleLocale } = useI18n()

const links = [
  { id: 'about', label: UI.nav_about },
  { id: 'services', label: UI.nav_services },
  { id: 'work', label: UI.nav_work },
  { id: 'process', label: UI.nav_process },
  { id: 'contact', label: UI.nav_contact },
]

const { active } = useScrollSpy(links.map((l) => l.id))

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled }">
    <div class="container header-inner">
      <a href="#top" class="brand" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true"></span>
        <span class="brand-name">{{ PROFILE.name }}</span>
      </a>

      <nav class="nav" :class="{ open: menuOpen }" aria-label="Primary">
        <ul class="nav-list">
          <li v-for="link in links" :key="link.id">
            <a
              class="nav-link"
              :class="{ active: active === link.id }"
              :href="`#${link.id}`"
              :aria-current="active === link.id ? 'true' : undefined"
              @click="closeMenu"
              >{{ t(link.label) }}</a
            >
          </li>
        </ul>
      </nav>

      <div class="actions">
        <button
          class="pill"
          type="button"
          @click="toggleLocale"
          :aria-label="`Switch language, current ${locale.toUpperCase()}`"
        >
          {{ locale === 'en' ? 'EN' : 'VI' }}
        </button>

        <button
          class="icon-btn"
          type="button"
          @click="toggle"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
          </svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 14.5A8 8 0 1 1 9.5 4a6.3 6.3 0 0 0 10.5 10.5z" />
          </svg>
        </button>

        <button
          class="icon-btn menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true">
            <path v-if="!menuOpen" d="M4 7h16M4 12h16M4 17h16" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s var(--ease), border-color 0.3s var(--ease),
    backdrop-filter 0.3s var(--ease);
  border-bottom: 1px solid transparent;
}

.header.is-scrolled {
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: saturate(150%) blur(14px);
  border-bottom-color: var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 66px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.01em;
}

.brand-mark {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--sheen);
  box-shadow: inset 0 0 0 3px var(--bg);
  outline: 1.5px solid var(--accent);
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  list-style: none;
  padding: 0;
}

.nav-link {
  position: relative;
  display: inline-block;
  padding: 0.5rem 0.85rem;
  font-size: 0.92rem;
  color: var(--text-muted);
  border-radius: 8px;
  transition: color 0.2s var(--ease), background-color 0.2s var(--ease);
}

.nav-link:hover {
  color: var(--text);
}

.nav-link.active {
  color: var(--text);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0.85rem;
  right: 0.85rem;
  bottom: 0.28rem;
  height: 1.5px;
  background: var(--accent);
  border-radius: 2px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pill {
  min-width: 42px;
  height: 36px;
  padding-inline: 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: transparent;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  transition: border-color 0.2s var(--ease), color 0.2s var(--ease);
}

.pill:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.icon-btn {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: transparent;
  color: var(--text);
  transition: border-color 0.2s var(--ease), color 0.2s var(--ease);
}

.icon-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.menu-toggle {
  display: none;
}

@media (max-width: 780px) {
  .nav {
    position: fixed;
    inset: 66px 0 auto 0;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 0.75rem clamp(1.25rem, 5vw, 2.5rem) 1.25rem;
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.22s var(--ease), transform 0.22s var(--ease);
    box-shadow: var(--shadow-md);
  }

  .nav.open {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }

  .nav-list {
    flex-direction: column;
    align-items: stretch;
    gap: 0.15rem;
  }

  .nav-link {
    display: block;
    padding: 0.8rem 0.85rem;
    font-size: 1rem;
  }

  .nav-link.active::after {
    display: none;
  }

  .nav-link.active {
    background: var(--accent-soft);
    color: var(--accent);
  }

  .menu-toggle {
    display: inline-grid;
  }
}
</style>
