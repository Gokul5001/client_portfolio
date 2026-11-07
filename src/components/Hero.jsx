import './Hero.css'
import { portrait, workImages } from '../data/images'

// Three of his posters, arranged like prints on a wall.
const wall = [
  { slug: 'saif-sky-rise', className: 'hero__poster--a', tone: 'tone-sand' },
  { slug: 'golden-buzz', className: 'hero__poster--b', tone: 'tone-amber' },
  { slug: 'aurora-ring', className: 'hero__poster--c', tone: 'tone-royal' },
]

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="row align-items-center gx-0 gx-lg-5 gy-5">
          <div className="col-lg-6">
            <div className="hero__who">
              {portrait ? (
                <img src={portrait} alt="Muhammad Bilal" />
              ) : (
                <span className="hero__avatar">MB</span>
              )}
              <div>
                <strong>Muhammad Bilal</strong>
                <span>Senior graphic designer, Jeddah</span>
              </div>
            </div>

            <h1 className="hero__title">Graphic design that gives your brand a clear voice.</h1>

            <p className="hero__lead">
              I design social campaigns, packaging, print and presentations for brands in Saudi
              Arabia and Pakistan, with bilingual layouts in English, Urdu and Arabic.
            </p>

            <div className="hero__actions">
              <a href="#work" className="btn-x btn-x--white">See my work</a>
              <a href="#contact" className="btn-x btn-x--line-light">Get in touch</a>
            </div>

            <dl className="hero__facts">
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

          <div className="col-lg-6">
            <div className="hero__wall" aria-hidden="true">
              {wall.map((p) =>
                workImages[p.slug] ? (
                  <img key={p.slug} className={`hero__poster ${p.className}`} src={workImages[p.slug]} alt="" />
                ) : (
                  <div key={p.slug} className={`hero__poster hero__poster--empty ${p.className} ${p.tone}`}></div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
