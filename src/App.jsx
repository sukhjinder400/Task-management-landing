import React, { useEffect, useState } from 'react'
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckSquare2,
  FolderKanban,
  Gauge,
  LayoutDashboard,
  Layers3,
  Menu,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
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
import { BRAND, DEMO_WORKSPACE } from './designSystem.js'
import { ReleaseCenterPage } from './ReleaseCenter.jsx'
import { buildReleaseJsonLd, getReleaseRoute, getReleaseSeo } from './releaseData.js'
import { applySeo } from './seo.js'

const APP_URL = 'https://app.asystence.com'
const SIGNUP_URL = `${APP_URL}/signup`
const API_BASE_URL = String(import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '')
const PUBLIC_PLANS_URL = API_BASE_URL ? `${API_BASE_URL}/public/billing/plans` : ''
const WIN_INSTALLER_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.Setup.0.0.0.exe'
const WIN_PORTABLE_URL = 'https://github.com/sukhjinder-create/Task-management/releases/download/v1.0.0/Asystence.0.0.0.exe'
const ANDROID_APK_URL = 'https://pub-5e8d0742f1224c3dbf01efc7851e96f5.r2.dev/app-release.apk'

const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Resources', href: '/resources' },
  { label: 'Guides', href: '/guides' },
  { label: 'Compare', href: '/compare' },
  { label: 'Releases', href: '/release-notes' },
  { label: 'Company', href: '/company' },
  { label: 'Pricing', href: '/#pricing' },
]

const FEATURES = [
  [BrainCircuit, 'AI work management', 'Tasks, projects, team communication, workspace signals, and AI-assisted context work together in one operating surface.'],
  [CheckSquare2, 'Task management', 'Plan assignments, subtasks, owners, workflows, blockers, and project execution without separating work from context.'],
  [FolderKanban, 'Project management with chat', 'Keep project boards, task ownership, channels, direct messages, mentions, and huddles in one workspace.'],
  [MessageSquareText, 'Team communication', 'Channels, direct messages, mentions, huddles, and updates stay close to the work they belong to.'],
  [Users, 'Team collaboration software', 'Coordinate tasks, conversations, knowledge, handoffs, and shared workspace context across internal teams.'],
  [Activity, 'Operations work management', 'Connect recurring work, admin visibility, reporting, attendance, reviews, OKRs, and AI-assisted signals.'],
  [Layers3, 'Workspace management', 'Create team spaces for projects, people, communication, knowledge, reporting, and operational visibility.'],
  [Sparkles, 'AI work assistant', 'Summaries, workspace health, coaching nudges, risk signals, and operational context help teams follow through.'],
]

const PRODUCT_SIGNALS = [
  ['Platform', 'One connected operating surface'],
  ['Projects', 'Boards, workflows, ownership, and blockers'],
  ['Teams', 'Channels, direct messages, mentions, and huddles'],
  ['Intelligence', 'AI, attendance, availability, reviews, and OKRs'],
]

const WORKFLOW = [
  ['Create your workspace', 'Name the workspace, create the first admin account, then invite managers and contributors into a shared operating layer.'],
  ['Run projects and conversations', 'Plan tasks, track owners, chat in context, and keep project decisions attached to execution.'],
  ['Let intelligence surface risk', 'AI-assisted summaries, coaching prompts, and workspace health signals help teams notice what needs attention.'],
  ['Measure what matters', 'Use attendance, reports, reviews, OKRs, and health views to keep internal teams aligned.'],
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
      <Mark size={compact ? 38 : 56} />
      <div>
        <div className={`${compact ? 'text-[18px]' : 'text-[32px]'} font-semibold leading-none text-[color:var(--text)]`}>{BRAND.name}</div>
        <div className={`${compact ? 'mt-1 text-[7px]' : 'mt-1.5 text-[9px]'} uppercase font-semibold text-[color:var(--text-soft)]`}>{BRAND.descriptor}</div>
      </div>
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--app-bg)]/95 backdrop-blur">
      <div className="site-container flex h-[var(--site-nav-h)] items-center justify-between">
        <Brand compact />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-semibold text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={APP_URL} className="site-button site-button-ghost">Sign in</a>
          <a href={SIGNUP_URL} className="site-button site-button-primary">Get started</a>
        </div>
        <button
          className="site-button site-button-ghost h-10 w-10 px-0 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[color:var(--border)] bg-[var(--surface-soft)] lg:hidden">
          <div className="site-container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="site-button site-button-ghost justify-start">{link.label}</a>
            ))}
            <a href={APP_URL} className="site-button site-button-ghost justify-start">Sign in</a>
            <a href={SIGNUP_URL} onClick={() => setOpen(false)} className="site-button site-button-primary mt-2">Get started</a>
          </div>
        </div>
      )}
    </header>
  )
}

