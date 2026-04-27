import React, { useState } from 'react'

const APP_URL = 'https://app.asystence.com'
const GOOGLE_AUTH = 'https://asystence-api-616077735050.asia-south1.run.app/auth/google?mode=register'
const WIN_INSTALLER_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.Setup.0.0.0.exe'
const WIN_PORTABLE_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.0.0.0.exe'
const ANDROID_APK_URL = 'https://pub-5e8d0742f1224c3dbf01efc7851e96f5.r2.dev/app-release.apk'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Downloads', href: '#downloads' },
]

const FEATURES = [
  { icon: '⚡', title: 'Smart Task & Sprint Management', desc: 'Kanban boards, sprints, ticket numbering (PROJECT-123), subtasks, and custom workflows. Everything Jira does — beautifully simplified.', color: 'from-blue-500/20 to-blue-600/5' },
  { icon: '💬', title: 'Real-Time Chat & Huddles', desc: 'Built-in team messaging with channels, direct messages, and live audio/video huddles. Conversations live where your work lives.', color: 'from-violet-500/20 to-violet-600/5' },
  { icon: '🕐', title: 'Attendance & Time Tracking', desc: 'One-click sign-in, AWS breaks, lunch tracking, idle detection, geo rules, and rich daily reports. Replace your HR attendance tool entirely.', color: 'from-emerald-500/20 to-emerald-600/5' },
  { icon: '🤖', title: 'AI-Powered Insights', desc: 'An AI that knows your team — coaching nudges, performance narratives, autopilot decisions, risk detection, and executive summaries.', color: 'from-amber-500/20 to-amber-600/5' },
  { icon: '📊', title: 'Performance Reviews & OKRs', desc: 'Structured review cycles, peer feedback, OKR tracking, monthly scores, and team health dashboards. Keep everyone aligned and growing.', color: 'from-rose-500/20 to-rose-600/5' },
  { icon: '📖', title: 'Wiki & Knowledge Base', desc: "Powerful internal wiki with spaces, pages, and version history. Your team's knowledge — in one place, always current.", color: 'from-sky-500/20 to-sky-600/5' },
  { icon: '⚙️', title: 'Automation & Operations', desc: 'Automation rules, AI action decisions, execution signals, and workspace-wide health monitoring. Run your operations like a machine.', color: 'from-indigo-500/20 to-indigo-600/5' },
  { icon: '🔗', title: 'Git & Integrations', desc: 'Native GitHub/GitLab webhook automation, Asana sync, Google OAuth, SAML SSO, and a full public API with webhooks.', color: 'from-teal-500/20 to-teal-600/5' },
]

const COMPARISONS = [
  { feature: 'Task & Sprint Management', asystence: true, jira: true, slack: false, notion: true },
  { feature: 'Team Chat & Huddles', asystence: true, jira: false, slack: true, notion: false },
  { feature: 'Attendance Tracking', asystence: true, jira: false, slack: false, notion: false },
  { feature: 'AI Coaching & Insights', asystence: true, jira: false, slack: false, notion: false },
  { feature: 'Performance Reviews', asystence: true, jira: false, slack: false, notion: false },
  { feature: 'Built-in Wiki', asystence: true, jira: false, slack: false, notion: true },
  { feature: 'Git Automation', asystence: true, jira: true, slack: false, notion: false },
  { feature: 'OKR Tracking', asystence: true, jira: false, slack: false, notion: true },
  { feature: 'Data Backup & Recovery', asystence: true, jira: false, slack: false, notion: false },
  { feature: 'One Unified Platform', asystence: true, jira: false, slack: false, notion: false },
]

