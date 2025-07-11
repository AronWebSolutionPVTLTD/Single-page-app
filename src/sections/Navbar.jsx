function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className="qtec-nav">
      <div className="logo">
        <img  className="navbar-logo" src="/images/logo.png" alt="Tag Icon" />
      </div>
      <div className="d-flex qtec-gap justify-content-end align-items-center">
        <ul className="list-unstyled m-0 qtec-navLinks mob-lg-none">
          {/* <li><a href="#">Home</a> <span></span></li> */}
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a><span></span></li>
          <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a><span></span></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact us</a><span></span></li>
        </ul>
        {/* <div className="searchIcon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="qtec-menuIcon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="#qtecForm">
          <button className="mob-sm-none qtec-btn m-0">
            <span>Let's Talk</span>
          </button>
        </a> */}
      </div>
    </nav>
  )
}

export default Navbar 