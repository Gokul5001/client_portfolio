import { useCallback, useState } from 'react'
import './Work.css'
import ProjectModal from './ProjectModal'
import { ProjectsArt } from './Illustrations'
import { projects, groups } from '../data/projects'
import { workImages } from '../data/images'

function Work() {
  const [filter, setFilter] = useState('All')
  const [openSlug, setOpenSlug] = useState(null)

  const shown = filter === 'All' ? projects : projects.filter((p) => p.group === filter)
  const openIndex = shown.findIndex((p) => p.slug === openSlug)
  const current = openIndex >= 0 ? shown[openIndex] : null

  const close = useCallback(() => setOpenSlug(null), [])
  const step = useCallback(
    (dir) => {
      setOpenSlug((slug) => {
        const i = shown.findIndex((p) => p.slug === slug)
        if (i < 0) return slug
        return shown[(i + dir + shown.length) % shown.length].slug
      })
    },
    [shown]
  )
  const prev = useCallback(() => step(-1), [step])
  const next = useCallback(() => step(1), [step])

  const count = (g) => projects.filter((p) => p.group === g).length

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head work-head">
          <div>
            <h2 className="section-title">Selected projects.</h2>
            <p className="section-lead">
              {projects.length} projects across real estate, food, healthcare, retail and print.
              Select one to see the details.
            </p>
            <a
              href="https://www.behance.net/wwwmuhammabilal110"
              target="_blank"
              rel="noreferrer"
              className="btn-x btn-x--line-ink work-head__cta"
            >
              Full portfolio on Behance
            </a>
          </div>
          <div className="work-head__art">
            <ProjectsArt />
          </div>
        </div>

        <div className="work-filters" role="tablist" aria-label="Filter projects">
          {['All', ...groups].map((g) => (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={filter === g}
              className={`work-filters__btn ${filter === g ? 'is-active' : ''}`}
              onClick={() => setFilter(g)}
            >
              {g}
              <span>{g === 'All' ? projects.length : count(g)}</span>
            </button>
          ))}
        </div>

        <div className="work-grid">
          {shown.map((p) => (
            <button
              key={p.slug}
              type="button"
              className="tile"
              onClick={() => setOpenSlug(p.slug)}
              aria-label={`${p.title}, view details`}
            >
              <span className="tile__stage">
                {workImages[p.slug] ? (
                  <img src={workImages[p.slug]} alt="" loading="lazy" />
                ) : (
                  <span className={`tile__empty tone-${p.tone || 'blue'}`}></span>
                )}
              </span>
              <span className="tile__title">{p.title}</span>
              <span className="tile__client">{p.client}</span>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <ProjectModal
          project={current}
          image={workImages[current.slug]}
          position={openIndex + 1}
          total={shown.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}

export default Work
