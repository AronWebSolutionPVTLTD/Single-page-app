function Goals() {
  return (
    <section className="qtec-goals qtec-sectionMargin qtec-sectionPadding position-relative">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="qtec-tag textLight">
              <img src="/images/tagIcon.png" alt="Tag" />
              Welcome Creative Agency
            </div>
            <h2 className="text-anim qtec-h2 textLight">
              We Are Digital Creative Agency In London
            </h2>
            <p className="qtec-desc textLight">
              We are web designers, developers, project managers, And digital
              marketing professionals dedicated to Creative and solutions using
              the latest trend.
            </p>
            <div className="row align-items-end">
              <div className="col-md-5">
                <div className="progressHisto">
                  <div className="histoSingle histo1">
                    15k
                    <span> Sales</span>
                    <div className="fill"></div>
                  </div>
                  <div className="histoSingle histo2">
                    30k
                    <span> Sales</span>
                    <div className="fill"></div>
                  </div>
                  <div className="histoSingle histo3">
                    50k
                    <span> Sales</span>
                    <div className="fill"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <ul className="list-unstyled growthList my-3">
                  <li>
                    <i className="fa-solid fa-arrow-right fa-rotate-by" style={{ "--fa-rotate-angle": "-45deg" }}></i>
                    692% Campaign ROI Exceeds
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right fa-rotate-by" style={{ "--fa-rotate-angle": "-45deg" }}></i>
                    8x the number of keywords sending
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right fa-rotate-by" style={{ "--fa-rotate-angle": "-45deg" }}></i>
                    296% increase in organic traffic
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right fa-rotate-by" style={{ "--fa-rotate-angle": "-45deg" }}></i>
                    Sed ut perspiciatis unde
                  </li>
                </ul>
              </div>
            </div>
            <button className="qtec-btn"><span>Competitive</span></button>
          </div>
        </div>
      </div>
      <div className="sectionBanner">
        <img src="/images/mobileBanner.png" alt="" />
      </div>
    </section>
  )
}

export default Goals 