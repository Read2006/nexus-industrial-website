import Image from 'next/image';

export default function FertilizerPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#fff' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .fer *{box-sizing:border-box}
        .fer{font-family:'Inter',sans-serif;color:#fff;overflow-x:hidden}
        .fer a{text-decoration:none;color:inherit}
        .fer img{display:block}
        .fer-hero{background:linear-gradient(135deg,#052e16 0%,#14532d 40%,#166534 70%,#15803d 100%);min-height:560px;display:flex;align-items:center;padding:60px 48px;position:relative;overflow:hidden}
        .fer-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(132,204,22,0.15),transparent)}
        .fer-hero-left{flex:1;max-width:580px;position:relative;z-index:2}
        .fer-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(132,204,22,0.15);border:1px solid rgba(132,204,22,0.4);color:#84cc16;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:7px 16px;border-radius:20px;margin-bottom:26px;text-transform:uppercase}
        .fer-hero h1{font-size:52px;font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:20px}
        .fer-hero h1 .c-pri{color:#4ade80;display:block}
        .fer-desc{font-size:15.5px;color:#94a3b8;line-height:1.8;max-width:460px;margin-bottom:32px}
        .fer-stats{display:flex;gap:32px;margin-bottom:36px}
        .fer-hs-num{font-size:28px;font-weight:900;color:#84cc16;line-height:1}
        .fer-hs-lbl{font-size:12px;color:#94a3b8;margin-top:3px}
        .fer-hero-btns{display:flex;gap:12px;flex-wrap:wrap}
        .fer-btn-pri{background:#65a30d;color:#fff;padding:14px 28px;font-weight:700;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px;transition:background .2s}
        .fer-btn-pri:hover{background:#4d7c0f}
        .fer-btn-drk{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;padding:14px 28px;font-weight:600;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px}
        .fer-hero-right{position:relative;z-index:2;flex-shrink:0;margin-left:52px}
        .fer-img-wrap{position:relative;width:560px;height:400px;border-radius:12px;overflow:hidden}
        .fer-img-wrap img{width:100%;height:100%;object-fit:cover}
        .fer-fc{position:absolute;background:white;color:#000;border-radius:10px;padding:11px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,.4)}
        .fer-fc.tr{top:-14px;right:-14px}
        .fer-fc-icon{width:34px;height:34px;background:#16a34a;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
        .fer-fc .fn{font-size:18px;font-weight:900;color:#000;line-height:1}
        .fer-fc .fl{font-size:11px;color:#666;margin-top:2px}
        .fer-fc.bl{bottom:-14px;left:-14px;background:#65a30d;color:white;border-radius:10px;padding:12px 18px}
        .fer-fc.bl .fn{font-size:22px;font-weight:900;color:white}
        .fer-fc.bl .fl{font-size:11px;color:rgba(255,255,255,.8);margin-top:2px}
        .fer-fc-cert{position:absolute;bottom:-14px;right:20px;background:rgba(13,27,46,.95);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:11px 16px}
        .fer-fc-cert p{font-size:11px;color:#94a3b8;margin-bottom:3px}
        .fer-fc-cert strong{font-size:12px;font-weight:700;color:white}
 
        .fer-stats-sec{background:linear-gradient(180deg,#052e16,#166534);padding:52px 48px}
        .fer-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1280px;margin:0 auto}
        .fer-sc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px 24px;text-align:center;transition:border-color .2s}
        .fer-sc:hover{border-color:rgba(132,204,22,0.4)}
        .fer-sc-icon{width:52px;height:52px;background:#65a30d;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 18px}
        .fer-sc .num{font-size:44px;font-weight:900;color:#fff;line-height:1;margin-bottom:6px}
        .fer-sc .lbl{font-size:13px;color:#94a3b8}
 
        @media (max-width: 900px){
          .fer-hero{flex-direction:column;padding:48px 24px}
          .fer-hero-right{margin-left:0;margin-top:40px}
          .fer-img-wrap{width:100%;max-width:440px}
          .fer-stats-grid{grid-template-columns:repeat(2,1fr)}
          .fer-hero h1{font-size:38px}
        }
      
        @media (max-width: 600px){
          .fer-hero{padding: 40px 24px !important}
          .fer-hero h1{font-size:32px !important;line-height:1.1 !important;letter-spacing:-1px !important}
          .fer-img-wrap{height:250px !important}
          .fer-stats{flex-direction:row !important;justify-content:flex-start !important;gap:28px !important;margin-bottom:28px !important}
          .fer-hs-num{font-size:26px !important}
          .fer-hs-lbl{color:#cbd5e1 !important;font-weight:600 !important}
          .fer-stats-grid{grid-template-columns:1fr !important}
          .fer-s-cards{grid-template-columns:1fr !important}
          .fer-tl{grid-template-columns:1fr !important;gap:24px !important}
          .fer-stats-sec{padding:32px 24px !important}
          .fer-vc-section{padding:48px 24px !important}
          .fer-lifecycle{padding:48px 24px !important}
          .fer-safety{padding:48px 24px !important}
          .fer-vc-section h2{font-size:28px !important}
          .fer-safety h2{font-size:28px !important}
          .fer-lifecycle h2{font-size:28px !important}
          .fer-cta{padding:48px 24px !important}
          .fer-cta h2{font-size:28px !important}
          .fer-cert-row{flex-direction:column !important;align-items:flex-start !important;gap:16px !important;padding:16px 20px !important}
          .fer-fc{display:none !important}
          .fer-fc-cert{display:none !important}
        }
      `}} />


      <div className="fer">
        {/* BACK LINK */}
        <div className="px-6 md:px-12 py-5" style={{ background: '#052e16' }}>
          <a href="/#industries" style={{ color: '#84cc16', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            ← Back to Industries
          </a>
        </div>

        {/* HERO */}
        <section className="fer-hero">
          <div className="fer-hero-left">
            <div className="fer-badge">🌱 FERTILIZER INDUSTRY SOLUTIONS</div>
            <h1>Nurturing Global<span className="c-pri">Agriculture Yields</span></h1>
            <p className="fer-desc">High-grade chemical processing equipment, corrosion-resistant valves, and synthesis machinery parts for continuous ammonia and urea production.</p>
            <div className="fer-stats">
              <div><div className="fer-hs-num">100+</div><div className="fer-hs-lbl">Projects</div></div>
              <div><div className="fer-hs-num">15+</div><div className="fer-hs-lbl">Years</div></div>
              <div><div className="fer-hs-num">10+</div><div className="fer-hs-lbl">Countries</div></div>
            </div>
            <div className="fer-hero-btns">
              <a href="/contact" className="fer-btn-pri">Request Quote →</a>
              <a href="/#products" className="fer-btn-drk">▶ View Products</a>
            </div>
          </div>
          <div className="fer-hero-right">
            <div className="fer-img-wrap">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=85" alt="fertilizer industry" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="fer-stats-sec">
          <div className="fer-stats-grid">
            <div className="fer-sc"><div className="fer-sc-icon">📋</div><div className="num">100+</div><div className="lbl">Projects Delivered</div></div>
            <div className="fer-sc"><div className="fer-sc-icon">🏆</div><div className="num">15+</div><div className="lbl">Years Experience</div></div>
            <div className="fer-sc"><div className="fer-sc-icon">🌐</div><div className="num">10+</div><div className="lbl">Countries Served</div></div>
            <div className="fer-sc"><div className="fer-sc-icon">⛑️</div><div className="num">Zero</div><div className="lbl">Compromises</div></div>
          </div>
        </section>
      </div>

      {/* LOWER CONTENT: ABT Europe Style Sections */}
      <div className="flex-1 w-full font-sans text-gray-800 bg-white">
        
        {/* Section 1: About Our Expertise */}
        <section className="py-24 px-6 md:px-12 flex flex-col items-center bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl items-center">
            
            {/* Left Col: Collage */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg z-10">
                <img src="/industries/fertiliizer 1.jfif" alt="Agriculture" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-0 right-[10%] bg-white p-5 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-30 flex items-center gap-6 border border-gray-100 min-w-[280px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0ea5e9] text-white rounded-xl flex items-center justify-center text-2xl shadow-sm">🛡️</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">World-Class<br/>Technology</h4>
                    <p className="text-gray-400 text-[10px] mt-1">ASME Certified</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-gray-50 border border-gray-100 p-1.5 rounded text-center">
                    <div className="text-gray-500 text-[8px] font-bold">ISO</div>
                    <div className="text-gray-900 text-[9px] font-bold">9001</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 p-1.5 rounded text-center">
                    <div className="text-gray-500 text-[8px] font-bold">ISO</div>
                    <div className="text-gray-900 text-[9px] font-bold">14001</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 p-1.5 rounded text-center">
                    <div className="text-gray-500 text-[8px] font-bold">ISO</div>
                    <div className="text-gray-900 text-[9px] font-bold">45001</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Content */}
            <div>
              <div className="bg-sky-50 text-[#0ea5e9] border border-sky-100 text-[10px] font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider inline-flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                ABOUT OUR EXPERTISE
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                Global Leader in <span className="text-[#0ea5e9]">Fertilizer Technology</span>
              </h2>
              <p className="text-gray-500 mb-4 text-[15px] leading-relaxed">
                Nexus Industrial is a premier provider of complete fertilizer plant solutions, delivering world-scale ammonia, urea, and NPK production facilities. With over 15 years of experience, we have commissioned 100+ plants across 10+ countries.
              </p>
              <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
                Our proprietary technologies achieve industry-leading energy efficiency of 28 GJ/MT for ammonia and 5.0 GJ/MT for urea production. We provide complete EPC services from feasibility studies to plant commissioning with guaranteed performance.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-lg shrink-0">📈</div>
                  <div>
                    <div className="text-gray-500 text-[11px] mb-0.5 font-medium">Plant Availability</div>
                    <div className="text-[#0ea5e9] font-bold text-lg leading-none">98.5%</div>
                  </div>
                </div>
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-lg shrink-0">⚡</div>
                  <div>
                    <div className="text-gray-500 text-[11px] mb-0.5 font-medium">Energy Efficiency</div>
                    <div className="text-[#0ea5e9] font-bold text-lg leading-none">28 GJ/MT</div>
                  </div>
                </div>
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-lg shrink-0">🎯</div>
                  <div>
                    <div className="text-gray-500 text-[11px] mb-0.5 font-medium">Product Quality</div>
                    <div className="text-[#0ea5e9] font-bold text-lg leading-none">99.9%</div>
                  </div>
                </div>
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-lg shrink-0">🌿</div>
                  <div>
                    <div className="text-gray-500 text-[11px] mb-0.5 font-medium">Environmental</div>
                    <div className="text-[#0ea5e9] font-bold text-lg leading-none">Zero LLD</div>
                  </div>
                </div>
              </div>

              <a href="/about" className="inline-flex bg-[#0ea5e9] hover:bg-blue-500 text-white px-7 py-3 rounded font-semibold text-sm items-center gap-2 transition shadow-md">
                Learn More About Us <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Industrial Equipment Portfolio */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-white border-t border-gray-100">
          <div className="bg-sky-50 text-[#0ea5e9] border border-sky-100 text-[10px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider inline-flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            EQUIPMENT RANGE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            Industrial <span className="text-[#0ea5e9]">Equipment Portfolio</span>
          </h2>
          <p className="text-gray-500 mb-14 text-center max-w-2xl text-[15px]">
            Complete range of process equipment for fertilizer manufacturing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 relative overflow-hidden">
                <img src="/industries/synthesis.jfif" alt="Synthesis & Reaction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-gray-800/80 backdrop-blur text-white p-2.5 rounded-lg shadow-sm text-lg leading-none border border-gray-600">⚗️</div>
                  <h3 className="text-white font-bold text-base">Synthesis & Reaction</h3>
                </div>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 text-[12.5px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Ammonia Synthesis Converters (Radial/Axial Flow)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Urea High Pressure Reactors (200-250 bar)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Nitric Acid Absorption Towers</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Sulfuric Acid Contact Towers</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Phosphoric Acid Reactors/Digesters</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Ammonium Nitrate Neutralizers</li>
                </ul>
                <a href="/products" className="mt-auto text-[#0ea5e9] text-[13px] font-bold hover:text-blue-600 inline-flex items-center gap-1">
                  View Specifications →
                </a>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 relative overflow-hidden">
                <img src="/industries/heat transfer.jfif" alt="Heat Transfer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-gray-800/80 backdrop-blur text-white p-2.5 rounded-lg shadow-sm text-lg leading-none border border-gray-600">🌡️</div>
                  <h3 className="text-white font-bold text-base">Heat Transfer Equipment</h3>
                </div>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 text-[12.5px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Primary & Secondary Reformers</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Waste Heat Boilers (Steam Generation)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Process Gas Heaters/Coolers</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Carbamate Condensers (HP/LP)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Evaporators (Falling Film/Forced Circulation)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Steam Superheaters & Economizers</li>
                </ul>
                <a href="/products" className="mt-auto text-[#0ea5e9] text-[13px] font-bold hover:text-blue-600 inline-flex items-center gap-1">
                  View Specifications →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 relative overflow-hidden">
                <img src="/industries/seperation.jfif" alt="Separation & Purification" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-gray-800/80 backdrop-blur text-white p-2.5 rounded-lg shadow-sm text-lg leading-none border border-gray-600">⚗️</div>
                  <h3 className="text-white font-bold text-base">Separation & Purification</h3>
                </div>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 text-[12.5px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> CO2 Removal Systems (MDEA/Benfield)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Ammonia Recovery Units</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Phosphoric Acid Filtration Systems</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Crystallizers & Centrifuges</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Molecular Sieve Dryers</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Distillation Columns</li>
                </ul>
                <a href="/products" className="mt-auto text-[#0ea5e9] text-[13px] font-bold hover:text-blue-600 inline-flex items-center gap-1">
                  View Specifications →
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80" alt="Granulation & Finishing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-gray-800/80 backdrop-blur text-white p-2.5 rounded-lg shadow-sm text-lg leading-none border border-gray-600">🔘</div>
                  <h3 className="text-white font-bold text-base">Granulation & Finishing</h3>
                </div>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 text-[12.5px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Prilling Towers (200-300m height)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Drum Granulators (Ø3-5m)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Fluidized Bed Granulators</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Rotary Dryers & Coolers</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Coating & Conditioning Systems</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Screening & Classification Equipment</li>
                </ul>
                <a href="/products" className="mt-auto text-[#0ea5e9] text-[13px] font-bold hover:text-blue-600 inline-flex items-center gap-1">
                  View Specifications →
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 relative overflow-hidden">
                <img src="/industries/material handling.jfif" alt="Material Handling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-gray-800/80 backdrop-blur text-white p-2.5 rounded-lg shadow-sm text-lg leading-none border border-gray-600">🚛</div>
                  <h3 className="text-white font-bold text-base">Material Handling</h3>
                </div>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 text-[12.5px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Belt Conveyors (Covered/Open)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Bucket Elevators (High Capacity)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Pneumatic Conveying Systems</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Screw Conveyors & Feeders</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Storage Silos & Bins</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Ship/Rail/Truck Loading Systems</li>
                </ul>
                <a href="/products" className="mt-auto text-[#0ea5e9] text-[13px] font-bold hover:text-blue-600 inline-flex items-center gap-1">
                  View Specifications →
                </a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 relative overflow-hidden">
                <img src="/industries/pakaging.jfif" alt="Packaging & Dispatch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-gray-800/80 backdrop-blur text-white p-2.5 rounded-lg shadow-sm text-lg leading-none border border-gray-600">📦</div>
                  <h3 className="text-white font-bold text-base">Packaging & Dispatch</h3>
                </div>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 text-[12.5px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Automatic Bagging Machines (50kg/1MT)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> FFS (Form-Fill-Seal) Lines</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Palletizing & Stretch Wrapping</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Bulk Loading Systems</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Weighing & Quality Control</li>
                  <li className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-0.5 text-sm">›</span> Warehouse Management Systems</li>
                </ul>
                <a href="/products" className="mt-auto text-[#0ea5e9] text-[13px] font-bold hover:text-blue-600 inline-flex items-center gap-1">
                  View Specifications →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Fertilizer Production Flow */}
        <section className="py-24 px-6 md:px-12 flex flex-col items-center bg-[#283243] relative overflow-hidden">
          {/* Background image blended */}
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="absolute inset-0 z-0 bg-[#283243]/90"></div>

          <div className="bg-[#1f2937] text-white border border-gray-600 text-[10px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider inline-flex items-center gap-1.5 relative z-10 shadow-sm">
            <svg className="w-3 h-3 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            PRODUCTION PROCESS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 text-center tracking-tight relative z-10">
            Fertilizer <span className="text-[#0ea5e9]">Production Flow</span>
          </h2>
          <p className="text-gray-400 mb-20 text-center max-w-2xl text-[15px] relative z-10">
            Integrated process from feedstock to finished product
          </p>

          <div className="w-full max-w-6xl relative z-10 overflow-x-auto pt-4 pb-4 custom-scrollbar">
            <div className="min-w-[900px] flex justify-between relative px-2">
              {/* Connecting Line */}
              <div className="absolute top-[32px] left-[8%] right-[8%] h-[1px] bg-[#0ea5e9]/50 z-0"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10 w-[140px] group">
                <div className="absolute -top-3 -right-1 w-5 h-5 bg-white text-gray-900 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md z-20">1</div>
                <div className="w-16 h-16 rounded-full bg-[#1e293b] border-2 border-transparent group-hover:border-[#0ea5e9] transition-colors text-white flex items-center justify-center text-2xl shadow-lg mb-5 relative">
                  🗻
                </div>
                <h4 className="text-white font-bold text-[12.5px] mb-2 leading-tight">Feedstock Processing</h4>
                <p className="text-gray-400 text-[10px] mb-3 leading-relaxed px-1">Natural gas desulfurization, phosphate rock grinding, potash refining</p>
                <div className="text-[#0ea5e9] font-bold text-[10px]">Feed Purity: {'>'}99%</div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10 w-[140px] group">
                <div className="absolute -top-3 -right-1 w-5 h-5 bg-white text-gray-900 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md z-20">2</div>
                <div className="w-16 h-16 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center text-2xl shadow-lg mb-5 relative shadow-[#0ea5e9]/30">
                  🔥
                </div>
                <h4 className="text-white font-bold text-[12.5px] mb-2 leading-tight">Primary Conversion</h4>
                <p className="text-gray-400 text-[10px] mb-3 leading-relaxed px-1">Steam reforming (850°C), acid digestion, electrolysis</p>
                <div className="text-[#0ea5e9] font-bold text-[10px]">Temp: 850-1050°C</div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10 w-[140px] group">
                <div className="absolute -top-3 -right-1 w-5 h-5 bg-white text-gray-900 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md z-20">3</div>
                <div className="w-16 h-16 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-2xl shadow-lg mb-5 relative shadow-[#3b82f6]/30">
                  ⚗️
                </div>
                <h4 className="text-white font-bold text-[12.5px] mb-2 leading-tight">Synthesis/Reaction</h4>
                <p className="text-gray-400 text-[10px] mb-3 leading-relaxed px-1">Ammonia synthesis (450°C, 200 bar), urea formation, neutralization</p>
                <div className="text-[#0ea5e9] font-bold text-[10px]">Pressure: 150-250 bar</div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center relative z-10 w-[140px] group">
                <div className="absolute -top-3 -right-1 w-5 h-5 bg-white text-gray-900 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md z-20">4</div>
                <div className="w-16 h-16 rounded-full bg-[#4f46e5] text-white flex items-center justify-center text-2xl shadow-lg mb-5 relative shadow-[#4f46e5]/30">
                  💧
                </div>
                <h4 className="text-white font-bold text-[12.5px] mb-2 leading-tight">Separation/Purification</h4>
                <p className="text-gray-400 text-[10px] mb-3 leading-relaxed px-1">Distillation, crystallization, filtration, gas scrubbing</p>
                <div className="text-[#0ea5e9] font-bold text-[10px]">Recovery: {'>'}99%</div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center relative z-10 w-[140px] group">
                <div className="absolute -top-3 -right-1 w-5 h-5 bg-white text-gray-900 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md z-20">5</div>
                <div className="w-16 h-16 rounded-full bg-[#16a34a] text-white flex items-center justify-center text-2xl shadow-lg mb-5 relative shadow-[#16a34a]/30">
                  🔘
                </div>
                <h4 className="text-white font-bold text-[12.5px] mb-2 leading-tight">Granulation/Finishing</h4>
                <p className="text-gray-400 text-[10px] mb-3 leading-relaxed px-1">Prilling, drum granulation, coating, cooling</p>
                <div className="text-[#0ea5e9] font-bold text-[10px]">Size: 2-4mm</div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center text-center relative z-10 w-[140px] group">
                <div className="absolute -top-3 -right-1 w-5 h-5 bg-white text-gray-900 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md z-20">6</div>
                <div className="w-16 h-16 rounded-full bg-[#22c55e] text-white flex items-center justify-center text-2xl shadow-lg mb-5 relative shadow-[#22c55e]/30">
                  📦
                </div>
                <h4 className="text-white font-bold text-[12.5px] mb-2 leading-tight">Storage & Dispatch</h4>
                <p className="text-gray-400 text-[10px] mb-3 leading-relaxed px-1">Bulk storage, bagging, quality control, shipping</p>
                <div className="text-[#0ea5e9] font-bold text-[10px]">Capacity: 10,000 MT</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: End-to-End EPC Services */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-gray-50 border-t border-gray-100">
          <div className="bg-sky-100 text-[#0ea5e9] text-[10px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider inline-flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            End-to-End <span className="text-[#0ea5e9]">EPC Services</span>
          </h2>
          <p className="text-gray-500 mb-14 text-center max-w-2xl text-[15px]">
            Complete project execution from concept to commissioning
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-xl mb-6 shadow-sm">📄</div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">Feasibility & FEED Studies</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6">Comprehensive techno-economic feasibility, market analysis, site selection, and Front-End Engineering Design (FEED) with ±10% cost estimates.</p>
              <ul className="space-y-2.5 text-[12px] text-gray-600">
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Market Study</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Technology Selection</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Capital Cost Estimate</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Project Schedule</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-xl mb-6 shadow-sm">⚙️</div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">Detailed Engineering</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6">Complete detailed engineering including P&IDs, equipment specifications, 3D modeling, structural design, and construction packages.</p>
              <ul className="space-y-2.5 text-[12px] text-gray-600">
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> P&ID Development</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Equipment Datasheets</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> 3D Plant Model</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Construction Drawings</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-xl mb-6 shadow-sm">🏭</div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">Equipment Manufacturing</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6">In-house manufacturing of critical process equipment with full QA/QC, third-party inspection, and performance guarantees.</p>
              <ul className="space-y-2.5 text-[12px] text-gray-600">
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Pressure Vessels</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Heat Exchangers</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Reactors</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Columns & Towers</li>
              </ul>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-xl mb-6 shadow-sm">👷</div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">Project Management & EPC</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6">Turnkey EPC execution with integrated project management, procurement, construction supervision, and commissioning.</p>
              <ul className="space-y-2.5 text-[12px] text-gray-600">
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> PMC Services</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Procurement</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Construction</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Pre-Commissioning</li>
              </ul>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-xl mb-6 shadow-sm">⏻</div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">Commissioning & Start-up</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6">Complete commissioning services including loop checking, function testing, performance testing, and operator training.</p>
              <ul className="space-y-2.5 text-[12px] text-gray-600">
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Mechanical Completion</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Loop Testing</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Performance Guarantee</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Training</li>
              </ul>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-xl mb-6 shadow-sm">🔄</div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">Plant Modernization</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6">Revamp and modernization of existing plants for capacity increase, energy optimization, and environmental compliance.</p>
              <ul className="space-y-2.5 text-[12px] text-gray-600">
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Energy Audit</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Debottlenecking</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Automation Upgrade</li>
                <li className="flex items-center gap-2.5"><span className="text-green-500 font-bold">✓</span> Emission Control</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Industrial Standards & Certifications */}
        <section className="py-20 px-6 md:px-12 flex flex-col items-center bg-[#f8fafc] border-t border-gray-100 pb-28">
          <div className="bg-sky-100 text-[#0ea5e9] text-[10px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider inline-flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            CERTIFICATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center tracking-tight">
            Industrial <span className="text-[#0ea5e9]">Standards</span> & Certifications
          </h2>
          <p className="text-gray-500 mb-14 text-center max-w-2xl text-[15px]">
            Compliance with international codes and standards
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-50 text-[#0ea5e9] rounded-lg flex items-center justify-center text-lg shrink-0">✓</div>
              <div>
                <div className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider mb-0.5">Quality</div>
                <h4 className="text-gray-900 font-bold text-[14px]">ISO 9001:2015</h4>
                <p className="text-gray-500 text-[11px] mt-0.5">Quality Management Systems</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-50 text-[#0ea5e9] rounded-lg flex items-center justify-center text-lg shrink-0">✓</div>
              <div>
                <div className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider mb-0.5">Environment</div>
                <h4 className="text-gray-900 font-bold text-[14px]">ISO 14001:2015</h4>
                <p className="text-gray-500 text-[11px] mt-0.5">Environmental Management</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-50 text-[#0ea5e9] rounded-lg flex items-center justify-center text-lg shrink-0">✓</div>
              <div>
                <div className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider mb-0.5">Safety</div>
                <h4 className="text-gray-900 font-bold text-[14px]">ISO 45001:2018</h4>
                <p className="text-gray-500 text-[11px] mt-0.5">Occupational Health & Safety</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-50 text-[#0ea5e9] rounded-lg flex items-center justify-center text-lg shrink-0">✓</div>
              <div>
                <div className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider mb-0.5">Equipment</div>
                <h4 className="text-gray-900 font-bold text-[14px]">ASME U/U2/S Stamps</h4>
                <p className="text-gray-500 text-[11px] mt-0.5">Pressure Vessel Certification</p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-50 text-[#0ea5e9] rounded-lg flex items-center justify-center text-lg shrink-0">✓</div>
              <div>
                <div className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider mb-0.5">Process</div>
                <h4 className="text-gray-900 font-bold text-[14px]">API Standards</h4>
                <p className="text-gray-500 text-[11px] mt-0.5">American Petroleum Institute</p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-50 text-[#0ea5e9] rounded-lg flex items-center justify-center text-lg shrink-0">✓</div>
              <div>
                <div className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider mb-0.5">Materials</div>
                <h4 className="text-gray-900 font-bold text-[14px]">NACE Standards</h4>
                <p className="text-gray-500 text-[11px] mt-0.5">Corrosion Engineering</p>
              </div>
            </div>
            {/* Card 7 */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-50 text-[#0ea5e9] rounded-lg flex items-center justify-center text-lg shrink-0">✓</div>
              <div>
                <div className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider mb-0.5">Safety</div>
                <h4 className="text-gray-900 font-bold text-[14px]">IEC 61511 (SIL)</h4>
                <p className="text-gray-500 text-[11px] mt-0.5">Functional Safety</p>
              </div>
            </div>
            {/* Card 8 */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-50 text-[#0ea5e9] rounded-lg flex items-center justify-center text-lg shrink-0">✓</div>
              <div>
                <div className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider mb-0.5">Safety</div>
                <h4 className="text-gray-900 font-bold text-[14px]">ATEX/IECEx</h4>
                <p className="text-gray-500 text-[11px] mt-0.5">Explosive Atmospheres</p>
              </div>
            </div>
            {/* Card 9 */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-50 text-[#0ea5e9] rounded-lg flex items-center justify-center text-lg shrink-0">✓</div>
              <div>
                <div className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider mb-0.5">Equipment</div>
                <h4 className="text-gray-900 font-bold text-[14px]">PED 2014/68/EU</h4>
                <p className="text-gray-500 text-[11px] mt-0.5">Pressure Equipment Directive</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
