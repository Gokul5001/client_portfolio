import './Certificates.css'
import { CertificatesArt } from './Illustrations'
import { certificateImages } from '../data/images'

// To show a scan of a certificate, save it as src/assets/certificates/<slug>.png
const certificates = [
  { slug: 'creative-solution', org: 'Creative Solution', date: 'Oct 2025', text: 'Branding, marketing creatives and promotional materials for collaborative projects with NADEC and Hyundai.' },
  { slug: 'markhor-group', org: 'Markhor Group of Companies', date: 'Mar 2025', text: 'Outstanding performance and creative campaign execution in digital marketing and graphic design.' },
  { slug: 'blood-chain', org: 'Blood Chain Pakistan', date: 'Jun 2023', text: 'Supporting blood donation awareness through strategy and design.' },
  { slug: 'saif-group', org: 'Saif Group Limited', date: 'Apr 2022', text: 'Creativity, strategy and measurable impact in a university-level digital marketing campaign.' },
]

function Certificates() {
  return (
    <section id="certificates" className="section section--stone">
      <div className="container">
        <div className="split">
          <div className="split__aside">
            <h2 className="section-title">Certificates of appreciation.</h2>
            <p className="section-lead">
              Recognition from four organisations for creative campaigns, strategy and results.
            </p>
            <div className="split__art">
              <CertificatesArt />
            </div>
          </div>

          <div className="certs">
            {certificates.map((c) => {
              const img = certificateImages[c.slug]
              return (
                <article className="cert" key={c.slug}>
                  <div className="cert__inner">
                    {img && (
                      <a href={img} target="_blank" rel="noreferrer" aria-label={`Open certificate from ${c.org}`}>
                        <img className="cert__img" src={img} alt={`Certificate of appreciation from ${c.org}`} loading="lazy" />
                      </a>
                    )}
                    <span className="cert__date">{c.date}</span>
                    <h3 className="cert__org">{c.org}</h3>
                    <p className="cert__text">{c.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates
