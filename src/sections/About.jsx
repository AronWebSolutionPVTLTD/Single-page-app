function About() {
  return (
    <section className="qtec-about qtec-sectionMargin">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 pe-4 position-relative overflow-hidden">
            <img
              src="/images/aboutSide.jpg"
              alt="Side"
              className="animateImg rounded-4 w-100"
            />
            <div className="rounded-4 qtecMask"></div>
          </div>
          <div className="col-md-6 ps-4">
            <div className="qtec-tag">
              <img src="/images/tagIconDark.png" alt="Tag" />
              Welcome Creative Agency
            </div>
            <h3 className="text-anim qtec-h3 my-3 textDark">
              Empowering Your Business with our Solutions
            </h3>
            <p className="qtec-desc my-4">
              We are web designers, developers, project managers, And digital
              marketing professionals dedicated to Creative and solutions using
              the latest trend.
            </p>
            <div className="row align-items-center">
              <div className="w-auto">
                <button className="mt-0 qtec-btn"><span>Competitive</span></button>
              </div>
              <div className="w-auto">
                <a href="#" className="qtec-email">
                  <i className="fa-solid fa-square-phone"></i>Hello@agency.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-4">
          <div className="col-md-4">
            <div className="qtec-progress">
              <header>
                <img src="/images/lauch.svg" alt="progress icon" />
                <h4 className="qtec-h4"><span className="numCounter">97</span>%</h4>
              </header>
              <div className="progressBar overflow-hidden position-relative">
                <div className="inner"><span className="numCounter"></span>%</div>
                <div className="qtecMask"></div>
              </div>
              <p className="qtec-desc textDark w-75">
                Successful Projects Lorem psum dolor amet.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="qtec-progress">
              <header>
                <img src="/images/innovation.svg" alt="progress icon" />
                <h4 className="qtec-h4"><span className="numCounter">100</span>%</h4>
              </header>
              <div className="progressBar position-relative overflow-hidden">
                <div className="inner"><span className="numCounter"></span>%</div>
                <div className="qtecMask"></div>
              </div>
              <p className="qtec-desc textDark w-75">
                Successful Projects Lorem psum dolor amet.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="qtec-progress">
              <header>
                <img src="/images/production.svg" alt="progress icon" />
                <h4 className="qtec-h4"><span className="numCounter">80</span>%</h4>
              </header>
              <div className="progressBar position-relative overflow-hidden">
                <div className="inner"><span className="numCounter"></span>%</div>
                <div className="qtecMask"></div>
              </div>
              <p className="qtec-desc textDark w-75">
                Successful Projects Lorem psum dolor amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 