const PLANS = [
  {
    name: 'Basic',
    price: 'Free',
    period: 'forever to get started',
    highlight: false,
    features: ['Up to 10 members', 'Task & Sprint management', 'Team chat & channels', 'Basic attendance', 'Wiki (5 spaces)', '5 GB storage'],
    cta: 'Start Free',
    href: '#signup',
  },
  {
    name: 'Pro',
    price: '₹999',
    period: 'per workspace / month',
    highlight: true,
    badge: 'Most Popular',
    features: ['Up to 50 members', 'Everything in Basic', 'AI insights & coaching', 'Performance reviews', 'OKR tracking', 'Git automation', '50 GB storage', 'Priority support'],
    cta: 'Start Pro Trial',
    href: '#signup',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us for pricing',
    highlight: false,
    features: ['Unlimited members', 'Everything in Pro', 'SAML SSO', 'Custom domain', 'Dedicated support', 'SLA guarantee', 'Custom integrations', 'On-premise option'],
    cta: 'Contact Sales',
    href: '#contact',
  },
]

const TESTIMONIALS = [
  {
    body: "We replaced Jira, Slack, and our HR attendance tool in a single weekend. Onboarding the team took less than an hour. The AI coaching nudges have been surprisingly useful.",
    name: 'Priya Sharma',
    role: 'Engineering Manager',
    company: 'FinTech startup, Bangalore',
    initials: 'PS',
    color: 'from-blue-500 to-violet-600',
  },
  {
    body: "The attendance module alone saved us ₹40k/month we were paying a separate HR software vendor. The sprint tracking is as powerful as Jira but 10× easier to configure.",
    name: 'Rohan Mehta',
    role: 'Head of Product',
    company: 'SaaS company, Pune',
    initials: 'RM',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    body: "Real-time huddles inside the same platform where we track tasks is a game-changer. No more jumping to Google Meet mid-standup. The AI daily summaries are gold.",
    name: 'Ayesha Khan',
    role: 'CTO',
    company: 'Remote-first agency, Mumbai',
    initials: 'AK',
    color: 'from-violet-500 to-pink-600',
  },
]

const STATS = [
  { value: '500+', label: 'Teams onboarded' },
  { value: '50K+', label: 'Tasks tracked' },
  { value: '10+', label: 'Countries active' },
  { value: '99.9%', label: 'Uptime SLA' },
]

