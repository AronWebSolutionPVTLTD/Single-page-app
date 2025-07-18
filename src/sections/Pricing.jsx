function Pricing() {
  return (
    <section className="qtec-pricing qtec-sectionPadding position-relative">
      <div className="container position-relative z-3">
        <div className="flex-column qtec-tag textLight">
          <img src="/images/tagIcon.png" alt="Tag" />
          Welcome Creative Agency
        </div>
        <h2 className="text-anim text-center qtec-h2 textLight text-uppercase">
          Trusted Digital Agency.
        </h2>
        <div className="row">
          <div className="col-md-6 tab-100 position-relative">
            <div className="pricingSingle">
              <div className="row align-items-end">
                <div className="col-md-7">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="small qtec-h5">Standard</h5>
                    <div className="discount">20% OFF</div>
                  </div>
                  <p className="qtec-desc">
                    Save yourself hours, and get online faster than ever before
                  </p>
                  <div className="pricing">
                    <h5 className="large borderHeading qtec-h5">
                      $15<span>Pay user / per month billed Annually </span>
                    </h5>
                  </div>
                </div>
                <div className="col-md-5">
                  <ul className="list-unstyled pricingList">
                    <li>2 Page with Bootstrap5</li>
                    <li>1 Page with Elementor</li>
                    <li>Responsive Design</li>
                    <li>Design Customization</li>
                    <li>2 Page with Bootstrap5</li>
                  </ul>
                </div>
              </div>
              <a className="pricingBtn qtec-buttonHover" href="#">
                <span>DOWNLOAD CV</span>
              </a>
            </div>
          </div>
          <div className="col-md-6 tab-100 position-relative">
            <div className="pricingSingle">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="small qtec-h5">Standard</h5>
                  </div>
                  <p className="qtec-desc">
                    Save yourself hours, and get online faster than ever before
                  </p>
                  <div className="pricing">
                    <h5 className="large qtec-h5">Let's Talk</h5>
                  </div>
                  <a className="mt-5 pricingBtn qtec-buttonHover" href="#">
                    <span>Contact Us</span>
                  </a>
                </div>
                <div className="col-md-5">
                  <ul className="list-unstyled pricingList">
                    <li>2 Page with Bootstrap5</li>
                    <li>1 Page with Elementor</li>
                    <li>Responsive Design</li>
                    <li>Design Customization</li>
                    <li>2 Page with Bootstrap5</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing 