import { absoluteUrl } from './seo.js'

export const RELEASES = [
  {
    slug: 'asystence-public-launch',
    version: 'Public launch',
    date: '2026-06-29',
    title: 'Asystence public launch',
    summary:
      'The first public Asystence release note introduces the connected workspace platform across projects, tasks, communication, AI assistance, people signals, and operational intelligence.',
    areas: ['Projects', 'Communication', 'Intelligence', 'Operations', 'Platform'],
    features: [
      {
        title: 'Connected project and task execution',
        description:
          'Projects, boards, ownership, subtasks, workflows, blockers, and day-to-day execution live in one workspace context.',
      },
      {
        title: 'Team communication beside the work',
        description:
          'Channels, direct messages, mentions, updates, and huddles help teams keep decisions close to the projects and tasks they affect.',
      },
      {
        title: 'AI-assisted workspace intelligence',
        description:
          'Summaries, coaching prompts, health signals, and operational context help teams identify work that needs attention.',
      },
      {
        title: 'Attendance and availability intelligence',
        description:
          'Attendance, availability, reporting, reviews, and OKRs provide shared operational visibility for internal teams.',
      },
    ],
    improvements: [
      {
        title: 'Multi-platform access',
        description:
          'The public platform is available through the web app, Windows downloads, and the direct Android release.',
      },
      {
        title: 'Public product knowledge system',
        description:
          'Guides, documentation, comparisons, templates, product facts, and release information now share a connected public information architecture.',
      },
    ],
    fixes: [],
    relatedReleaseSlugs: [],
    relatedResources: [
      { label: 'Platform features', href: '/features' },
      { label: 'Product facts', href: '/product-facts' },
      { label: 'Getting started guide', href: '/guides/getting-started-with-work-os' },
      { label: 'Product screenshots', href: '/product-screenshots' },
    ],
  },
]

export const ROADMAP_COLUMNS = [
  {
    id: 'planned',
    label: 'Planned',
    description: 'Publicly confirmed work that has not started.',
    items: [],
  },
  {
    id: 'in-progress',
    label: 'In progress',
    description: 'Publicly confirmed work currently being developed.',
    items: [],
  },
  {
    id: 'completed',
    label: 'Completed',
    description: 'Public platform work available today.',
    items: [
      {
        title: 'Connected public knowledge center',
        description:
          'Product guides, documentation, templates, comparisons, company resources, and platform pages are connected through reusable content templates.',
        releaseSlug: 'asystence-public-launch',
      },
      {
        title: 'Release center foundation',
        description:
          'Release notes, changelog history, release detail pages, search, structured data, and roadmap states are managed from shared release data.',
        releaseSlug: 'asystence-public-launch',
      },
      {
        title: 'Demo-safe product presentation',
        description:
          'Public product previews use fictional labels and demonstration data while reflecting the product interface language.',
        releaseSlug: 'asystence-public-launch',
      },
    ],
  },
]

export function getReleaseBySlug(slug) {
  return RELEASES.find((release) => release.slug === slug)
}

export function getReleaseRoute(path) {
  if (path === '/release-notes') return { type: 'release-notes' }
  if (path === '/changelog') return { type: 'changelog' }
  if (path === '/roadmap') return { type: 'roadmap' }

  const match = path.match(/^\/release-notes\/([^/]+)$/)
  if (!match) return null

  const release = getReleaseBySlug(match[1])
  return release ? { type: 'release-detail', release } : null
}

export function getReleaseSeo(route) {
  if (!route) return null

  if (route.type === 'release-detail') {
    return {
      title: `${route.release.title} | Asystence Release Notes`,
      description: route.release.summary,
      path: `/release-notes/${route.release.slug}`,
      type: 'article',
    }
  }

  if (route.type === 'changelog') {
    return {
      title: 'Asystence Changelog | Product Updates',
      description:
        'Search the chronological Asystence changelog for public updates across projects, tasks, communication, intelligence, operations, and platform access.',
      path: '/changelog',
      type: 'website',
    }
  }

  if (route.type === 'roadmap') {
    return {
      title: 'Asystence Public Roadmap',
      description:
        'Review confirmed planned, in-progress, and completed public platform work for the Asystence intelligent workspace platform.',
      path: '/roadmap',
      type: 'website',
    }
  }

  return {
    title: 'Asystence Release Notes | Product Releases',
    description:
      'Read substantial Asystence release notes covering new capabilities, improvements, fixes, affected product areas, and related product resources.',
    path: '/release-notes',
    type: 'website',
  }
}

function breadcrumbList(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

function releaseArticle(release) {
  const path = `/release-notes/${release.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: release.title,
    description: release.summary,
    datePublished: release.date,
    dateModified: release.date,
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    author: {
      '@type': 'Organization',
      name: 'Asystence',
      url: absoluteUrl('/'),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Asystence',
      url: absoluteUrl('/'),
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'Asystence',
      applicationCategory: 'BusinessApplication',
      softwareVersion: release.version,
      operatingSystem: 'Web, Windows, Android',
    },
  }
}

export function buildReleaseJsonLd(route) {
  if (!route) return []

  if (route.type === 'release-detail') {
    return [
      releaseArticle(route.release),
      breadcrumbList([
        { name: 'Asystence', path: '/' },
        { name: 'Release notes', path: '/release-notes' },
        { name: route.release.title, path: `/release-notes/${route.release.slug}` },
      ]),
    ]
  }

  if (route.type === 'roadmap') {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Asystence public roadmap',
        description:
          'Confirmed planned, in-progress, and completed public platform work for Asystence.',
        url: absoluteUrl('/roadmap'),
        isPartOf: {
          '@type': 'WebSite',
          name: 'Asystence',
          url: absoluteUrl('/'),
        },
      },
      breadcrumbList([
        { name: 'Asystence', path: '/' },
        { name: 'Roadmap', path: '/roadmap' },
      ]),
    ]
  }

  const path = route.type === 'changelog' ? '/changelog' : '/release-notes'
  const name = route.type === 'changelog' ? 'Asystence changelog' : 'Asystence release notes'

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name,
      url: absoluteUrl(path),
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: RELEASES.map((release, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: absoluteUrl(`/release-notes/${release.slug}`),
          name: release.title,
        })),
      },
    },
    breadcrumbList([
      { name: 'Asystence', path: '/' },
      { name: route.type === 'changelog' ? 'Changelog' : 'Release notes', path },
    ]),
  ]
}
