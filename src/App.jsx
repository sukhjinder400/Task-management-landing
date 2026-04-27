import React, { useState } from 'react'

const APP_URL = 'https://app.asystence.com'
const GOOGLE_AUTH = 'https://asystence-api-616077735050.asia-south1.run.app/auth/google?mode=register'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const WIN_INSTALLER_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.Setup.0.0.0.exe'
const WIN_PORTABLE_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.0.0.0.exe'
const ANDROID_APK_URL = 'https://pub-5e8d0742f1224c3dbf01efc7851e96f5.r2.dev/app-release.apk'

const FEATURES = [
  {
    icon: '✅',
    title: 'Smart Task & Sprint Management',
    desc: 'Plan, assign, and track work with Kanban boards, sprints, ticket numbering, subtasks, and custom workflows — everything Jira does, beautifully simplified.',
  },
  {
    icon: '💬',
    title: 'Real-Time Chat & Huddles',
    desc: 'Built-in team messaging with channels, direct messages, and live audio huddles. No more switching to Slack — your conversations live where your work lives.',
  },
  {
    icon: '🕐',
    title: 'Attendance & Time Tracking',
    desc: 'One-click sign-in/off, AWS breaks, lunch tracking, idle detection, geo rules, and rich daily reports. Replace your HR attendance tool entirely.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Insights',
    desc: 'An AI that knows your team — coaching nudges, performance narratives, autopilot decisions, risk detection, and executive summaries generated automatically.',
  },
  {
    icon: '📊',
    title: 'Performance Reviews & OKRs',
    desc: 'Structured review cycles, peer feedback, OKR tracking, monthly scores, and team health dashboards. Keep everyone aligned and growing.',
  },
  {
    icon: '📖',
    title: 'Wiki & Knowledge Base',
    desc: "A powerful internal wiki with spaces, pages, and version history. Your team's knowledge lives in one place, always up to date.",
  },
  {
    icon: '⚙️',
    title: 'Operations OS',
    desc: 'Automation rules, AI action decisions, execution signals, and workspace-wide health monitoring. Run your operations like a machine.',
  },
  {
    icon: '🔗',
    title: 'Git & Integrations',
    desc: 'Native GitHub/GitLab webhook automation, Asana sync, Google OAuth, SAML SSO, and a full public API with webhooks. Connect everything you use.',
  },
]

const COMPARISONS = [
  { feature: 'Task Management', asystence: true, jira: true, slack: false, notion: true },
  { feature: 'Team Chat', asystence: true, jira: false, slack: true, notion: false },
  { feature: 'Attendance Tracking', asystence: true, jira: false, slack: false, notion: false },
  { feature: 'AI Coaching', asystence: true, jira: false, slack: false, notion: false },
  { feature: 'Performance Reviews', asystence: true, jira: false, slack: false, notion: false },
  { feature: 'Built-in Wiki', asystence: true, jira: false, slack: false, notion: true },
  { feature: 'Git Automation', asystence: true, jira: true, slack: false, notion: false },
  { feature: 'OKR Tracking', asystence: true, jira: false, slack: false, notion: true },
  { feature: 'Backup & Recovery', asystence: true, jira: false, slack: false, notion: false },
  { feature: 'One Unified Platform', asystence: true, jira: false, slack: false, notion: false },
]

const PLANS = [
  {
    name: 'Basic',
    price: 'Free',
    period: 'to get started',
    color: 'border-gray-200',
    badge: '',
    features: ['Up to 10 members', 'Task & Sprint management', 'Team chat', 'Basic attendance', 'Wiki (5 spaces)', '5 GB storage'],
    cta: 'Start Free',
    ctaStyle: 'bg-brand-600 text-white hover:bg-brand-700',
  },
  {
    name: 'Pro',
    price: '₹999',
    period: 'per workspace / month',
    color: 'border-brand-500 ring-2 ring-brand-500',
    badge: 'Most Popular',
    features: ['Up to 50 members', 'Everything in Basic', 'AI insights & coaching', 'Performance reviews', 'OKR tracking', 'Git automation', '50 GB storage', 'Priority support'],
    cta: 'Start Pro Trial',
    ctaStyle: 'gradient-cta text-white',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us for pricing',
    color: 'border-gray-200',
    badge: '',
    features: ['Unlimited members', 'Everything in Pro', 'SAML SSO', 'Custom domain', 'Dedicated support', 'SLA guarantee', 'Custom integrations', 'On-premise option'],
    cta: 'Contact Sales',
    ctaStyle: 'bg-gray-900 text-white hover:bg-gray-800',
  },
]

