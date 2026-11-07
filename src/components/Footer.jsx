function Footer() {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-wrap justify-content-between gap-2">
        <span>© {new Date().getFullYear()} Muhammad Bilal</span>
        <a href="#top" style={{ textDecoration: 'none' }}>Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
