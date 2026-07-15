import Image from 'next/image';

export default function FmcgPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#fff' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .fmcg *{box-sizing:border-box}
        .fmcg{font-family:'Inter',sans-serif;color:#fff;overflow-x:hidden}
        .fmcg a{text-decoration:none;color:inherit}
        .fmcg img{display:block}
        .fmcg-hero{background:linear-gradient(135deg,#022c22 0%,#115e59 40%,#0f766e 70%,#0d9488 100%);min-height:560px;display:flex;align-items:center;padding:60px 48px;position:relative;overflow:hidden}
        .fmcg-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(20,184,166,0.15),transparent)}
        .fmcg-hero-left{flex:1;max-width:580px;position:relative;z-index:2}
        .fmcg-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(20,184,166,0.15);border:1px solid rgba(20,184,166,0.4);color:#5eead4;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:7px 16px;border-radius:20px;margin-bottom:26px;text-transform:uppercase}
        .fmcg-hero h1{font-size:52px;font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:20px}
        .fmcg-hero h1 .c-pri{color:#38bdf8;display:block}
        .fmcg-desc{font-size:15.5px;color:#ccfbf1;line-height:1.8;max-width:460px;margin-bottom:32px}
        .fmcg-stats{display:flex;gap:32px;margin-bottom:36px}
        .fmcg-hs-num{font-size:28px;font-weight:900;color:#2dd4bf;line-height:1}
        .fmcg-hs-lbl{font-size:12px;color:#ccfbf1;margin-top:3px}
        .fmcg-hero-btns{display:flex;gap:12px;flex-wrap:wrap}
        .fmcg-btn-pri{background:#0d9488;color:#fff;padding:14px 28px;font-weight:700;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px;transition:background .2s}
        .fmcg-btn-pri:hover{background:#0f766e}
        .fmcg-btn-drk{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;padding:14px 28px;font-weight:600;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px}
        .fmcg-hero-right{position:relative;z-index:2;flex-shrink:0;margin-left:52px}
        .fmcg-img-wrap{position:relative;width:560px;height:400px;border-radius:12px;overflow:hidden}
        .fmcg-img-wrap img{width:100%;height:100%;object-fit:cover}
        .fmcg-fc{position:absolute;background:white;color:#000;border-radius:10px;padding:11px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,.4)}
        .fmcg-fc.tr{top:-14px;right:-14px}
        .fmcg-fc-icon{width:34px;height:34px;background:#16a34a;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
        .fmcg-fc .fn{font-size:18px;font-weight:900;color:#000;line-height:1}
        .fmcg-fc .fl{font-size:11px;color:#666;margin-top:2px}
        .fmcg-fc.bl{bottom:-14px;left:-14px;background:#0d9488;color:white;border-radius:10px;padding:12px 18px}
        .fmcg-fc.bl .fn{font-size:22px;font-weight:900;color:white}
        .fmcg-fc.bl .fl{font-size:11px;color:rgba(255,255,255,.8);margin-top:2px}
        .fmcg-fc-cert{position:absolute;bottom:-14px;right:20px;background:rgba(13,27,46,.95);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:11px 16px}
        .fmcg-fc-cert p{font-size:11px;color:#94a3b8;margin-bottom:3px}
        .fmcg-fc-cert strong{font-size:12px;font-weight:700;color:white}

        .fmcg-stats-sec{background:linear-gradient(180deg,#022c22,#115e59);padding:52px 48px}
        .fmcg-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1280px;margin:0 auto}
        .fmcg-sc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px 24px;text-align:center;transition:border-color .2s}
        .fmcg-sc:hover{border-color:rgba(20,184,166,0.4)}
        .fmcg-sc-icon{width:52px;height:52px;background:#0d9488;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 18px}
        .fmcg-sc .num{font-size:44px;font-weight:900;color:#fff;line-height:1;margin-bottom:6px}
        .fmcg-sc .lbl{font-size:13px;color:#ccfbf1}

        @media (max-width: 900px){
          .fmcg-hero{flex-direction:column;padding:48px 24px}
          .fmcg-hero-right{margin-left:0;margin-top:40px}
          .fmcg-img-wrap{width:100%;max-width:440px}
          .fmcg-stats-grid{grid-template-columns:repeat(2,1fr)}
          .fmcg-hero h1{font-size:38px}
        }
      
        @media (max-width: 600px){
          .fmcg-hero{padding: 40px 24px !important}
          .fmcg-hero h1{font-size:32px !important;line-height:1.1 !important;letter-spacing:-1px !important}
          .fmcg-img-wrap{height:250px !important}
          .fmcg-stats{flex-direction:row !important;justify-content:flex-start !important;gap:28px !important;margin-bottom:28px !important}
          .fmcg-hs-num{font-size:26px !important}
          .fmcg-hs-lbl{color:#cbd5e1 !important;font-weight:600 !important}
          .fmcg-stats-grid{grid-template-columns:1fr !important}
          .fmcg-s-cards{grid-template-columns:1fr !important}
          .fmcg-tl{grid-template-columns:1fr !important;gap:24px !important}
          .fmcg-stats-sec{padding:32px 24px !important}
          .fmcg-vc-section{padding:48px 24px !important}
          .fmcg-lifecycle{padding:48px 24px !important}
          .fmcg-safety{padding:48px 24px !important}
          .fmcg-vc-section h2{font-size:28px !important}
          .fmcg-safety h2{font-size:28px !important}
          .fmcg-lifecycle h2{font-size:28px !important}
          .fmcg-cta{padding:48px 24px !important}
          .fmcg-cta h2{font-size:28px !important}
          .fmcg-cert-row{flex-direction:column !important;align-items:flex-start !important;gap:16px !important;padding:16px 20px !important}
          .fmcg-fc{display:none !important}
          .fmcg-fc-cert{display:none !important}
        }
      `}} />

      <div className="fmcg">
        {/* BACK LINK */}
        <div className="px-6 md:px-12 py-5" style={{ background: '#022c22' }}>
          <a href="/#industries" style={{ color: '#2dd4bf', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            ← Back to Industries
          </a>
        </div>

        {/* HERO */}
        <section className="fmcg-hero">
          <div className="fmcg-hero-left">
            <div className="fmcg-badge">🍎 FMCG & FOOD PROCESSING</div>
            <h1>Automating the<span className="c-pri">Food Supply Chain</span></h1>
            <p className="fmcg-desc">Hygienic processing equipment, high-speed packaging, and end-of-line automation for food, beverage, and consumer goods manufacturing.</p>
            <div className="fmcg-stats">
              <div><div className="fmcg-hs-num">100+</div><div className="fmcg-hs-lbl">Plants Built</div></div>
              <div><div className="fmcg-hs-num">15+</div><div className="fmcg-hs-lbl">Years Experience</div></div>
              <div><div className="fmcg-hs-num">EHEDG</div><div className="fmcg-hs-lbl">Compliant Tech</div></div>
            </div>
            <div className="fmcg-hero-btns">
              <a href="/contact" className="fmcg-btn-pri">Request Quote →</a>
              <a href="/#products" className="fmcg-btn-drk">▶ View Products</a>
            </div>
          </div>
          <div className="fmcg-hero-right">
            <div className="fmcg-img-wrap">
              <img src="/industries/fmcg hero.jfif" alt="FMCG Factory" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="fmcg-stats-sec">
          <div className="fmcg-stats-grid">
            <div className="fmcg-sc"><div className="fmcg-sc-icon">🏭</div><div className="num">100+</div><div className="lbl">Facilities Equipped</div></div>
            <div className="fmcg-sc"><div className="fmcg-sc-icon">🏆</div><div className="num">15+</div><div className="lbl">Years in FMCG</div></div>
            <div className="fmcg-sc"><div className="fmcg-sc-icon">🌐</div><div className="num">10+</div><div className="lbl">Countries Served</div></div>
            <div className="fmcg-sc"><div className="fmcg-sc-icon">⚡</div><div className="num">99%</div><div className="lbl">System Reliability</div></div>
          </div>
        </section>
      </div>

      {/* LOWER CONTENT: ABT Europe Style Sections */}
      <div className="flex-1 w-full font-sans text-gray-800 bg-white">
        
        {/* Section 1: Equipment Supply Portfolio */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-white">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
            Equipment Supply <span className="text-[#0099ff]">Portfolio</span>
          </h2>
          <p className="text-gray-500 mb-16 text-center max-w-2xl text-[15px]">
            Comprehensive equipment supply across processing, packaging, and utilities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* Left Col: Bars */}
            <div className="flex flex-col gap-4 justify-center">
              {/* Bar 1 */}
              <div className="bg-[#151f32] rounded-xl p-6 relative overflow-hidden shadow-md">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#ff6600] text-white flex items-center justify-center text-2xl shrink-0 shadow-lg">🍲</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-white font-bold text-[15px]">Food Processing</h3>
                      <span className="text-[#0099ff] font-extrabold text-lg">45%</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-4">Industrial mixers, pasteurizers, and sanitary piping systems.</p>
                    <div className="flex gap-6 border-t border-gray-700/50 pt-4">
                      <div>
                        <div className="text-[#ff6600] font-bold text-sm">600+</div>
                        <div className="text-gray-500 text-[10px] uppercase">Products</div>
                      </div>
                      <div>
                        <div className="text-green-400 font-bold text-sm">80+</div>
                        <div className="text-gray-500 text-[10px] uppercase">Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bar 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#0099ff] text-white flex items-center justify-center text-xl shrink-0 shadow-md">📦</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <h3 className="text-gray-900 font-bold text-sm">Packaging Automation</h3>
                    <span className="text-[#0099ff] font-extrabold text-base">35%</span>
                  </div>
                  <p className="text-gray-500 text-xs">High-speed fillers, VFFS, cappers, and labeling machines.</p>
                </div>
              </div>
              {/* Bar 3 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-xl shrink-0 shadow-md">🤖</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <h3 className="text-gray-900 font-bold text-sm">End-of-Line & Palletizing</h3>
                    <span className="text-[#0099ff] font-extrabold text-base">20%</span>
                  </div>
                  <p className="text-gray-500 text-xs">Robotic palletizers, case packers, and stretch wrapping systems.</p>
                </div>
              </div>
            </div>
            
            {/* Right Col: Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[340px]">
              <img src="/industries/processing plant.jfif" alt="Processing Plant" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-1.5 bg-[#ff6600] text-white text-[10px] font-bold px-2 py-1 rounded mb-2">
                  <span>🍲</span> Processing Machinery
                </div>
                <h3 className="text-white text-2xl font-bold">Hygienic Design & Scale</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Comprehensive Equipment Range */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-gray-50">
          <div className="bg-orange-50 text-[#ff6600] border border-orange-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            ⚙ PRODUCT RANGE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
            Comprehensive <span className="text-[#ff6600]">Equipment Range</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-[15px]">
            Sanitary-grade machinery designed for food safety and maximum throughput.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/solid food.jfif" alt="Food Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">🥣</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Solid Food Processing</h3>
                    <p className="text-gray-300 text-[10px]">Mixing & Extrusion</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Industrial Mixers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Extruders</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Baking Tunnels</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Sorters & Graders</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Fryers & Ovens</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Coating Drums</div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/liquid.jfif" alt="Liquid Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">💧</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Liquid Processing</h3>
                    <p className="text-gray-300 text-[10px]">Beverages & Dairy</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Homogenizers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Pasteurizers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Plate Heat Exchangers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Clean-In-Place (CIP)</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Sanitary Pumps</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Aseptic Valves</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/primary pakaging.jfif" alt="Primary Packaging" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">📦</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Primary Packaging</h3>
                    <p className="text-gray-300 text-[10px]">Filling & Sealing</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Rotary Fillers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> VFFS / HFFS Machines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Flow Wrappers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Capping Machines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Thermoforming</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Labeling Systems</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/end of line.jfif" alt="End of Line" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">🤖</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">End-of-Line Automation</h3>
                    <p className="text-gray-300 text-[10px]">Palletizing & Case Packing</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Robotic Palletizers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Case Packers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Shrink Wrappers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Stretch Hooders</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Carton Erectors</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Conveyor Systems</div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/inspection.jfif" alt="Inspection Systems" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">👁️</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Inspection & Quality</h3>
                    <p className="text-gray-300 text-[10px]">Product Safety</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> X-Ray Scanners</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Metal Detectors</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Checkweighers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Vision Systems</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Seal Integrity Testers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Leak Detectors</div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/utilities.jfif" alt="Plant Utilities" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">🏭</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Plant Utilities</h3>
                    <p className="text-gray-300 text-[10px]">Factory Infrastructure</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Industrial Chillers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Air Compressors</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Steam Boilers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Clean Room Panels</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Hygiene Stations</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Nitrogen Generators</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: From Raw to Retail */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-[#0a1120] border-y border-gray-800 relative overflow-hidden">
          <div className="bg-gray-800 border border-gray-700 text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider relative z-10">
            ⚗ AUTOMATION FOR EVERY STAGE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center tracking-tight relative z-10">
            From Ingredients to <span className="text-[#ff6600]">Retail</span>
          </h2>
          <p className="text-gray-400 mb-16 text-center max-w-2xl text-[15px] relative z-10">
            End-to-end machinery solutions across the entire food and beverage value chain.
          </p>

          <div className="w-full max-w-6xl relative z-10 overflow-x-auto pb-4 custom-scrollbar">
            <div className="min-w-[800px] flex justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-[22px] left-[5%] right-[5%] h-0.5 bg-gray-700 z-0"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-[#ff6600] text-white flex items-center justify-center text-xl shadow-lg mb-4">🌾</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Ingredients</h4>
                <div className="text-[#ff6600] font-bold text-[11px] mb-1">Raw Intake</div>
                <p className="text-gray-500 text-[10px]">Silos & dosing</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-orange-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">🥣</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Processing</h4>
                <div className="text-orange-500 font-bold text-[11px] mb-1">Mixing & Cooking</div>
                <p className="text-gray-500 text-[10px]">Product preparation</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-blue-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">🥫</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Primary Pack</h4>
                <div className="text-blue-500 font-bold text-[11px] mb-1">Filling & Sealing</div>
                <p className="text-gray-500 text-[10px]">Direct contact packaging</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-purple-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">👁️</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Inspection</h4>
                <div className="text-purple-500 font-bold text-[11px] mb-1">Quality Check</div>
                <p className="text-gray-500 text-[10px]">X-Ray & Checkweigh</p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-green-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">📦</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Secondary Pack</h4>
                <div className="text-green-500 font-bold text-[11px] mb-1">Case Packing</div>
                <p className="text-gray-500 text-[10px]">Cartons & shrink wrap</p>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-gray-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">🤖</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Palletizing</h4>
                <div className="text-gray-400 font-bold text-[11px] mb-1">End of Line</div>
                <p className="text-gray-500 text-[10px]">Ready for dispatch</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Reliable Equipment Supply */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl items-center">
            {/* Left Col: Dashboard Card */}
            <div className="bg-[#151f32] rounded-xl p-6 shadow-xl border border-gray-800">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0099ff] flex items-center justify-center text-white text-sm">📈</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Plant Performance Dashboard</h3>
                    <div className="flex items-center gap-1.5 text-green-400 text-[10px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> System Optimal
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-extrabold text-xl leading-none">99.9%</div>
                  <div className="text-gray-500 text-[10px]">Uptime Rate</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">🌍</span> Global Brands</div>
                  <div className="text-white font-bold text-xl">120+</div>
                  <div className="text-gray-500 text-[10px]">OEM Partners</div>
                </div>
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">⏱</span> Line Speeds</div>
                  <div className="text-white font-bold text-xl">1000+</div>
                  <div className="text-gray-500 text-[10px]">Units per minute</div>
                </div>
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">📦</span> Spare Parts</div>
                  <div className="text-white font-bold text-xl">10K+</div>
                  <div className="text-gray-500 text-[10px]">SKUs Available</div>
                </div>
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">🛡️</span> IP Rating</div>
                  <div className="text-white font-bold text-xl">IP69K</div>
                  <div className="text-gray-500 text-[10px]">Washdown Ready</div>
                </div>
              </div>

              <div className="border-t border-gray-700/50 pt-4 flex items-center justify-between">
                <div className="text-gray-400 text-xs">Production Status</div>
                <div className="flex items-center gap-2 text-[10px] text-green-400"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Output Maximized</div>
              </div>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-green-400 w-[98%]"></div>
              </div>
            </div>

            {/* Right Col: Text & Checklist */}
            <div>
              <div className="bg-blue-50 text-[#0099ff] border border-blue-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider inline-block">
                📦 SUPPLY CAPABILITIES
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                Reliable Machinery <span className="text-[#0099ff]">Supply</span>
              </h2>
              <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
                From high-speed bottling lines to automated warehouse palletizers, we supply European and Asian machinery designed for scale and hygiene.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Sanitary Design</h4>
                    <p className="text-gray-500 text-[11px]">Equipment built with stainless steel (304/316L) for easy CIP</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Turnkey Integration</h4>
                    <p className="text-gray-500 text-[11px]">Full line integration from raw intake to palletizing</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Spare Parts Inventory</h4>
                    <p className="text-gray-500 text-[11px]">Consumables like belts, seals, and sensors in stock</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Factory Acceptance Tests</h4>
                    <p className="text-gray-500 text-[11px]">Rigorous FAT/SAT protocols before final handover</p>
                  </div>
                </div>
              </div>

              <a href="/contact" className="inline-flex bg-[#0099ff] hover:bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold text-sm items-center gap-2 transition shadow-md">
                Request Quote <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: Certified Equipment Standards */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-gray-50">
          <div className="bg-green-50 text-green-600 border border-green-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider inline-block">
            🛡 QUALITY & COMPLIANCE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
            Certified Equipment <span className="text-green-500">Standards</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-[15px]">
            Ensuring your food operations meet global hygiene and safety regulations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-6xl">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-xl mb-4">🛡️</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">FDA Approved</h4>
              <p className="text-gray-500 text-[11px]">Food-contact material compliance</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xl mb-4">✨</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">EHEDG</h4>
              <p className="text-gray-500 text-[11px]">Hygienic engineering & design</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xl mb-4">🏭</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">GMP Standards</h4>
              <p className="text-gray-500 text-[11px]">Good manufacturing practices</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-xl mb-4">🔬</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">HACCP Ready</h4>
              <p className="text-gray-500 text-[11px]">Hazard analysis integration</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center text-xl mb-4">📋</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">ISO 22000</h4>
              <p className="text-gray-500 text-[11px]">Food safety management</p>
            </div>
          </div>
        </section>

        {/* Section 6: Complete Supply Solutions */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-white">
          <div className="bg-sky-50 text-[#0099ff] border border-sky-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider inline-block">
            🔧 OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
            Complete <span className="text-[#0099ff]">Supply Solutions</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-[15px]">
            End-to-end equipment supply services for FMCG clients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6600]"></div>
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#ff6600] flex items-center justify-center text-xl shrink-0">🏭</div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">Turnkey Line Integration</h3>
                <p className="text-gray-500 text-[13px] mb-4">Complete procurement and layout planning for new bottling, snack, or dairy lines.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Layout Design</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Machinery Sourcing</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Automation Setup</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0099ff]"></div>
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0099ff] flex items-center justify-center text-xl shrink-0">🔧</div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">Technical Upgrades</h3>
                <p className="text-gray-500 text-[13px] mb-4">Modernizing existing setups with robotic palletizers and automated inspection systems.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Robotics</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Vision Systems</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Retrofitting</span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-xl shrink-0">⚙️</div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">Consumables & Spares</h3>
                <p className="text-gray-500 text-[13px] mb-4">Fast delivery of genuine spare parts like sanitary seals, modular belts, and sensors.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Genuine Parts</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Fast Delivery</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Inventory Management</span>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center text-xl shrink-0">🚚</div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">Logistics & Commissioning</h3>
                <p className="text-gray-500 text-[13px] mb-4">Safe handling of sensitive processing equipment, from port to factory floor positioning.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Heavy Freight</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Commissioning</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Customs Handling</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Equipment Supply Projects */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-[#0a1120]">
          <div className="bg-gray-800 border border-gray-700 text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider inline-block">
            🛠 SUPPLY PROJECTS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center tracking-tight">
            FMCG Supply <span className="text-[#ff6600]">Projects</span>
          </h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl text-[15px]">
            Delivering scale and quality to major food & beverage hubs worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Card 1 */}
            <div className="bg-[#151f32] rounded-xl overflow-hidden shadow-xl border border-gray-800 flex flex-col group">
              <div className="h-40 relative">
                <img src="https://images.unsplash.com/photo-1621213404555-538be1a68d06?w=600&q=80" alt="Bottling Line" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151f32] to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#ff6600] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Beverages</span>
                  <span className="bg-white text-gray-900 text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">PET Bottling</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <h3 className="text-lg font-bold text-white leading-tight">High-Speed Bottling Line</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[#0099ff] font-bold text-[12px] mb-4">Oasis Drinks Ltd.</div>
                <div className="grid grid-cols-2 gap-4 mb-5 text-[12px]">
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Location</div>
                    <div className="font-semibold text-gray-200">Dubai</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Region</div>
                    <div className="font-semibold text-gray-200">UAE</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Year</div>
                    <div className="font-semibold text-gray-200">2023</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Duration</div>
                    <div className="font-semibold text-gray-200">10 Months</div>
                  </div>
                </div>
                <p className="text-[12px] text-gray-400 mb-5 leading-relaxed">Supplied a complete PET bottling line including blow molder, filler, and capper running at 36,000 bph.</p>
                <ul className="text-[11px] text-green-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Rotary filling block installed</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Automatic shrink wrapper</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> CIP integration</li>
                </ul>
                <a href="/contact" className="mt-auto block text-center w-full bg-gray-800/50 hover:bg-gray-700 text-gray-300 py-2.5 rounded-lg text-xs font-semibold transition border border-gray-700">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#151f32] rounded-xl overflow-hidden shadow-xl border border-gray-800 flex flex-col group">
              <div className="h-40 relative">
                <img src="https://images.unsplash.com/photo-1591039869151-5fb38e07edef?w=600&q=80" alt="Snack Factory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151f32] to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#ff6600] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Snacks</span>
                  <span className="bg-white text-gray-900 text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">VFFS & Packing</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <h3 className="text-lg font-bold text-white leading-tight">Snack Food Automation</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[#0099ff] font-bold text-[12px] mb-4">Savory Foods</div>
                <div className="grid grid-cols-2 gap-4 mb-5 text-[12px]">
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Location</div>
                    <div className="font-semibold text-gray-200">Riyadh</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Region</div>
                    <div className="font-semibold text-gray-200">Saudi Arabia</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Year</div>
                    <div className="font-semibold text-gray-200">2024</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Duration</div>
                    <div className="font-semibold text-gray-200">8 Months</div>
                  </div>
                </div>
                <p className="text-[12px] text-gray-400 mb-5 leading-relaxed">Turnkey supply of multi-head weighers, VFFS bagging machines, and robotic case packers.</p>
                <ul className="text-[11px] text-green-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Multi-head weighers</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> VFFS packaging machines</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> X-ray inspection integrated</li>
                </ul>
                <a href="/contact" className="mt-auto block text-center w-full bg-gray-800/50 hover:bg-gray-700 text-gray-300 py-2.5 rounded-lg text-xs font-semibold transition border border-gray-700">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#151f32] rounded-xl overflow-hidden shadow-xl border border-gray-800 flex flex-col group">
              <div className="h-40 relative">
                <img src="https://images.unsplash.com/photo-1533722746147-7ee9fb017dfd?w=600&q=80" alt="Dairy Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151f32] to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#ff6600] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Dairy</span>
                  <span className="bg-white text-gray-900 text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Pasteurization</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <h3 className="text-lg font-bold text-white leading-tight">UHT Milk Processing Unit</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[#0099ff] font-bold text-[12px] mb-4">Milko Dairies</div>
                <div className="grid grid-cols-2 gap-4 mb-5 text-[12px]">
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Location</div>
                    <div className="font-semibold text-gray-200">Karachi</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Region</div>
                    <div className="font-semibold text-gray-200">Pakistan</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Year</div>
                    <div className="font-semibold text-gray-200">2022</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Duration</div>
                    <div className="font-semibold text-gray-200">14 Months</div>
                  </div>
                </div>
                <p className="text-[12px] text-gray-400 mb-5 leading-relaxed">Supplied UHT sterilizers, aseptic homogenizers, and aseptic carton filling machines.</p>
                <ul className="text-[11px] text-green-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Aseptic processing block</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> High-pressure homogenizers</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Fully automated CIP system</li>
                </ul>
                <a href="/contact" className="mt-auto block text-center w-full bg-gray-800/50 hover:bg-gray-700 text-gray-300 py-2.5 rounded-lg text-xs font-semibold transition border border-gray-700">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
