import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function Hero() {
  const heroSliderSettings = {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay]
  }
  return (
    <>
      <header className="qtec-hero hero-bg-gradient hero-video-bg">
        <video className="hero-bg-video" autoPlay loop muted playsInline>
          <source src="/video/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="container z-3 heroContent">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h1 className="qtec-h1 textLight mb-4 text-anim">No bloat. No gimmicks.<br />Just powerful, design-led systems built with care, precision, and personality.</h1>
              <p className="qtec-desc textLight hero-bio text-anim">
                UK Based duo of creators, builders, and perfectionists on a mission to redefine what a PC can be. Editing, gaming, or building your next big idea, our machines are crafted to perform.<br /><br />
                
              </p>
            </div>
          </div>
          {/* Restore the image slider below the hero content */}
          {/* <div className="heroSlider">
            <Swiper {...heroSliderSettings}>
              <SwiperSlide>
                <img alt="Slider Image" src="/images/hero1.png" />
                <span className="position-relative z-3">
                  <h5 className="qtec-h5 textLight text-anim">
                  Obelixis is where performance meets purpose.<br />
                  Let's build something better - together.
                  </h5>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <img alt="Slider Image" src="/images/hero2.png" />
                <span className="position-relative z-3">
                  <h5 className="qtec-h5 textLight text-anim">
                  Obelixis is where performance meets purpose.<br />
                  Let's build something better - together.
                  </h5>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <img alt="Slider Image" src="/images/hero3.png" />
                <span className="position-relative z-3">
                  <h5 className="qtec-h5 textLight text-anim">
                  Obelixis is where performance meets purpose.<br />
                   Let's build something better - together.
                
                  </h5>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <img alt="Slider Image" src="/images/hero4.png" />
                <span className="position-relative z-3">
                  <h5 className="qtec-h5 textLight text-anim">
                  Obelixis is where performance meets purpose.<br />
                   Let's build something better - together.
                
                  </h5>
                </span>
              </SwiperSlide>
            </Swiper>
          </div> */}
        </div>
      </header>
    </>
  )
}

export default Hero 