const TEAM = [
  { name: 'Sukhjinder Singh', role: 'Founder & CEO', avatar: 'SS' },
]

function Check({ yes }) {
  return yes
    ? <span className="text-brand-600 font-bold text-lg">✓</span>
    : <span className="text-gray-300 text-lg">—</span>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-cta rounded-lg flex items-center justify-center text-white font-bold text-sm">A</div>
          <span className="text-xl font-bold text-gray-900">Asystence</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={APP_URL} className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">Sign In</a>
          <a href="#signup" className="text-sm font-semibold bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors">Get Started Free</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700">{l.label}</a>
          ))}
          <a href={APP_URL} className="text-sm font-medium text-gray-700">Sign In</a>
          <a href="#signup" className="text-sm font-semibold bg-brand-600 text-white px-4 py-2 rounded-lg text-center">Get Started Free</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/20">
          <span>🚀</span> Now in production — join hundreds of teams
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          One platform.<br />
          <span className="gradient-text">Everything your team needs.</span>
        </h1>

        <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          Asystence replaces Jira, Slack, BambooHR, Confluence, and your performance review tool — with one beautifully unified platform powered by AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#signup" className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
            Start Free — No Credit Card
          </a>
          <a href="#features" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/30 hover:bg-white/20 transition-all">
            See Features →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-blue-200 text-sm">
          {['✅ Free to start', '🔒 Enterprise-grade security', '🌏 Built for global teams', '🤖 AI-native from day one'].map(t => (
            <span key={t} className="font-medium">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Everything in one place</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Stop paying for 5 different tools. Asystence brings your entire workflow into a single, intelligent platform.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 card-hover">
              <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg leading-snug">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Create your workspace', desc: 'Sign up with Google in seconds. Name your workspace, invite your team — you\'re ready in under 2 minutes.' },
    { num: '02', title: 'Set up your projects', desc: 'Create projects, define sprints, assign tasks. Import from Jira or Asana with one click.' },
    { num: '03', title: 'Your team works together', desc: 'Chat, collaborate, track attendance, review code — all without leaving Asystence.' },
    { num: '04', title: 'AI does the heavy lifting', desc: 'Get automated reports, coaching nudges, risk alerts, and performance insights — no setup required.' },
  ]
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Up and running in minutes</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">No lengthy onboarding. No consultants. Just sign up and go.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="text-center">
              <div className="w-16 h-16 gradient-cta rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4">{s.num}</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 text-gray-300 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Comparison() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why teams choose Asystence</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Stop duct-taping tools together. See what you get with one platform vs. four separate subscriptions.</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Feature</th>
                <th className="py-4 px-4 font-bold text-brand-600 text-center">Asystence</th>
                <th className="py-4 px-4 font-medium text-gray-500 text-center">Jira</th>
                <th className="py-4 px-4 font-medium text-gray-500 text-center">Slack</th>
                <th className="py-4 px-4 font-medium text-gray-500 text-center">Notion</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="py-3 px-6 text-sm font-medium text-gray-700">{row.feature}</td>
                  <td className="py-3 px-4 text-center"><Check yes={row.asystence} /></td>
                  <td className="py-3 px-4 text-center"><Check yes={row.jira} /></td>
                  <td className="py-3 px-4 text-center"><Check yes={row.slack} /></td>
                  <td className="py-3 px-4 text-center"><Check yes={row.notion} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">Replace Jira ($8/user) + Slack ($7.25/user) + BambooHR ($8/user) + Confluence ($5.75/user) = <strong>$29/user/month</strong> with Asystence at a fraction of the cost.</p>
      </div>
    </section>
  )
}

