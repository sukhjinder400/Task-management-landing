export const SITE_URL = 'https://asystence.com'
export const DEFAULT_IMAGE = `${SITE_URL}/asystence-logo.png`

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return normalizedPath === '/' ? SITE_URL : `${SITE_URL}${normalizedPath}`
}

function ensureMeta(selector, attributes) {
  if (typeof document === 'undefined') return

  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value === undefined || value === null) return
    element.setAttribute(key, value)
  })
}

function ensureCanonical(url) {
  if (typeof document === 'undefined') return

  let element = document.head.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', url)
}

function setJsonLd(entries = []) {
  if (typeof document === 'undefined') return

  document.head.querySelectorAll('script[data-managed="seo-jsonld"]').forEach((script) => {
    script.remove()
  })

  entries.filter(Boolean).forEach((entry) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.managed = 'seo-jsonld'
    script.textContent = JSON.stringify(entry)
    document.head.appendChild(script)
  })
}

export function applySeo({
  title,
  description,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  jsonLd = [],
}) {
  if (typeof document === 'undefined') return

  const url = absoluteUrl(path)
  const pageTitle = title || 'Asystence | Intelligent Workspace Platform for Teams'
  const pageDescription = description || 'Asystence is an intelligent workspace platform for projects, tasks, team communication, AI assistance, workspace intelligence, attendance, availability, and operations.'

  document.title = pageTitle

  ensureMeta('meta[name="description"]', { name: 'description', content: pageDescription })
  ensureMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' })
  ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Asystence' })
  ensureMeta('meta[property="og:type"]', { property: 'og:type', content: type })
  ensureMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle })
  ensureMeta('meta[property="og:description"]', { property: 'og:description', content: pageDescription })
  ensureMeta('meta[property="og:url"]', { property: 'og:url', content: url })
  ensureMeta('meta[property="og:image"]', { property: 'og:image', content: image })
  ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
  ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle })
  ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: pageDescription })
  ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
  ensureCanonical(url)
  setJsonLd(jsonLd)
}
