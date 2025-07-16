import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function Sliders() {
  const heroSliderSettings = {
    spaceBetween: 20,
    loop: true,
    autoHeight:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay]
  }
  return (
    <section className='qtec-sectionMargin'>
      <div className="container">
        {/* Restore the image slider below the hero content */}
        
          <div className='row align-items-center'>
            <div className='col-md-5 col-12'>
            <h3 className='slider-heading'>Obelixis is where performance meets purpose.<br />
            Let's build something better - together.</h3>
            </div>
            <div className='col-12 col-md-7'>
            <div className="heroSlider mt-0">
            <Swiper {...heroSliderSettings}>
              <SwiperSlide>
                <img alt="Slider Image" src="/images/hero1.png" />
                
              </SwiperSlide>
              <SwiperSlide>
                <img alt="Slider Image" src="/images/hero2.png" />
                
              </SwiperSlide>
              <SwiperSlide>
                <img alt="Slider Image" src="/images/hero3.png" />
                
              </SwiperSlide>
              <SwiperSlide>
                <img alt="Slider Image" src="/images/hero4.png" />
                
              </SwiperSlide>
            </Swiper>
          </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Sliders;