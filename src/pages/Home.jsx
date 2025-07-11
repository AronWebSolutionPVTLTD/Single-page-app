import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Loader from '../sections/Loader'
import Navbar from '../sections/Navbar'
import SideNav from '../sections/SideNav'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Goals from '../sections/Goals'
import Portfolio from '../sections/Portfolio'
import Pricing from '../sections/Pricing'
import Blog from '../sections/Blog'
import Social from '../sections/Social'
import ContactForm from '../sections/ContactForm'
import Footer from '../sections/Footer'
import CustomCursor from '../sections/CustomCursor'
import Product from '../sections/Skills'

function Home() {
  const [loading, setLoading] = useState(true)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    // Loader animation
    const duration = 3000
    const stepTime = 10
    const totalSteps = duration / stepTime
    const increment = 100 / totalSteps

    const interval = setInterval(() => {
      setPercentage(prev => {
        const newPercentage = prev + increment
        if (newPercentage >= 100) {
          clearInterval(interval)
          setLoading(false)
          return 100
        }
        return newPercentage
      })
    }, stepTime)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!loading) {
      gsap.registerPlugin(ScrollTrigger, SplitText)
      // Custom cursor functionality
      const customCursor = document.querySelector('.qtec-cursor')
      const handleMouseMove = (e) => {
        customCursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`
        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
        if (
          hoveredElement?.tagName === 'A' ||
          getComputedStyle(hoveredElement).cursor === 'pointer'
        ) {
          customCursor.classList.add('hovering-link')
        } else {
          customCursor.classList.remove('hovering-link')
        }
      }
      document.addEventListener('mousemove', handleMouseMove)
      // GSAP text, mask, and image animations
      document.querySelectorAll('.text-anim').forEach((element) => {
        const split = new SplitText(element, { type: 'chars' })
        const chars = split.chars
        gsap.from(chars, {
          scrollTrigger: {
            trigger: element,
            start: '10% 50%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 10,
          stagger: 0.03,
          duration: 0.2,
          ease: 'power2.out',
        })
      })
      document.querySelectorAll('.qtecMask').forEach((el) => {
        gsap.to(el, {
          x: '100%',
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: '10% 50%',
            toggleActions: 'play none none none',
          },
        })
      })
      document.querySelectorAll('.animateImg').forEach((el) => {
        gsap.to(el, {
          scale: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: '10% 50%',
            toggleActions: 'play none none none',
          },
        })
      })
      // Counter animations
      const counterText = document.querySelectorAll('.qtec-h4 .numCounter')
      const barText = document.querySelectorAll('.inner .numCounter')
      const Inner = document.querySelectorAll('.inner')
      counterText.forEach(function (counter, i) {
        if (barText[i]) {
          barText[i].innerText = counter.innerText
          Inner[i].style.width = counter.innerText + '%'
        }
      })
      // Nav link animations
      const qtecNav = document.querySelectorAll('.qtec-navLinks li')
      qtecNav.forEach(function (container) {
        const link = container.querySelector('a')
        const span = container.querySelector('span')
        if (link && span) {
          span.innerText = link.innerText
        }
      })
      // Cleanup
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [loading])

  return (
    <>
      <Loader percentage={percentage} loading={loading} />
      {!loading && (
        <div className="qtech-body">
          <Navbar />
          <SideNav />
          <Hero />
     <About />
     <Goals />
          <Product />
          
          {/* <Portfolio /> */}
          {/* <Pricing /> */}
          {/* <Blog /> */}
          {/* <Social /> */}
          <ContactForm />
          <Footer />
          <CustomCursor />
        </div>
      )}
    </>
  )
}

export default Home 