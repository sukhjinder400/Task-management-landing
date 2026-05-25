import React, { useState } from 'react'

const APP_URL = 'https://app.asystence.com'
const GOOGLE_AUTH = 'https://asystence-api-616077735050.asia-south1.run.app/auth/google?mode=register'
const WIN_INSTALLER_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.Setup.0.0.0.exe'
const WIN_PORTABLE_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.0.0.0.exe'
const ANDROID_APK_URL = 'https://pub-5e8d0742f1224c3dbf01efc7851e96f5.r2.dev/app-release.apk'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Downloads', href: '#downloads' },
]

const FEATURES = [
  ['Project execution', 'Tasks, subtasks, sprint boards, custom workflows, project health, and blocker visibility in one workspace.'],
  ['Team communication', 'Channels, direct messages, mentions, huddles, and updates stay connected to the work they belong to.'],
  ['AI intelligence', 'Executive summaries, workspace health, coaching nudges, risk signals, and AI-assisted operational context.'],
  ['Attendance and time', 'One-click attendance, breaks, lunch, idle signals, timesheets, and admin-ready activity visibility.'],
  ['Reviews and OKRs', 'Performance reviews, goals, feedback cycles, monthly scoring, and alignment rituals for growing teams.'],
  ['Knowledge and integrations', 'Wiki, Git automation, Asana migration, Slack migration, backups, SSO, API, and webhooks.'],
]

const STATS = [
  ['500+', 'Teams onboarded'],
  ['50K+', 'Tasks tracked'],
  ['10+', 'Countries active'],
  ['99.9%', 'Uptime target'],
]

const WORKFLOW = [
  ['Create your workspace', 'Start with Google, invite the team, and set permissions for admins, managers, and contributors.'],
  ['Run projects and conversations', 'Plan tasks, track owners, chat in context, and keep project decisions attached to execution.'],
  ['Let intelligence surface risk', 'AI turns workspace signals into summaries, coaching prompts, and operational next steps.'],
  ['Measure what matters', 'Use attendance, reports, reviews, OKRs, and health scores to keep the team aligned.'],
]

const PLANS = [
  {
    name: 'Basic',
    price: 'Free',
    period: 'forever to get started',
    features: ['Up to 10 members', 'Task and sprint management', 'Team chat and channels', 'Basic attendance', 'Wiki spaces', '5 GB storage'],
    cta: 'Start Free',
    href: '#signup',
  },
  {
    name: 'Pro',
    price: 'Rs 999',
    period: 'per workspace / month',
    highlight: true,
    features: ['Up to 50 members', 'Everything in Basic', 'AI insights and coaching', 'Performance reviews', 'OKR tracking', 'Git automation', '50 GB storage'],
    cta: 'Start Pro Trial',
    href: '#signup',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'for larger teams',
    features: ['Unlimited members', 'Everything in Pro', 'SAML SSO', 'Custom domain', 'Dedicated support', 'SLA guarantee', 'Custom integrations'],
    cta: 'Contact Sales',
    href: '#contact',
  },
]

function Mark({ size = 44 }) {
  return (
    <span className="flex shrink-0 items-center justify-center" style={{ width: size, height: size }} aria-hidden="true">
      <img src="/asystence-logo.png" alt="" className="h-full w-full object-contain" />
    </span>
  )
}

function Brand({ compact = false }) {
  return (
    <a href="#" className="flex items-center gap-1.5">
      <Mark size={compact ? 34 : 46} />
      <div>
        <div className={`${compact ? 'text-xl' : 'text-[32px]'} font-semibold tracking-tight leading-none text-[color:var(--text)]`}>Asystence</div>
        {!compact && <div className="mt-1.5 text-[10px] uppercase tracking-[0.18em] font-semibold text-[color:var(--text-soft)]">System Intelligence</div>}
      </div>
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[var(--app-bg)]/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Brand compact />
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={APP_URL} className="text-sm font-medium text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]">Sign in</a>
          <a href="#signup" className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[color:var(--primary-contrast)] transition-colors hover:bg-[var(--primary-hover)]">Get started</a>
        </div>
        <button className="md:hidden text-[color:var(--text)]" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="border-t border-[color:var(--border)] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-[color:var(--text-muted)]">{link.label}</a>
            ))}
            <a href={APP_URL} className="text-sm text-[color:var(--text-muted)]">Sign in</a>
            <a href="#signup" onClick={() => setOpen(false)} className="rounded-lg bg-[var(--primary)] px-4 py-2 text-center text-sm font-semibold text-[color:var(--primary-contrast)]">Get started</a>
          </div>
        </div>
      )}
    </header>
  )
}

