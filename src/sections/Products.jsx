import React, { useState } from 'react';

const products = [
  {
    name: 'Apex',
    price: '£4,995',
    images: ['/images/hero2.png', '/images/hero2.png', '/images/hero2.png'],
    overview: {
      targetMarket: 'For hardcore gamers and streamers who demand absolute dominance, no matter the setting.',
      animalAnalogy: 'Eagle - sharp, dominant, and rules from the top.',
      tagline: 'Dominate everything.',
      description: 'The Apex isn’t just a gaming PC – it’s your command centre, your war machine, your unfair advantage. Locked deep in a ranked grind, streaming to your fanbase or editing 8K footage – Apex doesn’t flinch.'
    },
    features: {
      os: 'Windows 11 Pro',
      ram: '128GB 5600MHz DDR5 (2 x 64GB)',
      storage: '2TB NVMe SSD / 2TB SATA HDD',
      cpu: 'AMD Ryzen 9 4.5GHz / 16 Core / 81MB Cache',
      graphics: 'Asus ROG STRIX RTX4090 24GB / 8K Ready',
      connectivity: [
        '2.5GB LAN | Wifi 7 | Bluetooth 5.4',
        '1 x USB-C 3.2 | 3 x USB 3.1 | 4 x USB 3.0 | 2 x USB 2.0'
      ]
    }
  },
  {
    name: 'Titan',
    price: '£3,495',
    images: ['/images/hero3.png', '/images/hero3.png', '/images/hero3.png'],
    overview: {
      targetMarket: `For creators and producers who push pixels, layers, and timelines to the limit — and expect perfection.'`,
      animalAnalogy: 'Bear - powerful, stable, and hard to stop.',
      tagline: 'Don’t cut corners, only content',
      description: `Titan is made for high-output, high state creative
                  work. Rendering films, mastering audio, designing
                  campaigns, and pushing 3d to the edge – Titan doesn’t
                  just keep up, it sets the pace.`
    },
    features: {
      os: 'Windows 11 Pro',
      ram: '64GB 6000MHz DDR5 (2 x 32GB)',
      storage: '2TB NVMe SSD / 2TB SATA HDD',
      cpu: 'Intel Core i9 / 24 Core 36MB Cache',
      graphics: 'Asus ProArt RTX4080 SUPER / 8K Ready',
      connectivity: [
        '2.5GB LAN',
        '1 x USB-C 3.1',
        '1 x USB 3.2',
        '4 x USB 3.2',
        '4 x USB 2.0'
      ]
    }
  },
  {
    name: 'Stike',
    price: '£2,495',
    images: ['/images/hero4.png', '/images/hero4.png', '/images/hero4.png'],
    overview: {
      targetMarket: 'For gamers ready to level up — blending competitive power with modern flexibility.',
      animalAnalogy: 'Wolf - strategic, balanced, and dependable in a pack',
      tagline: 'Strike faster. Stay sharp.',
      description: `Built for gamers who want more – more FPS, more
multitasking … more everything. From ranked matches
to campaigned grinds, this is the rig that keeps pace
with your skill.`
    },
    features: {
      os: 'Windows 11 Pro',
      ram: '32GB 3600MHz DDR (2 x 16GB)',
      storage: '1TB NVMe SSD',
      cpu: 'AMD Ryzen 7 3.0GHz / 8 Core / 100MB Cache',
      graphics: 'ASUS Dual GeForce RTX™ 8GB / 8K Ready',
      connectivity: [
        '2.5GB LAN',
        'WiFi 7',
        'Bluetooth 5.4',
        '1 x USB-C 3.2',
        '3 x USB 3.1',
        '4 x USB 3.0',
        '2 x USB 2.0'
      ]
    }
  },
  {
    name: 'Spark',
    price: '£1,395',
    images: ['/images/hero2.png', '/images/hero2.png', '/images/hero2.png'],
    overview: {
      targetMarket: `For professionals, students, and families who want
sleek, silent power at home — without compromise.`,
      animalAnalogy: 'Cheetah - compact, fast, and efficient',
      tagline: 'Speed in Silence. Power at Home.',
      description: `Effortless power, instant response, and precision where
it matters. The Spark isn’t just built to perform — it’s
crafted to impress. Quiet, sharp, and refined, it slips
into your space like it was always meant to be there.`
    },
    features: {
      os: 'Windows 11 Home',
      ram: '128GB 5600MHz DDR5 (2 x 64GB)',
      storage: '1TB NVMe SSD',
      cpu: 'AMD Ryzen 7 3.0GHz / 8 Core / 100MB Cache',
      graphics: 'Nvidia RTX 3060 12GB / 8K Ready',
      connectivity: [
        'Gigabit LAN',
        'WiFi',
        '2 x USB 2.0',
        '3 x USB 3.2',
        '1 x USB-C 3.2'
      ]
    }
  },
  {
    name: 'Canvas',
    price: '£2,495',
    images: ['/images/hero4.png', '/images/hero4.png', '/images/hero4.png'],
    overview: {
      targetMarket: `For designers and visual creatives who need fast,
precise, and seamless performance across every tool.`,
      animalAnalogy: `Fox - clever, creative, and precise`,
      tagline: 'This is your Canvas',
      description: `Whether you’re working in Adobe, Figma, Affinity or
Blender – Canvas keeps everything sharp, responsive
and stitched together. High-res files? Multi-monitor
workflows? Realtime previews? No problem.`,
    },
    features: {
      os: 'Windows 11 Pro',
      ram: '64GB 3600MHz DDR4 (2 x 32GB)',
      storage: '2TB NVMe SSD / 2TB SATA HDD',
      cpu: 'Intel Core i7 / 2.1GHz / 16 Core / 30MB Cache',
      graphics: 'Asus DUAL RTX4060 Ti 8MB / 8K Ready',
      connectivity: [
        '2.5GB LAN',
        '1 x USB-C 3.1',
        '1 x USB 3.2',
        '4 x USB 3.2',
        '4 x USB 2.0'
      ]
    }
  }
];

