import { useEffect, useState } from 'react'
import './Hero.css'
import { portrait } from '../data/images'

const roles = [
  'Senior graphic designer',
  'Digital marketing expert',
  'Brand and social media creator',
]

// Types each role, holds it, deletes it, then moves to the next one.
// With reduced motion enabled, the first role is shown without animation.
function useTypewriter(words) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return undefined
    }

    let word = 0
    let count = 0
    let deleting = false
    let timer

    const tick = () => {
      count += deleting ? -1 : 1
      setText(words[word].slice(0, count))

      let delay = deleting ? 35 : 75
      if (!deleting && count === words[word].length) {
        deleting = true
        delay = 1700
      } else if (deleting && count === 0) {
        deleting = false
        word = (word + 1) % words.length
        delay = 400
      }
      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, 700)
    return () => clearTimeout(timer)
  }, [words])

  return text
}

function HeroArt() {
  return (
    <div className="hero__art" aria-hidden="true">
      <svg className="hero__art-bg" viewBox="0 0 520 560" focusable="false">
        <defs>
          <pattern id="hero-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="rgba(255,255,255,0.35)" />
          </pattern>
        </defs>
        <circle cx="270" cy="270" r="215" fill="#2b45f5" />
        <circle cx="270" cy="270" r="256" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
        <circle cx="440" cy="92" r="34" fill="#ffb224" />
        <rect x="380" y="410" width="120" height="120" fill="url(#hero-dots)" />
      </svg>

      <div className="hero__frame">
        {portrait ? (
          <img src={portrait} alt="" />
        ) : (
          <span className="hero__frame-empty">MB</span>
        )}
      </div>

      <div className="hero__chip hero__chip--type">Aa</div>

      <div className="hero__chip hero__chip--swatches">
        <i style={{ background: '#ffb224' }}></i>
        <i style={{ background: '#2b45f5' }}></i>
        <i style={{ background: '#0c1222' }}></i>
        <i style={{ background: '#e3e5ec' }}></i>
      </div>

      <div className="hero__chip hero__chip--pen">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0c1222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      </div>
    </div>
  )
}

function Hero() {
  const role = useTypewriter(roles)

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="row align-items-center gx-0 gx-lg-5 gy-5">
          <div className="col-lg-7">
            <h1 className="hero__name hero__in" style={{ '--d': '0s' }}>
              Muhammad Bilal
            </h1>

            <p className="hero__role hero__in" style={{ '--d': '0.15s' }}>
              <span className="visually-hidden">
                Senior graphic designer, digital marketing expert, brand and social media creator
              </span>
              <span aria-hidden="true">{role}</span>
              <span className="hero__caret" aria-hidden="true"></span>
            </p>

            <p className="hero__intro hero__in" style={{ '--d': '0.3s' }}>
              I'm a digital marketing expert and graphic designer in Jeddah. I build brand
              presence through strategic content and visual design, with bilingual layouts in
              English, Urdu and Arabic.
            </p>

            <div className="hero__actions hero__in" style={{ '--d': '0.45s' }}>
              <a href="#work" className="btn-x btn-x--white">See my projects</a>
              <a href="#contact" className="btn-x btn-x--line-light">Contact me</a>
            </div>

            <dl className="hero__facts hero__in" style={{ '--d': '0.6s' }}>
              <div>
                <dt>Based in</dt>
                <dd>Jeddah, Saudi Arabia</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>7+ years</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>Freelance and full-time</dd>
              </div>
            </dl>
          </div>

          <div className="col-lg-5">
            <HeroArt />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