function ProductPreview({ compact = false }) {
  const sidebarItems = [
    [LayoutDashboard, 'Overview'],
    [FolderKanban, 'Projects'],
    [CheckSquare2, 'Tasks'],
    [MessageSquareText, 'Communication'],
    [BrainCircuit, 'Intelligence'],
  ]

  return (
    <div className="product-window site-reveal" aria-label="Asystence product preview using fictional demonstration data">
      <div className="product-window-topbar">
        <div className="flex min-w-0 items-center gap-2">
          <Mark size={26} />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-[color:var(--text)]">{DEMO_WORKSPACE.label}</p>
            <p className="truncate text-[10px] text-[color:var(--text-soft)]">{DEMO_WORKSPACE.notice}</p>
          </div>
        </div>
        <span className="site-badge shrink-0">Demo data</span>
      </div>
      <div className="product-window-body">
        <aside className="product-sidebar" aria-label="Product preview navigation">
          {sidebarItems.map(([Icon, label], index) => (
            <span
              key={label}
              className={`product-sidebar-item ${index === 0 ? 'product-sidebar-item-active' : ''}`}
              title={label}
              role="img"
              aria-label={label}
            >
              <Icon aria-hidden="true" size={17} strokeWidth={1.75} />
            </span>
          ))}
        </aside>
        <div className="product-main">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-[color:var(--text)]">Workspace overview</p>
              <p className="mt-1 text-[10px] text-[color:var(--text-soft)]">Projects, people, and operational signals</p>
            </div>
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold text-[color:var(--primary)]">
              <Activity aria-hidden="true" size={13} />
              Operational pulse
            </span>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {DEMO_WORKSPACE.metrics.map((metric) => (
              <div key={metric.label} className="product-metric">
                <p className="text-[10px] text-[color:var(--text-muted)]">{metric.label}</p>
                <p className="mt-2 text-xl font-semibold text-[color:var(--text)]">{metric.value}</p>
                {!compact && <p className="mt-1 text-[9px] leading-4 text-[color:var(--text-soft)]">{metric.detail}</p>}
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1.35fr)_minmax(190px,0.65fr)]">
            <div className="site-card p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold text-[color:var(--text)]">Project execution</p>
                <a href="/features/task-management" className="text-[10px] font-semibold text-[color:var(--primary)]">View tasks</a>
              </div>
              <div className="mt-4 space-y-4">
                {DEMO_WORKSPACE.projects.map((project) => (
                  <div key={project.name}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-[10px] font-semibold text-[color:var(--text)]">{project.name}</p>
                        <p className="mt-1 text-[9px] text-[color:var(--text-soft)]">{project.status}</p>
                      </div>
                      <span className="text-[10px] font-semibold text-[color:var(--text-muted)]">{project.progress}%</span>
                    </div>
                    <div className="product-progress mt-2">
                      <span style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="site-card p-4">
              <div className="flex items-center gap-2 text-[color:var(--primary)]">
                <BrainCircuit aria-hidden="true" size={16} />
                <p className="text-[10px] font-semibold">Workspace intelligence</p>
              </div>
              <p className="mt-4 text-[10px] leading-5 text-[color:var(--text-muted)]">
                Demo projects are moving. One review is waiting for an owner response, and today&apos;s availability is visible to the team.
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-[color:var(--border)] pt-3 text-[9px] text-[color:var(--text-soft)]">
                <ShieldCheck aria-hidden="true" size={13} />
                Fictional, privacy-safe preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="pt-[var(--site-nav-h)]">
      <div className="site-container grid min-h-[calc(100vh-var(--site-nav-h))] items-center gap-12 py-10 sm:py-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(540px,1.08fr)] lg:gap-16 2xl:gap-20">
        <div className="site-reveal">
          <div className="mb-9 hidden sm:block">
            <Brand />
          </div>
          <p className="site-eyebrow mb-4">{BRAND.positioning}</p>
          <h1 className="text-[34px] font-semibold leading-[1.08] text-[color:var(--text)] sm:text-[54px] sm:leading-[1.06] lg:text-[64px]">
            Intelligent workspace platform for projects, communication, and operations.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[color:var(--text-muted)] sm:mt-6 sm:text-lg sm:leading-8">
            Asystence connects projects, tasks, team communication, AI assistance, workspace intelligence, attendance, availability, and operational intelligence in one focused platform.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={SIGNUP_URL} className="site-button site-button-primary min-h-[44px] px-5">
              Start free
              <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a href="/features/work-management" className="site-button site-button-secondary min-h-[44px] px-5">
              Explore the platform
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PRODUCT_SIGNALS.map(([value, label]) => (
              <div key={label} className="site-card p-3">
                <p className="text-sm font-semibold text-[color:var(--text)]">{value}</p>
                <p className="mt-2 text-[10px] leading-4 text-[color:var(--text-muted)]">{label}</p>
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
      <p className="site-eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-[34px] font-semibold leading-tight text-[color:var(--text)] sm:text-[44px]">{title}</h2>
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
      <div className="site-container">
        <SectionHeader eyebrow={eyebrow} title={title}>
          {children}
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a key={link.href || link.path} href={link.href || link.path} className="site-card site-card-interactive">
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
      <div className="site-container">
        <SectionHeader eyebrow="FAQ" title="Clear answers for teams evaluating Asystence.">
          Practical context for teams comparing AI work management, team communication, and workspace platforms.
        </SectionHeader>
        <div className="grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.question} className="site-card">
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
      <div className="site-container">
        <SectionHeader eyebrow="Everything included" title="One intelligent workspace for execution, communication, and operational clarity.">
          Projects, chat, attendance, intelligence, reviews, knowledge, and automation all share the same workspace context.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([Icon, title, description]) => (
            <a key={title} href={featureHref(title)} className="site-card site-card-interactive">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--primary)] bg-[var(--primary-soft)] text-[color:var(--primary)]">
                <Icon aria-hidden="true" size={17} strokeWidth={1.75} />
              </div>
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
      <div className="site-container">
        <SectionHeader eyebrow="Workflow" title="From workspace setup to AI-guided execution.">
          Teams can start simple and grow into a complete operational system without switching tools.
        </SectionHeader>
        <div className="grid gap-4 lg:grid-cols-4">
          {WORKFLOW.map(([title, description], index) => (
            <div key={title} className="site-card">
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

function readableFeature(feature) {
  const value = String(feature || '').trim()
  if (!value) return ''
  if (!value.includes('_')) return value
  return value
    .split('_')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function planFeatures(plan) {
  const features = (Array.isArray(plan.features) ? plan.features : [])
    .map(readableFeature)
    .filter(Boolean)
  const has = (term) => features.some((feature) => feature.toLowerCase().includes(term))

  if (plan.member_limit && !has('member')) features.unshift(`Up to ${plan.member_limit} members`)
  if (plan.max_projects && !has('project')) features.push(`Up to ${plan.max_projects} projects`)
  if (plan.max_integrations && !has('integration')) features.push(`Up to ${plan.max_integrations} integrations`)
  if (plan.storage_limit_gb && !has('storage')) features.push(`${plan.storage_limit_gb} GB storage`)
  return features
}

function planPrice(plan, interval) {
  if (plan.is_custom) return 'Custom'
  const monthly = Number(plan.price_monthly) || 0
  const yearly = Number(plan.price_yearly) || 0
  if (monthly === 0 && yearly === 0) return 'Free'
  const amount = interval === 'yearly' && yearly > 0
    ? yearly
    : monthly > 0
      ? monthly
      : yearly
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: plan.currency || 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

function planAction(plan, interval) {
  const isFree = (Number(plan.price_monthly) || 0) === 0 && (Number(plan.price_yearly) || 0) === 0
  if (plan.is_custom || (!isFree && !plan.trial_days)) {
    return { label: 'Contact Sales', href: '/#contact' }
  }

  const effectiveInterval = isFree
    ? interval
    : interval === 'yearly' && Number(plan.price_yearly) > 0
      ? 'yearly'
      : Number(plan.price_monthly) > 0
        ? 'monthly'
        : 'yearly'
  const params = new URLSearchParams({ plan: plan.slug, interval: effectiveInterval })
  return {
    label: isFree ? 'Start Free' : `Start ${plan.trial_days}-day trial`,
    href: `${SIGNUP_URL}?${params.toString()}`,
  }
}

function Pricing() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [interval, setInterval] = useState('monthly')

  const loadPlans = async () => {
    setLoading(true)
    setError('')
    try {
      if (!PUBLIC_PLANS_URL) throw new Error('VITE_API_BASE_URL is not configured')
      const response = await fetch(PUBLIC_PLANS_URL, { headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error(`Plan service returned ${response.status}`)
      const data = await response.json()
      setPlans(Array.isArray(data) ? data : [])
    } catch (loadError) {
      console.error('Could not load public plans:', loadError)
      setError('Plans are temporarily unavailable. Please try again shortly.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPlans()
  }, [])

  return (
    <section id="pricing" className="border-t border-[color:var(--border)] py-24">
      <div className="site-container">
        <SectionHeader eyebrow="Pricing" title="Simple plans for teams at every stage.">
          Start free, then scale into AI intelligence, reviews, OKRs, and automation when your workspace needs it.
        </SectionHeader>
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[var(--surface)] p-1">
            {['monthly', 'yearly'].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setInterval(value)}
                className={`rounded-full px-4 py-2 text-xs font-semibold capitalize transition-colors ${interval === value ? 'bg-[color:var(--primary)] text-black' : 'text-[color:var(--text-muted)]'}`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className="text-center text-sm text-[color:var(--text-muted)]">Loading plans...</p>}
        {!loading && error && (
          <div className="site-card mx-auto max-w-xl p-6 text-center">
            <p className="text-sm text-[color:var(--text-muted)]">{error}</p>
            <button type="button" onClick={loadPlans} className="site-button site-button-secondary mt-4">Try again</button>
          </div>
        )}
        {!loading && !error && plans.length === 0 && (
          <p className="text-center text-sm text-[color:var(--text-muted)]">No plans are available right now.</p>
        )}
        {!loading && !error && plans.length > 0 && (
          <div className="grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => {
              const action = planAction(plan, interval)
              const isFree = (Number(plan.price_monthly) || 0) === 0 && (Number(plan.price_yearly) || 0) === 0
              const usesYearly = interval === 'yearly' && Number(plan.price_yearly) > 0
              return (
                <div key={plan.id || plan.slug} className={`site-card p-6 ${plan.is_popular ? 'border-[color:var(--primary)]' : ''}`}>
                  {plan.is_popular && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">Most popular</p>}
                  <h3 className="text-xl font-semibold text-[color:var(--text)]">{plan.name}</h3>
                  {plan.tagline && <p className="mt-2 text-sm text-[color:var(--text-muted)]">{plan.tagline}</p>}
                  <p className="mt-5 text-4xl font-semibold text-[color:var(--text)]">{planPrice(plan, interval)}</p>
                  <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                    {plan.is_custom ? 'Tailored to your organization' : isFree ? 'No payment required' : `per user / ${usesYearly ? 'year' : 'month'}`}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {planFeatures(plan).map((feature) => (
                      <li key={feature} className="text-sm text-[color:var(--text-muted)]">- {feature}</li>
                    ))}
                  </ul>
                  <a href={action.href} className={`site-button mt-8 w-full ${plan.is_popular ? 'site-button-primary' : 'site-button-secondary'}`}>
                    {action.label}
                  </a>
                </div>
              )
            })}
          </div>
        )}
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
      <div className="site-container">
        <SectionHeader eyebrow="Downloads" title="Use Asystence on web, desktop, and mobile.">
          Your workspace stays available wherever your team works.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-3">
          {downloads.map(([title, description, href]) => (
            <div key={title} className="site-card">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{title}</h3>
              <p className="mt-3 text-sm text-[color:var(--text-muted)]">{description}</p>
              <a href={href} className="site-button site-button-secondary mt-6 w-full">Download</a>
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
      <div className="site-container grid gap-8 lg:grid-cols-[1fr_560px] lg:items-center">
        <SectionHeader eyebrow="Get started" title="Create your workspace in seconds.">
          Name your workspace, create the first admin account, then choose email/password or Google on the app signup screen.
        </SectionHeader>
        <div className="site-card p-6">
          <a href={SIGNUP_URL} className="site-button site-button-primary min-h-[44px] w-full">Create free trial</a>
          <a href={`${APP_URL}/login`} className="site-button site-button-secondary mt-3 min-h-[44px] w-full">Sign in with email</a>
          <p className="mt-5 text-xs leading-5 text-[color:var(--text-soft)]">Starts on the Basic plan. Upgrade when your team needs AI intelligence, reviews, and automation.</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="border-t border-[color:var(--border)] py-24">
      <div className="site-container">
        <div className="site-card p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">Contact</p>
          <h2 className="mt-4 text-[34px] font-semibold text-[color:var(--text)]">Need a custom plan?</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[color:var(--text-muted)]">For enterprise pricing, partnerships, or deployment questions, reach out and we will respond within 24 hours.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:hello@asystence.com" className="site-button site-button-primary min-h-[44px] px-5">hello@asystence.com</a>
            <a href={SIGNUP_URL} className="site-button site-button-secondary min-h-[44px] px-5">Start free</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function resolvePageLink(path) {
  const releaseRoute = getReleaseRoute(path)

  if (releaseRoute) {
    const releaseSeo = getReleaseSeo(releaseRoute)
    return {
      href: releaseSeo.path,
      label: releaseRoute.type === 'release-detail'
        ? releaseRoute.release.title
        : releaseRoute.type === 'changelog'
          ? 'Changelog'
          : releaseRoute.type === 'roadmap'
            ? 'Roadmap'
            : 'Release notes',
      description: releaseSeo.description,
    }
  }

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

const SECTION_ICONS = [Layers3, Gauge, BrainCircuit]

function SectionIcon({ index = 0 }) {
  const Icon = SECTION_ICONS[index % SECTION_ICONS.length]

  return (
    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--primary)] bg-[var(--primary-soft)] text-[color:var(--primary)]">
      <Icon aria-hidden="true" size={17} strokeWidth={1.75} />
    </div>
  )
}

function ChecklistSection({ title = 'Checklist', items }) {
  if (!items?.length) return null

  return (
    <section className="border-t border-[color:var(--border)] py-24">
      <div className="site-container">
        <SectionHeader eyebrow="Implementation" title={title}>
          Practical next steps teams can use while evaluating or adopting the Asystence operating model.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={item} className="site-card">
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
      <div className="site-container">
        <SectionHeader eyebrow="Information architecture" title="Explore the connected resource system.">
          These crawlable paths connect category education, product-led docs, templates, comparisons, and authority resources.
        </SectionHeader>
        <div className="grid gap-4 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="site-card">
              <h2 className="text-lg font-semibold text-[color:var(--text)]">{group.title}</h2>
              <div className="mt-5 space-y-3">
                {group.links.map((path) => {
                  const link = resolvePageLink(path)
                  return (
                    <a key={path} href={link.href} className="site-card site-card-interactive p-4">
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
      <div className="site-container">
        <SectionHeader eyebrow="Balanced comparison" title="Compare fit by buyer need.">
          These comparisons are intended to clarify product fit, not to make unsupported claims of superiority.
        </SectionHeader>
        <div className="overflow-x-auto rounded-lg border border-[color:var(--border)]">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
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
    <main className="site-page">
      <section className="border-t border-[color:var(--border)] py-20 sm:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.72fr)] lg:items-center">
          <div>
            <p className="site-eyebrow mb-4">{page.eyebrow}</p>
            <h1 className="max-w-4xl text-[42px] font-semibold leading-[1.04] text-[color:var(--text)] sm:text-[56px] lg:text-[64px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--text-muted)]">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={SIGNUP_URL} className="site-button site-button-primary min-h-[44px] px-5">
                Start free
              </a>
              <a href="/resources" className="site-button site-button-secondary min-h-[44px] px-5">
                Browse resources
              </a>
            </div>
          </div>
          <div className="site-card">
            <p className="site-eyebrow">What this covers</p>
            <div className="mt-5 space-y-3">
              {page.highlights.map(([title, description]) => (
                <div key={title} className="rounded-lg border border-[color:var(--border)] bg-[var(--surface-soft)] p-4">
                  <h2 className="text-base font-semibold text-[color:var(--text)]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {page.path === '/product-screenshots' && (
        <section className="site-section">
          <div className="site-container">
            <SectionHeader eyebrow="Demo-safe product view" title="A public preview that reflects the product interface.">
              The labels, workspace, people counts, project names, and progress values below are fictional demonstration data.
            </SectionHeader>
            <ProductPreview />
          </div>
        </section>
      )}

      <section className="border-t border-[color:var(--border)] py-24">
        <div className="site-container">
          <SectionHeader eyebrow="Resource depth" title={`${page.navLabel} in context.`}>
            A product-led resource for teams evaluating work management, team communication, workspace collaboration, AI assistance, and internal operations.
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-3">
            {page.sections.map(([title, description], index) => (
              <div key={title} className="site-card">
                <SectionIcon index={index} />
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
    <main className="site-page">
      <section className="border-t border-[color:var(--border)] py-20 sm:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.72fr)] lg:items-center">
          <div>
            <p className="site-eyebrow mb-4">{page.eyebrow}</p>
            <h1 className="max-w-4xl text-[42px] font-semibold leading-[1.04] text-[color:var(--text)] sm:text-[56px] lg:text-[64px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--text-muted)]">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={SIGNUP_URL} className="site-button site-button-primary min-h-[44px] px-5">
                Start free
              </a>
              <a href="/#features" className="site-button site-button-secondary min-h-[44px] px-5">
                View platform
              </a>
            </div>
          </div>
          <div className="site-card">
            <p className="site-eyebrow">Platform fit</p>
            <div className="mt-5 space-y-3">
              {page.highlights.map(([title, description]) => (
                <div key={title} className="rounded-lg border border-[color:var(--border)] bg-[var(--surface-soft)] p-4">
                  <h2 className="text-base font-semibold text-[color:var(--text)]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] py-24">
        <div className="site-container">
          <SectionHeader eyebrow="Product depth" title={`${page.navLabel} in Asystence.`}>
            Asystence is an intelligent workspace platform that keeps projects, tasks, communication, people signals, and operating context connected.
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-3">
            {page.sections.map(([title, description], index) => (
              <div key={title} className="site-card">
                <SectionIcon index={index} />
                <h2 className="text-lg font-semibold text-[color:var(--text)]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {page.decisionPoints?.length ? (
        <section className="border-t border-[color:var(--border)] py-24">
          <div className="site-container">
            <SectionHeader eyebrow="Buyer intent" title={page.decisionTitle || 'What teams evaluate before choosing a platform.'}>
              Practical criteria for teams comparing work management, collaboration, communication, and operations software.
            </SectionHeader>
            <div className="grid gap-4 md:grid-cols-3">
              {page.decisionPoints.map(([title, description]) => (
                <div key={title} className="site-card">
                  <h2 className="text-lg font-semibold text-[color:var(--text)]">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-[color:var(--border)] py-24">
        <div className="site-container">
          <SectionHeader eyebrow="Best fit" title="Where it fits best.">
            A strong fit for teams that want the work, the conversation, and the operating rhythm to stay in one workspace.
          </SectionHeader>
          <div className="grid gap-4 lg:grid-cols-3">
            {page.useCases.map((useCase) => (
              <div key={useCase} className="site-card">
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
    <main className="site-page">
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
      <div className="site-container grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
        <Brand compact />
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-[color:var(--text-muted)] lg:justify-center">
          <a href="/#features" className="hover:text-[color:var(--text)]">Features</a>
          {MARKETING_PAGE_LIST.map((page) => (
            <a key={page.path} href={page.path} className="hover:text-[color:var(--text)]">{page.navLabel}</a>
          ))}
          {FOOTER_CONTENT_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[color:var(--text)]">{link.label}</a>
          ))}
          <a href="/#pricing" className="hover:text-[color:var(--text)]">Pricing</a>
          <a href="/#downloads" className="hover:text-[color:var(--text)]">Downloads</a>
          <a href="/release-notes" className="hover:text-[color:var(--text)]">Release notes</a>
          <a href="/changelog" className="hover:text-[color:var(--text)]">Changelog</a>
          <a href="/roadmap" className="hover:text-[color:var(--text)]">Roadmap</a>
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
  const releaseRoute = getReleaseRoute(normalizedPath)
  const marketingPage = getMarketingPage(normalizedPath)
  const contentPage = releaseRoute ? null : getContentPage(normalizedPath)

  useEffect(() => {
    if (releaseRoute) {
      const releaseSeo = getReleaseSeo(releaseRoute)
      applySeo({
        ...releaseSeo,
        jsonLd: buildReleaseJsonLd(releaseRoute),
      })
      return
    }

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
  }, [contentPage, marketingPage, normalizedPath, policyPage, releaseRoute])

  return (
    <>
      <Navbar />
      {releaseRoute ? (
        <ReleaseCenterPage route={releaseRoute} />
      ) : marketingPage ? (
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
            Focused paths through the Asystence intelligent workspace platform for projects, tasks, communication, AI assistance, and operations.
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
