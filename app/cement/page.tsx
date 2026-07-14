export default function CementPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0f172a' }}>
      <style>{`
        .cem *{box-sizing:border-box}
        .cem{font-family:'Inter',sans-serif;color:#fff;overflow-x:hidden}
        .cem a{text-decoration:none;color:inherit}
        .cem img{display:block}
        .cem-hero{background:linear-gradient(135deg,#020617 0%,#0f172a 40%,#1e293b 70%,#334155 100%);min-height:560px;display:flex;align-items:center;padding:60px 48px;position:relative;overflow:hidden}
        .cem-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(100,116,139,0.15),transparent)}
        .cem-hero-left{flex:1;max-width:580px;position:relative;z-index:2}
        .cem-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(100,116,139,0.15);border:1px solid rgba(100,116,139,0.4);color:#64748b;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:7px 16px;border-radius:20px;margin-bottom:26px;text-transform:uppercase}
        .cem-hero h1{font-size:52px;font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:20px}
        .cem-hero h1 .c-pri{color:#2dd4bf;display:block}
        .cem-desc{font-size:15.5px;color:#94a3b8;line-height:1.8;max-width:460px;margin-bottom:32px}
        .cem-stats{display:flex;gap:32px;margin-bottom:36px}
        .cem-hs-num{font-size:28px;font-weight:900;color:#64748b;line-height:1}
        .cem-hs-lbl{font-size:12px;color:#94a3b8;margin-top:3px}
        .cem-hero-btns{display:flex;gap:12px;flex-wrap:wrap}
        .cem-btn-pri{background:#475569;color:#fff;padding:14px 28px;font-weight:700;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px;transition:background .2s}
        .cem-btn-pri:hover{background:#334155}
        .cem-btn-drk{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;padding:14px 28px;font-weight:600;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px}
        .cem-hero-right{position:relative;z-index:2;flex-shrink:0;margin-left:52px}
        .cem-img-wrap{position:relative;width:560px;height:400px;border-radius:12px;overflow:hidden}
        .cem-img-wrap img{width:100%;height:100%;object-fit:cover}
        .cem-fc{position:absolute;background:white;color:#000;border-radius:10px;padding:11px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,.4)}
        .cem-fc.tr{top:-14px;right:-14px}
        .cem-fc-icon{width:34px;height:34px;background:#16a34a;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
        .cem-fc .fn{font-size:18px;font-weight:900;color:#000;line-height:1}
        .cem-fc .fl{font-size:11px;color:#666;margin-top:2px}
        .cem-fc.bl{bottom:-14px;left:-14px;background:#475569;color:white;border-radius:10px;padding:12px 18px}
        .cem-fc.bl .fn{font-size:22px;font-weight:900;color:white}
        .cem-fc.bl .fl{font-size:11px;color:rgba(255,255,255,.8);margin-top:2px}
        .cem-fc-cert{position:absolute;bottom:-14px;right:20px;background:rgba(13,27,46,.95);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:11px 16px}
        .cem-fc-cert p{font-size:11px;color:#94a3b8;margin-bottom:3px}
        .cem-fc-cert strong{font-size:12px;font-weight:700;color:white}

        .cem-stats-sec{background:linear-gradient(180deg,#020617,#1e293b);padding:52px 48px}
        .cem-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1280px;margin:0 auto}
        .cem-sc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px 24px;text-align:center;transition:border-color .2s}
        .cem-sc:hover{border-color:rgba(100,116,139,0.4)}
        .cem-sc-icon{width:52px;height:52px;background:#475569;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 18px}
        .cem-sc .num{font-size:44px;font-weight:900;color:#fff;line-height:1;margin-bottom:6px}
        .cem-sc .lbl{font-size:13px;color:#94a3b8}

        .cem-vc-section{background:#fff;padding:80px 48px;color:#111}
        .cem-sec-center{text-align:center;margin-bottom:52px;max-width:1280px;margin-left:auto;margin-right:auto}
        .cem-tag-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(100,116,139,0.15);border:1px solid rgba(13,148,136,.3);color:#475569;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:6px 16px;border-radius:20px;margin-bottom:16px;text-transform:uppercase}
        .cem-vc-section h2{font-size:38px;font-weight:900;color:#111;letter-spacing:-1.5px;margin-bottom:10px}
        .cem-vc-section h2 span{color:#475569}
        .cem-sec-sub{font-size:15px;color:#666;max-width:480px;margin:0 auto}
        .cem-vc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1280px;margin:0 auto}
        .cem-vcc{border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;transition:box-shadow .25s,transform .25s}
        .cem-vcc:hover{transform:translateY(-5px);box-shadow:0 20px 48px rgba(0,0,0,.1)}
        .cem-vch{padding:26px 26px 22px;position:relative;overflow:hidden}
        .cem-vch.c1{background:linear-gradient(135deg,#475569,#334155)}
        .cem-vch.c2{background:linear-gradient(135deg,#16a34a,#15803d)}
        .cem-vch.c3{background:linear-gradient(135deg,#1e3a8a,#1e293b)}
        .cem-vch::after{content:'';position:absolute;top:-30px;right:-30px;width:110px;height:110px;border-radius:50%;background:rgba(255,255,255,.1)}
        .cem-vch-icon{width:46px;height:46px;background:rgba(255,255,255,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:21px;margin-bottom:14px}
        .cem-vch h3{font-size:21px;font-weight:800;color:white;margin-bottom:3px}
        .cem-vch p{font-size:12px;color:rgba(255,255,255,.75);font-weight:500}
        .cem-vcb{padding:22px 26px}
        .cem-vcb .desc{font-size:13.5px;color:#555;line-height:1.65;margin-bottom:16px}
        .cem-vcm{display:flex;gap:24px;margin-bottom:18px;padding-bottom:16px;border-bottom:1px solid #f0f0f0}
        .cem-vm-val{font-size:19px;font-weight:800;color:#111}
        .cem-vm-val.g{color:#16a34a}
        .cem-vm-lbl{font-size:11.5px;color:#888;margin-top:2px}
        .cem-vc-list{list-style:none;display:flex;flex-direction:column;gap:9px}
        .cem-vc-list li{display:flex;align-items:center;gap:9px;font-size:13.5px;color:#444}
        .cem-vc-list li::before{content:'✓';width:19px;height:19px;min-width:19px;background:#d1fae5;color:#16a34a;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800}

        .cem-safety{position:relative;padding:90px 48px;text-align:center;overflow:hidden}
        .cem-s-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .cem-s-ov{position:absolute;inset:0;background:rgba(6,16,32,.85)}
        .cem-s-cnt{position:relative;z-index:2;max-width:1100px;margin:0 auto}
        .cem-s-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(100,116,139,0.15);border:1px solid rgba(100,116,139,0.4);color:#64748b;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:6px 16px;border-radius:20px;margin-bottom:20px;text-transform:uppercase}
        .cem-safety h2{font-size:42px;font-weight:900;letter-spacing:-1.5px;margin-bottom:14px}
        .cem-safety h2 span{color:#64748b}
        .cem-s-sub{font-size:15.5px;color:rgba(255,255,255,.6);max-width:540px;margin:0 auto 48px;line-height:1.7}
        .cem-s-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:24px}
        .cem-s-card{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:22px 18px;text-align:left;backdrop-filter:blur(8px)}
        .cem-s-card-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
        .cem-s-card-ico{width:34px;height:34px;background:rgba(100,116,139,0.15);border:1px solid rgba(100,116,139,0.4);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;color:#64748b}
        .cem-s-val{font-size:22px;font-weight:900;color:#64748b}
        .cem-s-card h4{font-size:13px;font-weight:700;color:white;margin-bottom:5px}
        .cem-s-card p{font-size:12px;color:rgba(255,255,255,.5);line-height:1.55}
        .cem-cert-row{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:18px 28px;display:flex;align-items:center;justify-content:center;gap:32px;flex-wrap:wrap}
        .cem-ci{display:flex;align-items:center;gap:9px}
        .cem-ci-chk{color:#64748b;font-size:15px}
        .cem-ci strong{font-size:13px;color:white;font-weight:700}
        .cem-ci span{font-size:11px;color:rgba(255,255,255,.5);display:block;margin-top:1px}

        .cem-lifecycle{background:#fff;padding:80px 48px;color:#111}
        .cem-lifecycle h2{font-size:38px;font-weight:900;color:#111;letter-spacing:-1.5px;margin-bottom:10px}
        .cem-lifecycle h2 span{color:#475569}
        .cem-tl{position:relative;display:grid;grid-template-columns:repeat(6,1fr);gap:0;margin-top:56px;max-width:1280px;margin-left:auto;margin-right:auto}
        .cem-tl::before{content:'';position:absolute;top:38px;left:6.5%;right:6.5%;height:3px;background:linear-gradient(90deg,#475569,#334155,#1e293b,#334155,#475569,#111827);z-index:0}
        .cem-tl-s{text-align:center;position:relative;z-index:1;padding:0 8px}
        .cem-tl-ico{width:76px;height:76px;background:#475569;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 16px;position:relative;z-index:1;transition:transform .2s}
        .cem-tl-s:last-child .cem-tl-ico{background:#111827}
        .cem-tl-s:hover .cem-tl-ico{transform:scale(1.08)}
        .cem-tl-num{font-size:10px;font-weight:700;letter-spacing:1.5px;color:#999;margin-bottom:7px;text-transform:uppercase}
        .cem-tl-s h4{font-size:15px;font-weight:800;color:#111;margin-bottom:7px}
        .cem-tl-s p{font-size:12px;color:#666;line-height:1.6}

        .cem-cta{background:linear-gradient(135deg,#020617,#1e293b,#334155);padding:72px 48px;text-align:center;position:relative;overflow:hidden}
        .cem-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(100,116,139,0.15),transparent)}
        .cem-cta h2{font-size:38px;font-weight:900;letter-spacing:-1.5px;margin-bottom:12px;position:relative}
        .cem-cta h2 span{color:#64748b}
        .cem-cta p{color:#94a3b8;font-size:16px;max-width:480px;margin:0 auto 32px;line-height:1.7;position:relative}
        .cem-cta-btns{display:flex;justify-content:center;gap:12px;position:relative;flex-wrap:wrap}

        @media (max-width: 900px){
          .cem-hero{flex-direction:column;padding:48px 24px}
          .cem-hero-right{margin-left:0;margin-top:40px}
          .cem-img-wrap{width:100%;max-width:440px}
          .cem-stats-grid{grid-template-columns:repeat(2,1fr)}
          .cem-vc-grid{grid-template-columns:1fr}
          .cem-s-cards{grid-template-columns:repeat(2,1fr)}
          .cem-tl{grid-template-columns:repeat(2,1fr);gap:32px}
          .cem-tl::before{display:none}
          .cem-hero h1{font-size:38px}
        }
      
        @media (max-width: 600px){
          .cem-hero{padding: 40px 24px !important}
          .cem-hero h1{font-size:32px !important;line-height:1.1 !important;letter-spacing:-1px !important}
          .cem-img-wrap{height:250px !important}
          .cem-stats{flex-direction:row !important;justify-content:flex-start !important;gap:28px !important;margin-bottom:28px !important}
          .cem-hs-num{font-size:26px !important}
          .cem-hs-lbl{color:#cbd5e1 !important;font-weight:600 !important}
          .cem-stats-grid{grid-template-columns:1fr !important}
          .cem-s-cards{grid-template-columns:1fr !important}
          .cem-tl{grid-template-columns:1fr !important;gap:24px !important}
          .cem-stats-sec{padding:32px 24px !important}
          .cem-vc-section{padding:48px 24px !important}
          .cem-lifecycle{padding:48px 24px !important}
          .cem-safety{padding:48px 24px !important}
          .cem-vc-section h2{font-size:28px !important}
          .cem-safety h2{font-size:28px !important}
          .cem-lifecycle h2{font-size:28px !important}
          .cem-cta{padding:48px 24px !important}
          .cem-cta h2{font-size:28px !important}
          .cem-cert-row{flex-direction:column !important;align-items:flex-start !important;gap:16px !important;padding:16px 20px !important}
          .cem-fc{display:none !important}
          .cem-fc-cert{display:none !important}
        }
      `} </style>

      <div className="cem">
        {/* BACK LINK */}
        <div className="px-6 md:px-12 py-5" style={{ background: '#020617' }}>
          <a href="/#industries" style={{ color: '#64748b', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            ← Back to Industries
          </a>
        </div>

        {/* HERO */}
        <section className="cem-hero">
          <div className="cem-hero-left">
            <div className="cem-badge">🏗️ CEMENT INDUSTRY SOLUTIONS</div>
            <h1>Building the Foundation of<span className="c-pri">Modern Infrastructure</span></h1>
            <p className="cem-desc">Heavy-duty equipment and reliable sourcing for modern cement production plants. We provide robust solutions that endure high temperatures and intense wear.</p>
            <div className="cem-stats">
              <div><div className="cem-hs-num">100+</div><div className="cem-hs-lbl">Projects</div></div>
              <div><div className="cem-hs-num">15+</div><div className="cem-hs-lbl">Years</div></div>
              <div><div className="cem-hs-num">10+</div><div className="cem-hs-lbl">Countries</div></div>
            </div>
            <div className="cem-hero-btns">
              <a href="/contact" className="cem-btn-pri">Request Quote →</a>
              <a href="/#products" className="cem-btn-drk">▶ View Products</a>
            </div>
          </div>
          <div className="cem-hero-right">
            <div className="cem-img-wrap">
              <img src="/industries/cement.jfif" alt="cement industry" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="cem-stats-sec">
          <div className="cem-stats-grid">
            <div className="cem-sc"><div className="cem-sc-icon">📋</div><div className="num">100+</div><div className="lbl">Projects Delivered</div></div>
            <div className="cem-sc"><div className="cem-sc-icon">🏆</div><div className="num">15+</div><div className="lbl">Years Experience</div></div>
            <div className="cem-sc"><div className="cem-sc-icon">🌐</div><div className="num">10+</div><div className="lbl">Countries Served</div></div>
            <div className="cem-sc"><div className="cem-sc-icon">⛑️</div><div className="num">Zero</div><div className="lbl">Compromises</div></div>
          </div>
        </section>

        {/* VALUE CHAIN */}
        <section className="cem-vc-section">
          <div className="cem-sec-center">
            <div className="cem-tag-pill">🔗 VALUE CHAIN COVERAGE</div>
            <h2 dangerouslySetInnerHTML={{ __html: 'Complete <span>Cement</span> Value Chain' }}></h2>
            <p className="cem-sec-sub">End-to-end sourcing for every critical process in cement manufacturing</p>
          </div>
          <div className="cem-vc-grid">
            <div className="cem-vcc">
              <div className="cem-vch c1"><div className="cem-vch-icon">⛏️</div><h3>Raw Material</h3><p>Quarrying & Crushing</p></div>
              <div className="cem-vcb">
                <p className="desc">Heavy machinery parts for limestone extraction, crushing, and raw material transport.</p>
                <div className="cem-vcm"><div><div className="cem-vm-val">Reliable</div><div className="cem-vm-lbl">Sourcing</div></div><div><div className="cem-vm-val g">Tested</div><div className="cem-vm-lbl">Quality</div></div></div>
                <ul className="cem-vc-list">
                  <li>Crusher spares</li>
                  <li>Conveyor systems</li>
                  <li>Heavy duty bearings</li>
                  <li>Wear resistant plates</li>
                </ul>
              </div>
            </div>
            <div className="cem-vcc">
              <div className="cem-vch c2"><div className="cem-vch-icon">🔥</div><h3>Clinker</h3><p>Preheating & Kiln</p></div>
              <div className="cem-vcb">
                <p className="desc">High-temperature components for rotary kilns and preheater cyclones.</p>
                <div className="cem-vcm"><div><div className="cem-vm-val">Genuine</div><div className="cem-vm-lbl">Parts</div></div><div><div className="cem-vm-val g">Verified</div><div className="cem-vm-lbl">Performance</div></div></div>
                <ul className="cem-vc-list">
                  <li>Refractory materials</li>
                  <li>Kiln rollers</li>
                  <li>Burner components</li>
                  <li>High-temp seals</li>
                </ul>
              </div>
            </div>
            <div className="cem-vcc">
              <div className="cem-vch c3"><div className="cem-vch-icon">⚙️</div><h3>Milling</h3><p>Grinding & Dispatch</p></div>
              <div className="cem-vcb">
                <p className="desc">Milling equipment parts and bagging machinery components for the final product.</p>
                <div className="cem-vcm"><div><div className="cem-vm-val">On-Time</div><div className="cem-vm-lbl">Delivery</div></div><div><div className="cem-vm-val g">Durable</div><div className="cem-vm-lbl">Materials</div></div></div>
                <ul className="cem-vc-list">
                  <li>Ball mill spares</li>
                  <li>Separator parts</li>
                  <li>Packaging equipment</li>
                  <li>Bulk loading systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section className="cem-safety">
          <img className="cem-s-bg" src="/industries/cement 1.jfif" alt="Industry safety background" />
          <div className="cem-s-ov"></div>
          <div className="cem-s-cnt">
            <div className="cem-s-tag">🛡️ HEALTH, SAFETY &amp; ENVIRONMENT</div>
            <h2>Quality is Our <span>Core Value</span></h2>
            <p className="cem-s-sub">Genuine parts, zero compromises. Our commitment to quality protects your operations and people.</p>
            <div className="cem-s-cards">
              <div className="cem-s-card"><div className="cem-s-card-top"><div className="cem-s-card-ico">🛡️</div><div className="cem-s-val">100%</div></div><h4>Genuine Parts</h4><p>Sourced directly from authorized brand distributors and manufacturers</p></div>
              <div className="cem-s-card"><div className="cem-s-card-top"><div className="cem-s-card-ico">⚡</div><div className="cem-s-val">Fast</div></div><h4>Delivery Times</h4><p>Reliable and timely delivery across Pakistan and globally</p></div>
              <div className="cem-s-card"><div className="cem-s-card-top"><div className="cem-s-card-ico">🌿</div><div className="cem-s-val">100%</div></div><h4>Compliance</h4><p>Full documentation and compliance for all supplied equipment</p></div>
              <div className="cem-s-card"><div className="cem-s-card-top"><div className="cem-s-card-ico">✅</div><div className="cem-s-val">QA</div></div><h4>Quality Assurance</h4><p>Strict quality checks on every product before dispatch</p></div>
            </div>
            <div className="cem-cert-row">
              <div className="cem-ci"><span className="cem-ci-chk">✓</span><div><strong>Genuine Brands</strong><span>SKF, Grundfos & more</span></div></div>
              <div className="cem-ci"><span className="cem-ci-chk">✓</span><div><strong>Quality Checked</strong><span>Every Shipment</span></div></div>
              <div className="cem-ci"><span className="cem-ci-chk">✓</span><div><strong>Fast Delivery</strong><span>Pakistan & Global</span></div></div>
              <div className="cem-ci"><span className="cem-ci-chk">✓</span><div><strong>Competitive Pricing</strong><span>Direct Sourcing</span></div></div>
            </div>
          </div>
        </section>

        {/* LIFECYCLE */}
        <section className="cem-lifecycle">
          <div className="cem-sec-center">
            <div className="cem-tag-pill">🔄 LIFECYCLE SUPPORT</div>
            <h2 dangerouslySetInnerHTML={{ __html: 'From Quarrying to <span>Dispatch</span>' }}></h2>
            <p className="cem-sec-sub">Equipment solutions for every stage of cement production</p>
          </div>
          <div className="cem-tl">
            <div className="cem-tl-s"><div className="cem-tl-ico">⛰️</div><div className="cem-tl-num">STAGE 01</div><h4>Quarrying</h4><p>Extraction machinery parts and drilling equipment for limestone mining.</p></div>
            <div className="cem-tl-s"><div className="cem-tl-ico">🔨</div><div className="cem-tl-num">STAGE 02</div><h4>Crushing</h4><p>Impact and jaw crusher spares for raw material preparation.</p></div>
            <div className="cem-tl-s"><div className="cem-tl-ico">🔥</div><div className="cem-tl-num">STAGE 03</div><h4>Preheating</h4><p>High-temp sensors and refractory linings for preheater towers.</p></div>
            <div className="cem-tl-s"><div className="cem-tl-ico">♨️</div><div className="cem-tl-num">STAGE 04</div><h4>Kiln Firing</h4><p>Rotary kiln components built to withstand extreme thermal stress.</p></div>
            <div className="cem-tl-s"><div className="cem-tl-ico">⚙️</div><div className="cem-tl-num">STAGE 05</div><h4>Grinding</h4><p>Grinding media and mill components for final cement grinding.</p></div>
            <div className="cem-tl-s"><div className="cem-tl-ico" style={{ background: '#111827' }}>📦</div><div className="cem-tl-num">STAGE 06</div><h4>Packaging</h4><p>Silo and bagging plant equipment for final product dispatch.</p></div>
          </div>
        </section>

        {/* CTA */}
        <section className="cem-cta">
          <h2>Ready to <span>Partner</span> With Us?</h2>
          <p>Get in touch today to discuss your supply needs and discover how we can support your operations.</p>
          <div className="cem-cta-btns">
            <a href="/contact" className="cem-btn-pri">Request a Quote →</a>
            <a href="/#products" className="cem-btn-drk">View All Products</a>
          </div>
        </section>
      </div>

    </div>
  )
}
