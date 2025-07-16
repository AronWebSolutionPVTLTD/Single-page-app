import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  if(menu){
    document.body.classList.add('overflow-hidden');
  }
  else{
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <nav className="qtec-nav">
      <div className="logo">
        <img  className="navbar-logo" src="/images/logo.png" alt="Tag Icon" />
      </div>
      <span 
      onClick={()=> setMenu(!menu)}
      className="d-flex d-lg-none menu_bar"><HiMenuAlt3 /></span>
      <div className={`d-flex qtec-gap justify-content-end align-items-center nav_menu ${menu && 'open'}`}>
        <span onClick={()=> setMenu(!menu)} className="d-flex d-lg-none menu_bar menu_close"><IoMdClose />        </span>
        <ul className="list-unstyled m-0 qtec-navLinks">
          {/* <li><a href="#">Home</a> <span></span></li> */}
          <li><a href="#about" onClick={(e) => { e.preventDefault(); setMenu(false); scrollToSection('about'); }}>About</a><span></span></li>
          <li><a href="#products" onClick={(e) => { e.preventDefault();setMenu(false); scrollToSection('products'); }}>Products</a><span></span></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault();setMenu(false); scrollToSection('contact'); }}>Contact us</a><span></span></li>
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