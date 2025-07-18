function Portfolio() {
  return (
    <section className="qtecPortfolio qtec-sectionMargin">
      <div className="container">
        <div className="flex-column qtec-tag">
          <img src="/images/tagIconDark.png" alt="Tag" />
          Welcome Creative Agency
        </div>
        <h2 className="text-anim text-center qtec-h2 text-uppercase">
          Trusted Digital Agency.
        </h2>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 pe-md-4">
                <div className="portFolioSingle">
                  <div className="portFolioTags">
                    <div className="tagSingle">Design</div>
                    <div className="tagSingle">UI/UX</div>
                  </div>
                  <div className="position-relative overflow-hidden">
                    <img className="animateImg" src="/images/portflio1.png" alt="portfolio" />
                    <div className="portflio qtecMask"></div>
                  </div>
                  <div className="mt-4 d-flex text-start justify-content-between">
                    <h5 className="qtec-h5">
                      Costs for Digital Marketing Integrated Web Projects
                    </h5>
                    <a className="portfolioLink qtec-buttonHover" href="#">
                      <span><i className="fa-solid fa-right-long"></i></span>
                    </a>
                  </div>
                </div>
                <div className="portFolioSingle">
                  <div className="portFolioTags">
                    <div className="tagSingle">Design</div>
                    <div className="tagSingle">UI/UX</div>
                  </div>
                  <div className="position-relative overflow-hidden">
                    <img className="animateImg" src="/images/portflio2.png" alt="portfolio" />
                    <div className="portflio qtecMask"></div>
                  </div>
                  <div className="mt-4 d-flex text-start justify-content-between">
                    <h5 className="qtec-h5">
                      A Simple Social Media Marketing Checklist
                    </h5>
                    <a className="portfolioLink qtec-buttonHover" href="#">
                      <span><i className="fa-solid fa-right-long"></i></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ps-md-4">
                <div className="portFolioSingle">
                  <div className="portFolioTags">
                    <div className="tagSingle">Design</div>
                    <div className="tagSingle">UI/UX</div>
                  </div>
                  <div className="position-relative overflow-hidden">
                    <img className="animateImg" src="/images/portflio2.png" alt="portfolio" />
                    <div className="portflio qtecMask"></div>
                  </div>
                  <div className="mt-4 d-flex text-start justify-content-between">
                    <h5 className="qtec-h5">
                      A Simple Social Media Marketing Checklist
                    </h5>
                    <a className="portfolioLink qtec-buttonHover" href="#">
                      <span><i className="fa-solid fa-right-long"></i></span>
                    </a>
                  </div>
                </div>
                <div className="portFolioSingle">
                  <div className="portFolioTags">
                    <div className="tagSingle">Design</div>
                    <div className="tagSingle">UI/UX</div>
                  </div>
                  <div className="position-relative overflow-hidden">
                    <img className="animateImg" src="/images/portflio1.png" alt="portfolio" />
                    <div className="portflio qtecMask"></div>
                  </div>
                  <div className="mt-4 d-flex text-start justify-content-between">
                    <h5 className="qtec-h5">
                      Costs for Digital Marketing Integrated Web Projects
                    </h5>
                    <a className="portfolioLink qtec-buttonHover" href="#">
                      <span><i className="fa-solid fa-right-long"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="qtec-desc text-center mt-5 w-50 mx-auto">
          We don't just work with concrete and steel. We've collected the of
          creative websites, web design concepts and ideas work and web
        </p>
        <button className="qtec-btn d-flex align-items-center mx-auto justify-content-center">
          <span> Explore More <i className="fa-solid fa-arrow-right"></i></span>
        </button>
      </div>
    </section>
  )
}

export default Portfolio 