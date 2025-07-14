import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const products = [
  {
    img: '/images/hero1.png',
    title: 'Obelixis Creator Pro',
    desc: 'A powerhouse for creators and professionals. High-performance, silent operation, and stunning design.'
  },
  {
    img: '/images/hero2.png',
    title: 'Obelixis Gaming Elite',
    desc: 'Engineered for gamers who demand the best. Lightning-fast graphics and advanced cooling.'
  },
  {
    img: '/images/hero3.png',
    title: 'Obelixis Studio Mini',
    desc: 'Compact, quiet, and powerful. Perfect for home offices and creative workspaces.'
  },
  {
    img: '/images/hero4.png',
    title: 'Obelixis Vision X',
    desc: 'A showpiece PC with customizable RGB and top-tier specs for performance and style.'
  },
  {
    img: '/images/hero1.png',
    title: 'Obelixis Workstation Max',
    desc: 'Ultimate reliability and expandability for professionals and innovators.'
  },
]

function Product() {
  const productSliderSettings = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: true,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
    modules: [Navigation]
  }

  return (
    <section className="qtec-skills qtec-sectionPadding" id="products">
      <div className="container">
        <div className="qtec-tag flex-column">
          
          Product Range
        </div>
        <h1 className="text-anim qtec-h1 textDark text-center text-uppercase my-3">
          Explore Our Featured Systems
        </h1>
        <p className="qtec-desc textGrey text-center lh-lg mt-4">
          Discover our range of high-performance, design-led PCs crafted for creators, gamers, and professionals.<br />
          Each system is built with precision, personality, and pride.
        </p>
        <div className="productSlider mt-5">
          <Swiper {...productSliderSettings}>
            {products.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="productCard p-4 rounded-4 text-center h-100 d-flex flex-column align-items-center justify-content-between" style={{background:'#f7f8fa', boxShadow:'0 2px 12px rgba(60,60,60,0.07)'}}>
                  <div className="product-img-wrapper">
                    <img src={product.img} alt={product.title} className="animateImg" style={{width:'100%',maxWidth:'100%',objectFit:'cover'}} />
                  </div>
                  <h5 className="text-black fw-bold mb-2">{product.title}</h5>
                  <p className="text-muted mb-0" style={{fontSize:'1em'}}>{product.desc}</p>
                  <button className="qtec-btn">Add Product</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Product; 