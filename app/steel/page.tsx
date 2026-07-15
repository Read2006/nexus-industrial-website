import Image from 'next/image';

export default function AluminumSteelPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <style dangerouslySetInnerHTML={{ __html: `
        .stl *{box-sizing:border-box}
        .stl{font-family:'Inter',sans-serif;color:#fff;overflow-x:hidden}
        .stl a{text-decoration:none;color:inherit}
        .stl img{display:block}
        .stl-hero{background:linear-gradient(135deg,#020617 0%,#0f172a 40%,#1e293b 70%,#334155 100%);min-height:500px;display:flex;align-items:center;padding:48px;position:relative;overflow:hidden}
        .stl-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(148,163,184,0.15),transparent)}
        .stl-hero-left{flex:1;max-width:540px;position:relative;z-index:2}
        .stl-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(148,163,184,0.15);border:1px solid rgba(148,163,184,0.4);color:#94a3b8;font-size:10px;font-weight:700;letter-spacing:1px;padding:6px 12px;border-radius:20px;margin-bottom:20px;text-transform:uppercase}
        .stl-hero h1{font-size:44px;font-weight:900;line-height:1.1;letter-spacing:-1.5px;margin-bottom:16px}
        .stl-hero h1 .c-pri{color:#38bdf8;display:block}
        .stl-desc{font-size:14px;color:#94a3b8;line-height:1.7;max-width:420px;margin-bottom:28px}
        .stl-stats{display:flex;gap:28px;margin-bottom:32px}
        .stl-hs-num{font-size:24px;font-weight:900;color:#94a3b8;line-height:1}
        .stl-hs-lbl{font-size:11px;color:#94a3b8;margin-top:4px}
        .stl-hero-btns{display:flex;gap:12px;flex-wrap:wrap}
        .stl-btn-pri{background:#64748b;color:#fff;padding:12px 24px;font-weight:600;font-size:13px;border-radius:6px;display:inline-flex;align-items:center;gap:6px;transition:background .2s}
        .stl-btn-pri:hover{background:#475569}
        .stl-btn-drk{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;padding:12px 24px;font-weight:600;font-size:13px;border-radius:6px;display:inline-flex;align-items:center;gap:6px}
        .stl-hero-right{position:relative;z-index:2;flex-shrink:0;margin-left:40px}
        .stl-img-wrap{position:relative;width:560px;height:400px;border-radius:10px;overflow:hidden}
        .stl-img-wrap img{width:100%;height:100%;object-fit:cover}
        .stl-fc{position:absolute;background:white;color:#000;border-radius:8px;padding:10px 14px;display:flex;align-items:center;gap:8px;box-shadow:0 8px 24px rgba(0,0,0,.3)}
        .stl-fc.tr{top:-12px;right:-12px}
        .stl-fc-icon{width:28px;height:28px;background:#16a34a;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
        .stl-fc .fn{font-size:16px;font-weight:800;color:#000;line-height:1}
        .stl-fc .fl{font-size:10px;color:#666;margin-top:2px}
        .stl-fc.bl{bottom:-12px;left:-12px;background:#64748b;color:white;border-radius:8px;padding:10px 16px}
        .stl-fc.bl .fn{font-size:18px;font-weight:800;color:white}
        .stl-fc.bl .fl{font-size:10px;color:rgba(255,255,255,.8);margin-top:2px}
        .stl-fc-cert{position:absolute;bottom:-12px;right:16px;background:rgba(13,27,46,.95);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:10px 14px}
        .stl-fc-cert p{font-size:10px;color:#94a3b8;margin-bottom:2px}
        .stl-fc-cert strong{font-size:11px;font-weight:700;color:white}

        .stl-stats-sec{background:linear-gradient(180deg,#020617,#1e293b);padding:40px 48px}
        .stl-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:1152px;margin:0 auto}
        .stl-sc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:24px 20px;text-align:center;transition:border-color .2s}
        .stl-sc:hover{border-color:rgba(148,163,184,0.4)}
        .stl-sc-icon{width:44px;height:44px;background:#64748b;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;margin:0 auto 14px}
        .stl-sc .num{font-size:36px;font-weight:900;color:#fff;line-height:1;margin-bottom:4px}
        .stl-sc .lbl{font-size:12px;color:#94a3b8}

        @media (max-width: 900px){
          .stl-hero{flex-direction:column;padding:40px 24px}
          .stl-hero-right{margin-left:0;margin-top:32px}
          .stl-img-wrap{width:100%;max-width:400px}
          .stl-stats-grid{grid-template-columns:repeat(2,1fr)}
          .stl-hero h1{font-size:32px}
        }
      
        @media (max-width: 600px){
          .stl-hero{padding: 40px 24px !important}
          .stl-hero h1{font-size:32px !important;line-height:1.1 !important;letter-spacing:-1px !important}
          .stl-img-wrap{height:250px !important}
          .stl-stats{flex-direction:row !important;justify-content:flex-start !important;gap:28px !important;margin-bottom:28px !important}
          .stl-hs-num{font-size:26px !important}
          .stl-hs-lbl{color:#cbd5e1 !important;font-weight:600 !important}
          .stl-stats-grid{grid-template-columns:1fr !important}
          .stl-s-cards{grid-template-columns:1fr !important}
          .stl-tl{grid-template-columns:1fr !important;gap:24px !important}
          .stl-stats-sec{padding:32px 24px !important}
          .stl-vc-section{padding:48px 24px !important}
          .stl-lifecycle{padding:48px 24px !important}
          .stl-safety{padding:48px 24px !important}
          .stl-vc-section h2{font-size:28px !important}
          .stl-safety h2{font-size:28px !important}
          .stl-lifecycle h2{font-size:28px !important}
          .stl-cta{padding:48px 24px !important}
          .stl-cta h2{font-size:28px !important}
          .stl-cert-row{flex-direction:column !important;align-items:flex-start !important;gap:16px !important;padding:16px 20px !important}
          .stl-fc{display:none !important}
          .stl-fc-cert{display:none !important}
        }
      `}} />

      {/* ORIGINAL HEADER SECTION */}
      <div className="stl" style={{ background: '#0f172a' }}>
        {/* BACK LINK */}
        <div className="px-6 md:px-12 py-5" style={{ background: '#020617' }}>
          <a href="/#industries" style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            ← Back to Industries
          </a>
        </div>

        {/* HERO */}
        <section className="stl-hero">
          <div className="stl-hero-left">
            <div className="stl-badge">⚙️ STEEL & ALUMINIUM SOLUTIONS</div>
            <h1>Forging the Future of<span className="c-pri">Heavy Manufacturing</span></h1>
            <p className="stl-desc">Specialized equipment and rugged components for metal smelting, continuous casting, and rolling mills. Engineered for extreme thermal and mechanical loads.</p>
            <div className="stl-stats">
              <div><div className="stl-hs-num">100+</div><div className="stl-hs-lbl">Projects</div></div>
              <div><div className="stl-hs-num">15+</div><div className="stl-hs-lbl">Years</div></div>
              <div><div className="stl-hs-num">10+</div><div className="stl-hs-lbl">Countries</div></div>
            </div>
            <div className="stl-hero-btns">
              <a href="/contact" className="stl-btn-pri">Request Quote →</a>
              <a href="/#products" className="stl-btn-drk">▶ View Products</a>
            </div>
          </div>
          <div className="stl-hero-right">
            <div className="stl-img-wrap">
              <img src="/industries/steel.jfif" alt="steel industry" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stl-stats-sec">
          <div className="stl-stats-grid">
            <div className="stl-sc"><div className="stl-sc-icon">📋</div><div className="num">100+</div><div className="lbl">Projects Delivered</div></div>
            <div className="stl-sc"><div className="stl-sc-icon">🏆</div><div className="num">15+</div><div className="lbl">Years Experience</div></div>
            <div className="stl-sc"><div className="stl-sc-icon">🌐</div><div className="num">10+</div><div className="lbl">Countries Served</div></div>
            <div className="stl-sc"><div className="stl-sc-icon">⛑️</div><div className="num">Zero</div><div className="lbl">Compromises</div></div>
          </div>
        </section>
      </div>

      {/* NEW CONTENT SECTION */}
      <div className="bg-gray-50 font-sans text-gray-800 flex flex-col flex-1 w-full">
        {/* Section 1: Comprehensive Equipment Range */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 flex flex-col items-center">
          <div className="bg-blue-50 text-[#0099ff] text-[10px] font-bold px-3 py-1 rounded-full mb-4 flex items-center gap-2 border border-blue-100 uppercase tracking-wider">
            ⚙ PRODUCT RANGE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            Comprehensive <span className="text-[#0099ff]">Equipment Range</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-base">
            We supply industry-leading equipment for all aluminum production applications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Card 1 */}
            <a href="/#products" className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/smelting.jfif" alt="Smelting" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-[#0099ff] text-base">⚙</span> Smelting & Reduction Equipment
                </div>
              </div>
              <div className="p-6 pt-8">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Electrolytic Reduction Cells (400...)</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Cathode Assembly Systems</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Alumina Feed Systems</span></li>
                </ul>
              </div>
            </a>
            {/* Card 2 */}
            <a href="/#products" className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/casting.jfif" alt="Casting" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-[#0099ff] text-base">⚙</span> Casting & Forming Systems
                </div>
              </div>
              <div className="p-6 pt-8">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Direct Chill (DC) Casting Systems</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Ingot Casting Equipment (T-bars)</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Slab Casting Lines</span></li>
                </ul>
              </div>
            </a>
            {/* Card 3 */}
            <a href="/#products" className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/rolling mill.jfif" alt="Rolling" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-[#0099ff] text-base">⚙</span> Rolling Mill Equipment
                </div>
              </div>
              <div className="p-6 pt-8">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Hot Rolling Mills (2000-4000mm)</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Foil Rolling Mills (0.006-0.4mm)</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Slitting & Cut-to-Length Lines</span></li>
                </ul>
              </div>
            </a>
            {/* Card 4 */}
            <a href="/#products" className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/extrusion.jfif" alt="Extrusion" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-[#0099ff] text-base">⚙</span> Extrusion Technology
                </div>
              </div>
              <div className="p-6 pt-8">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Hydraulic Extrusion Presses (700...)</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Billet Heating Furnaces</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Profile Cooling Systems</span></li>
                </ul>
              </div>
            </a>
            {/* Card 5 */}
            <a href="/#products" className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/recycle.jfif" alt="Recycling" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-[#0099ff] text-base">⚙</span> Recycling & Recovery
                </div>
              </div>
              <div className="p-6 pt-8">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Scrap Melting Furnaces</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Dross Processing Systems</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Metal Recovery Systems</span></li>
                </ul>
              </div>
            </a>
            {/* Card 6 */}
            <a href="/#products" className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/quality.jfif" alt="Quality" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-[#0099ff] text-base">⚙</span> Quality Control & Testing
                </div>
              </div>
              <div className="p-6 pt-8">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Spectrometer Analysis Systems</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Eddy Current Testing</span></li>
                  <li className="flex items-center gap-3"><span className="text-[#0099ff] text-[9px]">▶</span> <span>Surface Inspection Systems</span></li>
                </ul>
              </div>
            </a>
          </div>

          <a href="/#products" className="mt-12 inline-flex bg-[#0099ff] hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm items-center gap-2 transition shadow-md hover:shadow-blue-500/30">
            View All Products <span>→</span>
          </a>
        </section>

        {/* Section 2: Quality Equipment Standards */}
        <section className="py-16 px-6 md:px-12 bg-[#0a1120] flex flex-col items-center text-white">
          <div className="bg-gray-800 text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full mb-4 flex items-center gap-2 border border-gray-700 uppercase tracking-wider">
            ⚙ TECHNICAL STANDARDS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-center tracking-tight">
            Quality Equipment <span className="text-[#0099ff]">Standards</span>
          </h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl text-base">
            Supplying equipment that meets industry-leading specifications
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-5xl">
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-800/60 transition duration-300">
              <div className="text-[#0099ff] mb-3 text-xl">⚡</div>
              <div className="text-2xl font-bold mb-1.5">94-96%</div>
              <div className="text-xs text-gray-400">Equipment Efficiency</div>
            </div>
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-800/60 transition duration-300">
              <div className="text-[#0099ff] mb-3 text-xl">⚡</div>
              <div className="text-2xl font-bold mb-1.5">13.2 <span className="text-lg">kWh/kg</span></div>
              <div className="text-xs text-gray-400">Energy Rating</div>
            </div>
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-800/60 transition duration-300">
              <div className="text-[#0099ff] mb-3 text-xl">✨</div>
              <div className="text-2xl font-bold mb-1.5">99.7-99.9%</div>
              <div className="text-xs text-gray-400">Quality Standard</div>
            </div>
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-800/60 transition duration-300">
              <div className="text-[#0099ff] mb-3 text-xl">🎯</div>
              <div className="text-2xl font-bold mb-1.5">99%</div>
              <div className="text-xs text-gray-400">Supply Accuracy</div>
            </div>
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-800/60 transition duration-300">
              <div className="text-[#0099ff] mb-3 text-xl">⏱</div>
              <div className="text-2xl font-bold mb-1.5">12-24 <span className="text-lg">months</span></div>
              <div className="text-xs text-gray-400">Warranty Period</div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Equipment */}
        <section className="py-16 px-6 md:px-12 bg-white flex flex-col items-center">
          <div className="bg-blue-50 text-[#0099ff] text-[10px] font-bold px-3 py-1 rounded-full mb-4 flex items-center gap-2 border border-blue-100 uppercase tracking-wider">
            ⚙ PRODUCT GALLERY
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            Featured <span className="text-[#0099ff]">Equipment</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-base">
            Explore our range of high-performance aluminum production equipment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <img src="/industries/reduction cells.jfif" alt="Electrolytic" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#0099ff] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                  400-500 kA
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-xl font-bold mb-1">Electrolytic Reduction Cells</h3>
                  <p className="text-xs text-gray-300">Primary Aluminum Production</p>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50">
                <span className="text-xs text-gray-500 font-medium">CE: 96% capable</span>
                <a href="/#products" className="text-[#0099ff] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">Details ↗</a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <img src="/industries/dc castingb.jfif" alt="DC Casting" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#0099ff] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                  60-120 tons/day
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-xl font-bold mb-1">DC Casting System</h3>
                  <p className="text-xs text-gray-300">Billet & Ingot Casting</p>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50">
                <span className="text-xs text-gray-500 font-medium">Recovery: 98%</span>
                <a href="/#products" className="text-[#0099ff] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">Details ↗</a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <img src="/industries/hot rolling mil l.jfif" alt="Hot Rolling Mill" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#0099ff] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                  250,000 TPA
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-xl font-bold mb-1">Hot Rolling Mill</h3>
                  <p className="text-xs text-gray-300">Sheet & Plate Production</p>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50">
                <span className="text-xs text-gray-500 font-medium">Gauge: 0.2-12mm</span>
                <a href="/#products" className="text-[#0099ff] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">Details ↗</a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <img src="/industries/extrusion pres.jfif" alt="Extrusion Press" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#0099ff] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                  2500-5500 MT
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-xl font-bold mb-1">Extrusion Press</h3>
                  <p className="text-xs text-gray-300">Profile Extrusion</p>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50">
                <span className="text-xs text-gray-500 font-medium">Speed: 50m/min</span>
                <a href="/#products" className="text-[#0099ff] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">Details ↗</a>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <img src="/industries/recycling furnace.jfif" alt="Recycling Furnace" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#0099ff] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                  30-50 MT/batch
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-xl font-bold mb-1">Recycling Furnace</h3>
                  <p className="text-xs text-gray-300">Scrap Melting</p>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50">
                <span className="text-xs text-gray-500 font-medium">Recovery: 98%</span>
                <a href="/#products" className="text-[#0099ff] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">Details ↗</a>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <img src="/industries/foil rolling.jfif" alt="Foil Rolling Mill" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#0099ff] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                  30,000 TPA
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-xl font-bold mb-1">Foil Rolling Mill</h3>
                  <p className="text-xs text-gray-300">Aluminum Foil</p>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50">
                <span className="text-xs text-gray-500 font-medium">Thickness: 6-400µm</span>
                <a href="/#products" className="text-[#0099ff] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">Details ↗</a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Complete Supply Solutions */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 flex flex-col items-center">
          <div className="bg-blue-50 text-[#0099ff] text-[10px] font-bold px-3 py-1 rounded-full mb-4 flex items-center gap-2 border border-blue-100 uppercase tracking-wider">
            ⚙ OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            Complete Supply <span className="text-[#0099ff]">Solutions</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-base">
            End-to-end equipment supply services for aluminum production clients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0099ff] group-hover:w-1.5 transition-all"></div>
              <div className="text-3xl text-[#0099ff] bg-blue-50/50 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">📦</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Equipment Supply & Procurement</h3>
                <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Comprehensive supply of aluminum production equipment from 50,000 to 500,000 TPA capacity sourced from leading global OEM manufacturers.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">OEM Partnerships</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Quality Assurance</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Global Sourcing</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Competitive Pricing</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0099ff] group-hover:w-1.5 transition-all"></div>
              <div className="text-3xl text-[#0099ff] bg-blue-50/50 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">🔧</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Support Services</h3>
                <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Expert technical consultation for equipment selection, specification development, and integration support throughout your project.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Equipment Selection</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Specification Support</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Integration Guidance</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Troubleshooting</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0099ff] group-hover:w-1.5 transition-all"></div>
              <div className="text-3xl text-[#0099ff] bg-blue-50/50 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">⚙</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Installation & Commissioning</h3>
                <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Professional installation services with commissioning support, performance validation, and operator training programs.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Installation Services</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Commissioning</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Performance Testing</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Training Programs</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0099ff] group-hover:w-1.5 transition-all"></div>
              <div className="text-3xl text-[#0099ff] bg-blue-50/50 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">🚚</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spare Parts & Logistics</h3>
                <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Fast delivery of genuine spare parts with comprehensive logistics management ensuring minimal equipment downtime.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Genuine Parts</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Fast Delivery</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Inventory Management</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Global Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Equipment for Every Production Stage */}
        <section className="py-16 px-6 md:px-12 bg-white flex flex-col items-center pb-24">
          <div className="bg-blue-50 text-[#0099ff] text-[10px] font-bold px-3 py-1 rounded-full mb-4 flex items-center gap-2 border border-blue-100 uppercase tracking-wider">
            ⚙ PRODUCTION PROCESS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            Equipment for Every <span className="text-[#0099ff]">Production Stage</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-base">
            Complete equipment solutions from bauxite to finished aluminum
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl">
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)]">
              <div className="bg-[#0099ff] text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-blue-500/20">01</div>
              <div className="text-2xl mb-4">⛏</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bauxite Mining & Refining</h3>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Equipment for extraction of bauxite ore and refining to produce alumina (Al2O3) using Bayer process technology.</p>
              <div className="text-[11px] font-bold text-[#0099ff] mb-3 uppercase tracking-wider">Complete Equipment Range Available</div>
              <ul className="text-[13px] text-gray-500 space-y-2.5 mt-auto">
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Mining Equipment</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Refinery Systems</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Alumina Production</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)]">
              <div className="bg-[#0099ff] text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-blue-500/20">02</div>
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Electrolytic Reduction</h3>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Smelting equipment for Hall-Héroult process converting alumina to aluminum at 960°C using electrolysis.</p>
              <div className="text-[11px] font-bold text-[#0099ff] mb-3 uppercase tracking-wider">Capacity: 400-500 kA</div>
              <ul className="text-[13px] text-gray-500 space-y-2.5 mt-auto">
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Electrolysis Cells</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Carbon Anodes</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Control Systems</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)]">
              <div className="bg-[#0099ff] text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-blue-500/20">03</div>
              <div className="text-2xl mb-4">🔥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Casting & Alloying</h3>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Casting equipment for producing ingots, billets, or slabs with precise alloy composition control.</p>
              <div className="text-[11px] font-bold text-[#0099ff] mb-3 uppercase tracking-wider">Purity: 99.5-99.9%</div>
              <ul className="text-[13px] text-gray-500 space-y-2.5 mt-auto">
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Casting Systems</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> DC Casting</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Quality Control</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)]">
              <div className="bg-[#0099ff] text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-blue-500/20">04</div>
              <div className="text-2xl mb-4">⚙</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Downstream Processing</h3>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Rolling, extrusion, and finishing equipment for creating finished aluminum products.</p>
              <div className="text-[11px] font-bold text-[#0099ff] mb-3 uppercase tracking-wider">Thickness: 0.006-500mm</div>
              <ul className="text-[13px] text-gray-500 space-y-2.5 mt-auto">
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Rolling Mills</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Extrusion Presses</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Surface Treatment</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
