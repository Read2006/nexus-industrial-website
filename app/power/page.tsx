import Image from 'next/image';

export default function PowerPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#fff' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .pwr *{box-sizing:border-box}
        .pwr{font-family:'Inter',sans-serif;color:#fff;overflow-x:hidden}
        .pwr a{text-decoration:none;color:inherit}
        .pwr img{display:block}
        .pwr-hero{background:linear-gradient(135deg,#2e1003 0%,#422006 40%,#713f12 70%,#854d0e 100%);min-height:560px;display:flex;align-items:center;padding:60px 48px;position:relative;overflow:hidden}
        .pwr-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(250,204,21,0.15),transparent)}
        .pwr-hero-left{flex:1;max-width:580px;position:relative;z-index:2}
        .pwr-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(250,204,21,0.15);border:1px solid rgba(250,204,21,0.4);color:#facc15;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:7px 16px;border-radius:20px;margin-bottom:26px;text-transform:uppercase}
        .pwr-hero h1{font-size:52px;font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:20px}
        .pwr-hero h1 .c-pri{color:#facc15;display:block}
        .pwr-desc{font-size:15.5px;color:#94a3b8;line-height:1.8;max-width:460px;margin-bottom:32px}
        .pwr-stats{display:flex;gap:32px;margin-bottom:36px}
        .pwr-hs-num{font-size:28px;font-weight:900;color:#facc15;line-height:1}
        .pwr-hs-lbl{font-size:12px;color:#94a3b8;margin-top:3px}
        .pwr-hero-btns{display:flex;gap:12px;flex-wrap:wrap}
        .pwr-btn-pri{background:#eab308;color:#fff;padding:14px 28px;font-weight:700;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px;transition:background .2s}
        .pwr-btn-pri:hover{background:#ca8a04}
        .pwr-btn-drk{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;padding:14px 28px;font-weight:600;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px}
        .pwr-hero-right{position:relative;z-index:2;flex-shrink:0;margin-left:52px}
        .pwr-img-wrap{position:relative;width:560px;height:400px;border-radius:12px;overflow:hidden}
        .pwr-img-wrap img{width:100%;height:100%;object-fit:cover}
        .pwr-fc{position:absolute;background:white;color:#000;border-radius:10px;padding:11px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,.4)}
        .pwr-fc.tr{top:-14px;right:-14px}
        .pwr-fc-icon{width:34px;height:34px;background:#16a34a;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
        .pwr-fc .fn{font-size:18px;font-weight:900;color:#000;line-height:1}
        .pwr-fc .fl{font-size:11px;color:#666;margin-top:2px}
        .pwr-fc.bl{bottom:-14px;left:-14px;background:#eab308;color:white;border-radius:10px;padding:12px 18px}
        .pwr-fc.bl .fn{font-size:22px;font-weight:900;color:white}
        .pwr-fc.bl .fl{font-size:11px;color:rgba(255,255,255,.8);margin-top:2px}
        .pwr-fc-cert{position:absolute;bottom:-14px;right:20px;background:rgba(13,27,46,.95);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:11px 16px}
        .pwr-fc-cert p{font-size:11px;color:#94a3b8;margin-bottom:3px}
        .pwr-fc-cert strong{font-size:12px;font-weight:700;color:white}

        .pwr-stats-sec{background:linear-gradient(180deg,#2e1003,#713f12);padding:52px 48px}
        .pwr-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1280px;margin:0 auto}
        .pwr-sc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px 24px;text-align:center;transition:border-color .2s}
        .pwr-sc:hover{border-color:rgba(250,204,21,0.4)}
        .pwr-sc-icon{width:52px;height:52px;background:#eab308;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 18px}
        .pwr-sc .num{font-size:44px;font-weight:900;color:#fff;line-height:1;margin-bottom:6px}
        .pwr-sc .lbl{font-size:13px;color:#94a3b8}

        @media (max-width: 900px){
          .pwr-hero{flex-direction:column;padding:48px 24px}
          .pwr-hero-right{margin-left:0;margin-top:40px}
          .pwr-img-wrap{width:100%;max-width:440px}
          .pwr-stats-grid{grid-template-columns:repeat(2,1fr)}
          .pwr-hero h1{font-size:38px}
        }
      
        @media (max-width: 600px){
          .pwr-hero{padding: 40px 24px !important}
          .pwr-hero h1{font-size:32px !important;line-height:1.1 !important;letter-spacing:-1px !important}
          .pwr-img-wrap{height:250px !important}
          .pwr-stats{flex-direction:row !important;justify-content:flex-start !important;gap:28px !important;margin-bottom:28px !important}
          .pwr-hs-num{font-size:26px !important}
          .pwr-hs-lbl{color:#cbd5e1 !important;font-weight:600 !important}
          .pwr-stats-grid{grid-template-columns:1fr !important}
          .pwr-s-cards{grid-template-columns:1fr !important}
          .pwr-tl{grid-template-columns:1fr !important;gap:24px !important}
          .pwr-stats-sec{padding:32px 24px !important}
          .pwr-vc-section{padding:48px 24px !important}
          .pwr-lifecycle{padding:48px 24px !important}
          .pwr-safety{padding:48px 24px !important}
          .pwr-vc-section h2{font-size:28px !important}
          .pwr-safety h2{font-size:28px !important}
          .pwr-lifecycle h2{font-size:28px !important}
          .pwr-cta{padding:48px 24px !important}
          .pwr-cta h2{font-size:28px !important}
          .pwr-cert-row{flex-direction:column !important;align-items:flex-start !important;gap:16px !important;padding:16px 20px !important}
          .pwr-fc{display:none !important}
          .pwr-fc-cert{display:none !important}
        }
      `}} />

      <div className="pwr">
        {/* BACK LINK */}
        <div className="px-6 md:px-12 py-5" style={{ background: '#2e1003' }}>
          <a href="/#industries" style={{ color: '#facc15', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            ← Back to Industries
          </a>
        </div>

        {/* HERO */}
        <section className="pwr-hero">
          <div className="pwr-hero-left">
            <div className="pwr-badge">⚡ POWER GENERATION SOLUTIONS</div>
            <h1>Energizing the<span className="c-pri">National Grid</span></h1>
            <p className="pwr-desc">Critical spares for thermal, hydro, and renewable power plants. From turbine components to high-voltage switchgear, we ensure uninterrupted energy production.</p>
            <div className="pwr-stats">
              <div><div className="pwr-hs-num">100+</div><div className="pwr-hs-lbl">Projects</div></div>
              <div><div className="pwr-hs-num">15+</div><div className="pwr-hs-lbl">Years</div></div>
              <div><div className="pwr-hs-num">10+</div><div className="pwr-hs-lbl">Countries</div></div>
            </div>
            <div className="pwr-hero-btns">
              <a href="/contact" className="pwr-btn-pri">Request Quote →</a>
              <a href="/#products" className="pwr-btn-drk">▶ View Products</a>
            </div>
          </div>
          <div className="pwr-hero-right">
            <div className="pwr-img-wrap">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=85" alt="power industry" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="pwr-stats-sec">
          <div className="pwr-stats-grid">
            <div className="pwr-sc"><div className="pwr-sc-icon">📋</div><div className="num">100+</div><div className="lbl">Projects Delivered</div></div>
            <div className="pwr-sc"><div className="pwr-sc-icon">🏆</div><div className="num">15+</div><div className="lbl">Years Experience</div></div>
            <div className="pwr-sc"><div className="pwr-sc-icon">🌐</div><div className="num">10+</div><div className="lbl">Countries Served</div></div>
            <div className="pwr-sc"><div className="pwr-sc-icon">⛑️</div><div className="num">Zero</div><div className="lbl">Compromises</div></div>
          </div>
        </section>
      </div>

      {/* NEW CONTENT: ABT Europe Style Sections */}
      <div className="flex-1 w-full font-sans text-gray-800 bg-white">
        
        {/* Section 1: Equipment Supply Portfolio */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-white">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
            Equipment Supply <span className="text-[#0099ff]">Portfolio</span>
          </h2>
          <p className="text-gray-500 mb-16 text-center max-w-2xl text-[15px]">
            Comprehensive equipment supply across all power generation technologies
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* Left Col: Bars */}
            <div className="flex flex-col gap-4 justify-center">
              {/* Bar 1 */}
              <div className="bg-[#151f32] rounded-xl p-6 relative overflow-hidden shadow-md">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#ff6600] text-white flex items-center justify-center text-2xl shrink-0 shadow-lg">🔥</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-white font-bold text-[15px]">Thermal Power Equipment</h3>
                      <span className="text-[#0099ff] font-extrabold text-lg">45%</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-4">Equipment for coal, gas, and combined cycle power plants</p>
                    <div className="flex gap-6 border-t border-gray-700/50 pt-4">
                      <div>
                        <div className="text-[#ff6600] font-bold text-sm">500+</div>
                        <div className="text-gray-500 text-[10px] uppercase">Products</div>
                      </div>
                      <div>
                        <div className="text-green-400 font-bold text-sm">35+</div>
                        <div className="text-gray-500 text-[10px] uppercase">Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bar 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-xl shrink-0 shadow-md">🌿</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <h3 className="text-gray-900 font-bold text-sm">Renewable Energy Equipment</h3>
                    <span className="text-[#0099ff] font-extrabold text-base">35%</span>
                  </div>
                  <p className="text-gray-500 text-xs">Components for wind, solar, hydro, and biomass installations</p>
                </div>
              </div>
              {/* Bar 3 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#0099ff] text-white flex items-center justify-center text-xl shrink-0 shadow-md">⚛️</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <h3 className="text-gray-900 font-bold text-sm">Nuclear Power Equipment</h3>
                    <span className="text-[#0099ff] font-extrabold text-base">20%</span>
                  </div>
                  <p className="text-gray-500 text-xs">Specialized equipment and safety systems for nuclear facilities</p>
                </div>
              </div>
            </div>
            
            {/* Right Col: Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[340px]">
              <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80" alt="Power Plant" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-1.5 bg-[#ff6600] text-white text-[10px] font-bold px-2 py-1 rounded mb-2">
                  <span>🔥</span> Thermal Power Equipment
                </div>
                <h3 className="text-white text-2xl font-bold">500+ Products Available</h3>
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
            We supply industry-leading equipment for all power generation applications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/turbines.jfif" alt="Turbines" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">⚙️</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Turbines & Generators</h3>
                    <p className="text-gray-300 text-[10px]">Power Generation Core</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Steam Turbines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Gas Turbines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Hydro Turbines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Wind Turbines</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Generators</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Excitation Systems</div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/transmission.jfif" alt="Transmission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">⚡</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Transmission Systems</h3>
                    <p className="text-gray-300 text-[10px]">Power Delivery</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Power Transformers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Switchgear</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Circuit Breakers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Protection Relays</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> HVDC Systems</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Smart Grid</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/power control and automation.jfif" alt="Control" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">💻</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Control & Automation</h3>
                    <p className="text-gray-300 text-[10px]">Smart Operations</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> SCADA Systems</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> DCS Platforms</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Turbine Controls</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Grid Management</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Predictive Analytics</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Remote Monitoring</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/balance.jfif" alt="Balance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">🏗️</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Balance of Plant</h3>
                    <p className="text-gray-300 text-[10px]">Supporting Systems</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Cooling Towers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Water Treatment</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Heat Exchangers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Compressors</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Boiler Auxiliaries</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Piping Systems</div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/energy storage.jfif" alt="Energy Storage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">🔋</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Energy Storage</h3>
                    <p className="text-gray-300 text-[10px]">Power Backup</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Battery Systems (BESS)</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Pumped Hydro</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Flywheel Storage</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Thermal Storage</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Inverters (PCS)</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Energy Management</div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src="/industries/testing.jfif" alt="Testing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white text-gray-800 p-2 rounded-lg shadow-sm text-lg leading-none">📈</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Testing & Diagnostics</h3>
                    <p className="text-gray-300 text-[10px]">Condition Monitoring</p>
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-y-3 gap-x-2 text-[12px] text-gray-600 bg-white flex-1">
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Vibration Analysis</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Thermography</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Oil Testing Kits</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Relay Testers</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> High Voltage Testing</div>
                <div className="flex items-center gap-1.5"><span className="text-[#ff6600]">›</span> Emissions Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: From Generation to Consumer */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-[#0a1120] border-y border-gray-800 relative overflow-hidden">
          <div className="bg-gray-800 border border-gray-700 text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider relative z-10">
            ⚗ EQUIPMENT FOR EVERY STAGE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center tracking-tight relative z-10">
            From Generation to <span className="text-[#ff6600]">Consumer</span>
          </h2>
          <p className="text-gray-400 mb-16 text-center max-w-2xl text-[15px] relative z-10">
            We supply equipment for the complete power transmission and distribution chain
          </p>

          <div className="w-full max-w-6xl relative z-10 overflow-x-auto pb-4 custom-scrollbar">
            <div className="min-w-[800px] flex justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-[22px] left-[5%] right-[5%] h-0.5 bg-gray-700 z-0"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-[#ff6600] text-white flex items-center justify-center text-xl shadow-lg mb-4">⚡</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Generation</h4>
                <div className="text-[#ff6600] font-bold text-[11px] mb-1">11-33 kV</div>
                <p className="text-gray-500 text-[10px]">Power plant output</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-red-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">📈</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Step-Up</h4>
                <div className="text-red-500 font-bold text-[11px] mb-1">132-400 kV</div>
                <p className="text-gray-500 text-[10px]">High voltage transmission</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-purple-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">🔌</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Transmission</h4>
                <div className="text-purple-500 font-bold text-[11px] mb-1">220-765 kV</div>
                <p className="text-gray-500 text-[10px]">Bulk power transfer</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-blue-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">📉</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Sub-Transmission</h4>
                <div className="text-blue-500 font-bold text-[11px] mb-1">66-132 kV</div>
                <p className="text-gray-500 text-[10px]">Regional distribution</p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-green-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">🏢</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Distribution</h4>
                <div className="text-green-500 font-bold text-[11px] mb-1">11-33 kV</div>
                <p className="text-gray-500 text-[10px]">Local networks</p>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center text-center relative z-10 w-32">
                <div className="w-11 h-11 rounded-lg bg-gray-500 text-white flex items-center justify-center text-xl shadow-lg mb-4">💡</div>
                <h4 className="text-white font-bold text-[13px] mb-1">Consumer</h4>
                <div className="text-gray-400 font-bold text-[11px] mb-1">230-415 V</div>
                <p className="text-gray-500 text-[10px]">End user supply</p>
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
                  <div className="w-8 h-8 rounded-lg bg-[#0099ff] flex items-center justify-center text-white text-sm">📦</div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Supply Chain Dashboard</h3>
                    <div className="flex items-center gap-1.5 text-green-400 text-[10px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Active
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-extrabold text-xl leading-none">99.5%</div>
                  <div className="text-gray-500 text-[10px]">On-Time Delivery</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">🌍</span> Global Sourcing</div>
                  <div className="text-white font-bold text-xl">200+</div>
                  <div className="text-gray-500 text-[10px]">OEM Partners</div>
                </div>
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">⏱</span> Delivery Speed</div>
                  <div className="text-white font-bold text-xl">48hrs</div>
                  <div className="text-gray-500 text-[10px]">Express Available</div>
                </div>
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">📋</span> Product Range</div>
                  <div className="text-white font-bold text-xl">10K+</div>
                  <div className="text-gray-500 text-[10px]">SKUs in Stock</div>
                </div>
                <div className="bg-[#1a2639] border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-2 uppercase"><span className="text-[#ff6600]">🎯</span> Quality Rate</div>
                  <div className="text-white font-bold text-xl">99.8%</div>
                  <div className="text-gray-500 text-[10px]">Acceptance Rate</div>
                </div>
              </div>

              <div className="border-t border-gray-700/50 pt-4 flex items-center justify-between">
                <div className="text-gray-400 text-xs">Supply Status</div>
                <div className="flex items-center gap-2 text-[10px] text-green-400"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> All Systems Active</div>
              </div>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-green-400 w-[95%]"></div>
              </div>
            </div>

            {/* Right Col: Text & Checklist */}
            <div>
              <div className="bg-blue-50 text-[#0099ff] border border-blue-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider inline-block">
                📦 SUPPLY CAPABILITIES
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                Reliable Equipment <span className="text-[#0099ff]">Supply</span>
              </h2>
              <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
                Our global sourcing network and logistics expertise ensure you receive quality equipment when you need it.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Global OEM Partnerships</h4>
                    <p className="text-gray-500 text-[11px]">200+ manufacturer relationships worldwide</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Quality Assurance</h4>
                    <p className="text-gray-500 text-[11px]">Rigorous inspection and testing protocols</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Fast Delivery</h4>
                    <p className="text-gray-500 text-[11px]">Express shipping for critical components</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="text-[#0099ff] mt-0.5">✓</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">Technical Support</h4>
                    <p className="text-gray-500 text-[11px]">Expert guidance for equipment selection</p>
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
            All equipment we supply meets the highest international standards
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-6xl">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-xl mb-4">⚙️</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">IEEE Standards</h4>
              <p className="text-gray-500 text-[11px]">Full compliance with electrical standards</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center text-xl mb-4">🛡️</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">IEC Compliance</h4>
              <p className="text-gray-500 text-[11px]">International safety requirements</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center text-xl mb-4">⚛️</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">Nuclear Safety</h4>
              <p className="text-gray-500 text-[11px]">NRC & IAEA certified equipment</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-xl mb-4">⚡</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">Grid Codes</h4>
              <p className="text-gray-500 text-[11px]">NERC & regional grid compliance</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-xl mb-4">🌿</div>
              <h4 className="text-gray-900 font-bold text-[13px] mb-2">Environmental</h4>
              <p className="text-gray-500 text-[11px]">EPA & EU emission standards</p>
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
            End-to-end equipment supply services for power generation clients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6600]"></div>
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#ff6600] flex items-center justify-center text-xl shrink-0">📦</div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">Equipment Supply</h3>
                <p className="text-gray-500 text-[13px] mb-4">Comprehensive procurement and supply of power generation equipment from leading global manufacturers.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">OEM Partnerships</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Quality Assurance</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Global Sourcing</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0099ff]"></div>
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0099ff] flex items-center justify-center text-xl shrink-0">🔧</div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">Technical Support</h3>
                <p className="text-gray-500 text-[13px] mb-4">Expert technical consultation for equipment selection, specification, and integration.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Equipment Selection</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Specification Support</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Troubleshooting</span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-xl shrink-0">⚙️</div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">Spare Parts Supply</h3>
                <p className="text-gray-500 text-[13px] mb-4">Fast delivery of genuine spare parts and components to minimize plant downtime.</p>
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
                <h3 className="text-gray-900 font-bold text-base mb-2">Logistics & Delivery</h3>
                <p className="text-gray-500 text-[13px] mb-4">End-to-end logistics management ensuring safe and timely delivery worldwide.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Global Shipping</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Project Logistics</span>
                  <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">Customs Handling</span>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>

    </div>
  )
}
