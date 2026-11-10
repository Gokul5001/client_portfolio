import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './theme.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Work from './components/Work'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Page flow follows the client's brief:
// 1 Picture + name with animated introduction, 2 Education, 3 Work experience,
// 4 Projects, 5 Appreciation certificates, 6 Contact.
// About.jsx, Services.jsx and Skills.jsx are still in /components if you want them back.
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Work />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}

export default App
