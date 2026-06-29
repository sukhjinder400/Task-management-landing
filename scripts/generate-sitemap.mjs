import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { CONTENT_PATHS } from '../src/contentPages.js'
import { MARKETING_PAGE_LIST } from '../src/marketingPages.js'
import { RELEASES } from '../src/releaseData.js'
import { SITE_URL } from '../src/seo.js'

const directory = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.resolve(directory, '../public/sitemap.xml')
const policyPaths = ['/terms', '/privacy', '/refund-policy', '/cancellation-policy']
const releaseCenterPaths = ['/release-notes', '/changelog', '/roadmap']
const latestReleaseDate = RELEASES
  .map((release) => release.date)
  .sort()
  .at(-1)

const entries = new Map()

function addEntry(pagePath, lastmod) {
  const normalizedPath = pagePath === '/' ? '/' : `/${pagePath.replace(/^\/+|\/+$/g, '')}`
  const current = entries.get(normalizedPath)

  if (!current?.lastmod || lastmod) {
    entries.set(normalizedPath, { path: normalizedPath, lastmod })
  }
}

addEntry('/')
MARKETING_PAGE_LIST.forEach((page) => addEntry(page.path))
CONTENT_PATHS.forEach((pagePath) => addEntry(pagePath))
policyPaths.forEach((pagePath) => addEntry(pagePath))
releaseCenterPaths.forEach((pagePath) => addEntry(pagePath, latestReleaseDate))
RELEASES.forEach((release) => {
  addEntry(`/release-notes/${release.slug}`, release.date)
})

const xmlEntries = [...entries.values()]
  .map((entry) => {
    const loc = entry.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${entry.path}`
    const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''
    return `  <url><loc>${loc}</loc>${lastmod}</url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`

await writeFile(outputPath, sitemap, 'utf8')
console.log(`Generated sitemap with ${entries.size} URLs.`)
