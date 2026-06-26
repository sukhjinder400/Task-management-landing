import React, { useEffect, useState } from 'react'
import {
  CONTENT_HOME_LINKS,
  FOOTER_CONTENT_LINKS,
  buildContentPageJsonLd,
  getContentPage,
  getContentRelatedPaths,
} from './contentPages.js'
import {
  HOME_FAQS,
  HOME_RELATED_LINKS,
  HOME_SEO,
  MARKETING_PAGE_LIST,
  buildHomeJsonLd,
  buildMarketingPageJsonLd,
  buildPolicyJsonLd,
  getMarketingPage,
  getRelatedPages,
} from './marketingPages.js'
import { applySeo } from './seo.js'

const APP_URL = 'https://app.asystence.com'
const SIGNUP_URL = `${APP_URL}/signup`
const WIN_INSTALLER_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.Setup.0.0.0.exe'
const WIN_PORTABLE_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.0.0.0.exe'
const ANDROID_APK_URL = 'https://pub-5e8d0742f1224c3dbf01efc7851e96f5.r2.dev/app-release.apk'

const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Resources', href: '/resources' },
  { label: 'Guides', href: '/guides' },
  { label: 'Compare', href: '/compare' },
  { label: 'Company', href: '/company' },
  { label: 'Pricing', href: '/#pricing' },
]

const FEATURES = [
  ['AI work management', 'Tasks, projects, team communication, workspace signals, and AI-assisted context work together in one operating surface.'],
  ['Task management', 'Plan assignments, subtasks, owners, workflows, blockers, and project execution without separating work from context.'],
  ['Project management with chat', 'Keep project boards, task ownership, channels, direct messages, mentions, and huddles in one workspace.'],
  ['Team communication', 'Channels, direct messages, mentions, huddles, and updates stay close to the work they belong to.'],
  ['Team collaboration software', 'Coordinate tasks, conversations, knowledge, handoffs, and shared workspace context across internal teams.'],
  ['Operations work management', 'Connect recurring work, admin visibility, reporting, attendance, reviews, OKRs, and AI-assisted signals.'],
  ['Workspace management', 'Create team spaces for projects, people, communication, knowledge, reporting, and operational visibility.'],
  ['AI work assistant', 'Summaries, workspace health, coaching nudges, risk signals, and operational context help teams follow through.'],
]

const PRODUCT_SIGNALS = [
  ['Work OS', 'Tasks, chat, workspace operations, and AI context'],
  ['Projects', 'Boards, workflows, ownership, and blockers'],
  ['Teams', 'Channels, direct messages, mentions, and huddles'],
  ['Insights', 'Summaries, health signals, reviews, and OKRs'],
]

