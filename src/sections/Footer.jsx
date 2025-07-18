import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const galleryImages = [
  '/images/gallery/g1.png',
  '/images/gallery/g2.png',
  '/images/gallery/g3.png',
  '/images/gallery/g4.png',
  '/images/gallery/g5.png',
  '/images/gallery/g6.png',
]

function Footer() {
  const footerGallerySettings = {
    slidesPerView: 5,
    spaceBetween: 2,
    loop: true,
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
      pauseOnMouseEnter: false,
    },
    modules: [Autoplay]
  }
  return (
    // <footer className="qtec-footer">
    //   <div className="footerInner qtec-sectionPadding">
    //     <div className="row">
    //       <div className="col-md-4 mob-lg-100 tab-sm-33">
    //         <div className="logo">
    //           <img src="/images/tagIcon.png" alt="Tag Icon" />qtec
    //         </div>
    //         <p className="qtec-desc textLight my-md-4">
    //           On the other hand, We denounce with righteous indignation And
    //           Dislike men who are beguiled and demoralized the Charms of
    //           Pleasure At vero eos et accusamus et iusto odio Dignissimos
    //           Ducimus blanditiis
    //         </p>
    //       </div>
    //       <div className="col-md-3 mob-lg-100 tab-sm-33">
    //         <div className="row justify-content-evenly">
    //           <div className="col-md-5">
    //             <h6 className="footerHeading">quick links</h6>
    //             <ul className="footerLinks list-unstyled">
    //               <li>
    //                 <a href="#">
    //                   <img src="/images/linkArrow.png" alt="Link" />FAQ
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <img src="/images/linkArrow.png" alt="Link" />Trems Condition
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <img src="/images/linkArrow.png" alt="Link" />
    //                   Payment info
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <img src="/images/linkArrow.png" alt="Link" />
    //                   Privacy Notice
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <img src="/images/linkArrow.png" alt="Link" />Billing
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="col-md-5">
    //             <h6 className="footerHeading">quick links</h6>
    //             <ul className="footerLinks list-unstyled">
    //               <li>
    //                 <a href="#">
    //                   <img src="/images/linkArrow.png" alt="Link" />FAQ
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <img src="/images/linkArrow.png" alt="Link" />Trems Condition
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <img src="/images/linkArrow.png" alt="Link" />
    //                   Payment info
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <img src="/images/linkArrow.png" alt="Link" />
    //                   Privacy Notice
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <img src="/images/linkArrow.png" alt="Link" />Billing
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-5 mob-lg-100 tab-sm-33">
    //         <span className="footerTag">Say Hello</span>
    //         <h5 className="qtec-h5 textLight">hello@design.com</h5>
    //         <div className="Footergallery">
    //           <Swiper {...footerGallerySettings}>
    //             {galleryImages.map((img, index) => (
    //               <SwiperSlide key={index}>
    //                 <img src={img} alt="Gallery" />
    //               </SwiperSlide>
    //             ))}
    //           </Swiper>
    //         </div>
    //         <div className="footerSocial">
    //           <div className="footer-socialSingle">
    //             <i className="fa-brands fa-facebook-f"></i>
    //             facebook
    //           </div>
    //           <div className="footer-socialSingle">
    //             <i className="fa-brands fa-instagram"></i>
    //             instagram
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="copyright">Thank you for supporting us. Every order, every message, and every recommendation 
    //     helps us grow. We're proud to have you with us on this journey.</div>
    // </footer>
    <footer className="qtec-footer">
      <div className="copyright">
        <div className="copyright-content">
          Thank you for supporting us. Every order, every message, and every recommendation 
          helps us grow. We're proud to have you with us on this journey.
        </div>
      </div>
    </footer>
  )
}

export default Footer 