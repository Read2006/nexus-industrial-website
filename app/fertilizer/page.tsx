import Link from 'next/link'

const products = [
  {
    name: 'Mechanical Products',
    desc: 'Bearings, pumps, gearboxes, conveyor components, and rotating equipment for fertilizer plant operations.',
    href: '/products/mechanical',
    img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Electrical Products',
    desc: 'Motors, VFDs, switchgear, cables, and control panels for fertilizer plant electrical systems.',
    href: '/products/electrical',
    img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Pipes & Fittings',
    desc: 'Corrosion-resistant valves, flanges, and piping for ammonia, urea, and acid handling systems.',
    href: '/products/pipes-fittings',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Instruments',
    desc: 'Pressure gauges, flow meters, temperature sensors, and analyzers for process control.',
    href: '/products/instruments',
    img: 'https://images.unsplash.com/photo-1581093458791-9f3c3250e1ef?w=600&h=400&fit=crop&q=80',
  },
]

const applications = [
  {
    title: 'Ammonia & Urea Plants',
    desc: 'Spare parts and equipment for ammonia synthesis and urea granulation plants including reactor internals, heat exchangers, and compressor parts.',
    icon: '🏭',
  },
  {
    title: 'DAP / MAP / NP Plants',
    desc: 'Mechanical and electrical components for phosphate fertilizer production including mixers, granulators, dryers, and conveyors.',
    icon: '⚗️',
  },
  {
    title: 'NPK Complexes',
    desc: 'Supply of rotating equipment, instrumentation, and control components for NPK blending and granulation facilities.',
    icon: '🔧',
  },
  {
    title: 'Material Handling',
    desc: 'Conveyor systems, bucket elevators, belt drives, and screening equipment for fertilizer storage and dispatch.',
    icon: '📦',
  },
  {
    title: 'Granulation & Drying',
    desc: 'Bearings, seals, gearboxes, and heat-resistant components for drum granulators, rotary dryers, and coolers.',
    icon: '🌡️',
  },
  {
    title: 'Utility & Power Systems',
    desc: 'Boiler spare parts, turbine components, cooling tower equipment, and electrical distribution products.',
    icon: '⚡',
  },
]

const brands = [
  'SKF', 'FAG', 'NSK', 'ABB', 'Siemens', 'Schneider',
  'Emerson', 'Endress+Hauser', 'Parker', 'Honeywell',
  'Grundfos', 'KSB', 'Danfoss', 'Fluke',
]

const whyNis = [
  { icon: '✅', title: 'Genuine Parts', desc: 'All products sourced from authorised distributors with full traceability and documentation.' },
  { icon: '⚡', title: '24-Hour Quote', desc: 'Fast RFQ response to keep your plant running without extended downtime.' },
  { icon: '🌍', title: 'Global Sourcing', desc: 'Access to parts from European, Asian, and American suppliers for any brand specification.' },
  { icon: '🔍', title: 'Hard-to-Find Parts', desc: 'Specialist sourcing for obsolete or rare fertilizer plant components.' },
]

