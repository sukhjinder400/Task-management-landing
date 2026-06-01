import React, { useEffect, useState } from 'react'

const APP_URL = 'https://app.asystence.com'
const SIGNUP_URL = `${APP_URL}/signup`
const WIN_INSTALLER_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.Setup.0.0.0.exe'
const WIN_PORTABLE_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.0.0.0.exe'
const ANDROID_APK_URL = 'https://pub-5e8d0742f1224c3dbf01efc7851e96f5.r2.dev/app-release.apk'

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Workflow', href: '/#workflow' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Downloads', href: '/#downloads' },
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
  ['Create your workspace', 'Name the workspace, create the first admin account, then invite managers and contributors from inside the app.'],
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
    href: SIGNUP_URL,
  },
  {
    name: 'Pro',
    price: 'Rs 999',
    period: 'per workspace / month',
    highlight: true,
    features: ['Up to 50 members', 'Everything in Basic', 'AI insights and coaching', 'Performance reviews', 'OKR tracking', 'Git automation', '50 GB storage'],
    cta: 'Start Pro Trial',
    href: SIGNUP_URL,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'for larger teams',
    features: ['Unlimited members', 'Everything in Pro', 'SAML SSO', 'Custom domain', 'Dedicated support', 'SLA guarantee', 'Custom integrations'],
    cta: 'Contact Sales',
    href: '/#contact',
  },
]

const POLICY_PAGES = {
  '/terms': {
    title: 'Terms and Conditions',
    intro: 'These terms govern access to and use of Asystence, including the website, web app, desktop app, mobile app, and related services.',
    sections: [
      ['Use of Asystence', 'Asystence is a workspace platform for task management, team communication, attendance, project operations, reporting, and business workflow automation. You are responsible for keeping your account details accurate and for activity performed through your workspace.'],
      ['Accounts and eligibility', 'You must provide accurate signup, billing, and contact information. Administrators are responsible for inviting authorized users, managing roles, and removing access for users who should no longer use a workspace.'],
      ['Subscriptions and trial billing', 'Paid plans may start with a free trial. When you start a trial for a paid plan, you may be asked to authorize a debit card, credit card, UPI mandate, or another supported payment method. After the trial ends, the selected plan renews automatically unless cancelled before renewal. A small verification charge, usually INR 1, may be collected during signup and refunded automatically after payment method confirmation.'],
      ['Acceptable use', 'You may not use Asystence to upload unlawful content, attack or disrupt the service, misuse another user account, attempt unauthorized access, or violate applicable laws and platform policies.'],
      ['Data and security', 'We use reasonable technical and organizational controls to protect account data. You remain responsible for the information your team uploads and for maintaining secure devices, passwords, and access permissions.'],
      ['Service changes', 'We may improve, update, suspend, or discontinue parts of the service when needed for security, reliability, compliance, or product development. We aim to avoid unnecessary disruption to active customers.'],
      ['Limitation of liability', 'To the maximum extent permitted by law, Asystence is provided without warranties of uninterrupted or error-free operation, and our liability is limited to amounts paid for the service during the period giving rise to the claim.'],
      ['Contact', 'For support, billing, legal, or account questions, contact hello@asystence.com.'],
    ],
  },
  '/privacy': {
    title: 'Privacy Policy',
    intro: 'This policy explains how Asystence handles information collected through our website, applications, support channels, and billing flows.',
    sections: [
      ['Information we collect', 'We collect account details such as name, email address, phone number, workspace name, role, billing details, payment confirmation identifiers, and information users add to their workspace, including tasks, comments, attendance, files, and operational records.'],
      ['How we use information', 'We use information to create and secure accounts, operate the workspace platform, process subscriptions, provide support, send service notices, improve product reliability, prevent fraud, and comply with legal obligations.'],
      ['Payments', 'Payments are processed by authorized payment providers such as Razorpay. Asystence does not store full card numbers, CVV values, UPI PINs, or banking passwords. Payment providers may share payment status, subscription identifiers, refund status, and limited billing metadata with us.'],
      ['Sharing of information', 'We share information only with service providers needed to run Asystence, payment processors, hosting and security providers, analytics or support tools, or when required by law. We do not sell personal information.'],
      ['Data retention', 'We retain account and workspace information while the account is active and for a reasonable period afterward for backup, audit, legal, billing, fraud prevention, and dispute-resolution purposes.'],
      ['Security', 'We use safeguards such as access controls, secure transport, limited operational access, and monitoring. No online service can guarantee absolute security, so users should keep passwords and devices protected.'],
      ['User choices', 'You can request account updates, exports, deletion assistance, or billing support by contacting us. Some records may need to be retained where required for legal, accounting, tax, or security reasons.'],
      ['Contact', 'For privacy questions or requests, contact hello@asystence.com.'],
    ],
  },
  '/refund-policy': {
    title: 'Refund Policy',
    intro: 'This refund policy applies to paid Asystence subscriptions and payment verification charges.',
    sections: [
      ['Trial verification refund', 'A small verification charge, usually INR 1, may be collected when a user starts a free trial and authorizes a payment method. This charge is refunded automatically after confirmation, subject to payment provider and bank processing timelines.'],
      ['Subscription payments', 'Subscription fees are generally non-refundable once a billing cycle starts because the workspace service is made available immediately for the selected period. Customers can cancel future renewals according to the cancellation policy.'],
      ['Eligible refund cases', 'We may issue a refund for duplicate charges, failed payment attempts that were debited, incorrect amounts, technical billing errors, or cases where a refund is required by applicable law.'],
      ['Refund review process', 'To request a refund review, email hello@asystence.com with your registered email address, workspace name, payment date, amount, and payment reference if available. We may request additional details to verify the transaction.'],
      ['Refund timelines', 'Approved refunds are initiated to the original payment method. Bank, card network, UPI, or payment provider timelines may vary, and final credit timing is controlled by the issuing institution.'],
      ['Chargebacks and disputes', 'If you raise a chargeback or payment dispute, related workspace access may be reviewed or limited while the dispute is investigated.'],
    ],
  },
  '/cancellation-policy': {
    title: 'Cancellation Policy',
    intro: 'This policy explains how customers can cancel trials, subscriptions, and future renewals for Asystence.',
    sections: [
      ['Free trial cancellation', 'You may cancel a paid-plan trial before the trial ends to avoid automatic billing. If the trial is not cancelled before the renewal date, the selected plan may be charged automatically using the authorized payment method.'],
      ['Subscription cancellation', 'Customers can cancel a paid subscription from the billing or account settings area when available, or by contacting hello@asystence.com from the registered admin email address.'],
      ['Effect of cancellation', 'Cancellation stops future renewals. Access to paid features may continue until the end of the current paid billing period unless otherwise required by law or platform rules.'],
      ['Workspace data after cancellation', 'After cancellation or downgrade, some paid features, storage limits, automation, AI capabilities, or admin controls may be restricted. Customers should export any required records before closing a workspace.'],
      ['Failed or overdue payments', 'If a renewal payment fails, the subscription may become pending, halted, restricted, or cancelled depending on payment provider rules and retry status. Customers can update payment methods to resume service.'],
      ['Support', 'For cancellation help, billing questions, or subscription status checks, contact hello@asystence.com.'],
    ],
  },
}

