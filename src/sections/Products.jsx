import React, { useState } from 'react';

const products = [
  {
    name: 'Apex 1',
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
    name: 'Apex 2',
    price: '£3,995',
    images: ['/images/hero3.png', '/images/hero3.png', '/images/hero3.png'],
    overview: {
      targetMarket: 'For creators and prosumers who need power and reliability.',
      animalAnalogy: 'Wolf - smart, adaptable, and works well in a pack.',
      tagline: 'Create without limits.',
      description: 'Apex 2 is built for those who multitask, create, and demand reliability. Perfect for editing, streaming, and gaming.'
    },
    features: {
      os: 'Windows 11 Home',
      ram: '64GB 5200MHz DDR5 (2 x 32GB)',
      storage: '1TB NVMe SSD / 2TB SATA HDD',
      cpu: 'Intel i9 4.2GHz / 12 Core / 60MB Cache',
      graphics: 'NVIDIA RTX4080 16GB / 4K Ready',
      connectivity: [
        '1GB LAN | Wifi 6 | Bluetooth 5.2',
        '2 x USB-C 3.1 | 2 x USB 3.0 | 2 x USB 2.0'
      ]
    }
  },
  {
    name: 'Apex 3',
    price: '£2,495',
    images: ['/images/hero4.png', '/images/hero4.png', '/images/hero4.png'],
    overview: {
      targetMarket: 'For everyday users and casual gamers.',
      animalAnalogy: 'Fox - clever, quick, and resourceful.',
      tagline: 'Smart performance.',
      description: 'Apex 3 is the perfect balance of performance and value. Great for work, play, and everything in between.'
    },
    features: {
      os: 'Windows 11 Home',
      ram: '32GB 4800MHz DDR4 (2 x 16GB)',
      storage: '512GB NVMe SSD',
      cpu: 'Intel i7 3.8GHz / 8 Core / 30MB Cache',
      graphics: 'NVIDIA RTX4060 8GB / FHD Ready',
      // No connectivity field for this product
    }
  }
];

function Products() {
  const [selected, setSelected] = useState(0);
  const product = products[selected];

  return (
    <section className="qtec-goals qtec-sectionMargin qtec-sectionPadding position-relative">
      <div className="container">
        <div className='row align-items-center'>
          <div className='col-12 col-lg-6 mb-4 '>
            <h2 className=" text-start">Featured Product</h2>
          </div>
          <div className='col-12 col-lg-6'>
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
          {products.map((p, idx) => (
            <button
              key={p.name}
              className={`qtec-btn fs-5 fw-bold px-4 mt-0 py-2 ${selected === idx ? 'active' : ''}`}
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
          <div className="col-lg-7 mb-2 d-flex flex-column align-items-center">
            
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

            <div className="col-md-12 mt-5">
                  <button className="w-100 qtec-btn m-0" type="submit">
                    <span>Buy Now</span>
                  </button>
                </div>
          </div>
          {/* Right: Product Content */}
          <div className="col-lg-5 mb-lg-0 d-flex flex-column justify-content-center mt-4 mt-lg-0">
            <div className="product-featured-clean p-0 w-100">
              <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                <div>
                  <span className="model-label minimal-label">MODEL</span>
                  <h2 className="fw-bold text-light mb-1" style={{ fontSize: '2.5em', letterSpacing: '1px' }}>{product.name}</h2>
                </div>
                <button className="qtec-btn fs-2 fw-bold price-btn-custom">{product.price}</button>
              </div>
              {/* Overview Table */}
              <div className="product-table-card minimal-table mb-4">
                <div className="vertical-label minimal-label-vertical">OVERVIEW</div>
                <div className="table-content">
                  <div className="row-table">
                    <div className="cell-label">TARGET MARKET</div>
                    <div className="cell-value">{product.overview.targetMarket}</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">ANIMAL ANALOGY</div>
                    <div className="cell-value"><b>{product.overview.animalAnalogy}</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">TAGLINE</div>
                    <div className="cell-value"><b>{product.overview.tagline}</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">DESCRIPTION</div>
                    <div className="cell-value">{product.overview.description}</div>
                  </div>
                </div>
              </div>
              {/* Features Table */}
              <div className="product-table-card minimal-table">
                <div className="vertical-label minimal-label-vertical">FEATURES</div>
                <div className="table-content">
                  <div className="row-table">
                    <div className="cell-label">OS</div>
                    <div className="cell-value"><b>{product.features.os}</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">RAM</div>
                    <div className="cell-value"><b>{product.features.ram}</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">STORAGE</div>
                    <div className="cell-value"><b>{product.features.storage}</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">CPU</div>
                    <div className="cell-value"><b>{product.features.cpu}</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">GRAPHICS</div>
                    <div className="cell-value"><b>{product.features.graphics}</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">CONNECTIVITY & PORTS</div>
                    <div className="cell-value">
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
    </section>
  );
}

export default Products; 