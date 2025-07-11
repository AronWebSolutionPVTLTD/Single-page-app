function ContactForm() {
  return (
    <section className="qtec-form qtec-sectionMargin mb-0 qtec-sectionPadding" id="qtecForm">
      <div className="container">
        <div className="row">
          <div className="col-md-5 tab-50 mob-lg-100">
            <form className="footerForm">
              <div className="row">
                <div className="col-md-6">
                  <div className="inputField">
                    <input type="text" name="name" placeholder="name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inputField">
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="inputField">
                    <select name="subject">
                      <option value="Business services consulting">
                        Business services consulting
                      </option>
                      <option value="Business services consulting">
                        consulting
                      </option>
                    </select>
                    <span><i className="fa-solid fa-caret-down"></i></span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="inputField textareaField">
                    <textarea name="message"></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="w-100 qtec-btn m-0">
                    <span>Let's Talk <i className="fa-solid fa-arrow-right"></i></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5 tab-50 ps-md-5 mob-lg-100">
            <div className="qtec-tag textLight">
              <img src="/images/tagIcon.png" alt="Tag" />
              Welcome Creative Agency
            </div>
            <h2 className="text-anim qtec-h2 my-3 textLight">
              Empowering Your Business with our Solutions
            </h2>
            <p className="qtec-desc textLight">
              On the other hand, We denounce with righteous indignation And
              Dislike men who are beguiled eos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 