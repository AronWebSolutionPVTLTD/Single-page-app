import { useState } from 'react'

function About() {
  const [activeTab, setActiveTab] = useState('vision')

  const tabs = [
    { id: 'vision', label: 'Our Vision', active: activeTab === 'vision' },
    { id: 'about', label: 'About Us', active: activeTab === 'about' },
    { id: 'founders', label: 'Founders', active: activeTab === 'founders' }
  ]

  const tabContent = {
    vision: (
      <div className="tab-content">
        <p className="qtec-desc text-anims mb-4">
          Obelixis is a trusted, design-led computer brand for creators, gamers, and professionals who expect more from their machines.
        </p>
        <p className="qtec-desc text-anims mb-4">
          We believe performance should be powerful, beautiful, and effortless. Whether you're editing 4K video, winning online matches, or choosing a system that makes a statement, it should feel seamless. Our machines are not just spec sheets. They are engineered with precision, personality, and pride. We combine cutting-edge components with bold identity and a design that puts people first. The result is a PC you don't just use — you connect with. We care more about what's inside the system than how many lights it has. LEDs don't improve performance… components do.
        </p>
      </div>
    ),
    about: (
      <div className="tab-content">
        <p className="qtec-desc text-anims mb-4">
          Reece and Jamie are an ambitious duo based in the UK, made up of tech lovers, designers, and creators. After spending years in the industry, we saw the same problems everywhere: overpriced machines, forgettable branding, unclear specifications, and uninspired design. So, we decided to create something better.
        </p>
        <p className="qtec-desc text-anims mb-4">
          Our systems are curated, not cluttered. Each product line is built with intention — from reliable home PCs for professionals to showpiece rigs made to impress.
        </p>
        <p className="qtec-desc text-anims">
          We aim to bring clarity, performance, and creative energy to your workspace. Our goal is to help the next generation of gamers, creators, and innovators find the perfect machine to match their vision.
        </p>
      </div>
    ),
    founders: (
      <div className="tab-content">
        <p className="qtec-desc text-anims">
          Obelixis is led by Jamie and Reece, two lifelong friends with over 20 years of experience building computers together. Jamie is a software developer and solution architect in the finance sector, working with some of the most demanding companies in the world. He understands exactly what is required to run complex systems with ease. Reece is a compliance expert with a keen eye for detail. Quality control is second nature to both, and every system they build reflects that shared mindset. Every Obelixis machine is carefully constructed and rigorously tested to ensure it performs at its absolute best.
        </p>
      </div>
    )
  }

  return (
  
        <section className="qtec-about qtec-sectionMargin" id="about">
          <div className="container">
            {/* About Us Tag */}
            <h3 className="qtec-tag mb-4 text-center">
              About us
            </h3>
            
            {/* About Us - Stats and Tabs Side by Side with Proper Spacing */}
            <div className="row align-items-start mb-md-5 g-lg-5 g-3">
              {/* Left Column - Stats Section (50%) */}
              <div className="col-lg-6 col-md-12">
                <div className="stats-section-wrapper h-100 d-flex flex-column justify-content-center">
                  {/* Stats arranged in single column */}
                  <div className="stats-container">
                    <div className="row g-4">
                      <div className="col-12 col-md-4 col-lg-12">
                        <div className="about-stat-card">
                          <div className="about-stat-row">
                            <img src="/images/lauch.svg" alt="progress icon" className="about-stat-icon" />
                            <h4 className="about-stat-number">20<span className="about-stat-plus">+</span></h4>
                          </div>
                          <div className="about-stat-label">Years of combined experience building computers</div>
                        </div>
                      </div>
                      
                      <div className="col-12 col-md-4 col-lg-12">
                        <div className="about-stat-card">
                          <div className="about-stat-row">
                            <img src="/images/innovation.svg" alt="progress icon" className="about-stat-icon" />
                            <h4 className="about-stat-number">100<span className="about-stat-percent">%</span></h4>
                          </div>
                          <div className="about-stat-label">Quality tested systems with rigorous standards</div>
                        </div>
                      </div>
                      
                      <div className="col-12 col-md-4 col-lg-12">
                        <div className="about-stat-card">
                          <div className="about-stat-row">
                            <img src="/images/production.svg" alt="progress icon" className="about-stat-icon" />
                            <h4 className="about-stat-number">0</h4>
                          </div>
                          <div className="about-stat-label">Compromises on performance or design</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Content (50%) */}
              <div className="col-lg-6 col-md-12">
                <div className="about-content-wrapper h-100 d-flex flex-column justify-content-center">
                  {/* Tab Navigation */}
                  <div className="tab-navigation mb-0 mb-md-4">
                    <div className="row g-3 m-0">
                      {tabs.map((tab) => (
                        <div key={tab.id} className="col-4 p-0">
                          <button
                            className={`tab-button ${tab.active ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                          >
                            {tab.label}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tab Content */}
                  <div className="tab-content-wrapper">
                    {tabContent[activeTab]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }


export default About 