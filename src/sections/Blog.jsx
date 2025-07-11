import tagIconDark from '/images/tagIconDark.png'
import blog1Img from '/images/blog/b1.png'
import blog2Img from '/images/blog/b2.png'
import blog3Img from '/images/blog/b3.png'

function Blog() {
  return (
    <section className="qtec-blog">
      <div className="container">
        <div className="flex-column qtec-tag">
          <img src="/images/tagIconDark.png" alt="Tag" />
          Welcome Creative Agency
        </div>
        <h2 className="text-anim text-center qtec-h2 text-uppercase">
          Trusted Digital Agency.
        </h2>
        <div className="row">
          <div className="col-md-4 mt-4 tab-50 mob-sm-100">
            <div className="blogSingle">
              <div className="blogImg overflow-hidden position-relative">
                <img className="animateImg" src="/images/blog/b1.png" alt="Blog" />
                <div className="blogTag">Branding</div>
                <div className="portflio qtecMask"></div>
              </div>
              <div className="blogDate">
                <i className="fa-solid fa-calendar-days"></i>Dec2,2025
              </div>
              <h6 className="qtec-h6 blogTitle">
                Design can speak the in tongue of art force of commerce.
              </h6>
            </div>
          </div>
          <div className="col-md-4 mt-4 tab-50 mob-sm-100">
            <div className="blogSingle">
              <div className="blogImg overflow-hidden position-relative">
                <img className="animateImg" src="/images/blog/b2.png" alt="Blog" />
                <div className="blogTag">Branding</div>
                <div className="portflio qtecMask"></div>
              </div>
              <div className="blogDate">
                <i className="fa-solid fa-calendar-days"></i>Dec2,2025
              </div>
              <h6 className="qtec-h6 blogTitle">
                Design can speak the in tongue of art force of commerce.
              </h6>
            </div>
          </div>
          <div className="col-md-4 mt-4 tab-50 mob-sm-100">
            <div className="blogSingle">
              <div className="blogImg overflow-hidden position-relative">
                <img className="animateImg" src="/images/blog/b3.png" alt="Blog" />
                <div className="blogTag">Branding</div>
                <div className="portflio qtecMask"></div>
              </div>
              <div className="blogDate">
                <i className="fa-solid fa-calendar-days"></i>Dec2,2025
              </div>
              <h6 className="qtec-h6 blogTitle">
                Design can speak the in tongue of art force of commerce.
              </h6>
            </div>
          </div>
        </div>
        <a className="morePost" href="#">
          read all posts<i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  )
}

export default Blog 