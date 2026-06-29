import React, { useMemo, useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ListFilter,
  Search,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { RELEASES, ROADMAP_COLUMNS, getReleaseBySlug } from './releaseData.js'

function formatDate(date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function ReleaseHero({ eyebrow, title, description, children }) {
  return (
    <section className="site-page-hero">
      <div className="site-container">
        <p className="site-eyebrow">{eyebrow}</p>
        <h1 className="site-page-title">{title}</h1>
        <p className="site-page-intro">{description}</p>
        {children}
      </div>
    </section>
  )
}

function SearchField({ value, onChange, label = 'Search releases' }) {
  return (
    <label className="site-search">
      <span className="sr-only">{label}</span>
      <Search aria-hidden="true" size={17} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search releases, areas, and changes"
      />
    </label>
  )
}

function ReleaseMeta({ release }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[color:var(--text-muted)]">
      <span className="inline-flex items-center gap-2">
        <CalendarDays aria-hidden="true" size={14} />
        {formatDate(release.date)}
      </span>
      <span className="site-badge">{release.version}</span>
    </div>
  )
}

function ReleaseCard({ release }) {
  return (
    <article className="site-card site-card-interactive">
      <ReleaseMeta release={release} />
      <h2 className="mt-5 text-xl font-semibold text-[color:var(--text)]">{release.title}</h2>
      <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{release.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {release.areas.map((area) => (
          <span key={area} className="site-tag">{area}</span>
        ))}
      </div>
      <a className="site-text-link mt-6" href={`/release-notes/${release.slug}`}>
        Read release note
        <ArrowRight aria-hidden="true" size={15} />
      </a>
    </article>
  )
}

function ReleaseSearchResults({ mode = 'notes' }) {
  const [query, setQuery] = useState('')
  const releases = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return RELEASES

    return RELEASES.filter((release) => {
      const searchable = [
        release.title,
        release.version,
        release.summary,
        ...release.areas,
        ...release.features.map((item) => `${item.title} ${item.description}`),
        ...release.improvements.map((item) => `${item.title} ${item.description}`),
        ...release.fixes.map((item) => `${item.title} ${item.description}`),
      ].join(' ').toLowerCase()

      return searchable.includes(normalized)
    })
  }, [query])

  return (
    <section className="site-section">
      <div className="site-container">
        <div className="site-section-heading">
          <div>
            <p className="site-eyebrow">{mode === 'changelog' ? 'Version history' : 'Release library'}</p>
            <h2>{mode === 'changelog' ? 'Chronological product updates.' : 'Substantial, searchable release notes.'}</h2>
          </div>
          <SearchField value={query} onChange={setQuery} />
        </div>

        {releases.length ? (
          <div className={mode === 'changelog' ? 'space-y-4' : 'grid gap-4 lg:grid-cols-2'}>
            {releases.map((release) => (
              mode === 'changelog' ? (
                <article key={release.slug} className="site-card">
                  <div className="grid gap-5 lg:grid-cols-[180px_minmax(0,1fr)]">
                    <ReleaseMeta release={release} />
                    <div>
                      <h2 className="text-xl font-semibold text-[color:var(--text)]">{release.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{release.summary}</p>
                      <div className="mt-5 grid gap-3 md:grid-cols-3">
                        <div className="site-stat">
                          <Sparkles aria-hidden="true" size={16} />
                          <span>{release.features.length} capabilities</span>
                        </div>
                        <div className="site-stat">
                          <ListFilter aria-hidden="true" size={16} />
                          <span>{release.improvements.length} improvements</span>
                        </div>
                        <div className="site-stat">
                          <Wrench aria-hidden="true" size={16} />
                          <span>{release.fixes.length} public fixes</span>
                        </div>
                      </div>
                      <a className="site-text-link mt-6" href={`/release-notes/${release.slug}`}>
                        View complete release
                        <ArrowRight aria-hidden="true" size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              ) : (
                <ReleaseCard key={release.slug} release={release} />
              )
            ))}
          </div>
        ) : (
          <div className="site-empty-state">
            <Search aria-hidden="true" size={20} />
            <p>No public releases match that search.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function ReleaseNotesPage() {
  return (
    <main className="site-page">
      <ReleaseHero
        eyebrow="Release notes"
        title="Asystence product releases."
        description="Follow substantial public releases across projects, tasks, communication, AI assistance, workspace intelligence, attendance, availability, and operations."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/changelog" className="site-button site-button-secondary">View changelog</a>
          <a href="/roadmap" className="site-button site-button-secondary">View roadmap</a>
        </div>
      </ReleaseHero>
      <ReleaseSearchResults />
      <section className="site-section">
        <div className="site-container grid gap-4 md:grid-cols-3">
          {[
            ['Capabilities', 'What became publicly available and which product areas are affected.'],
            ['Improvements', 'Meaningful platform, workflow, access, or public knowledge improvements.'],
            ['Fixes', 'Only confirmed, public-facing fixes are listed. Empty sections remain explicit.'],
          ].map(([title, description]) => (
            <div key={title} className="site-card">
              <h2 className="text-lg font-semibold text-[color:var(--text)]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function ChangelogPage() {
  return (
    <main className="site-page">
      <ReleaseHero
        eyebrow="Changelog"
        title="A factual history of public updates."
        description="Search releases by version, capability, product area, or change. Each entry links to a complete release note with its context."
      />
      <ReleaseSearchResults mode="changelog" />
    </main>
  )
}

function ReleaseSection({ icon: Icon, title, items, emptyText }) {
  return (
    <section className="site-section">
      <div className="site-container">
        <div className="site-section-heading">
          <div>
            <p className="site-eyebrow">Release detail</p>
            <h2 className="inline-flex items-center gap-3">
              <Icon aria-hidden="true" size={22} />
              {title}
            </h2>
          </div>
        </div>
        {items.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <div key={item.title} className="site-card">
                <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="site-empty-state">
            <CheckCircle2 aria-hidden="true" size={20} />
            <p>{emptyText}</p>
          </div>
        )}
      </div>
    </section>
  )
}

function ReleaseDetailPage({ release }) {
  const relatedReleases = release.relatedReleaseSlugs
    .map(getReleaseBySlug)
    .filter(Boolean)

  return (
    <main className="site-page">
      <ReleaseHero eyebrow="Release note" title={release.title} description={release.summary}>
        <div className="mt-7">
          <ReleaseMeta release={release} />
        </div>
      </ReleaseHero>
      <ReleaseSection
        icon={Sparkles}
        title="New capabilities"
        items={release.features}
        emptyText="No new capabilities are listed for this release."
      />
      <ReleaseSection
        icon={ListFilter}
        title="Improvements"
        items={release.improvements}
        emptyText="No public improvements are listed for this release."
      />
      <ReleaseSection
        icon={Wrench}
        title="Fixes"
        items={release.fixes}
        emptyText="No public fixes are listed for this release."
      />
      <section className="site-section">
        <div className="site-container">
          <div className="site-section-heading">
            <div>
              <p className="site-eyebrow">Continue exploring</p>
              <h2>Related releases and resources.</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedReleases.map((item) => (
              <ReleaseCard key={item.slug} release={item} />
            ))}
            {release.relatedResources.map((resource) => (
              <a key={resource.href} href={resource.href} className="site-card site-card-interactive">
                <h3 className="text-base font-semibold text-[color:var(--text)]">{resource.label}</h3>
                <span className="site-text-link mt-5">
                  Open resource
                  <ArrowRight aria-hidden="true" size={15} />
                </span>
              </a>
            ))}
          </div>
          {!relatedReleases.length && (
            <p className="mt-5 text-sm text-[color:var(--text-soft)]">
              This is the first public release note. Future confirmed releases will be linked here automatically.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

function RoadmapPage() {
  return (
    <main className="site-page">
      <ReleaseHero
        eyebrow="Public roadmap"
        title="Confirmed platform work, without speculative promises."
        description="The roadmap separates planned, in-progress, and completed public work. Dates and priorities can change as product needs, reliability, and customer feedback evolve."
      />
      <section className="site-section">
        <div className="site-container">
          <div className="grid gap-4 lg:grid-cols-3">
            {ROADMAP_COLUMNS.map((column) => (
              <section key={column.id} className="site-roadmap-column" aria-labelledby={`roadmap-${column.id}`}>
                <div className="border-b border-[color:var(--border)] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h2 id={`roadmap-${column.id}`} className="text-lg font-semibold text-[color:var(--text)]">
                      {column.label}
                    </h2>
                    <span className="site-badge">{column.items.length}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[color:var(--text-muted)]">{column.description}</p>
                </div>
                <div className="space-y-3 p-3">
                  {column.items.length ? column.items.map((item) => (
                    <article key={item.title} className="site-card">
                      <h3 className="text-base font-semibold text-[color:var(--text)]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{item.description}</p>
                      {item.releaseSlug && (
                        <a className="site-text-link mt-5" href={`/release-notes/${item.releaseSlug}`}>
                          Related release
                          <ArrowRight aria-hidden="true" size={15} />
                        </a>
                      )}
                    </article>
                  )) : (
                    <div className="site-empty-state min-h-[150px]">
                      <Clock3 aria-hidden="true" size={20} />
                      <p>No public items announced.</p>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-[color:var(--text-soft)]">
            Roadmap items are directional and may change, move, or be removed. Only publicly confirmed work is listed.
          </p>
        </div>
      </section>
    </main>
  )
}

export function ReleaseCenterPage({ route }) {
  if (route.type === 'release-detail') return <ReleaseDetailPage release={route.release} />
  if (route.type === 'changelog') return <ChangelogPage />
  if (route.type === 'roadmap') return <RoadmapPage />
  return <ReleaseNotesPage />
}