export default function FertilizerPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* TOP BAR */}
      <div className="bg-[#0d2b26] text-[#98c4b8] text-xs py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>📞 <a href="tel:03351503555" className="hover:text-teal-400 transition">0335-1503555</a></span>
            <span className="text-white/20">|</span>
            <span>📧 <a href="mailto:info@nexus-is.co" className="hover:text-teal-400 transition">info@nexus-is.co</a></span>
            <span className="text-white/20">|</span>
            <span>📍 DHA Phase 2, Islamabad</span>
          </div>
          <span className="bg-teal-400/10 border border-teal-400/30 text-teal-300 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase">⚡ Same Day Response · NTN: 123455</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img src="/images/logoofthenexus.jpeg" alt="NIS Logo" className="h-12 w-12 rounded-full object-cover" />
            <div className="hidden sm:block">
              <p className="font-black text-gray-900 text-sm leading-tight">Nexus Industrial</p>
              <p className="text-teal-700 text-[10px] font-bold tracking-wider uppercase">Solutions</p>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {[['Home', '/'], ['About', '/#about-section'], ['Products', '/#products'], ['Industries', '/#industries'], ['Brands', '/brands'], ['Contact', '/contact']].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-bold text-gray-600 hover:text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-50 transition-all">{label}</a>
            ))}
          </nav>
          <a href="/contact" className="hidden lg:inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition shrink-0">
            Get a Quote →
          </a>
        </div>
        {/* BOTTOM NAV */}
        <div className="hidden lg:block bg-[#1a3d35]">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
            <ul className="flex items-center h-full">
              {[['Home', '/'], ['About Us', '/#about-section'], ['Products', '/#products'], ['Industries', '/#industries'], ['Brands', '/brands'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={label} className="h-full flex items-center">
                  <a href={href} className="text-white/70 font-bold text-[11px] hover:text-teal-300 transition-colors uppercase tracking-widest h-full flex items-center px-4">{label}</a>
                </li>
              ))}
            </ul>
            <span className="border border-teal-400/40 text-teal-300 px-4 py-1 rounded-full font-black text-[10px] tracking-widest uppercase">⚡ GENUINE PARTS · FAST DELIVERY</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1800&h=900&fit=crop&q=85"
          alt="Fertilizer industry"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.25) saturate(0.7)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(7,26,22,0.95) 0%, rgba(13,43,36,0.85) 50%, rgba(15,61,50,0.70) 100%)' }}></div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-teal-400/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
          <div className="mb-6">
            <a href="/#industries" className="inline-flex items-center gap-2 text-teal-300 hover:text-white transition text-sm font-semibold">
              ← Back to Industries
            </a>
          </div>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              Industry Solutions — Fertilizer Sector
            </span>
            <h1 className="text-white font-black leading-[0.95] tracking-tighter text-4xl md:text-5xl lg:text-6xl uppercase">
              Fertilizer<br />
              <span className="text-teal-400">Industry</span><br />
              Supply Partner
            </h1>
            <p className="text-teal-50/75 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Nexus Industrial Solutions supplies genuine spare parts, mechanical components, electrical equipment, and instrumentation for Pakistan's fertilizer manufacturing sector — from ammonia and urea plants to NPK complexes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-black text-sm tracking-widest uppercase bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-xl hover:-translate-y-0.5 transition-all">
                Request a Quote →
              </a>
              <a href="/#products" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-teal-400/50 text-teal-300 px-8 py-4 font-black text-sm tracking-widest uppercase hover:bg-teal-400/10 transition-all">
                View Products
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '6+', label: 'Fertilizer Plants Served', icon: '🏭' },
              { val: '500+', label: 'Product Lines Available', icon: '📦' },
              { val: '24hr', label: 'Quote Turnaround', icon: '⚡' },
              { val: '150+', label: 'Global Brands', icon: '🏷️' },
            ].map(s => (
              <div key={s.label} className="border border-teal-100 rounded-2xl p-5 bg-teal-50/40 text-center hover:border-teal-400/60 hover:shadow-md transition-all">
                <p className="text-3xl mb-2">{s.icon}</p>
                <p className="text-teal-700 font-black text-3xl leading-none">{s.val}</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-teal-700 font-black tracking-[0.4em] text-[11px] uppercase mb-3 block">WHAT WE COVER</span>
            <h2 className="text-gray-900 text-3xl lg:text-4xl font-black tracking-tighter uppercase">Fertilizer Plant <span className="text-teal-700">Applications</span></h2>
            <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto">We supply critical components across all major sections of a fertilizer manufacturing facility.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-400/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="text-4xl mb-4 block">{app.icon}</span>
                <h3 className="font-black text-gray-900 text-lg mb-2">{app.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-teal-700 font-black tracking-[0.4em] text-[11px] uppercase mb-3 block">WHAT WE SUPPLY</span>
            <h2 className="text-gray-900 text-3xl lg:text-4xl font-black tracking-tighter uppercase">Our Product <span className="text-teal-700">Categories</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <a key={p.name} href={p.href} className="group rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-400/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-base mb-1 group-hover:text-teal-700 transition-colors">{p.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-teal-700 font-black text-[10px] uppercase tracking-widest mt-3">Explore →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NIS */}
      <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #071a16 0%, #0d2b24 50%, #0f3d32 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <span className="text-teal-400 font-black tracking-[0.4em] text-[11px] uppercase block">WHY CHOOSE NIS</span>
              <h2 className="text-white text-3xl lg:text-4xl font-black tracking-tighter uppercase leading-tight">
                Your Trusted Partner for <span className="text-teal-400">Fertilizer Plant</span> Supply
              </h2>
              <p className="text-teal-50/70 text-base leading-relaxed">
                We understand the critical nature of fertilizer plant operations. Unplanned downtime is expensive — which is why we respond fast, source genuine parts, and ensure reliable delivery every time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {whyNis.map(w => (
                  <div key={w.title} className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{w.icon}</span>
                    <div>
                      <h4 className="font-black text-white text-sm">{w.title}</h4>
                      <p className="text-teal-200/60 text-xs leading-relaxed mt-1">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <a href="/contact" className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-wide transition hover:-translate-y-0.5">
                  Contact Us Now →
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '480px' }}>
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=85"
                alt="Industrial plant operations"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.7) saturate(0.8)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3">
                <p className="text-white font-black text-sm uppercase tracking-wider">Nexus Industrial Solutions</p>
                <p className="text-teal-300 text-xs font-bold mt-0.5">Fertilizer Sector Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-teal-700 font-black tracking-[0.4em] text-[11px] uppercase mb-3 block">TRUSTED MANUFACTURERS</span>
            <h2 className="text-gray-900 text-3xl lg:text-4xl font-black tracking-tighter uppercase">Brands We <span className="text-teal-700">Source</span></h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">We source from 150+ globally trusted brands to ensure you get authentic, high-quality parts.</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {brands.map(brand => (
              <div key={brand} className="bg-gray-50 border border-slate-200 rounded-xl p-4 flex items-center justify-center hover:border-teal-400 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <span className="text-gray-700 font-black text-xs text-center group-hover:text-teal-700 transition-colors">{brand}</span>
              </div>
            ))}
            <a href="/brands" className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:from-teal-600 hover:to-teal-800 transition-all">
              <span className="text-teal-300 font-black text-base">150+</span>
              <span className="text-white text-[9px] font-black tracking-widest uppercase mt-1">View All →</span>
            </a>
          </div>
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section className="py-16 bg-gray-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Other Industries We <span className="text-teal-700">Serve</span></h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {[
              { name: 'Oil & Gas', href: '/oil-gas' },
              { name: 'Cement', href: '/cement' },
              { name: 'Textile', href: '/textile' },
              { name: 'Steel', href: '/steel' },
              { name: 'Aluminum', href: '/aluminum' },
              { name: 'Power', href: '/power' },
              { name: 'FMCG', href: '/fmcg' },
              { name: 'Chemical', href: '/chemical-pharma' },
            ].map(ind => (
              <a key={ind.name} href={ind.href} className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-teal-400 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <span className="text-gray-700 font-black text-xs group-hover:text-teal-700 transition-colors">{ind.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #071a16 0%, #0d2b24 50%, #0f3d32 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/25 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-teal-400 font-black text-[10px] tracking-[0.3em] uppercase">Ready to Source?</span>
          </div>
          <h2 className="text-white text-3xl lg:text-4xl font-black tracking-tighter uppercase leading-tight mb-4">
            Need Parts for Your <span className="text-teal-400">Fertilizer Plant?</span>
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed mb-8">
            Share your part number or requirement and get a competitive quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-10 py-4 rounded-lg font-black text-sm tracking-[0.2em] uppercase shadow-lg hover:-translate-y-1 transition-all">
              CONTACT US NOW →
            </a>
            <a href="tel:03351503555" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 px-10 py-4 rounded-lg font-black text-sm tracking-[0.2em] uppercase hover:bg-white/5 hover:border-white/40 transition-all">
              📞 0335-1503555
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050f0d] text-gray-400 pt-16 pb-6 border-t-4 border-teal-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/logoofthenexus.jpeg" alt="NIS" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-white font-black text-sm">Nexus Industrial</p>
                  <p className="text-teal-400 text-[10px] font-bold uppercase tracking-widest">Solutions</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-500">Delivering reliable industrial supply and global trade solutions across Pakistan's key industries.</p>
            </div>
            <div>
              <h4 className="text-white font-black text-[11px] tracking-[0.2em] uppercase border-l-2 border-teal-500 pl-3 mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {[['About', '/#about-section'], ['Products', '/#products'], ['Industries', '/#industries'], ['Brands', '/brands'], ['Contact', '/contact']].map(([l, h]) => (
                  <li key={l}><a href={h} className="hover:text-teal-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-[11px] tracking-[0.2em] uppercase border-l-2 border-teal-500 pl-3 mb-4">Products</h4>
              <ul className="space-y-3 text-sm">
                {[['Mechanical', '/products/mechanical'], ['Electrical', '/products/electrical'], ['Pipes & Fittings', '/products/pipes-fittings'], ['Instruments', '/products/instruments']].map(([l, h]) => (
                  <li key={l}><a href={h} className="hover:text-teal-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-[11px] tracking-[0.2em] uppercase border-l-2 border-teal-500 pl-3 mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <p>📞 <a href="tel:03351503555" className="hover:text-teal-400 transition">0335-1503555</a></p>
                <p>📧 <a href="mailto:info@nexus-is.co" className="hover:text-teal-400 transition">info@nexus-is.co</a></p>
                <p>📍 DHA Phase 2, Islamabad</p>
                <p className="text-gray-600">NTN: 123455 | STRN: 1233456</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 text-center text-xs text-gray-600">
            <p>© 2024 Nexus Industrial Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
