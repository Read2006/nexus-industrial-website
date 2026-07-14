import Image from 'next/image';

export default function TextilePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#fff' }}>
      <style>{`
        .txt *{box-sizing:border-box}
        .txt{font-family:'Inter',sans-serif;color:#fff;overflow-x:hidden}
        .txt a{text-decoration:none;color:inherit}
        .txt img{display:block}
        .txt-hero{background:linear-gradient(135deg,#1e1b4b 0%,#312e81 40%,#4338ca 70%,#4f46e5 100%);min-height:560px;display:flex;align-items:center;padding:60px 48px;position:relative;overflow:hidden}
        .txt-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(99,102,241,0.15),transparent)}
        .txt-hero-left{flex:1;max-width:580px;position:relative;z-index:2}
        .txt-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.4);color:#a5b4fc;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:7px 16px;border-radius:20px;margin-bottom:26px;text-transform:uppercase}
        .txt-hero h1{font-size:52px;font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:20px}
        .txt-hero h1 .c-pri{color:#c7d2fe;display:block}
        .txt-desc{font-size:15.5px;color:#cbd5e1;line-height:1.8;max-width:460px;margin-bottom:32px}
        .txt-stats{display:flex;gap:32px;margin-bottom:36px}
        .txt-hs-num{font-size:28px;font-weight:900;color:#818cf8;line-height:1}
        .txt-hs-lbl{font-size:12px;color:#cbd5e1;margin-top:3px}
        .txt-hero-btns{display:flex;gap:12px;flex-wrap:wrap}
        .txt-btn-pri{background:#4f46e5;color:#fff;padding:14px 28px;font-weight:700;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px;transition:background .2s}
        .txt-btn-pri:hover{background:#4338ca}
        .txt-btn-drk{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;padding:14px 28px;font-weight:600;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px}
        .txt-hero-right{position:relative;z-index:2;flex-shrink:0;margin-left:52px}
        .txt-img-wrap{position:relative;width:560px;height:400px;border-radius:12px;overflow:hidden}
        .txt-img-wrap img{width:100%;height:100%;object-fit:cover}
        .txt-fc{position:absolute;background:white;color:#000;border-radius:10px;padding:11px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,.4)}
        .txt-fc.tr{top:-14px;right:-14px}
        .txt-fc-icon{width:34px;height:34px;background:#16a34a;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
        .txt-fc .fn{font-size:18px;font-weight:900;color:#000;line-height:1}
        .txt-fc .fl{font-size:11px;color:#666;margin-top:2px}
        .txt-fc.bl{bottom:-14px;left:-14px;background:#4f46e5;color:white;border-radius:10px;padding:12px 18px}
        .txt-fc.bl .fn{font-size:22px;font-weight:900;color:white}
        .txt-fc.bl .fl{font-size:11px;color:rgba(255,255,255,.8);margin-top:2px}
        .txt-fc-cert{position:absolute;bottom:-14px;right:20px;background:rgba(13,27,46,.95);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:11px 16px}
        .txt-fc-cert p{font-size:11px;color:#94a3b8;margin-bottom:3px}
        .txt-fc-cert strong{font-size:12px;font-weight:700;color:white}

        .txt-stats-sec{background:linear-gradient(180deg,#1e1b4b,#312e81);padding:52px 48px}
        .txt-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1280px;margin:0 auto}
        .txt-sc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px 24px;text-align:center;transition:border-color .2s}
        .txt-sc:hover{border-color:rgba(99,102,241,0.4)}
        .txt-sc-icon{width:52px;height:52px;background:#4f46e5;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 18px}
        .txt-sc .num{font-size:44px;font-weight:900;color:#fff;line-height:1;margin-bottom:6px}
        .txt-sc .lbl{font-size:13px;color:#cbd5e1}

        @media (max-width: 900px){
          .txt-hero{flex-direction:column;padding:48px 24px}
          .txt-hero-right{margin-left:0;margin-top:40px}
          .txt-img-wrap{width:100%;max-width:440px}
          .txt-stats-grid{grid-template-columns:repeat(2,1fr)}
          .txt-hero h1{font-size:38px}
        }
      
        @media (max-width: 600px){
          .txt-hero{padding: 40px 24px !important}
          .txt-hero h1{font-size:32px !important;line-height:1.1 !important;letter-spacing:-1px !important}
          .txt-img-wrap{height:250px !important}
          .txt-stats{flex-direction:row !important;justify-content:flex-start !important;gap:28px !important;margin-bottom:28px !important}
          .txt-hs-num{font-size:26px !important}
          .txt-hs-lbl{color:#cbd5e1 !important;font-weight:600 !important}
          .txt-stats-grid{grid-template-columns:1fr !important}
          .txt-s-cards{grid-template-columns:1fr !important}
          .txt-tl{grid-template-columns:1fr !important;gap:24px !important}
          .txt-stats-sec{padding:32px 24px !important}
          .txt-vc-section{padding:48px 24px !important}
          .txt-lifecycle{padding:48px 24px !important}
          .txt-safety{padding:48px 24px !important}
          .txt-vc-section h2{font-size:28px !important}
          .txt-safety h2{font-size:28px !important}
          .txt-lifecycle h2{font-size:28px !important}
          .txt-cta{padding:48px 24px !important}
          .txt-cta h2{font-size:28px !important}
          .txt-cert-row{flex-direction:column !important;align-items:flex-start !important;gap:16px !important;padding:16px 20px !important}
          .txt-fc{display:none !important}
          .txt-fc-cert{display:none !important}
        }
      `} </style>

      <div className="txt">
        {/* BACK LINK */}
        <div className="px-6 md:px-12 py-5" style={{ background: '#1e1b4b' }}>
          <a href="/#industries" style={{ color: '#818cf8', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            ← Back to Industries
          </a>
        </div>

        {/* HERO */}
        <section className="txt-hero">
          <div className="txt-hero-left">
            <div className="txt-badge">🧵 TEXTILE & APPAREL SOLUTIONS</div>
            <h1>Empowering Modern<span className="c-pri">Textile Mills</span></h1>
            <p className="txt-desc">High-performance machinery and parts for spinning, weaving, wet processing, and garment manufacturing. We supply the technology that threads the global industry.</p>
            <div className="txt-stats">
              <div><div className="txt-hs-num">150+</div><div className="txt-hs-lbl">Mills Supplied</div></div>
              <div><div className="txt-hs-num">20+</div><div className="txt-hs-lbl">Years Experience</div></div>
              <div><div className="txt-hs-num">Oeko</div><div className="txt-hs-lbl">Tex Compliant</div></div>
            </div>
            <div className="txt-hero-btns">
              <a href="/contact" className="txt-btn-pri">Request Quote →</a>
              <a href="/#products" className="txt-btn-drk">▶ View Products</a>
            </div>
          </div>
          <div className="txt-hero-right">
            <div className="txt-img-wrap">
              <img src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=900&q=85" alt="Textile Industry" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="txt-stats-sec">
          <div className="txt-stats-grid">
            <div className="txt-sc"><div className="txt-sc-icon">🏭</div><div className="num">150+</div><div className="lbl">Mills Modernized</div></div>
            <div className="txt-sc"><div className="txt-sc-icon">🏆</div><div className="num">20+</div><div className="lbl">Years in Textiles</div></div>
            <div className="txt-sc"><div className="txt-sc-icon">🌐</div><div className="num">12+</div><div className="lbl">Countries Served</div></div>
            <div className="txt-sc"><div className="txt-sc-icon">⚡</div><div className="num">99%</div><div className="lbl">Uptime Achieved</div></div>
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
            Comprehensive equipment supply across all textile manufacturing processes
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* Left Col: Bars */}
            <div className="flex flex-col gap-4 justify-center">
              {/* Bar 1 */}
              <div className="bg-[#151f32] rounded-xl p-6 relative overflow-hidden shadow-md">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#ff6600] text-white flex items-center justify-center text-2xl shrink-0 shadow-lg">🧶</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-white font-bold text-[15px]">Spinning & Weaving</h3>
                      <span className="text-[#0099ff] font-extrabold text-lg">45%</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-4">Blowrooms, carding machines, ring frames, and air-jet looms.</p>
                    <div className="flex gap-6 border-t border-gray-700/50 pt-4">
                      <div>
                        <div className="text-[#ff6600] font-bold text-sm">800+</div>
                        <div className="text-gray-500 text-[10px] uppercase">Products</div>
                      </div>
                      <div>
                        <div className="text-green-400 font-bold text-sm">60+</div>
                        <div className="text-gray-500 text-[10px] uppercase">Mills</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bar 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#0099ff] text-white flex items-center justify-center text-xl shrink-0 shadow-md">💧</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <h3 className="text-gray-900 font-bold text-sm">Wet Processing & Dyeing</h3>
                    <span className="text-[#0099ff] font-extrabold text-base">35%</span>
                  </div>
                  <p className="text-gray-500 text-xs">High-temp jet dyeing, stenters, and continuous finishing ranges.</p>
                </div>
              </div>
              {/* Bar 3 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-xl shrink-0 shadow-md">👕</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <h3 className="text-gray-900 font-bold text-sm">Garment Manufacturing</h3>
                    <span className="text-[#0099ff] font-extrabold text-base">20%</span>
                  </div>
                  <p className="text-gray-500 text-xs">CNC cutting, automated sewing, and finishing/pressing units.</p>
                </div>
              </div>
            </div>
            
            {/* Right Col: Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[340px]">
              <img src="/industries/automation.jfif" alt="Spinning Mill" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-1.5 bg-[#ff6600] text-white text-[10px] font-bold px-2 py-1 rounded mb-2">
                  <span>🧶</span> Spinning Machinery
                </div>
                <h3 className="text-white text-2xl font-bold">Latest Automation Tech</h3>
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
            End-to-end machinery for every stage of textile and apparel production.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/spinning.jfif" alt="Spinning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">🧶</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Spinning Machinery</h3>
                    <p className="text-gray-300 text-[10px]">Yarn Formation</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Blowroom Lines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Carding Machines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Draw Frames</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Roving Frames</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Ring Spinning</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Rotor/Air-Jet Spinning</div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/weaving.jfif" alt="Weaving" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">🕸️</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Weaving & Knitting</h3>
                    <p className="text-gray-300 text-[10px]">Fabric Formation</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Air-Jet Looms</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Rapier Looms</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Water-Jet Looms</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Circular Knitting</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Flat Knitting</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Warping & Sizing</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/wet processing.jfif" alt="Wet Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">💧</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Wet Processing</h3>
                    <p className="text-gray-300 text-[10px]">Dyeing & Finishing</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> High-Temp Jet Dyeing</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Stenter Frames</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Continuous Bleaching</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Singeing Machines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Calenders & Compacting</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Rotary Printing</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/garment manufactoring.jfif" alt="Garment Manufacturing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">👕</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Garment Manufacturing</h3>
                    <p className="text-gray-300 text-[10px]">Apparel Assembly</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> CNC Fabric Cutters</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Spreading Machines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Industrial Sewing</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Fusing Presses</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Multi-head Embroidery</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Steam Ironing Systems</div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/quality control textile.jfif" alt="Quality Control" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">🔬</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Quality Control</h3>
                    <p className="text-gray-300 text-[10px]">Testing & Inspection</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Tensile Testers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Spectrophotometers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Yarn Evenness Testers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Fabric Inspection Machines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Shrinkage Washers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Pilling Testers</div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/plant utilities.jfif" alt="Plant Utilities" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">🏭</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Plant Utilities</h3>
                    <p className="text-gray-300 text-[10px]">Mill Infrastructure</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Humidification Plants</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Industrial Boilers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Air Compressors</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Effluent Treatment (ETP)</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> RO Water Plants</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Material Handling</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: From Raw to Retail */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-[#0a1120] border-y border-gray-800 relative overflow-hidden">
          <div className="bg-gray-800 border border-gray-700 text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider relative z-10">
            ⚗ EQUIPMENT FOR EVERY STAGE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center tracking-tight relative z-10">
            From Raw Fiber to <span className="text-[#ff6600]">Retail</span>
          </h2>
          <p className="text-gray-400 mb-16 text-center max-w-2xl text-[15px] relative z-10">
            End-to-end machinery solutions across the entire textile value chain.
          </p>

          <div className="w-full max-w-6xl relative z-10 overflow-x-auto pb-4 custom-scrollbar">
            <div className="min-w-[800px] flex justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-[22px] left-[5%] right-[5%] h-0.5 bg-gray-700 z-0"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-[#ff6600] text-white flex items-center justify-center text-xl shadow-lg mb-4">🌿</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Fiber Prep</h4>
                <div className="text-[#ff6600] font-bold text-[11px] mb-1">Blowroom</div>
                <p className="text-gray-500 text-[10px]">Cleaning & mixing</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-orange-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">🧶</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Spinning</h4>
                <div className="text-orange-500 font-bold text-[11px] mb-1">Ring / Rotor</div>
                <p className="text-gray-500 text-[10px]">Yarn formation</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-purple-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">🕸️</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Fabric Mfg</h4>
                <div className="text-purple-500 font-bold text-[11px] mb-1">Weaving / Knit</div>
                <p className="text-gray-500 text-[10px]">Loom shedding</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-blue-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">💧</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Wet Processing</h4>
                <div className="text-blue-500 font-bold text-[11px] mb-1">Dyeing & Finish</div>
                <p className="text-gray-500 text-[10px]">Color & texture</p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-green-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">👕</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Garmenting</h4>
                <div className="text-green-500 font-bold text-[11px] mb-1">Cut & Sew</div>
                <p className="text-gray-500 text-[10px]">Apparel assembly</p>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-gray-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">📦</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Distribution</h4>
                <div className="text-gray-400 font-bold text-[11px] mb-1">Logistics</div>
                <p className="text-gray-500 text-[10px]">Ready for retail</p>
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
                  <div className="w-8 h-8 rounded-lg bg-[#0099ff] flex items-center justify-center text-white text-sm">🏭</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Mill Performance Dashboard</h3>
                    <div className="flex items-center gap-1.5 text-green-400 text-[10px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> System Optimal
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-extrabold text-xl leading-none">94.5%</div>
                  <div className="text-gray-500 text-[10px]">OEE Score</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">🌍</span> Global Sourcing</div>
                  <div className="text-white font-bold text-xl">150+</div>
                  <div className="text-gray-500 text-[10px]">OEM Partners</div>
                </div>
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">⚙️</span> Mill Capacity</div>
                  <div className="text-white font-bold text-xl">100K+</div>
                  <div className="text-gray-500 text-[10px]">Spindles Handled</div>
                </div>
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">📦</span> Spare Parts</div>
                  <div className="text-white font-bold text-xl">15K+</div>
                  <div className="text-gray-500 text-[10px]">SKUs Available</div>
                </div>
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">⚡</span> Uptime</div>
                  <div className="text-white font-bold text-xl">99.2%</div>
                  <div className="text-gray-500 text-[10px]">Machine Availability</div>
                </div>
              </div>

              <div className="border-t border-gray-700/50 pt-4 flex items-center justify-between">
                <div className="text-gray-400 text-xs">Production Status</div>
                <div className="flex items-center gap-2 text-[10px] text-green-400"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Output Maximized</div>
              </div>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-green-400 w-[94%]"></div>
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
                From high-speed spinning frames to precision dye houses, we supply European and Asian machinery designed for scale.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">OEM Brand Partnerships</h4>
                    <p className="text-gray-500 text-[11px]">Authorized suppliers for leading loom and spinning brands</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Erection & Commissioning</h4>
                    <p className="text-gray-500 text-[11px]">Full support for plant setup and initial trial runs</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Spare Parts Inventory</h4>
                    <p className="text-gray-500 text-[11px]">Consumables like cots, aprons, and heald wires in stock</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Automation Upgrades</h4>
                    <p className="text-gray-500 text-[11px]">Retrofitting older mills with PLC controls and IoT</p>
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
            Ensuring your textile operations meet global sustainability and quality marks.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-6xl">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-xl mb-4">🛡️</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">ISO 9001</h4>
              <p className="text-gray-500 text-[11px]">Quality management systems</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xl mb-4">🌿</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">Oeko-Tex</h4>
              <p className="text-gray-500 text-[11px]">Machinery for safe textiles</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xl mb-4">🌍</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">GOTS Compliant</h4>
              <p className="text-gray-500 text-[11px]">Supports organic processing</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-xl mb-4">⚡</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">CE Marked</h4>
              <p className="text-gray-500 text-[11px]">European safety standards</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center text-xl mb-4">🧪</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">REACH</h4>
              <p className="text-gray-500 text-[11px]">Chemical handling compliance</p>
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
            End-to-end equipment supply services for textile and apparel clients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6600]"></div>
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#ff6600] flex items-center justify-center text-xl shrink-0">🏭</div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">Turnkey Mill Setup</h3>
                <p className="text-gray-500 text-[13px] mb-4">Complete procurement and layout planning for new spinning, weaving, or dyeing facilities.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Layout Design</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Machinery Sourcing</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Utility Planning</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0099ff]"></div>
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0099ff] flex items-center justify-center text-xl shrink-0">🔧</div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">Technical Upgrades</h3>
                <p className="text-gray-500 text-[13px] mb-4">Modernizing existing setups with advanced auto-doffing, electronic drafting, and IoT sensors.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Automation</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Energy Efficiency</span>
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
                <p className="text-gray-500 text-[13px] mb-4">Fast delivery of genuine spare parts like spindles, rings, cots, aprons, and loom reeds.</p>
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
                <h3 className="text-gray-900 font-bold text-base mb-2">Logistics & Installation</h3>
                <p className="text-gray-500 text-[13px] mb-4">Safe handling of heavy textile machinery, from port customs clearance to factory floor positioning.</p>
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
            Textile Supply <span className="text-[#ff6600]">Projects</span>
          </h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl text-[15px]">
            Delivering scale and quality to major textile hubs worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Card 1 */}
            <div className="bg-[#151f32] rounded-xl overflow-hidden shadow-xl border border-gray-800 flex flex-col group">
              <div className="h-40 relative">
                <img src="https://images.unsplash.com/photo-1596547609804-b9db84bdfbc6?w=600&q=80" alt="Denim Mill" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151f32] to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#ff6600] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Denim Mill</span>
                  <span className="bg-white text-gray-900 text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Spinning & Dyeing</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <h3 className="text-lg font-bold text-white leading-tight">Integrated Denim Expansion</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[#0099ff] font-bold text-[12px] mb-4">Crescent Mills</div>
                <div className="grid grid-cols-2 gap-4 mb-5 text-[12px]">
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Location</div>
                    <div className="font-semibold text-gray-200">Faisalabad</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Region</div>
                    <div className="font-semibold text-gray-200">Pakistan</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Year</div>
                    <div className="font-semibold text-gray-200">2023</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Duration</div>
                    <div className="font-semibold text-gray-200">12 Months</div>
                  </div>
                </div>
                <p className="text-[12px] text-gray-400 mb-5 leading-relaxed">Supplied continuous indigo dyeing ranges and high-speed rotor spinning machines.</p>
                <ul className="text-[11px] text-green-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Rope dyeing lines installed</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Rotor spinning frames</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Humidification system</li>
                </ul>
                <a href="/contact" className="mt-auto block text-center w-full bg-gray-800/50 hover:bg-gray-700 text-gray-300 py-2.5 rounded-lg text-xs font-semibold transition border border-gray-700">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#151f32] rounded-xl overflow-hidden shadow-xl border border-gray-800 flex flex-col group">
              <div className="h-40 relative">
                <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80" alt="Knitwear Factory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151f32] to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#ff6600] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Knitwear</span>
                  <span className="bg-white text-gray-900 text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Cut & Sew</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <h3 className="text-lg font-bold text-white leading-tight">Apparel Factory Setup</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[#0099ff] font-bold text-[12px] mb-4">Apex Garments</div>
                <div className="grid grid-cols-2 gap-4 mb-5 text-[12px]">
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Location</div>
                    <div className="font-semibold text-gray-200">Dhaka</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Region</div>
                    <div className="font-semibold text-gray-200">Bangladesh</div>
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
                <p className="text-[12px] text-gray-400 mb-5 leading-relaxed">Turnkey supply of CNC cutters, automated spreading, and 500+ industrial sewing machines.</p>
                <ul className="text-[11px] text-green-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Auto-cam cutters installed</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Heavy-duty sewing lines</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Fusing and finishing presses</li>
                </ul>
                <a href="/contact" className="mt-auto block text-center w-full bg-gray-800/50 hover:bg-gray-700 text-gray-300 py-2.5 rounded-lg text-xs font-semibold transition border border-gray-700">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#151f32] rounded-xl overflow-hidden shadow-xl border border-gray-800 flex flex-col group">
              <div className="h-40 relative">
                <img src="https://images.unsplash.com/photo-1544426510-a292d3f6bd5f?w=600&q=80" alt="Weaving" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151f32] to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#ff6600] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Home Textiles</span>
                  <span className="bg-white text-gray-900 text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Air-Jet Looms</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <h3 className="text-lg font-bold text-white leading-tight">High-Speed Weaving Unit</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[#0099ff] font-bold text-[12px] mb-4">Nishat Weaving</div>
                <div className="grid grid-cols-2 gap-4 mb-5 text-[12px]">
                  <div>
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wider">Location</div>
                    <div className="font-semibold text-gray-200">Lahore</div>
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
                    <div className="font-semibold text-gray-200">10 Months</div>
                  </div>
                </div>
                <p className="text-[12px] text-gray-400 mb-5 leading-relaxed">Supplied 120 wider-width air-jet looms with cam shedding and sizing machines.</p>
                <ul className="text-[11px] text-green-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> 120 Air-Jet Looms</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> High-speed sizing range</li>
                  <li className="flex items-center gap-2"><span className="text-lg leading-none">✓</span> Loom automation system</li>
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