function ProductPreview() {
  const rows = ['Workspace Health', 'My Tasks', 'Admin Access', 'Projects']
  return (
    <div className="border border-[color:var(--border)] rounded-xl p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-[color:var(--text)]">Workspace pulse</p>
          <p className="mt-1 text-xs text-[color:var(--text-muted)]">Live organizational health</p>
        </div>
        <span className="rounded-full border border-[color:var(--primary)] px-2 py-1 text-xs font-semibold text-[color:var(--primary)]">AI</span>
      </div>
      <div className="mb-5 h-2 rounded-full bg-[var(--surface-soft)]">
        <div className="h-2 w-3/5 rounded-full bg-[var(--primary)]" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {rows.map((row, index) => (
          <div key={row} className="rounded-lg border border-[color:var(--border)] p-4">
            <p className="text-xs font-semibold text-[color:var(--text)]">{row}</p>
            <p className="mt-3 text-2xl font-semibold text-[color:var(--primary)]">{index + 1}</p>
            <p className="mt-1 text-xs text-[color:var(--text-muted)]">Operational signal</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-[color:var(--border)] p-4">
        <p className="text-xs font-semibold text-[color:var(--text)]">Executive intelligence</p>
        <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">Risk, performance, attendance, and project execution signals summarized in one place.</p>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="min-h-screen pt-16">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="mb-10">
            <Brand />
          </div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">Workspace command center</p>
          <h1 className="text-[42px] font-semibold leading-[1.04] tracking-tight text-[color:var(--text)] sm:text-[56px] lg:text-[68px]">
            Run projects, people, and intelligence from one focused workspace.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-muted)]">
            Asystence brings task execution, team communication, AI insights, attendance, reviews, and admin control into a single operational surface.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#signup" className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-base font-semibold text-[color:var(--primary-contrast)] transition-colors hover:bg-[var(--primary-hover)]">
              Start free
            </a>
            <a href="#features" className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-[color:var(--border)] px-6 text-base font-semibold text-[color:var(--text)] transition-colors hover:bg-[var(--surface-soft)]">
              See features
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map(([value, label]) => (
              <div key={label} className="border border-[color:var(--border)] rounded-lg p-4">
                <p className="text-2xl font-semibold text-[color:var(--text)]">{value}</p>
                <p className="mt-1 text-xs text-[color:var(--text-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <ProductPreview />
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">{eyebrow}</p>
      <h2 className="text-[34px] font-semibold leading-tight tracking-tight text-[color:var(--text)] sm:text-[44px]">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">{children}</p>}
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Everything included" title="Replace scattered tools with one connected workspace.">
          Projects, chat, attendance, intelligence, reviews, knowledge, and automation all share the same execution context.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([title, description]) => (
            <div key={title} className="rounded-lg border border-[color:var(--border)] p-5 transition-colors hover:bg-[var(--surface-soft)]">
              <div className="mb-4 h-9 w-9 rounded-lg border border-[color:var(--primary)]" />
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  return (
    <section id="workflow" className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Workflow" title="From workspace setup to AI-guided execution.">
          Teams can start simple and grow into a complete operational system without switching tools.
        </SectionHeader>
        <div className="grid gap-4 lg:grid-cols-4">
          {WORKFLOW.map(([title, description], index) => (
            <div key={title} className="rounded-lg border border-[color:var(--border)] p-5">
              <p className="text-xs font-semibold text-[color:var(--primary)]">0{index + 1}</p>
              <h3 className="mt-5 text-lg font-semibold text-[color:var(--text)]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Pricing" title="Simple plans for teams at every stage.">
          Start free, then scale into AI intelligence, reviews, OKRs, and automation when your workspace needs it.
        </SectionHeader>
        <div className="grid gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`rounded-lg border p-6 ${plan.highlight ? 'border-[color:var(--primary)]' : 'border-[color:var(--border)]'}`}>
              {plan.highlight && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">Most popular</p>}
              <h3 className="text-xl font-semibold text-[color:var(--text)]">{plan.name}</h3>
              <p className="mt-5 text-4xl font-semibold text-[color:var(--text)]">{plan.price}</p>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">{plan.period}</p>
              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm text-[color:var(--text-muted)]">- {feature}</li>
                ))}
              </ul>
              <a href={plan.href} className={`mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg text-sm font-semibold transition-colors ${plan.highlight ? 'bg-[var(--primary)] text-[color:var(--primary-contrast)] hover:bg-[var(--primary-hover)]' : 'border border-[color:var(--border)] text-[color:var(--text)] hover:bg-[var(--surface-soft)]'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Downloads() {
  const downloads = [
    ['Windows Installer', 'Installer for desktop workstations.', WIN_INSTALLER_URL],
    ['Windows Portable', 'Run without installing.', WIN_PORTABLE_URL],
    ['Android APK', 'Direct Android download.', ANDROID_APK_URL],
  ]
  return (
    <section id="downloads" className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Downloads" title="Use Asystence on web, desktop, and mobile.">
          Your workspace stays available wherever your team works.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-3">
          {downloads.map(([title, description, href]) => (
            <div key={title} className="rounded-lg border border-[color:var(--border)] p-5">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{title}</h3>
              <p className="mt-3 text-sm text-[color:var(--text-muted)]">{description}</p>
              <a href={href} className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-[color:var(--border)] text-sm font-semibold text-[color:var(--text)] hover:bg-[var(--surface-soft)]">Download</a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-[color:var(--text-muted)]">
          Web app: <a href={APP_URL} className="text-[color:var(--primary)] hover:underline">{APP_URL.replace('https://', '')}</a>
        </p>
      </div>
    </section>
  )
}

function Signup() {
  return (
    <section id="signup" className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_520px] lg:items-center">
        <SectionHeader eyebrow="Get started" title="Create your workspace in seconds.">
          Sign up with Google or go directly to the app. Your team can start with projects, chat, and attendance immediately.
        </SectionHeader>
        <div className="rounded-lg border border-[color:var(--border)] p-6">
          <a href={GOOGLE_AUTH} className="inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-[var(--primary)] text-base font-semibold text-[color:var(--primary-contrast)] hover:bg-[var(--primary-hover)]">Continue with Google</a>
          <a href={`${APP_URL}/login`} className="mt-3 inline-flex min-h-[52px] w-full items-center justify-center rounded-lg border border-[color:var(--border)] text-base font-semibold text-[color:var(--text)] hover:bg-[var(--surface-soft)]">Sign in with email</a>
          <p className="mt-5 text-xs leading-5 text-[color:var(--text-soft)]">Starts on the Basic plan. Upgrade when your team needs AI intelligence, reviews, and automation.</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-xl border border-[color:var(--border)] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">Contact</p>
          <h2 className="mt-4 text-[34px] font-semibold text-[color:var(--text)]">Need a custom plan?</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[color:var(--text-muted)]">For enterprise pricing, partnerships, or deployment questions, reach out and we will respond within 24 hours.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:hello@asystence.com" className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-base font-semibold text-[color:var(--primary-contrast)] hover:bg-[var(--primary-hover)]">hello@asystence.com</a>
            <a href="#signup" className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-[color:var(--border)] px-6 text-base font-semibold text-[color:var(--text)] hover:bg-[var(--surface-soft)]">Start free</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Brand compact />
        <div className="flex flex-wrap gap-5 text-sm text-[color:var(--text-muted)]">
          <a href="#features" className="hover:text-[color:var(--text)]">Features</a>
          <a href="#pricing" className="hover:text-[color:var(--text)]">Pricing</a>
          <a href="#downloads" className="hover:text-[color:var(--text)]">Downloads</a>
          <a href={APP_URL} className="hover:text-[color:var(--text)]">Sign in</a>
        </div>
        <p className="text-sm text-[color:var(--text-soft)]">{new Date().getFullYear()} Asystence</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Pricing />
      <Downloads />
      <Signup />
      <Contact />
      <Footer />
    </>
  )
}
