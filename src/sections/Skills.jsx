import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const skills = [
  { img: '/images/skills/ts.png', name: 'TypeScript' },
  { img: '/images/skills/sw.png', name: 'Swift' },
  { img: '/images/skills/cS.png', name: 'C#' },
  { img: '/images/skills/ts.png', name: 'TypeScript' },
  { img: '/images/skills/css.png', name: 'CSS' },
  { img: '/images/skills/js.png', name: 'Javascript' },
  { img: '/images/skills/py.png', name: 'Python' },
]

function Skills() {
  const skillSliderSettings = {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    },
    modules: [Autoplay]
  }
  return (
    <section className="qtec-skills qtec-sectionPadding">
      <div className="container">
        <div className="qtec-tag flex-column">
          <img src="/images/tagIconDark.png" alt="Tag" />
          Welcome Creative Agency
        </div>
        <h1 className="text-anim qtec-h1 textDark text-center text-uppercase my-3">
          Trusted Digital Agency.
        </h1>
        <p className="qtec-desc textGrey text-center lh-lg mt-4">
          On the other hand, We denounce with righteous indignation<br />
          And Dislike men who are beguiled and demoralized
        </p>
        <div className="row mt-4">
          <div className="col-md-4 mob-lg-50 overflow-hidden position-relative">
            <img
              className="w-100 rounded-4 animateImg"
              src="/images/skills/1.jpg"
              alt="Skills Image"
            />
            <div className="rounded-4 qtecMask"></div>
          </div>
          <div className="col-md-4 mob-lg-50 position-relative overflow-hidden">
            <img
              className="animateImg w-100 rounded-4"
              src="/images/skills/2.jpg"
              alt="Skills Image"
            />
            <div className="rounded-4 qtecMask"></div>
          </div>
          <div className="col-md-4 mob-lg-50 overflow-hidden position-relative">
            <img
              className="w-100 animateImg rounded-4"
              src="/images/skills/3.jpg"
              alt="Skills Image"
            />
            <div className="rounded-4 qtecMask"></div>
          </div>
        </div>
      </div>
      <div className="skilSlider">
        <Swiper {...skillSliderSettings}>
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="skillSingle">
                <img src={skill.img} alt="Skill" />
                <p>{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="skillContact">
        Want to see our Recent News & Updates. <a href="#">Contact us Now</a>
      </p>
    </section>
  )
}

export default Skills 