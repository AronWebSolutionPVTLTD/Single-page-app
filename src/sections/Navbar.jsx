function Navbar() {
  return (
    <nav className="qtec-nav">
      <div className="logo">
        <img  className="navbar-logo" src="/images/logo.png" alt="Tag Icon" />
      </div>
      <div className="d-flex qtec-gap justify-content-end align-items-center">
        <ul className="list-unstyled m-0 qtec-navLinks mob-lg-none">
          <li><a href="#">Home</a> <span></span></li>
          <li><a href="#">About</a><span></span></li>
          <li><a href="#">Products</a><span></span></li>
          <li><a href="#">Contact us</a><span></span></li>
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