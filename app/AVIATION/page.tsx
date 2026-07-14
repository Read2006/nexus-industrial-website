import Image from 'next/image';

export default function AviationIndustryPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <style>{`
        .stl *{box-sizing:border-box}
        .stl{font-family:'Inter',sans-serif;color:#fff;overflow-x:hidden}
        .stl a{text-decoration:none;color:inherit}
        .stl img{display:block}
        .stl-hero{background:linear-gradient(135deg,#020617 0%,#0f172a 40%,#1e293b 70%,#334155 100%);min-height:500px;display:flex;align-items:center;padding:48px;position:relative;overflow:hidden}
        .stl-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(14,165,233,0.15),transparent)}
        .stl-hero-left{flex:1;max-width:540px;position:relative;z-index:2}
        .stl-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(14,165,233,0.15);border:1px solid rgba(14,165,233,0.4);color:#38bdf8;font-size:10px;font-weight:700;letter-spacing:1px;padding:6px 12px;border-radius:20px;margin-bottom:20px;text-transform:uppercase}
        .stl-hero h1{font-size:44px;font-weight:900;line-height:1.1;letter-spacing:-1.5px;margin-bottom:16px}
        .stl-hero h1 .c-pri{color:#38bdf8;display:block}
        .stl-desc{font-size:14px;color:#94a3b8;line-height:1.7;max-width:420px;margin-bottom:28px}
        .stl-stats{display:flex;gap:28px;margin-bottom:32px}
        .stl-hs-num{font-size:24px;font-weight:900;color:#38bdf8;line-height:1}
        .stl-hs-lbl{font-size:11px;color:#94a3b8;margin-top:4px}
        .stl-hero-btns{display:flex;gap:12px;flex-wrap:wrap}
        .stl-btn-pri{background:#0284c7;color:#fff;padding:12px 24px;font-weight:600;font-size:13px;border-radius:6px;display:inline-flex;align-items:center;gap:6px;transition:background .2s}
        .stl-btn-pri:hover{background:#0369a1}
        .stl-btn-drk{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;padding:12px 24px;font-weight:600;font-size:13px;border-radius:6px;display:inline-flex;align-items:center;gap:6px}
        .stl-hero-right{position:relative;z-index:2;flex-shrink:0;margin-left:40px}
        .stl-img-wrap{position:relative;width:560px;height:400px;border-radius:10px;overflow:hidden}
        .stl-img-wrap img{width:100%;height:100%;object-fit:cover}
        .stl-fc{position:absolute;background:white;color:#000;border-radius:8px;padding:10px 14px;display:flex;align-items:center;gap:8px;box-shadow:0 8px 24px rgba(0,0,0,.3)}
        .stl-fc.tr{top:-12px;right:-12px}
        .stl-fc-icon{width:28px;height:28px;background:#0ea5e9;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;color:white;flex-shrink:0}
        .stl-fc .fn{font-size:16px;font-weight:800;color:#000;line-height:1}
        .stl-fc .fl{font-size:10px;color:#666;margin-top:2px}
        .stl-fc.bl{bottom:-12px;left:-12px;background:#0369a1;color:white;border-radius:8px;padding:10px 16px}
        .stl-fc.bl .fn{font-size:18px;font-weight:800;color:white}
        .stl-fc.bl .fl{font-size:10px;color:rgba(255,255,255,.8);margin-top:2px}
        .stl-fc-cert{position:absolute;bottom:-12px;right:16px;background:rgba(13,27,46,.95);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:10px 14px}
        .stl-fc-cert p{font-size:10px;color:#94a3b8;margin-bottom:2px}
        .stl-fc-cert strong{font-size:11px;font-weight:700;color:white}

        .stl-stats-sec{background:linear-gradient(180deg,#020617,#1e293b);padding:40px 48px}
        .stl-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:1152px;margin:0 auto}
        .stl-sc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:24px 20px;text-align:center;transition:border-color .2s}
        .stl-sc:hover{border-color:rgba(14,165,233,0.4)}
        .stl-sc-icon{width:44px;height:44px;background:#0ea5e9;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;color:white;margin:0 auto 14px}
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
      `} </style>

      {/* ORIGINAL HEADER SECTION PATTERN */}
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
            <div className="stl-badge">✈️ AVIATION & AEROSPACE</div>
            <h1>Elevating the Standards of<span className="c-pri">Aviation Operations</span></h1>
            <p className="stl-desc">Specialized ground support equipment, precision tooling, and hangar infrastructure for commercial airlines, MRO facilities, and aerospace manufacturers.</p>
            <div className="stl-stats">
              <div><div className="stl-hs-num">50+</div><div className="stl-hs-lbl">Airports</div></div>
              <div><div className="stl-hs-num">12+</div><div className="stl-hs-lbl">Years</div></div>
              <div><div className="stl-hs-num">24/7</div><div className="stl-hs-lbl">AOG Support</div></div>
            </div>
            <div className="stl-hero-btns">
              <a href="/contact" className="stl-btn-pri">Request Consultation →</a>
              <a href="#capabilities" className="stl-btn-drk">▶ View Capabilities</a>
            </div>
          </div>
          <div className="stl-hero-right">
            <div className="stl-img-wrap">
              <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=900&q=85" alt="Aviation operations" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stl-stats-sec">
          <div className="stl-stats-grid">
            <div className="stl-sc"><div className="stl-sc-icon">✈️</div><div className="num">50+</div><div className="lbl">Hubs Equipped</div></div>
            <div className="stl-sc"><div className="stl-sc-icon">🏆</div><div className="num">12+</div><div className="lbl">Years Experience</div></div>
            <div className="stl-sc"><div className="stl-sc-icon">🌐</div><div className="num">30+</div><div className="lbl">Airline Partners</div></div>
            <div className="stl-sc"><div className="stl-sc-icon">⛑️</div><div className="num">100%</div><div className="lbl">Safety Record</div></div>
          </div>
        </section>
      </div>

      {/* NEW CONTENT SECTION */}
      <div className="bg-gray-50 font-sans text-gray-800 flex flex-col flex-1 w-full" id="capabilities">
        {/* Section 1: Core Capabilities */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 flex flex-col items-center">
          <div className="bg-sky-50 text-sky-600 text-[10px] font-bold px-3 py-1 rounded-full mb-4 flex items-center gap-2 border border-sky-100 uppercase tracking-wider">
            ⚙ CORE CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            Aviation Infrastructure <span className="text-sky-600">& Equipment</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-base">
            We supply industry-leading infrastructure for terminal operations, ramp handling, and aircraft maintenance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/ground support.jfif" alt="Ground Support" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-sky-600 text-base">⚙</span> Ground Support Equipment
                </div>
              </div>
              <div className="p-6 pt-8 mt-2">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Aircraft Tow Tractors & Pushbacks</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Ground Power Units (GPUs)</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Passenger Boarding Stairs</span></li>
                </ul>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/MRO.jfif" alt="MRO" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-sky-600 text-base">🔧</span> MRO Tooling & Platforms
                </div>
              </div>
              <div className="p-6 pt-8 mt-2">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Engine Maintenance Stands</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>High-Reach Access Platforms</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Precision Torque & Test Tooling</span></li>
                </ul>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/cargo.jfif" alt="Cargo" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-sky-600 text-base">📦</span> Cargo Handling Systems
                </div>
              </div>
              <div className="p-6 pt-8 mt-2">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Main Deck Cargo Loaders</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>ULD Handling & Storage Systems</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Automated Freight Terminals</span></li>
                </ul>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/hanger.jfif" alt="Hangar" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-sky-600 text-base">🏗</span> Hangar Infrastructure
                </div>
              </div>
              <div className="p-6 pt-8 mt-2">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Overhead Crane Systems</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Aircraft Docking Systems</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Ventilation & Exhaust Extraction</span></li>
                </ul>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/precision.jfif" alt="Testing" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-sky-600 text-base">🎯</span> Precision Testing Equipment
                </div>
              </div>
              <div className="p-6 pt-8 mt-2">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Avionics Test Benches</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Hydraulic Test Mules</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Non-Destructive Testing (NDT) Kits</span></li>
                </ul>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gray-200 relative">
                <img src="/industries/safety.jfif" alt="Safety" className="w-full h-full object-cover" />
                <div className="absolute -bottom-4 left-5 bg-white text-gray-900 font-bold px-3 py-2.5 rounded-lg shadow-md text-[13px] flex items-center gap-2">
                  <span className="text-sky-600 text-base">🛡</span> Aviation Safety Systems
                </div>
              </div>
              <div className="p-6 pt-8 mt-2">
                <ul className="text-[13px] text-gray-600 space-y-2.5">
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Runway Friction Testers</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>Aircraft Recovery Equipment</span></li>
                  <li className="flex items-center gap-3"><span className="text-sky-600 text-[9px]">▶</span> <span>De-icing & Anti-icing Vehicles</span></li>
                </ul>
              </div>
            </div>
          </div>

          <a href="/contact" className="mt-12 inline-flex bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm items-center gap-2 transition shadow-md hover:shadow-sky-500/30">
            Contact for Custom Solutions <span>→</span>
          </a>
        </section>

        {/* Section 2: Quality & Safety Standards */}
        <section className="py-16 px-6 md:px-12 bg-[#082f49] flex flex-col items-center text-white">
          <div className="bg-sky-900/50 text-sky-300 text-[10px] font-bold px-3 py-1 rounded-full mb-4 flex items-center gap-2 border border-sky-800 uppercase tracking-wider">
            ⚙ AVIATION STANDARDS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-center tracking-tight">
            Stringent Quality & <span className="text-sky-400">Safety Standards</span>
          </h2>
          <p className="text-sky-200/70 mb-12 text-center max-w-2xl text-base">
            Delivering equipment that exceeds global aviation regulatory requirements
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-5xl">
            <div className="bg-sky-950/40 border border-sky-800/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-sky-900/60 transition duration-300">
              <div className="text-sky-400 mb-3 text-xl">🛡</div>
              <div className="text-2xl font-bold mb-1.5 text-white">AS9100</div>
              <div className="text-xs text-sky-200/60">Quality Compliance</div>
            </div>
            <div className="bg-sky-950/40 border border-sky-800/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-sky-900/60 transition duration-300">
              <div className="text-sky-400 mb-3 text-xl">⚡</div>
              <div className="text-2xl font-bold mb-1.5 text-white">99.9%</div>
              <div className="text-xs text-sky-200/60">Equipment Uptime</div>
            </div>
            <div className="bg-sky-950/40 border border-sky-800/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-sky-900/60 transition duration-300">
              <div className="text-sky-400 mb-3 text-xl">📞</div>
              <div className="text-2xl font-bold mb-1.5 text-white">24/7</div>
              <div className="text-xs text-sky-200/60">AOG Support Desk</div>
            </div>
            <div className="bg-sky-950/40 border border-sky-800/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-sky-900/60 transition duration-300">
              <div className="text-sky-400 mb-3 text-xl">⏱</div>
              <div className="text-2xl font-bold mb-1.5 text-white">≤ 4 <span className="text-lg">hrs</span></div>
              <div className="text-xs text-sky-200/60">Service Response</div>
            </div>
            <div className="bg-sky-950/40 border border-sky-800/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-sky-900/60 transition duration-300">
              <div className="text-sky-400 mb-3 text-xl">🔒</div>
              <div className="text-2xl font-bold mb-1.5 text-white">100%</div>
              <div className="text-xs text-sky-200/60">Safety Traceability</div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Infrastructure */}
        <section className="py-16 px-6 md:px-12 bg-white flex flex-col items-center">
          <div className="bg-sky-50 text-sky-600 text-[10px] font-bold px-3 py-1 rounded-full mb-4 flex items-center gap-2 border border-sky-100 uppercase tracking-wider">
            ⚙ EQUIPMENT HIGHLIGHTS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            Featured <span className="text-sky-600">Infrastructure</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-base">
            High-performance assets engineered for demanding airport environments
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <img src="/industries/GSE.jfif" alt="GSE Fleet" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-sky-600 text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                  Zero Emission Options
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-xl font-bold mb-1">GSE Fleet Modernization</h3>
                  <p className="text-xs text-gray-300">Ramp Operations</p>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50">
                <span className="text-xs text-gray-500 font-medium">Tow Capacity: Up to 400t</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <img src="/industries/fully automated.jfif" alt="Cargo Handling" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-sky-600 text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                  Fully Automated
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-xl font-bold mb-1">Automated Cargo Terminals</h3>
                  <p className="text-xs text-gray-300">Freight & Logistics</p>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50">
                <span className="text-xs text-gray-500 font-medium">Throughput: 5,000 ULD/day</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <img src="/industries/docking.jfif" alt="Maintenance Docks" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-sky-600 text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                  Tailored Fit
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-xl font-bold mb-1">Aircraft Docking Systems</h3>
                  <p className="text-xs text-gray-300">Base Maintenance (MRO)</p>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50">
                <span className="text-xs text-gray-500 font-medium">Compatibility: Widebody/Narrowbody</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Complete Supply Solutions */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 flex flex-col items-center">
          <div className="bg-sky-50 text-sky-600 text-[10px] font-bold px-3 py-1 rounded-full mb-4 flex items-center gap-2 border border-sky-100 uppercase tracking-wider">
            ⚙ OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            Aviation Supply <span className="text-sky-600">Solutions</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-base">
            End-to-end equipment supply services tailored for the aerospace sector
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-sky-600 group-hover:w-1.5 transition-all"></div>
              <div className="text-3xl text-sky-600 bg-sky-50/50 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-sky-100">📋</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fleet Procurement & Sourcing</h3>
                <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Strategic sourcing of GSE fleets and maintenance tooling from certified aviation OEMs, ensuring compliance and long-term reliability.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">OEM Network</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Volume Pricing</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-sky-600 group-hover:w-1.5 transition-all"></div>
              <div className="text-3xl text-sky-600 bg-sky-50/50 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-sky-100">🔧</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Integration Support</h3>
                <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Expert guidance on infrastructure integration, system compatibility, and meeting strict airport authority safety regulations.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Airport Regs</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Site Planning</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-sky-600 group-hover:w-1.5 transition-all"></div>
              <div className="text-3xl text-sky-600 bg-sky-50/50 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-sky-100">🚚</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AOG Parts & Logistics</h3>
                <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Rapid-response supply chain for critical spare parts and tooling. We understand that grounded aircraft require immediate solutions.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">AOG Support</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Expedited Freight</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-sky-600 group-hover:w-1.5 transition-all"></div>
              <div className="text-3xl text-sky-600 bg-sky-50/50 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-sky-100">⚙</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lifecycle Management Programs</h3>
                <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Comprehensive maintenance schedules, calibration services, and refurbishment programs to extend the life of your ground assets.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Asset Tracking</span>
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">Calibration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Equipment for Every Stage */}
        <section className="py-16 px-6 md:px-12 bg-white flex flex-col items-center pb-24">
          <div className="bg-sky-50 text-sky-600 text-[10px] font-bold px-3 py-1 rounded-full mb-4 flex items-center gap-2 border border-sky-100 uppercase tracking-wider">
            ⚙ OPERATIONAL FLOW
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            Support for Every <span className="text-sky-600">Operational Stage</span>
          </h2>
          <p className="text-gray-500 mb-12 text-center max-w-2xl text-base">
            Equipping the complete aviation lifecycle from terminal to hangar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl">
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)]">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-sky-500/20">01</div>
              <div className="text-2xl mb-4">🏢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Terminal Operations</h3>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Infrastructure facilitating passenger movement, baggage processing, and secure terminal environments.</p>
              <ul className="text-[13px] text-gray-500 space-y-2.5 mt-auto">
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Baggage Handling Systems</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Security Screening Tech</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)]">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-sky-500/20">02</div>
              <div className="text-2xl mb-4">🛫</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ramp Handling</h3>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Essential ground support equipment ensuring quick, safe, and efficient aircraft turnarounds at the gate.</p>
              <ul className="text-[13px] text-gray-500 space-y-2.5 mt-auto">
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Pushback Tractors</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Ground Power Units</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)]">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-sky-500/20">03</div>
              <div className="text-2xl mb-4">🔧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Base & Line Maintenance</h3>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Precision tooling, access platforms, and testing equipment for routine and heavy aircraft maintenance.</p>
              <ul className="text-[13px] text-gray-500 space-y-2.5 mt-auto">
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Engine Tooling</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Tail Docking Systems</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)]">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-sky-500/20">04</div>
              <div className="text-2xl mb-4">📦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Freight & Logistics</h3>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Specialized equipment for loading, unloading, and managing unit load devices (ULDs) and bulk cargo.</p>
              <ul className="text-[13px] text-gray-500 space-y-2.5 mt-auto">
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Main Deck Loaders</li>
                <li className="flex items-center gap-2"><span className="text-gray-300 text-xs">○</span> Transfer Decks</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