function Downloads() {
  return (
    <section id="downloads" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Asystence</h2>
        <p className="text-gray-500 mb-14 text-lg">Available on Windows. Android & iOS coming soon.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Windows Installer */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl">🖥️</div>
            <div>
              <div className="font-semibold text-gray-900 text-lg">Windows</div>
              <div className="text-sm text-gray-400">Installer (.exe)</div>
            </div>
            <a href={WIN_INSTALLER_URL} className="w-full mt-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors text-center block">
              Download Installer
            </a>
            <a href={WIN_PORTABLE_URL} className="text-xs text-indigo-500 hover:underline">
              Portable version (no install)
            </a>
          </div>
          {/* Android */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-3xl">📱</div>
            <div>
              <div className="font-semibold text-gray-900 text-lg">Android</div>
              <div className="text-sm text-gray-400">Direct APK download</div>
            </div>
            <a href={ANDROID_APK_URL} className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors text-center block">
              Download APK
            </a>
            <p className="text-xs text-gray-400 text-center">Enable "Install unknown apps" in Android settings</p>
          </div>
          {/* iOS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center gap-4 opacity-60">
            <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-3xl">🍎</div>
            <div>
              <div className="font-semibold text-gray-900 text-lg">iOS</div>
              <div className="text-sm text-gray-400">App Store</div>
            </div>
            <div className="w-full mt-auto bg-gray-100 text-gray-400 text-sm font-medium py-2.5 rounded-lg text-center cursor-not-allowed">
              Coming Soon
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm text-gray-400">Mac & Linux desktop apps coming soon. Use the web app at <a href="https://app.asystence.com" className="text-indigo-500 hover:underline">app.asystence.com</a> in the meantime.</p>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Simple, honest pricing</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Start free, scale when you're ready. No hidden fees, no per-seat gotchas on the basic plan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map(plan => (
            <div key={plan.name} className={`relative rounded-2xl border-2 p-8 ${plan.color} card-hover bg-white`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-cta text-white text-xs font-bold px-4 py-1.5 rounded-full">{plan.badge}</div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="text-3xl font-extrabold text-gray-900">{plan.price}</div>
                <div className="text-sm text-gray-500 mt-1">{plan.period}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-brand-600 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>

              <a href={plan.name === 'Enterprise' ? '#contact' : '#signup'} className={`block text-center font-semibold py-3 px-6 rounded-xl transition-all ${plan.ctaStyle}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Signup() {
  return (
    <section id="signup" className="py-24 gradient-hero">
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Create your workspace</h2>
        <p className="text-blue-200 mb-10 text-lg">Sign up in seconds. Your team can be working together in under 2 minutes.</p>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <a
            href={GOOGLE_AUTH}
            className="flex items-center justify-center gap-3 w-full border-2 border-gray-200 rounded-xl py-3.5 px-6 font-semibold text-gray-700 hover:border-brand-400 hover:bg-brand-50 transition-all mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </a>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <a href={APP_URL + '/login'} className="block w-full text-center gradient-cta text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity mb-4">
            Sign in with Email
          </a>

          <p className="text-xs text-gray-400 mt-4">By signing up, you agree to our <a href="#terms" className="text-brand-600 hover:underline">Terms of Service</a> and <a href="#privacy" className="text-brand-600 hover:underline">Privacy Policy</a>. Your workspace starts on the Basic plan.</p>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Built by a team that felt the pain</h2>
        <p className="text-xl text-gray-500 leading-relaxed mb-12">
          We spent years switching between Jira for tasks, Slack for chat, Excel for attendance, and Google Docs for notes — and we were exhausted. So we built the tool we always wanted: one platform that actually works together.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Asystence is built for modern teams who want to move fast without drowning in tool sprawl. We believe your team's productivity tool should be as intelligent as your team — and should cost a fraction of what you're paying today.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Get in touch</h2>
        <p className="text-xl text-gray-500 mb-10">Questions? Enterprise inquiry? We respond within 24 hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hello@asystence.com" className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-700 transition-colors">
            📧 hello@asystence.com
          </a>
          <a href="#signup" className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-xl hover:bg-gray-200 transition-colors">
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-cta rounded-lg flex items-center justify-center text-white font-bold text-sm">A</div>
              <span className="text-white font-bold text-lg">Asystence</span>
            </div>
            <p className="text-sm leading-relaxed">The all-in-one workspace platform for modern teams.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#downloads" className="hover:text-white transition-colors">Downloads</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href={APP_URL} className="hover:text-white transition-colors">Log In</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="mailto:careers@asystence.com" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="mailto:press@asystence.com" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#gdpr" className="hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Asystence. All rights reserved.</p>
          <p className="text-sm">Made with ❤️ for teams everywhere</p>
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
      <Features />
      <HowItWorks />
      <Comparison />
      <Downloads />
      <Pricing />
      <Signup />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
