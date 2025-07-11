function SideNav() {
  return (
    <div className="sideNav">
      <div className="navInner">
        <div className="closeNav"><i className="fa-solid fa-xmark"></i></div>
        <p className="qtec-desc textGrey text-center pt-5">
          We are web designers, developers, project managers, And digital
          marketing professionals dedicated to Creative and solutions using the
          latest trend.
        </p>
        <ul className="list-unstyled m-0 qtec-navLinks">
          <li><a href="#">Home</a> <span></span></li>
          <li><a href="#">About</a><span></span></li>
          <li><a href="#">Pages</a><span></span></li>
          <li><a href="#">Our Services</a><span></span></li>
        </ul>
        <div className="copyright">© 2025 All Rights Reserved.</div>
      </div>
      <div className="navOverlay"></div>
    </div>
  )
}

export default SideNav 