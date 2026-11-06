import './Work.css'

// Auto-loads every image in src/assets/work/ — the file name (without extension) must match a `slug` below.
const files = import.meta.glob('../assets/work/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const images = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    url,
  ])
)

const B = 'https://www.behance.net/gallery'

const projects = [
  { slug: 'obhur-living-2', title: 'Obhur Living 2', category: 'Deal Real Estate · Property campaign', href: `${B}/255465531/DEAL-REAL-ESTATE-PROJECT-OBHUR-LIVING-2` },
  { slug: 'saif-sky-rise', title: 'Saif Sky Rise', category: 'Saif Group · Real estate', href: `${B}/255295525/Saif-Group-Of-Companies-Saif-Sky-Rise` },
  { slug: 'golden-buzz', title: 'Golden Buzz', category: 'Son of a Bee · Beverage', href: `${B}/252540581/Son-Of-a-Bee` },
  { slug: 'independence-day', title: 'What Builds a Nation?', category: 'City University · Independence Day', href: `${B}/254328503/City-University-Independence-Day-Compaign` },
  { slug: 'markhor-drink', title: 'Markhor Stimulant Drink', category: 'Beverage · Branding', href: `${B}/255294993/Markhor-Stimulant-Drink` },
  { slug: 'delicious-kitchen', title: 'Delicious Kitchen', category: 'Food · Social media', href: `${B}/248453637/Delicious-Kitchen` },
  { slug: 'albaik-chips', title: 'Al Baik Chips', category: 'Snacks · Product ad', href: `${B}/248451387/Albaik-Project-Work` },
  { slug: 'aurora-ring', title: 'A Spark of Royalty', category: 'Aurora · Jewellery', href: `${B}/246759881/Aurora-Ring-Designs` },
  { slug: 'abeer-medical', title: 'Abeer Medical Group', category: 'Healthcare · Presentation', href: `${B}/251439391/Abeer-Medical-Group-Slides` },
  { slug: 'deduce-aesthetics', title: 'Deduce Aesthetics', category: 'Skin clinic · Social media', href: `${B}/250892865/Deduce-Aesthetic-Clinic` },
  { slug: 'loreal-serum', title: 'Drops of Shine', category: 'Hair serum · Concept ad', href: `${B}/246626647/Loream-Paris-Hair-Serum` },
  { slug: 'social-media-post', title: 'Edge Smartwatch', category: 'Tech · Social media post', href: `${B}/246626773/Social-Media-Post` },
  { slug: 'dental-care', title: 'Dental Care', category: 'Healthcare · Social media', href: `${B}/246626481/Dental-Care` },
  // { slug: 'galaxy-enclave', title: 'Galaxy Enclave', category: 'Real estate · Campaign', href: `${B}/255294499/Galaxay-Enclave`, tone: 'blue' },
  { slug: 'gym-flyer', title: 'Gym Flyer', category: 'Fitness · Print', href: `${B}/246760903/Gym-Flyer-Designs` },
  { slug: 'travel-agency', title: 'Travel Agency', category: 'Travel · Flyer', href: `${B}/248453307/Travel-Agency` },
  { slug: 'shoes-designs', title: 'Sneaker Designs', category: 'Footwear · Campaign', href: `${B}/248452863/Shoes-Designs` },
  { slug: 'khan-builders', title: 'Khan Builders', category: 'Construction · Property ad', href: `${B}/248452333/Khan-Builders-Project` },
]

function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-2 gap-3">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title mb-0">Recent projects.</h2>
          </div>
          <a
            href="https://www.behance.net/wwwmuhammabilal110"
            target="_blank"
            rel="noreferrer"
            className="btn btn-pill-outline"
          >
            Full portfolio on Behance ↗
          </a>
        </div>

        <div className="work-grid mt-4">
          {projects.map((p) => (
            <a
              key={p.slug}
              className="work-card"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              {images[p.slug] ? (
                <img className="work-card__thumb" src={images[p.slug]} alt={p.title} loading="lazy" />
              ) : (
                <div className={`work-card__thumb work-card__thumb--empty tone-${p.tone || 'blue'}`}></div>
              )}
              <div className="work-card__body">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.category}</p>
                </div>
                <span className="work-card__arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work