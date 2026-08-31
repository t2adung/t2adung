<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import AppIcon from '@/components/AppIcon.vue'
import { vReveal } from '@/composables/useReveal'
import { useI18n } from '@/composables/useI18n'
import {
  PROFILE,
  SOCIALS,
  STATS,
  SERVICES,
  PROJECTS,
  PROCESS,
  EXPERTISE,
  UI,
} from '@/data/content'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <SiteHeader />

  <main id="main">
    <!-- ===================================================== Hero -->
    <section id="top" class="hero">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="container hero-inner">
        <p class="status" v-reveal>
          <span class="dot"></span>{{ t(PROFILE.availability) }}
        </p>
        <h1 class="hero-title" v-reveal>
          {{ PROFILE.name }} —
          <span class="grad">{{ t(UI.hero_kicker) }}</span>
          {{ t(PROFILE.role).replace(t(UI.hero_kicker), '').trim() || 'Freelancer' }}
        </h1>
        <p class="hero-lead" v-reveal>{{ t(UI.hero_lead) }}</p>

        <div class="hero-cta" v-reveal>
          <a class="btn btn-primary" href="#contact">{{ t(UI.hero_cta_primary) }}</a>
          <a class="btn btn-ghost" href="#services">{{ t(UI.hero_cta_secondary) }}</a>
        </div>

        <p class="hero-meta" v-reveal>{{ t(PROFILE.location) }}</p>
      </div>
    </section>

    <!-- ===================================================== About + stats -->
    <section id="about" class="section">
      <div class="container about">
        <div class="about-copy">
          <span class="eyebrow" v-reveal>{{ t(UI.about_eyebrow) }}</span>
          <h2 class="section-title" v-reveal>{{ t(UI.about_title) }}</h2>
          <p class="section-lead" v-reveal>{{ t(UI.about_body) }}</p>
        </div>

        <dl class="stats" v-reveal>
          <div v-for="s in STATS" :key="s.value" class="stat">
            <dt class="stat-value">{{ s.value }}</dt>
            <dd class="stat-label">{{ t(s.label) }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ===================================================== Services -->
    <section id="services" class="section section-alt">
      <div class="container">
        <header class="head">
          <span class="eyebrow" v-reveal>{{ t(UI.services_eyebrow) }}</span>
          <h2 class="section-title" v-reveal>{{ t(UI.services_title) }}</h2>
          <p class="section-lead" v-reveal>{{ t(UI.services_lead) }}</p>
        </header>

        <ul class="cards">
          <li v-for="(svc, i) in SERVICES" :key="svc.id" class="card" v-reveal :style="{ transitionDelay: `${i * 60}ms` }">
            <span class="card-icon"><AppIcon :name="svc.icon" /></span>
            <h3 class="card-title">{{ t(svc.title) }}</h3>
            <p class="card-desc">{{ t(svc.desc) }}</p>
            <ul class="chips">
              <li v-for="tag in svc.tags" :key="tag" class="chip">{{ tag }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <!-- ===================================================== Work -->
    <section id="work" class="section">
      <div class="container">
        <header class="head">
          <span class="eyebrow" v-reveal>{{ t(UI.work_eyebrow) }}</span>
          <h2 class="section-title" v-reveal>{{ t(UI.work_title) }}</h2>
          <p class="section-lead" v-reveal>{{ t(UI.work_lead) }}</p>
        </header>

        <ul class="work-grid">
          <li v-for="(p, i) in PROJECTS" :key="p.id" class="work-card" v-reveal :style="{ transitionDelay: `${i * 60}ms` }">
            <div class="work-top">
              <span class="work-cat">{{ t(p.category) }}</span>
              <span class="work-result">{{ t(p.result) }}</span>
            </div>
            <h3 class="work-title">{{ t(p.title) }}</h3>
            <p class="work-desc">{{ t(p.desc) }}</p>
            <ul class="chips">
              <li v-for="s in p.stack" :key="s" class="chip subtle">{{ s }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <!-- ===================================================== Process + expertise -->
    <section id="process" class="section section-alt">
      <div class="container process">
        <div class="process-head">
          <span class="eyebrow" v-reveal>{{ t(UI.process_eyebrow) }}</span>
          <h2 class="section-title" v-reveal>{{ t(UI.process_title) }}</h2>
        </div>

        <ol class="steps">
          <li v-for="step in PROCESS" :key="step.no" class="step" v-reveal>
            <span class="step-no">{{ step.no }}</span>
            <div>
              <h3 class="step-title">{{ t(step.title) }}</h3>
              <p class="step-desc">{{ t(step.desc) }}</p>
            </div>
          </li>
        </ol>

        <div class="expertise" v-reveal>
          <h3 class="expertise-title">{{ t(UI.expertise_title) }}</h3>
          <ul class="chips wrap">
            <li v-for="tool in EXPERTISE" :key="tool" class="chip">{{ tool }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ===================================================== Contact -->
    <section id="contact" class="section">
      <div class="container">
        <div class="cta" v-reveal>
          <div class="cta-copy">
            <span class="eyebrow">{{ t(UI.contact_eyebrow) }}</span>
            <h2 class="section-title">{{ t(UI.contact_title) }}</h2>
            <p class="section-lead">{{ t(UI.contact_lead) }}</p>
            <a class="btn btn-primary cta-btn" :href="`mailto:${PROFILE.email}`">
              {{ t(UI.contact_cta) }}
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <ul class="links">
            <li v-for="s in SOCIALS" :key="s.label">
              <a :href="s.href" class="link-row" :target="s.href.startsWith('http') ? '_blank' : undefined" :rel="s.href.startsWith('http') ? 'noopener noreferrer' : undefined">
                <span class="link-label">{{ s.label }}</span>
                <span class="link-handle">{{ s.handle }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>

  <!-- ===================================================== Footer -->
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-brand">{{ PROFILE.name }}</span>
      <span class="footer-copy">© {{ year }} · {{ t(UI.footer_rights) }}</span>
      <a class="footer-top" href="#top">{{ t(UI.back_to_top) }} ↑</a>
    </div>
  </footer>
</template>

<style scoped>
/* ---------------------------------------------------------------- Hero */
.hero {
  position: relative;
  padding-block: clamp(5rem, 13vw, 9.5rem) clamp(3.5rem, 8vw, 6rem);
  overflow: hidden;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: radial-gradient(ellipse 75% 60% at 50% 0%, #000 5%, transparent 70%);
  opacity: 0.5;
  pointer-events: none;
}

.hero-inner {
  position: relative;
  max-width: 860px;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 0.85rem;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  font-size: 0.83rem;
  color: var(--text-muted);
  background: var(--surface);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34c759;
  box-shadow: 0 0 0 3px color-mix(in srgb, #34c759 25%, transparent);
}

.hero-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.3rem, 6.5vw, 4.4rem);
  line-height: 1.04;
  letter-spacing: -0.03em;
  margin-top: 1.4rem;
}

.grad {
  background: var(--sheen);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-lead {
  margin-top: 1.4rem;
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  color: var(--text-muted);
  max-width: 60ch;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.hero-meta {
  margin-top: 2.25rem;
  font-size: 0.86rem;
  color: var(--text-faint);
  letter-spacing: 0.01em;
}

/* ---------------------------------------------------------------- Shared */
.section-alt {
  background: var(--bg-alt);
  border-block: 1px solid var(--border);
}

.head {
  max-width: 640px;
  margin-bottom: clamp(2.25rem, 5vw, 3.5rem);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  padding: 0;
}

.chips.wrap {
  gap: 0.5rem;
}

.chip {
  font-family: var(--font-display);
  font-size: 0.76rem;
  letter-spacing: 0.02em;
  color: var(--text-muted);
  padding: 0.32rem 0.7rem;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  background: var(--surface);
}

.chip.subtle {
  background: transparent;
}

/* ---------------------------------------------------------------- About */
.about {
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.stat {
  background: var(--surface);
  padding: 1.5rem 1.4rem;
}

.stat-value {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  letter-spacing: -0.02em;
  background: var(--sheen);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-label {
  margin-top: 0.35rem;
  font-size: 0.88rem;
  color: var(--text-muted);
}

@media (max-width: 820px) {
  .about {
    grid-template-columns: 1fr;
  }
}

/* ---------------------------------------------------------------- Cards */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.6rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s var(--ease), border-color 0.3s var(--ease),
    box-shadow 0.3s var(--ease);
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
  box-shadow: var(--shadow-md);
}

.card-icon {
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 11px;
  border-radius: 12px;
  color: var(--accent);
  background: var(--accent-soft);
}

.card-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.12rem;
  letter-spacing: -0.01em;
}

.card-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  flex: 1;
}

.card .chips {
  margin-top: 0.35rem;
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

/* ---------------------------------------------------------------- Work */
.work-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.work-card {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1.7rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  transition: transform 0.3s var(--ease), border-color 0.3s var(--ease);
}

.work-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.work-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.work-cat {
  font-family: var(--font-display);
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.work-result {
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--accent);
}

.work-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: -0.01em;
}

.work-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  flex: 1;
}

@media (max-width: 700px) {
  .work-grid {
    grid-template-columns: 1fr;
  }
}

/* ---------------------------------------------------------------- Process */
.process {
  display: grid;
  gap: clamp(2rem, 5vw, 3.5rem);
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  list-style: none;
  padding: 0;
  counter-reset: step;
}

.step {
  display: flex;
  gap: 0.9rem;
  padding-top: 1.25rem;
  border-top: 2px solid var(--border-strong);
}

.step-no {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--accent);
  letter-spacing: 0.05em;
}

.step-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
}

.step-desc {
  margin-top: 0.4rem;
  color: var(--text-muted);
  font-size: 0.92rem;
}

@media (max-width: 860px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .steps {
    grid-template-columns: 1fr;
  }
}

.expertise-title {
  font-family: var(--font-display);
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 1rem;
}

/* ---------------------------------------------------------------- CTA */
.cta {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding: clamp(2rem, 5vw, 3.5rem);
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 6px);
  background: var(--surface);
  box-shadow: var(--shadow-md);
}

.cta-btn {
  margin-top: 1.6rem;
}

.links {
  list-style: none;
  padding: 0;
  border-top: 1px solid var(--border);
}

.link-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0.25rem;
  border-bottom: 1px solid var(--border);
  transition: padding-left 0.25s var(--ease), color 0.25s var(--ease);
}

.link-row:hover {
  padding-left: 0.75rem;
  color: var(--accent);
}

.link-label {
  font-family: var(--font-display);
  font-weight: 500;
}

.link-handle {
  color: var(--text-faint);
  font-size: 0.9rem;
}

.link-row:hover .link-handle {
  color: var(--accent);
}

@media (max-width: 760px) {
  .cta {
    grid-template-columns: 1fr;
  }
}

/* ---------------------------------------------------------------- Footer */
.footer {
  border-top: 1px solid var(--border);
  padding-block: 2rem;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  align-items: center;
  justify-content: space-between;
}

.footer-brand {
  font-family: var(--font-display);
  font-weight: 600;
}

.footer-copy {
  color: var(--text-faint);
  font-size: 0.86rem;
}

.footer-top {
  font-size: 0.86rem;
  color: var(--text-muted);
  transition: color 0.2s var(--ease);
}

.footer-top:hover {
  color: var(--accent);
}
</style>
