const groups = [
  {
    title: 'Design',
    items: ['Brand Identity', 'Social Media Design', 'Product Packaging', 'Print Design', 'Presentation Design', 'Bilingual Layouts', 'UI/UX Basics', 'Website & App Design'],
  },
  {
    title: 'Marketing',
    items: ['Content Strategy', 'Platform Management', 'Community Management', 'Trend Research'],
  },
  {
    title: 'Motion & Video',
    items: ['Motion Graphics', 'Video Editing', 'Video Animation'],
  },
  {
    title: 'Tools',
    items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe Premiere Pro', 'CapCut', 'Figma', 'CorelDRAW', 'Canva / Canva Pro', 'MS Office'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-pad section-alt">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">What I bring to a project.</h2>
        <div className="row g-4">
          {groups.map((g) => (
            <div className="col-md-6" key={g.title}>
              <div className="card-soft h-100">
                <h3 className="card-soft__title">{g.title}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span key={i} className="chip">{i}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
