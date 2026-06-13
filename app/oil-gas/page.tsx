export default function OilGasPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0d1b2e' }}>
      <style>{`
        .og *{box-sizing:border-box}
        .og{font-family:'Inter',sans-serif;color:#fff;overflow-x:hidden}
        .og a{text-decoration:none;color:inherit}
        .og img{display:block}
        .og-hero{background:linear-gradient(135deg,#091422 0%,#0d1f3c 40%,#0e2244 70%,#182c4e 100%);min-height:560px;display:flex;align-items:center;padding:60px 48px;position:relative;overflow:hidden}
        .og-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(13,148,136,.15),transparent)}
        .og-hero-left{flex:1;max-width:580px;position:relative;z-index:2}
        .og-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(13,148,136,.15);border:1px solid rgba(13,148,136,.4);color:#2dd4bf;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:7px 16px;border-radius:20px;margin-bottom:26px;text-transform:uppercase}
        .og-hero h1{font-size:52px;font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:20px}
        .og-hero h1 .teal{color:#2dd4bf;display:block}
        .og-desc{font-size:15.5px;color:#94a3b8;line-height:1.8;max-width:460px;margin-bottom:32px}
        .og-stats{display:flex;gap:32px;margin-bottom:36px}
        .og-hs-num{font-size:28px;font-weight:900;color:#2dd4bf;line-height:1}
        .og-hs-lbl{font-size:12px;color:#94a3b8;margin-top:3px}
        .og-hero-btns{display:flex;gap:12px;flex-wrap:wrap}
        .og-btn-teal{background:#0d9488;color:#fff;padding:14px 28px;font-weight:700;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px;transition:background .2s}
        .og-btn-teal:hover{background:#0f766e}
        .og-btn-drk{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;padding:14px 28px;font-weight:600;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px}
        .og-hero-right{position:relative;z-index:2;flex-shrink:0;margin-left:52px}
        .og-img-wrap{position:relative;width:440px;height:300px;border-radius:12px;overflow:hidden}
        .og-img-wrap img{width:100%;height:100%;object-fit:cover}
        .og-fc{position:absolute;background:white;color:#000;border-radius:10px;padding:11px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,.4)}
        .og-fc.tr{top:-14px;right:-14px}
        .og-fc-icon{width:34px;height:34px;background:#16a34a;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
        .og-fc .fn{font-size:18px;font-weight:900;color:#000;line-height:1}
        .og-fc .fl{font-size:11px;color:#666;margin-top:2px}
        .og-fc.bl{bottom:-14px;left:-14px;background:#0d9488;color:white;border-radius:10px;padding:12px 18px}
        .og-fc.bl .fn{font-size:22px;font-weight:900;color:white}
        .og-fc.bl .fl{font-size:11px;color:rgba(255,255,255,.7);margin-top:2px}
        .og-fc-cert{position:absolute;bottom:-14px;right:20px;background:rgba(13,27,46,.95);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:11px 16px}
        .og-fc-cert p{font-size:11px;color:#94a3b8;margin-bottom:3px}
        .og-fc-cert strong{font-size:12px;font-weight:700;color:white}

        .og-stats-sec{background:linear-gradient(180deg,#091422,#0f1e35);padding:52px 48px}
        .og-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1280px;margin:0 auto}
        .og-sc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px 24px;text-align:center;transition:border-color .2s}
        .og-sc:hover{border-color:rgba(13,148,136,.4)}
        .og-sc-icon{width:52px;height:52px;background:#0d9488;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 18px}
        .og-sc .num{font-size:44px;font-weight:900;color:#fff;line-height:1;margin-bottom:6px}
        .og-sc .lbl{font-size:13px;color:#94a3b8}

        .og-vc-section{background:#fff;padding:80px 48px;color:#111}
        .og-sec-center{text-align:center;margin-bottom:52px;max-width:1280px;margin-left:auto;margin-right:auto}
        .og-tag-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(13,148,136,.1);border:1px solid rgba(13,148,136,.3);color:#0d9488;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:6px 16px;border-radius:20px;margin-bottom:16px;text-transform:uppercase}
        .og-vc-section h2{font-size:38px;font-weight:900;color:#111;letter-spacing:-1.5px;margin-bottom:10px}
        .og-vc-section h2 span{color:#0d9488}
        .og-sec-sub{font-size:15px;color:#666;max-width:480px;margin:0 auto}
        .og-vc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1280px;margin:0 auto}
        .og-vcc{border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;transition:box-shadow .25s,transform .25s}
        .og-vcc:hover{transform:translateY(-5px);box-shadow:0 20px 48px rgba(0,0,0,.1)}
        .og-vch{padding:26px 26px 22px;position:relative;overflow:hidden}
        .og-vch.teal{background:linear-gradient(135deg,#0d9488,#0f766e)}
        .og-vch.green{background:linear-gradient(135deg,#16a34a,#15803d)}
        .og-vch.navy{background:linear-gradient(135deg,#1e3a8a,#1e293b)}
        .og-vch::after{content:'';position:absolute;top:-30px;right:-30px;width:110px;height:110px;border-radius:50%;background:rgba(255,255,255,.1)}
        .og-vch-icon{width:46px;height:46px;background:rgba(255,255,255,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:21px;margin-bottom:14px}
        .og-vch h3{font-size:21px;font-weight:800;color:white;margin-bottom:3px}
        .og-vch p{font-size:12px;color:rgba(255,255,255,.75);font-weight:500}
        .og-vcb{padding:22px 26px}
        .og-vcb .desc{font-size:13.5px;color:#555;line-height:1.65;margin-bottom:16px}
        .og-vcm{display:flex;gap:24px;margin-bottom:18px;padding-bottom:16px;border-bottom:1px solid #f0f0f0}
        .og-vm-val{font-size:19px;font-weight:800;color:#111}
        .og-vm-val.g{color:#16a34a}
        .og-vm-lbl{font-size:11.5px;color:#888;margin-top:2px}
        .og-vc-list{list-style:none;display:flex;flex-direction:column;gap:9px}
        .og-vc-list li{display:flex;align-items:center;gap:9px;font-size:13.5px;color:#444}
        .og-vc-list li::before{content:'✓';width:19px;height:19px;min-width:19px;background:#d1fae5;color:#16a34a;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800}

        .og-safety{position:relative;padding:90px 48px;text-align:center;overflow:hidden}
        .og-s-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .og-s-ov{position:absolute;inset:0;background:rgba(6,16,32,.85)}
        .og-s-cnt{position:relative;z-index:2;max-width:1100px;margin:0 auto}
        .og-s-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(13,148,136,.2);border:1px solid rgba(13,148,136,.4);color:#2dd4bf;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:6px 16px;border-radius:20px;margin-bottom:20px;text-transform:uppercase}
        .og-safety h2{font-size:42px;font-weight:900;letter-spacing:-1.5px;margin-bottom:14px}
        .og-safety h2 span{color:#2dd4bf}
        .og-s-sub{font-size:15.5px;color:rgba(255,255,255,.6);max-width:540px;margin:0 auto 48px;line-height:1.7}
        .og-s-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:24px}
        .og-s-card{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:22px 18px;text-align:left;backdrop-filter:blur(8px)}
        .og-s-card-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
        .og-s-card-ico{width:34px;height:34px;background:rgba(13,148,136,.2);border:1px solid rgba(13,148,136,.4);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;color:#2dd4bf}
        .og-s-val{font-size:22px;font-weight:900;color:#2dd4bf}
        .og-s-card h4{font-size:13px;font-weight:700;color:white;margin-bottom:5px}
        .og-s-card p{font-size:12px;color:rgba(255,255,255,.5);line-height:1.55}
        .og-cert-row{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:18px 28px;display:flex;align-items:center;justify-content:center;gap:32px;flex-wrap:wrap}
        .og-ci{display:flex;align-items:center;gap:9px}
        .og-ci-chk{color:#2dd4bf;font-size:15px}
        .og-ci strong{font-size:13px;color:white;font-weight:700}
        .og-ci span{font-size:11px;color:rgba(255,255,255,.5);display:block;margin-top:1px}

        .og-lifecycle{background:#fff;padding:80px 48px;color:#111}
        .og-lifecycle h2{font-size:38px;font-weight:900;color:#111;letter-spacing:-1.5px;margin-bottom:10px}
        .og-lifecycle h2 span{color:#0d9488}
        .og-tl{position:relative;display:grid;grid-template-columns:repeat(6,1fr);gap:0;margin-top:56px;max-width:1280px;margin-left:auto;margin-right:auto}
        .og-tl::before{content:'';position:absolute;top:38px;left:6.5%;right:6.5%;height:3px;background:linear-gradient(90deg,#0d9488,#0f766e,#1e293b,#0f766e,#0d9488,#111827);z-index:0}
        .og-tl-s{text-align:center;position:relative;z-index:1;padding:0 8px}
        .og-tl-ico{width:76px;height:76px;background:#0d9488;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 16px;position:relative;z-index:1;transition:transform .2s}
        .og-tl-s:last-child .og-tl-ico{background:#111827}
        .og-tl-s:hover .og-tl-ico{transform:scale(1.08)}
        .og-tl-num{font-size:10px;font-weight:700;letter-spacing:1.5px;color:#999;margin-bottom:7px;text-transform:uppercase}
        .og-tl-s h4{font-size:15px;font-weight:800;color:#111;margin-bottom:7px}
        .og-tl-s p{font-size:12px;color:#666;line-height:1.6}

        .og-cta{background:linear-gradient(135deg,#091422,#0f2137,#162840);padding:72px 48px;text-align:center;position:relative;overflow:hidden}
        .og-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(13,148,136,.1),transparent)}
        .og-cta h2{font-size:38px;font-weight:900;letter-spacing:-1.5px;margin-bottom:12px;position:relative}
        .og-cta h2 span{color:#2dd4bf}
        .og-cta p{color:#94a3b8;font-size:16px;max-width:480px;margin:0 auto 32px;line-height:1.7;position:relative}
        .og-cta-btns{display:flex;justify-content:center;gap:12px;position:relative;flex-wrap:wrap}

        @media (max-width: 900px){
          .og-hero{flex-direction:column;padding:48px 24px}
          .og-hero-right{margin-left:0;margin-top:40px}
          .og-img-wrap{width:100%;max-width:440px}
          .og-stats-grid{grid-template-columns:repeat(2,1fr)}
          .og-vc-grid{grid-template-columns:1fr}
          .og-s-cards{grid-template-columns:repeat(2,1fr)}
          .og-tl{grid-template-columns:repeat(2,1fr);gap:32px}
          .og-tl::before{display:none}
          .og-hero h1{font-size:38px}
        }
      `}</style>

      <div className="og">
        {/* BACK LINK */}
        <div style={{ padding: '20px 48px 0', background: '#091422' }}>
          <a href="/#industries" style={{ color: '#2dd4bf', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            ← Back to Industries
          </a>
        </div>

        {/* HERO */}
        <section className="og-hero">
          <div className="og-hero-left">
            <div className="og-badge">⛽ OIL &amp; GAS INDUSTRY SOLUTIONS</div>
            <h1>Powering Global<span className="teal">Energy Operations</span></h1>
            <p className="og-desc">Comprehensive sourcing solutions for upstream exploration, midstream transportation, and downstream refining operations. Trusted by energy companies across Pakistan and the region.</p>
            <div className="og-stats">
              <div><div className="og-hs-num">140+</div><div className="og-hs-lbl">Projects</div></div>
              <div><div className="og-hs-num">25+</div><div className="og-hs-lbl">Years</div></div>
              <div><div className="og-hs-num">15+</div><div className="og-hs-lbl">Countries</div></div>
            </div>
            <div className="og-hero-btns">
              <a href="/contact" className="og-btn-teal">Request Quote →</a>
              <a href="/#products" className="og-btn-drk">▶ View Products</a>
            </div>
          </div>
          <div className="og-hero-right">
            <div className="og-img-wrap">
              <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=85" alt="Oil plant" />
              <div className="og-fc tr">
                <div className="og-fc-icon">🛡️</div>
                <div><div className="fn">5M+</div><div className="fl">Safe Man-Hours</div></div>
              </div>
              <div className="og-fc bl">
                <div><div className="fn">Zero LTI</div><div className="fl">Safety Record</div></div>
              </div>
              <div className="og-fc-cert">
                <p>API Q1 &amp; Q2 Certified</p>
                <strong>Quality Management System</strong>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="og-stats-sec">
          <div className="og-stats-grid">
            <div className="og-sc"><div className="og-sc-icon">📋</div><div className="num">140+</div><div className="lbl">Projects Delivered</div></div>
            <div className="og-sc"><div className="og-sc-icon">🏆</div><div className="num">25+</div><div className="lbl">Years Experience</div></div>
            <div className="og-sc"><div className="og-sc-icon">🌐</div><div className="num">15+</div><div className="lbl">Countries Served</div></div>
            <div className="og-sc"><div className="og-sc-icon">⛑️</div><div className="num">5M+</div><div className="lbl">Safe Man-Hours</div></div>
          </div>
        </section>

        {/* VALUE CHAIN */}
        <section className="og-vc-section">
          <div className="og-sec-center">
            <div className="og-tag-pill">🔗 VALUE CHAIN COVERAGE</div>
            <h2>Complete <span>Oil &amp; Gas</span> Value Chain</h2>
            <p className="og-sec-sub">End-to-end sourcing solutions covering every segment of the oil and gas industry</p>
          </div>
          <div className="og-vc-grid">
            <div className="og-vcc">
              <div className="og-vch teal"><div className="og-vch-icon">⚓</div><h3>Upstream</h3><p>Exploration &amp; Production</p></div>
              <div className="og-vcb">
                <p className="desc">Equipment and parts supply for oil and gas exploration, drilling, and production operations.</p>
                <div className="og-vcm"><div><div className="og-vm-val">45+</div><div className="og-vm-lbl">Projects</div></div><div><div className="og-vm-val g">99.2%</div><div className="og-vm-lbl">Uptime</div></div></div>
                <ul className="og-vc-list"><li>Offshore Platforms</li><li>Onshore Drilling</li><li>Well Completion Equipment</li><li>Production Optimization Parts</li></ul>
              </div>
            </div>
            <div className="og-vcc">
              <div className="og-vch green"><div className="og-vch-icon">🚛</div><h3>Midstream</h3><p>Transportation &amp; Storage</p></div>
              <div className="og-vcb">
                <p className="desc">Pipeline components, storage solutions, and transportation infrastructure parts for oil and gas.</p>
                <div className="og-vcm"><div><div className="og-vm-val">60+</div><div className="og-vm-lbl">Projects</div></div><div><div className="og-vm-val g">99.5%</div><div className="og-vm-lbl">Uptime</div></div></div>
                <ul className="og-vc-list"><li>Pipeline Components</li><li>Tank Farm Parts</li><li>Compression Station Equipment</li><li>Terminal Operations Supplies</li></ul>
              </div>
            </div>
            <div className="og-vcc">
              <div className="og-vch navy"><div className="og-vch-icon">📊</div><h3>Downstream</h3><p>Refining &amp; Distribution</p></div>
              <div className="og-vcb">
                <p className="desc">Refinery equipment, petrochemical processing parts, and distribution solutions.</p>
                <div className="og-vcm"><div><div className="og-vm-val">35+</div><div className="og-vm-lbl">Projects</div></div><div><div className="og-vm-val g">98.8%</div><div className="og-vm-lbl">Uptime</div></div></div>
                <ul className="og-vc-list"><li>Refinery Spares</li><li>Petrochemical Equipment</li><li>LNG Plant Components</li><li>Distribution Network Parts</li></ul>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section className="og-safety">
          <img className="og-s-bg" src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1600&q=80" alt="Offshore platform" />
          <div className="og-s-ov"></div>
          <div className="og-s-cnt">
            <div className="og-s-tag">🛡️ HEALTH, SAFETY &amp; ENVIRONMENT</div>
            <h2>Quality is Our <span>Core Value</span></h2>
            <p className="og-s-sub">Genuine parts, zero compromises. Our commitment to quality protects your operations and people.</p>
            <div className="og-s-cards">
              <div className="og-s-card"><div className="og-s-card-top"><div className="og-s-card-ico">🛡️</div><div className="og-s-val">100%</div></div><h4>Genuine Parts</h4><p>Sourced directly from authorized brand distributors and manufacturers</p></div>
              <div className="og-s-card"><div className="og-s-card-top"><div className="og-s-card-ico">⚡</div><div className="og-s-val">Fast</div></div><h4>Delivery Times</h4><p>Reliable and timely delivery across Pakistan and globally</p></div>
              <div className="og-s-card"><div className="og-s-card-top"><div className="og-s-card-ico">🌿</div><div className="og-s-val">100%</div></div><h4>Compliance</h4><p>Full documentation and compliance for all supplied equipment</p></div>
              <div className="og-s-card"><div className="og-s-card-top"><div className="og-s-card-ico">✅</div><div className="og-s-val">QA</div></div><h4>Quality Assurance</h4><p>Strict quality checks on every product before dispatch</p></div>
            </div>
            <div className="og-cert-row">
              <div className="og-ci"><span className="og-ci-chk">✓</span><div><strong>Genuine Brands</strong><span>SKF, Grundfos & more</span></div></div>
              <div className="og-ci"><span className="og-ci-chk">✓</span><div><strong>Quality Checked</strong><span>Every Shipment</span></div></div>
              <div className="og-ci"><span className="og-ci-chk">✓</span><div><strong>Fast Delivery</strong><span>Pakistan & Global</span></div></div>
              <div className="og-ci"><span className="og-ci-chk">✓</span><div><strong>Competitive Pricing</strong><span>Direct Sourcing</span></div></div>
            </div>
          </div>
        </section>

        {/* LIFECYCLE */}
        <section className="og-lifecycle">
          <div className="og-sec-center">
            <div className="og-tag-pill">🔄 OIL &amp; GAS LIFECYCLE</div>
            <h2>From Exploration to <span>Distribution</span></h2>
            <p className="og-sec-sub">Our products support every stage of the oil and gas value chain</p>
          </div>
          <div className="og-tl">
            <div className="og-tl-s"><div className="og-tl-ico">🧭</div><div className="og-tl-num">STAGE 01</div><h4>Exploration</h4><p>Seismic survey equipment and instrumentation for reservoir analysis.</p></div>
            <div className="og-tl-s"><div className="og-tl-ico">📚</div><div className="og-tl-num">STAGE 02</div><h4>Drilling</h4><p>Drilling rig parts and tools for well construction operations.</p></div>
            <div className="og-tl-s"><div className="og-tl-ico">💧</div><div className="og-tl-num">STAGE 03</div><h4>Production</h4><p>Pumps, valves, and extraction equipment for production wells.</p></div>
            <div className="og-tl-s"><div className="og-tl-ico">🧪</div><div className="og-tl-num">STAGE 04</div><h4>Processing</h4><p>Separation and treatment equipment for hydrocarbon processing.</p></div>
            <div className="og-tl-s"><div className="og-tl-ico">🚛</div><div className="og-tl-num">STAGE 05</div><h4>Transportation</h4><p>Pipeline fittings, valves and transportation components.</p></div>
            <div className="og-tl-s"><div className="og-tl-ico" style={{ background: '#111827' }}>🏭</div><div className="og-tl-num">STAGE 06</div><h4>Refining</h4><p>Refinery spares and components for distillation and processing.</p></div>
          </div>
        </section>

        {/* CTA */}
        <section className="og-cta">
          <h2>Ready to <span>Partner</span> With Us?</h2>
          <p>Get in touch today to discuss your Oil &amp; Gas supply needs and discover how we can support your operations.</p>
          <div className="og-cta-btns">
            <a href="/contact" className="og-btn-teal">Request a Quote →</a>
            <a href="/#products" className="og-btn-drk">View All Products</a>
          </div>
        </section>
      </div>

      {/* FOOTER - NIS standard */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Nexus Industrial</h3>
              <p className="text-sm">Delivering reliable industrial supply and global trade solutions.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/#products" className="hover:text-white transition">Products</a></li>
                <li><a href="/#industries" className="hover:text-white transition">Industries</a></li>
                <li><a href="/brands" className="hover:text-white transition">Brands</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <p className="text-sm">📞 0335-1503555</p>
              <p className="text-sm">📧 info@nexus-is.co</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Compliance</h3>
              <p className="text-sm">NTN: 123455</p>
              <p className="text-sm">STRN: 1233456</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Nexus Industrial Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