const POLICY_LINKS = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Refunds', href: '/refund-policy' },
  { label: 'Cancellation', href: '/cancellation-policy' },
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
    <a href="/" className="flex items-center gap-2">
      <Mark size={compact ? 44 : 62} />
      <div>
        <div className={`${compact ? 'text-[22px]' : 'text-[36px]'} font-semibold tracking-tight leading-none text-[color:var(--text)]`}>Asystence</div>
        <div className={`${compact ? 'mt-1 text-[8px]' : 'mt-1.5 text-[10px]'} uppercase tracking-[0.18em] font-semibold text-[color:var(--text-soft)]`}>System Intelligence</div>
      </div>
    </a>
  )
}

function setPageTitle(title) {
  if (typeof document !== 'undefined') {
    document.title = title ? `${title} | Asystence` : 'Asystence - The All-in-One Workspace Platform'
  }
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[var(--app-bg)]">
      <div className="mx-auto flex h-20 w-full max-w-[1760px] items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-16">
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
          <a href={SIGNUP_URL} className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[color:var(--primary-contrast)] transition-colors hover:bg-[var(--primary-hover)]">Get started</a>
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
            <a href={SIGNUP_URL} onClick={() => setOpen(false)} className="rounded-lg bg-[var(--primary)] px-4 py-2 text-center text-sm font-semibold text-[color:var(--primary-contrast)]">Get started</a>
            {POLICY_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-[color:var(--text-muted)]">{link.label}</a>
            ))}
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
    <section className="min-h-screen pt-20">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-[1760px] items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(520px,0.92fr)] lg:gap-16 lg:px-14 xl:px-16 2xl:gap-20">
        <div>
          <div className="mb-9">
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
            <a href={SIGNUP_URL} className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-base font-semibold text-[color:var(--primary-contrast)] transition-colors hover:bg-[var(--primary-hover)]">
              Start free
            </a>
            <a href="/#features" className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-[color:var(--border)] px-6 text-base font-semibold text-[color:var(--text)] transition-colors hover:bg-[var(--surface-soft)]">
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
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
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
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
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
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
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
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
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
      <div className="mx-auto grid w-full max-w-[1760px] gap-8 px-6 sm:px-10 lg:grid-cols-[1fr_560px] lg:items-center lg:px-14 xl:px-16">
        <SectionHeader eyebrow="Get started" title="Create your workspace in seconds.">
          Name your workspace, create the first admin account, then choose email/password or Google on the app signup screen.
        </SectionHeader>
        <div className="rounded-lg border border-[color:var(--border)] p-6">
          <a href={SIGNUP_URL} className="inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-[var(--primary)] text-base font-semibold text-[color:var(--primary-contrast)] hover:bg-[var(--primary-hover)]">Create free trial</a>
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
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="rounded-xl border border-[color:var(--border)] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">Contact</p>
          <h2 className="mt-4 text-[34px] font-semibold text-[color:var(--text)]">Need a custom plan?</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[color:var(--text-muted)]">For enterprise pricing, partnerships, or deployment questions, reach out and we will respond within 24 hours.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:hello@asystence.com" className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-base font-semibold text-[color:var(--primary-contrast)] hover:bg-[var(--primary-hover)]">hello@asystence.com</a>
            <a href={SIGNUP_URL} className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-[color:var(--border)] px-6 text-base font-semibold text-[color:var(--text)] hover:bg-[var(--surface-soft)]">Start free</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function LegalPage({ page }) {
  return (
    <main className="pt-20">
      <section className="border-t border-[color:var(--border)] py-20">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-14">
          <a href="/" className="text-sm font-semibold text-[color:var(--primary)] hover:underline">Back to Asystence</a>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-soft)]">Last updated: June 1, 2026</p>
          <h1 className="mt-4 text-[40px] font-semibold leading-tight tracking-tight text-[color:var(--text)] sm:text-[56px]">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--text-muted)]">{page.intro}</p>
          <div className="mt-12 space-y-9">
            {page.sections.map(([title, body]) => (
              <section key={title} className="border-t border-[color:var(--border)] pt-8">
                <h2 className="text-xl font-semibold text-[color:var(--text)]">{title}</h2>
                <p className="mt-3 text-base leading-8 text-[color:var(--text-muted)]">{body}</p>
              </section>
            ))}
          </div>
          <div className="mt-12 border-t border-[color:var(--border)] pt-8">
            <p className="text-sm leading-6 text-[color:var(--text-muted)]">
              Email: <a href="mailto:hello@asystence.com" className="text-[color:var(--primary)] hover:underline">hello@asystence.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-12">
      <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-6 px-6 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14 xl:px-16">
        <Brand compact />
        <div className="flex flex-wrap gap-5 text-sm text-[color:var(--text-muted)]">
          <a href="/#features" className="hover:text-[color:var(--text)]">Features</a>
          <a href="/#pricing" className="hover:text-[color:var(--text)]">Pricing</a>
          <a href="/#downloads" className="hover:text-[color:var(--text)]">Downloads</a>
          <a href={APP_URL} className="hover:text-[color:var(--text)]">Sign in</a>
          {POLICY_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[color:var(--text)]">{link.label}</a>
          ))}
        </div>
        <p className="text-sm text-[color:var(--text-soft)]">{new Date().getFullYear()} Asystence</p>
      </div>
    </footer>
  )
}

export default function App() {
  const normalizedPath = typeof window === 'undefined'
    ? '/'
    : (window.location.pathname.replace(/\/+$/, '') || '/')
  const policyPage = POLICY_PAGES[normalizedPath]

  useEffect(() => {
    setPageTitle(policyPage?.title)
  }, [policyPage])

  return (
    <>
      <Navbar />
      {policyPage ? (
        <LegalPage page={policyPage} />
      ) : (
        <>
          <Hero />
          <Features />
          <Workflow />
          <Pricing />
          <Downloads />
          <Signup />
          <Contact />
        </>
      )}
      <Footer />
    </>
  )
}