/* ── Logo Mark ── */
function AsystenceMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="markGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f72f8" />
          <stop offset="100%" stopColor="#9b5cf6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#markGrad)" />
      <circle cx="20" cy="9.5" r="3" fill="white" />
      <circle cx="10" cy="31" r="2.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="30" cy="31" r="2.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="15" cy="22" r="1.8" fill="rgba(255,255,255,0.55)" />
      <circle cx="25" cy="22" r="1.8" fill="rgba(255,255,255,0.55)" />
      <line x1="20" y1="9.5" x2="10" y2="31" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="9.5" x2="30" y2="31" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="22" x2="25" y2="22" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/* ── Dashboard Mockup ── */
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow behind the mockup */}
      <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 rounded-3xl" />
      <div className="relative bg-gray-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-950/60 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-4 bg-white/5 rounded-md h-5" />
        </div>
        <div className="flex">
          {/* Sidebar */}
          <div className="w-44 bg-gray-950/40 border-r border-white/5 p-3 flex flex-col gap-1 shrink-0">
            <div className="h-7 bg-white/10 rounded-lg mb-2 flex items-center px-2 gap-2">
              <div className="w-3 h-3 rounded-sm bg-blue-400/60" />
              <div className="h-2 bg-white/30 rounded flex-1" />
            </div>
            {['Tasks', 'Chat', 'Attendance', 'Reviews', 'Wiki', 'AI Hub'].map((item, i) => (
              <div key={item} className={`h-7 rounded-lg flex items-center px-2 gap-2 ${i === 0 ? 'bg-blue-500/20' : 'hover:bg-white/5'}`}>
                <div className={`w-2.5 h-2.5 rounded-sm ${['bg-blue-400/70', 'bg-violet-400/70', 'bg-emerald-400/70', 'bg-amber-400/70', 'bg-sky-400/70', 'bg-pink-400/70'][i]}`} />
                <div className="h-2 bg-white/20 rounded flex-1" />
              </div>
            ))}
          </div>
          {/* Main content */}
          <div className="flex-1 p-4">
            {/* Sprint header */}
            <div className="flex items-center justify-between mb-4">
              <div className="h-4 w-28 bg-white/20 rounded" />
              <div className="h-6 w-20 bg-blue-500/40 rounded-lg" />
            </div>
            {/* Kanban columns */}
            <div className="grid grid-cols-3 gap-3">
              {['To Do', 'In Progress', 'Done'].map((col, ci) => (
                <div key={col} className="space-y-2">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className={`w-2 h-2 rounded-full ${['bg-gray-400', 'bg-blue-400', 'bg-emerald-400'][ci]}`} />
                    <div className="h-2 w-14 bg-white/25 rounded" />
                  </div>
                  {[...Array(ci === 1 ? 3 : 2)].map((_, i) => (
                    <div key={i} className="bg-white/5 border border-white/8 rounded-lg p-2 space-y-1.5">
                      <div className="h-2 bg-white/20 rounded w-3/4" />
                      <div className="h-2 bg-white/10 rounded w-1/2" />
                      <div className="flex items-center gap-1 mt-1">
                        <div className={`w-5 h-5 rounded-full ${['from-blue-500 to-violet-600', 'from-emerald-500 to-teal-600', 'from-amber-500 to-orange-600', 'from-rose-500 to-pink-600', 'from-sky-500 to-blue-600'][i + ci]} bg-gradient-to-br`} />
                        <div className={`h-1.5 w-8 rounded-full ${['bg-blue-400/50', 'bg-amber-400/50', 'bg-rose-400/50'][ci]}`} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Navbar ── */
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <AsystenceMark size={32} />
          <span className="text-xl font-bold text-white tracking-tight">Asystence</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={APP_URL} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Sign In</a>
          <a href="#signup" className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-violet-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">Get Started Free</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-400 hover:text-white">
          {open
            ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-950 border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-300">{l.label}</a>
          ))}
          <a href={APP_URL} className="text-sm font-medium text-gray-400">Sign In</a>
          <a href="#signup" onClick={() => setOpen(false)} className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-violet-600 text-white px-4 py-2.5 rounded-lg text-center">Get Started Free</a>
        </div>
      )}
    </nav>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gray-950">
      {/* Background radial glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Now live at app.asystence.com
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              One platform.<br />
              <span className="hero-gradient-text">Everything your<br />team needs.</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed mb-10">
              Asystence replaces Jira, Slack, BambooHR, Confluence, and your performance review tool — with one beautifully unified, AI-native platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#signup" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold text-base px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25">
                Start Free — No Credit Card
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                See Features
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-gray-500">
              {['Free to start', 'Enterprise-grade security', 'AI-native from day one'].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="hidden lg:block">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Stats ── */
function Stats() {
  return (
    <div className="border-y border-white/5 bg-gray-950/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Features ── */
function Features() {
  return (
    <section id="features" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Everything Included</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Stop paying for 5 separate tools</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Asystence brings your entire workflow into a single, intelligent platform — at a fraction of the cost.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map(f => (
            <div key={f.title} className="group relative bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-4 border border-white/10`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-white mb-2 text-base leading-snug">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Create your workspace', desc: 'Sign up with Google in seconds. Name your workspace, invite your team — ready in under 2 minutes.', icon: '🚀' },
    { num: '02', title: 'Set up your projects', desc: 'Create projects, define sprints, assign tasks. Import from Jira or Asana with one click.', icon: '📋' },
    { num: '03', title: 'Your team collaborates', desc: 'Chat, track attendance, run huddles, review code — all without leaving Asystence.', icon: '🤝' },
    { num: '04', title: 'AI does the heavy lifting', desc: 'Automated reports, coaching nudges, risk alerts, and performance insights — zero setup required.', icon: '✨' },
  ]
  return (
    <section id="how-it-works" className="py-24 bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Quick Start</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Up and running in minutes</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">No lengthy onboarding. No consultants. Just sign up and go.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20">
                {s.icon}
              </div>
              <div className="absolute top-0 right-4 text-4xl font-black text-white/4 select-none leading-none">{s.num}</div>
              <h3 className="font-bold text-white mb-2 text-base">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Testimonials ── */
function Testimonials() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">What teams say</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Loved by teams worldwide</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Real feedback from engineering leads, product managers, and CTOs who switched to Asystence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="bg-white/3 border border-white/8 rounded-2xl p-7 flex flex-col hover:border-white/15 transition-colors">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">"{t.body}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Comparison ── */
function Comparison() {
  return (
    <section className="py-24 bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Why Asystence</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">One platform vs. four subscriptions</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Stop duct-taping tools together. See what you get when everything finally works as one.</p>
        </div>

        <div className="bg-gray-950/80 border border-white/8 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Feature</th>
                <th className="py-4 px-4 text-center">
                  <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text">Asystence</span>
                </th>
                <th className="py-4 px-4 text-sm font-medium text-gray-500 text-center">Jira</th>
                <th className="py-4 px-4 text-sm font-medium text-gray-500 text-center">Slack</th>
                <th className="py-4 px-4 text-sm font-medium text-gray-500 text-center">Notion</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((row, i) => (
                <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                  <td className="py-3 px-6 text-sm text-gray-300">{row.feature}</td>
                  <td className="py-3 px-4 text-center">
                    {row.asystence ? <span className="text-emerald-400 font-bold text-base">✓</span> : <span className="text-gray-700">—</span>}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.jira ? <span className="text-gray-400 font-medium">✓</span> : <span className="text-gray-700">—</span>}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.slack ? <span className="text-gray-400 font-medium">✓</span> : <span className="text-gray-700">—</span>}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.notion ? <span className="text-gray-400 font-medium">✓</span> : <span className="text-gray-700">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Replace Jira ($8) + Slack ($7.25) + BambooHR ($8) + Confluence ($5.75) = <strong className="text-gray-400">$29/user/month</strong> with Asystence at a fraction of the cost.
        </p>
      </div>
    </section>
  )
}

/* ── Pricing ── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Start free, scale when you're ready. No hidden fees, no per-seat gotchas on the basic plan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {PLANS.map(plan => (
            <div key={plan.name} className={`relative rounded-2xl p-8 flex flex-col transition-all ${plan.highlight
              ? 'bg-gradient-to-b from-blue-500/15 to-violet-600/10 border-2 border-blue-500/40 shadow-lg shadow-blue-500/10'
              : 'bg-white/3 border border-white/8 hover:border-white/15'}`}>
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">{plan.name}</h3>
                <div className="text-4xl font-extrabold text-white mb-1">{plan.price}</div>
                <div className="text-sm text-gray-500">{plan.period}</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href={plan.href} className={`block text-center font-semibold py-3.5 px-6 rounded-xl transition-all text-sm ${plan.highlight
                ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:opacity-90 shadow-lg shadow-blue-500/20'
                : 'bg-white/8 text-white hover:bg-white/15 border border-white/10'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Downloads ── */
function Downloads() {
  return (
    <section id="downloads" className="py-24 bg-gray-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Downloads</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Available on every platform</h2>
          <p className="text-lg text-gray-400">Windows, Android, and web — your workspace goes wherever you do.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/3 border border-white/8 rounded-2xl p-7 flex flex-col items-center gap-4 hover:border-blue-500/30 hover:bg-white/5 transition-all">
            <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-3xl">🖥️</div>
            <div className="text-center">
              <div className="font-bold text-white text-lg">Windows</div>
              <div className="text-sm text-gray-500 mt-0.5">Installer · v1.0.0</div>
            </div>
            <a href={WIN_INSTALLER_URL} className="w-full mt-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold py-3 rounded-xl transition-opacity hover:opacity-90 text-center block">
              Download Installer
            </a>
            <a href={WIN_PORTABLE_URL} className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Portable version (no install)</a>
          </div>

          <div className="bg-white/3 border border-white/8 rounded-2xl p-7 flex flex-col items-center gap-4 hover:border-emerald-500/30 hover:bg-white/5 transition-all">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl">📱</div>
            <div className="text-center">
              <div className="font-bold text-white text-lg">Android</div>
              <div className="text-sm text-gray-500 mt-0.5">APK · Direct download</div>
            </div>
            <a href={ANDROID_APK_URL} className="w-full mt-auto bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold py-3 rounded-xl transition-opacity hover:opacity-90 text-center block">
              Download APK
            </a>
            <p className="text-xs text-gray-500 text-center">Enable "Install unknown apps" in Android settings</p>
          </div>

          <div className="bg-white/3 border border-white/8 rounded-2xl p-7 flex flex-col items-center gap-4 opacity-50">
            <div className="w-16 h-16 bg-gray-500/10 border border-gray-500/20 rounded-2xl flex items-center justify-center text-3xl">🍎</div>
            <div className="text-center">
              <div className="font-bold text-white text-lg">iOS / Mac</div>
              <div className="text-sm text-gray-500 mt-0.5">App Store</div>
            </div>
            <div className="w-full mt-auto bg-white/5 border border-white/10 text-gray-500 text-sm font-medium py-3 rounded-xl text-center cursor-not-allowed">
              Coming Soon
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-600 text-center">
          Use the web app at <a href={APP_URL} className="text-blue-400 hover:text-blue-300 transition-colors">{APP_URL.replace('https://', '')}</a> on any browser, any device.
        </p>
      </div>
    </section>
  )
}

/* ── Signup / CTA ── */
function Signup() {
  return (
    <section id="signup" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-violet-600/8 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-lg mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Get Started</p>
        <h2 className="text-4xl font-extrabold text-white mb-4">Create your workspace</h2>
        <p className="text-gray-400 mb-10 text-lg">Sign up in seconds. Your team can be working together in under 2 minutes.</p>

        <div className="bg-white/4 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <a href={GOOGLE_AUTH} className="flex items-center justify-center gap-3 w-full bg-white text-gray-800 rounded-xl py-3.5 px-6 font-semibold hover:bg-gray-50 transition-colors mb-5 shadow-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </a>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-gray-600 font-medium">OR</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <a href={APP_URL + '/login'} className="block w-full text-center bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity mb-5 shadow-lg shadow-blue-500/20">
            Sign in with Email
          </a>

          <p className="text-xs text-gray-600">
            By signing up, you agree to our <a href="#terms" className="text-blue-400 hover:underline">Terms</a> and <a href="#privacy" className="text-blue-400 hover:underline">Privacy Policy</a>. Starts on the Basic plan — free forever.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Contact ── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900/40">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Contact</p>
        <h2 className="text-4xl font-extrabold text-white mb-4">Get in touch</h2>
        <p className="text-lg text-gray-400 mb-10">Enterprise inquiry? Partnership? We respond within 24 hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hello@asystence.com" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            hello@asystence.com
          </a>
          <a href="#signup" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <AsystenceMark size={30} />
              <span className="text-white font-bold text-lg">Asystence</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">The all-in-one workspace platform for modern, fast-moving teams.</p>
            <p className="text-xs text-gray-700 mt-4">Made with care for teams everywhere.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-gray-300 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-gray-300 transition-colors">Pricing</a></li>
              <li><a href="#downloads" className="hover:text-gray-300 transition-colors">Downloads</a></li>
              <li><a href="#how-it-works" className="hover:text-gray-300 transition-colors">How It Works</a></li>
              <li><a href={APP_URL} className="hover:text-gray-300 transition-colors">Sign In</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="mailto:hello@asystence.com" className="hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
              <li><a href="mailto:careers@asystence.com" className="hover:text-gray-300 transition-colors">Careers</a></li>
              <li><a href="mailto:press@asystence.com" className="hover:text-gray-300 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-300 transition-colors">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-gray-300 transition-colors">Security</a></li>
              <li><a href="#gdpr" className="hover:text-gray-300 transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Asystence. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Comparison />
      <Pricing />
      <Downloads />
      <Signup />
      <Contact />
      <Footer />
    </>
  )
}
