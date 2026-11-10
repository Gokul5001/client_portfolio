import { useEffect, useRef } from 'react'
import Icon from './Icons'
import './ProjectModal.css'

function ProjectModal({ project, image, position, total, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="pm__overlay" onClick={onClose}>
      <div
        className="pm__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pm__stage">
          {image ? (
            <img src={image} alt={project.title} />
          ) : (
            <div className="pm__empty">
              <span>Image coming soon</span>
            </div>
          )}

          <button type="button" className="pm__nav pm__nav--prev" onClick={onPrev} aria-label="Previous project">
            <Icon name="prev" />
          </button>
          <button type="button" className="pm__nav pm__nav--next" onClick={onNext} aria-label="Next project">
            <Icon name="next" />
          </button>
          <span className="pm__count">{position} / {total}</span>
        </div>

        <div className="pm__panel">
          <button ref={closeRef} type="button" className="pm__close" onClick={onClose} aria-label="Close">
            <Icon name="close" />
          </button>

          <p className="pm__group">{project.group}</p>
          <h3 className="pm__title">{project.title}</h3>
          <p className="pm__client">{project.client}</p>

          <p className="pm__desc">{project.description}</p>

          <h4 className="pm__sub">Deliverables</h4>
          <ul className="pm__list">
            {project.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>

          <a className="btn-gold pm__cta" href={project.href} target="_blank" rel="noreferrer">
            View on Behance
            <Icon name="external" size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