function Products() {
  const [selected, setSelected] = useState(0);
  const product = products[selected];

  return (
    <section id='featured_section' className="qtec-goals qtec-sectionMargin qtec-sectionPadding position-relative">
      <div className="container">
        <div className='row align-items-center'>
          <div className='col-12 col-lg-6 mb-4 '>
            <h2 className=" goals-title text-start">Our Range</h2>
          </div>
          <div className='col-12 col-lg-6'>
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4 ps-lg-5">
          {products.map((p, idx) => (
            <button
              key={p.name}
              className={`qtec-btn prod_tab_btn fs-5 fw-bold px-4 mt-0 py-2 ${selected === idx ? 'active' : ''}`}
              style={{
                borderRadius: '2em',
                background: selected === idx ? '#222' : '#eee',
                color: selected === idx ? '#fff' : '#222',
                border: 'none',
                outline: 'none',
                transition: 'all 0.2s',
                boxShadow: selected === idx ? '0 4px 16px rgba(44,44,60,0.12)' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => setSelected(idx)}
            >
              {p.name}
            </button>
          ))}
        </div>
          </div>
        </div>
        {/* Tabs */}
        
        <div className="row align-items-start justify-content-center flex-lg-nowrap goals-gap-x">
          {/* Left: Product Images */}
          <div className="col-lg-6 mb-2 d-flex flex-column align-items-stretch">
            
            <div className="featured-product-img-wrapper clean-img-wrapper mb-3 main-img-bg p-0 w-100 d-flex align-items-center justify-content-center">
              <img
                src={product.images[0]}
                alt={product.name}
                className="img-fluid w-100 rounded-4 shadow main-product-img"
                style={{
                  height: 'auto',
                  objectFit: 'cover',
                  background: '#222',
                  borderRadius: '1.5em',
                  border: '2px solid #222',
                }}
              />
            </div>
            <div className="row w-full">
              <div className="col-6 col-md-6 d-flex justify-content-center">
                <div className="featured-product-img-wrapper clean-img-wrapper thumb-img-bg p-0 w-100 d-flex align-items-center justify-content-center">
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="img-fluid w-100 rounded-4 shadow-sm thumb-product-img"
                    style={{
                      height: 'auto',
                      objectFit: 'cover',
                      background: '#222',
                      borderRadius: '1em',
                      border: '2px solid rgb(34, 34, 34)',
                    }}
                  />
                </div>
              </div>
              <div className="col-6 col-md-6 d-flex justify-content-center">
                <div className="featured-product-img-wrapper clean-img-wrapper thumb-img-bg p-0 w-100 d-flex align-items-center justify-content-center">
                  <img
                    src={product.images[2]}
                    alt={product.name}
                    className="img-fluid w-100 rounded-4 shadow-sm thumb-product-img"
                    style={{
                      height: 'auto',
                      objectFit: 'cover',
                      background: '#222',
                      borderRadius: '1em',
                      border: '2px solid rgb(34, 34, 34)',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-lg-5 mt-4">
                  <button className="w-100 qtec-btn m-0 buybtn" type="submit">
                    <span>Buy Now</span>
                  </button>
                </div>
          </div>
          {/* Right: Product Content */}
          <div className="col-lg-6 mb-lg-0 d-flex flex-column justify-content-center mt-4 mt-lg-0">
            <div className="product-featured-clean p-0 w-100 ps-lg-5">
              <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                <div>
                  <span className="model-label minimal-label">MODEL</span>
                  <h2 className="product-titlefw-bold text-light mb-1">{product.name}</h2>
                </div>
                <p className="fs-2 fw-bold price-btn-custom">{product.price}</p>
              </div>
              {/* Overview Table */}
              <div className='table__wrapper'>
              <div className="product-table-card minimal-table mb-4">
                <div className="vertical-label minimal-label-vertical">OVERVIEW</div>
                <div className="table-content">
                  <div className="row-table">
                    <div className="cell-label">TARGET MARKET</div>
                    <div className="cell-value">{product.overview.targetMarket}</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">ANIMAL ANALOGY</div>
                    <div className="cell-value">{product.overview.animalAnalogy}</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">TAGLINE</div>
                    <div className="cell-value">{product.overview.tagline}</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">DESCRIPTION</div>
                    <div className="cell-value">{product.overview.description}</div>
                  </div>
                </div>
              </div>
              {/* Features Table */}
              <div className="product-table-card minimal-table mb-0">
                <div className="vertical-label minimal-label-vertical">FEATURES</div>
                <div className="table-content">
                  <div className="row-table">
                    <div className="cell-label">OS</div>
                    <div className="cell-value">{product.features.os}</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">RAM</div>
                    <div className="cell-value">{product.features.ram}</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">STORAGE</div>
                    <div className="cell-value">{product.features.storage}</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">CPU</div>
                    <div className="cell-value">{product.features.cpu}</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">GRAPHICS</div>
                    <div className="cell-value">{product.features.graphics}</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">CONNECTIVITY & PORTS</div>
                    <div className="cell-value connectivity-cell">
                      {product.features.connectivity ? (
                        product.features.connectivity.map((c, i) => <div key={i}>{c}</div>)
                      ) : (
                        <span>NA</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products; 