const WORKFLOW = [
  ['Create your workspace', 'Name the workspace, create the first admin account, then invite managers and contributors into a shared operating layer.'],
  ['Run projects and conversations', 'Plan tasks, track owners, chat in context, and keep project decisions attached to execution.'],
  ['Let intelligence surface risk', 'AI-assisted summaries, coaching prompts, and workspace health signals help teams notice what needs attention.'],
  ['Measure what matters', 'Use attendance, reports, reviews, OKRs, and health views to keep internal teams aligned.'],
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
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">AI workspace operating system</p>
          <h1 className="text-[42px] font-semibold leading-[1.04] tracking-tight text-[color:var(--text)] sm:text-[56px] lg:text-[68px]">
            AI work management software and work OS for teams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-muted)]">
            Asystence brings task management, team communication, project execution, workspace collaboration, attendance, reviews, and AI-assisted operational context into a single work OS.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={SIGNUP_URL} className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-base font-semibold text-[color:var(--primary-contrast)] transition-colors hover:bg-[var(--primary-hover)]">
              Start free
            </a>
            <a href="/features/work-management" className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-[color:var(--border)] px-6 text-base font-semibold text-[color:var(--text)] transition-colors hover:bg-[var(--surface-soft)]">
              Explore work OS
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PRODUCT_SIGNALS.map(([value, label]) => (
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

function featureHref(title) {
  if (title.includes('Project management')) return '/features/project-management-with-chat'
  if (title.includes('Team collaboration')) return '/features/team-collaboration-software'
  if (title.includes('Operations')) return '/features/operations-work-management'
  if (title.includes('Task')) return '/features/task-management'
  if (title.includes('Team communication')) return '/features/team-communication'
  if (title.includes('AI work assistant')) return '/features/ai-work-assistant'
  if (title.includes('Workspace')) return '/features/workspaces'
  return '/features/work-management'
}

function RelatedLinks({ eyebrow = 'Explore Asystence', title = 'Go deeper into the workspace.', children, links }) {
  if (!links?.length) return null

  return (
    <section className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <SectionHeader eyebrow={eyebrow} title={title}>
          {children}
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a key={link.href || link.path} href={link.href || link.path} className="rounded-lg border border-[color:var(--border)] p-5 transition-colors hover:bg-[var(--surface-soft)]">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{link.label || link.navLabel}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{link.description || link.intro}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection({ items }) {
  if (!items?.length) return null

  return (
    <section className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <SectionHeader eyebrow="FAQ" title="Clear answers for teams evaluating Asystence.">
          Practical context for teams comparing AI work management, team communication, and workspace platforms.
        </SectionHeader>
        <div className="grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.question} className="rounded-lg border border-[color:var(--border)] p-5">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <SectionHeader eyebrow="Everything included" title="A unified work OS for execution, communication, and team intelligence.">
          Projects, chat, attendance, intelligence, reviews, knowledge, and automation all share the same workspace context.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([title, description]) => (
            <a key={title} href={featureHref(title)} className="rounded-lg border border-[color:var(--border)] p-5 transition-colors hover:bg-[var(--surface-soft)]">
              <div className="mb-4 h-9 w-9 rounded-lg border border-[color:var(--primary)]" />
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
            </a>
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

function resolvePageLink(path) {
  const marketingPage = getMarketingPage(path)
  const contentPage = getContentPage(path)
  const page = marketingPage || contentPage

  if (!page) {
    return {
      href: path,
      label: path.replace(/^\//, ''),
      description: 'Explore this Asystence resource.',
    }
  }

  return {
    href: page.path || path,
    label: page.navLabel || page.title,
    description: page.short || page.intro,
  }
}

function ChecklistSection({ title = 'Checklist', items }) {
  if (!items?.length) return null

  return (
    <section className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <SectionHeader eyebrow="Implementation" title={title}>
          Practical next steps teams can use while evaluating or adopting the Asystence operating model.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={item} className="rounded-lg border border-[color:var(--border)] p-5">
              <p className="text-xs font-semibold text-[color:var(--primary)]">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-4 text-sm leading-6 text-[color:var(--text-muted)]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LinkGroups({ groups }) {
  if (!groups?.length) return null

  return (
    <section className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <SectionHeader eyebrow="Information architecture" title="Explore the connected resource system.">
          These crawlable paths connect category education, product-led docs, templates, comparisons, and authority resources.
        </SectionHeader>
        <div className="grid gap-4 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="rounded-lg border border-[color:var(--border)] p-5">
              <h2 className="text-lg font-semibold text-[color:var(--text)]">{group.title}</h2>
              <div className="mt-5 space-y-3">
                {group.links.map((path) => {
                  const link = resolvePageLink(path)
                  return (
                    <a key={path} href={link.href} className="block rounded-lg border border-[color:var(--border)] p-4 transition-colors hover:bg-[var(--surface-soft)]">
                      <h3 className="text-sm font-semibold text-[color:var(--text)]">{link.label}</h3>
                      <p className="mt-2 text-xs leading-5 text-[color:var(--text-muted)]">{link.description}</p>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonTable({ rows }) {
  if (!rows?.length) return null

  return (
    <section className="border-t border-[color:var(--border)] py-24">
      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <SectionHeader eyebrow="Balanced comparison" title="Compare fit by buyer need.">
          These comparisons are intended to clarify product fit, not to make unsupported claims of superiority.
        </SectionHeader>
        <div className="overflow-hidden rounded-lg border border-[color:var(--border)]">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-[var(--surface-soft)] text-[color:var(--text)]">
              <tr>
                <th className="border-b border-[color:var(--border)] p-4 font-semibold">Criteria</th>
                <th className="border-b border-[color:var(--border)] p-4 font-semibold">Asystence</th>
                <th className="border-b border-[color:var(--border)] p-4 font-semibold">Alternative fit</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([criteria, asystence, alternative]) => (
                <tr key={criteria} className="border-t border-[color:var(--border)]">
                  <th className="p-4 align-top font-semibold text-[color:var(--text)]">{criteria}</th>
                  <td className="p-4 align-top leading-6 text-[color:var(--text-muted)]">{asystence}</td>
                  <td className="p-4 align-top leading-6 text-[color:var(--text-muted)]">{alternative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function ContentPage({ page }) {
  const relatedLinks = getContentRelatedPaths(page).map(resolvePageLink)

  return (
    <main className="pt-20">
      <section className="border-t border-[color:var(--border)] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1760px] gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.72fr)] lg:items-center lg:px-14 xl:px-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">{page.eyebrow}</p>
            <h1 className="max-w-4xl text-[42px] font-semibold leading-[1.04] tracking-tight text-[color:var(--text)] sm:text-[56px] lg:text-[64px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--text-muted)]">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={SIGNUP_URL} className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-base font-semibold text-[color:var(--primary-contrast)] transition-colors hover:bg-[var(--primary-hover)]">
                Start free
              </a>
              <a href="/resources" className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-[color:var(--border)] px-6 text-base font-semibold text-[color:var(--text)] transition-colors hover:bg-[var(--surface-soft)]">
                Browse resources
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-[color:var(--border)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">What this covers</p>
            <div className="mt-5 space-y-3">
              {page.highlights.map(([title, description]) => (
                <div key={title} className="rounded-lg border border-[color:var(--border)] p-4">
                  <h2 className="text-base font-semibold text-[color:var(--text)]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <SectionHeader eyebrow="Resource depth" title={`${page.navLabel} in context.`}>
            A product-led resource for teams evaluating work management, team communication, workspace collaboration, AI assistance, and internal operations.
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-3">
            {page.sections.map(([title, description]) => (
              <div key={title} className="rounded-lg border border-[color:var(--border)] p-5">
                <div className="mb-4 h-9 w-9 rounded-lg border border-[color:var(--primary)]" />
                <h2 className="text-lg font-semibold text-[color:var(--text)]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable rows={page.comparisonRows} />
      <ChecklistSection title={page.checklistTitle} items={page.checklist} />
      <LinkGroups groups={page.linkGroups} />

      <RelatedLinks
        eyebrow="Related resources"
        title="Continue through the Asystence knowledge system."
        links={relatedLinks}
      >
        Every resource links back into the product, category, and authority pages that support the same buyer intent.
      </RelatedLinks>
      <FAQSection items={page.faq} />
      <Signup />
      <Contact />
    </main>
  )
}

function MarketingPage({ page }) {
  const relatedPages = getRelatedPages(page)

  return (
    <main className="pt-20">
      <section className="border-t border-[color:var(--border)] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1760px] gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.72fr)] lg:items-center lg:px-14 xl:px-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">{page.eyebrow}</p>
            <h1 className="max-w-4xl text-[42px] font-semibold leading-[1.04] tracking-tight text-[color:var(--text)] sm:text-[56px] lg:text-[64px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--text-muted)]">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={SIGNUP_URL} className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-base font-semibold text-[color:var(--primary-contrast)] transition-colors hover:bg-[var(--primary-hover)]">
                Start free
              </a>
              <a href="/#features" className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-[color:var(--border)] px-6 text-base font-semibold text-[color:var(--text)] transition-colors hover:bg-[var(--surface-soft)]">
                View platform
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-[color:var(--border)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">Platform fit</p>
            <div className="mt-5 space-y-3">
              {page.highlights.map(([title, description]) => (
                <div key={title} className="rounded-lg border border-[color:var(--border)] p-4">
                  <h2 className="text-base font-semibold text-[color:var(--text)]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <SectionHeader eyebrow="Product depth" title={`${page.navLabel} in Asystence.`}>
            Asystence keeps the work, the conversation, and the operating context connected so teams can move from planning to follow-through with less context loss.
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-3">
            {page.sections.map(([title, description]) => (
              <div key={title} className="rounded-lg border border-[color:var(--border)] p-5">
                <div className="mb-4 h-9 w-9 rounded-lg border border-[color:var(--primary)]" />
                <h2 className="text-lg font-semibold text-[color:var(--text)]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {page.decisionPoints?.length ? (
        <section className="border-t border-[color:var(--border)] py-24">
          <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
            <SectionHeader eyebrow="Buyer intent" title={page.decisionTitle || 'What teams evaluate before choosing a platform.'}>
              Practical criteria for teams comparing work management, collaboration, communication, and operations software.
            </SectionHeader>
            <div className="grid gap-4 md:grid-cols-3">
              {page.decisionPoints.map(([title, description]) => (
                <div key={title} className="rounded-lg border border-[color:var(--border)] p-5">
                  <h2 className="text-lg font-semibold text-[color:var(--text)]">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-[color:var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <SectionHeader eyebrow="Best fit" title="Where it fits best.">
            A strong fit for teams that want the work, the conversation, and the operating rhythm to stay in one workspace.
          </SectionHeader>
          <div className="grid gap-4 lg:grid-cols-3">
            {page.useCases.map((useCase) => (
              <div key={useCase} className="rounded-lg border border-[color:var(--border)] p-5">
                <p className="text-sm leading-6 text-[color:var(--text-muted)]">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        eyebrow="Related capabilities"
        title="Explore connected Asystence capabilities."
        links={relatedPages}
      >
        Work management, communication, AI, and workspace operations are strongest when they stay connected.
      </RelatedLinks>
      <FAQSection items={page.faq} />
      <Signup />
      <Contact />
    </main>
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
          {MARKETING_PAGE_LIST.map((page) => (
            <a key={page.path} href={page.path} className="hover:text-[color:var(--text)]">{page.navLabel}</a>
          ))}
          {FOOTER_CONTENT_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[color:var(--text)]">{link.label}</a>
          ))}
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
  const marketingPage = getMarketingPage(normalizedPath)
  const contentPage = getContentPage(normalizedPath)

  useEffect(() => {
    if (marketingPage) {
      applySeo({
        title: marketingPage.seo.title,
        description: marketingPage.seo.description,
        path: marketingPage.path,
        jsonLd: buildMarketingPageJsonLd(marketingPage),
      })
      return
    }

    if (contentPage) {
      applySeo({
        title: contentPage.seo.title,
        description: contentPage.seo.description,
        path: contentPage.path,
        type: contentPage.schemaType === 'Article' || contentPage.schemaType === 'TechArticle' ? 'article' : 'website',
        jsonLd: buildContentPageJsonLd(contentPage),
      })
      return
    }

    if (policyPage) {
      applySeo({
        title: `${policyPage.title} | Asystence`,
        description: policyPage.intro,
        path: normalizedPath,
        jsonLd: buildPolicyJsonLd(normalizedPath, policyPage),
      })
      return
    }

    applySeo({
      title: HOME_SEO.title,
      description: HOME_SEO.description,
      path: HOME_SEO.path,
      jsonLd: buildHomeJsonLd(),
    })
  }, [contentPage, marketingPage, normalizedPath, policyPage])

  return (
    <>
      <Navbar />
      {marketingPage ? (
        <MarketingPage page={marketingPage} />
      ) : contentPage ? (
        <ContentPage page={contentPage} />
      ) : policyPage ? (
        <LegalPage page={policyPage} />
      ) : (
        <>
          <Hero />
          <Features />
          <RelatedLinks
            eyebrow="Explore the platform"
            title="Explore Asystence by the way your team works."
            links={HOME_RELATED_LINKS}
          >
            Focused paths for teams evaluating AI work management, task management, team communication, and workspace collaboration software.
          </RelatedLinks>
          <RelatedLinks
            eyebrow="Knowledge center"
            title="Build authority with guides, docs, comparisons, and company resources."
            links={CONTENT_HOME_LINKS}
          >
            A reusable resource system for teams researching work operating systems, collaboration workflows, internal operations, and product evaluation.
          </RelatedLinks>
          <Workflow />
          <Pricing />
          <FAQSection items={HOME_FAQS} />
          <Downloads />
          <Signup />
          <Contact />
        </>
      )}
      <Footer />
    </>
  )
}
