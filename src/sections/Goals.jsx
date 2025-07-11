function Goals() {
  return (
    <section className="qtec-goals qtec-sectionMargin qtec-sectionPadding position-relative">
      <div className="container">
        <div className="row align-items-start justify-content-center flex-lg-nowrap goals-gap-x">
          {/* Left: Product Image */}
          <div className="col-lg-7 mb-2">
            <h2 className="mb-lg-5 mb-4">Featured Product</h2>
          <div className="featured-product-img-wrapper clean-img-wrapper" style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'0'}}>
              <img src="/images/hero2.png" alt="Apex" className="rounded-4 clean-featured-img" style={{width:'100%',height:'auto',objectFit:'cover',background:'#222',boxShadow:'0 8px 32px 0 rgba(44,44,60,0.18), 0 0 0 2px #e0e0e0'}} />
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <div className="featured-product-img-wrapper clean-img-wrapper" style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'0'}}>
                  <img src="/images/hero2.png" alt="Apex" className="rounded-4 clean-featured-img" style={{width:'100%',height:'auto',objectFit:'cover',background:'#222',boxShadow:'0 8px 32px 0 rgba(44,44,60,0.18), 0 0 0 2px #e0e0e0'}} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="featured-product-img-wrapper clean-img-wrapper" style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'0'}}>
                  <img src="/images/hero2.png" alt="Apex" className="rounded-4 clean-featured-img" style={{width:'100%',height:'auto',objectFit:'cover',background:'#222',boxShadow:'0 8px 32px 0 rgba(44,44,60,0.18), 0 0 0 2px #e0e0e0'}} />
                </div>
              </div>
            </div>
          </div>
          {/* Right: Product Content */}
          <div className="col-lg-5 mb-lg-0 d-flex flex-column justify-content-center">
            <div className="product-featured-clean p-0 w-100">
              <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                <div>
                  <span className="model-label minimal-label">Model</span>
                  <h2 className="fw-bold text-light mb-1" style={{fontSize:'2.5em',letterSpacing:'1px'}}>Apex</h2>
                </div>
                <span className="fs-2 fw-bold price-label minimal-badge">£4,995</span>
              </div>
              {/* Overview Table */}
              <div className="product-table-card minimal-table mb-4">
                <div className="vertical-label minimal-label-vertical">OVERVIEW</div>
                <div className="table-content">
                  <div className="row-table">
                    <div className="cell-label">Target Market</div>
                    <div className="cell-value">For hardcore gamers and streamers who demand absolute dominance, no matter the setting.</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">Animal Analogy</div>
                    <div className="cell-value"><b>Eagle</b> - sharp, dominant, and rules from the top.</div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">Tagline</div>
                    <div className="cell-value"><b>Dominate everything.</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">Description</div>
                    <div className="cell-value">The Apex isn’t just a gaming PC – it’s your command centre, your war machine, your unfair advantage. Locked deep in a ranked grind, streaming to your fanbase or editing 8K footage – Apex doesn’t flinch.</div>
                  </div>
                </div>
              </div>
              {/* Features Table */}
              <div className="product-table-card minimal-table">
                <div className="vertical-label minimal-label-vertical">FEATURES</div>
                <div className="table-content">
                  <div className="row-table">
                    <div className="cell-label">OS</div>
                    <div className="cell-value"><b>Windows 11 Pro</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">RAM</div>
                    <div className="cell-value"><b>128GB 5600MHz DDR5 (2 x 64GB)</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">Storage</div>
                    <div className="cell-value"><b>2TB NVMe SSD</b> <span className="mx-2">/</span> <b>2TB SATA HDD</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">CPU</div>
                    <div className="cell-value"><b>AMD Ryzen 9 4.5GHz</b> <span className="mx-2">/</span> <b>16 Core</b> <span className="mx-2">/</span> <b>81MB Cache</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">Graphics</div>
                    <div className="cell-value"><b>Asus ROG STRIX RTX4090 24GB</b> <span className="mx-2">/</span> <b>8K Ready</b></div>
                  </div>
                  <div className="row-table">
                    <div className="cell-label">Connectivity & Ports</div>
                    <div className="cell-value">
                      <div>2.5GB LAN &nbsp; | &nbsp; Wifi 7 &nbsp; | &nbsp; Bluetooth 5.4</div>
                      <div>1 x USB-C 3.2 &nbsp; | &nbsp; 3 x USB 3.1 &nbsp; | &nbsp; 4 x USB 3.0 &nbsp; | &nbsp; 2 x USB 2.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Goals 