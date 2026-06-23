'use client'

import { useState, useEffect } from 'react'

const industries = [
  { name: 'Oil & Gas', icon: '🛢️', href: '/oil-gas', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop&q=80' },
  { name: 'Cement', icon: '🏭', href: '/cement', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80' },
  { name: 'Textile', icon: '🧵', href: '/textile', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80' },
  { name: 'Steel', icon: '⚙️', href: '/steel', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&q=80' },
  { name: 'Fertilizer', icon: '🌱', href: '/fertilizer', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80' },
  { name: 'Aluminum', icon: '🔩', href: '/aluminum', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop&q=80' },
  { name: 'Power', icon: '⚡', href: '/power', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&q=80' },
  { name: 'FMCG', icon: '📦', href: '/fmcg', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80' },
]

const products = [
  { name: 'Mechanical Products', desc: 'Bearings, Pumps, Gearboxes, Belts & more', href: '/products/mechanical', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=350&fit=crop&q=80', badge: 'Bearings · Pumps · Seals' },
  { name: 'Electrical Products', desc: 'Motors, Cables, Switchgear & Panels', href: '/products/electrical', img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&h=350&fit=crop&q=80', badge: 'Motors · Cables · MCCs' },
  { name: 'Pipes & Fittings', desc: 'Valves, Flanges, Pipe systems & fittings', href: '/products/pipes-fittings', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=350&fit=crop&q=80', badge: 'Valves · Flanges · Fittings' },
  { name: 'Instruments', desc: 'Precision measurement & control instruments', href: '/products/instruments', img: 'https://images.unsplash.com/photo-1581093458791-9f3c3250e1ef?w=500&h=350&fit=crop&q=80', badge: 'Gauges · Transmitters · PLCs' },
]

const brands = [
  'ABB', 'Siemens', 'SKF', 'NSK', 'FAG', 'Schneider', 'Danfoss', 'Bosch',
  'Parker', 'Emerson', 'Honeywell', 'Endress+Hauser', 'Fluke', 'Rittal',
  'Atlas Copco', 'Grundfos', 'KSB', 'Wilo', 'Rexnord', 'Dodge',
  'Gates', 'Belden', 'Phoenix Contact', 'Wago',
]

const whyUs = [
  { icon: '✅', title: 'Genuine Parts Only', desc: '100% authentic components sourced directly from OEM manufacturers and authorised distributors.' },
  { icon: '⚡', title: '24-Hour Quote', desc: 'Submit your RFQ and receive a competitive price within 24 hours, every time.' },
  { icon: '🌍', title: 'Global Sourcing Network', desc: 'Strong supplier relationships across Europe, Asia and the Americas to source any part.' },
  { icon: '🔍', title: 'Hard-to-Find Parts', desc: 'Obsolete or rare components? Our team specialises in sourcing what others cannot.' },
  { icon: '📋', title: 'Dedicated Support', desc: 'Every inquiry gets a personal response — no bots, no generic replies.' },
  { icon: '🏆', title: 'Trusted by Industry', desc: 'Serving cement, oil & gas, textile, steel and power sectors across Pakistan.' },
]

const steps = [
  { num: '01', title: 'Send Inquiry', desc: 'Share your part number or requirements via phone, email or contact form.' },
  { num: '02', title: 'Get a Quote', desc: 'We source and deliver a competitive quote within 24 hours.' },
  { num: '03', title: 'Confirm Order', desc: 'Approve the quote and we handle all procurement and logistics.' },
  { num: '04', title: 'Fast Delivery', desc: 'Tracked, insured delivery straight to your facility.' },
]

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img src="/images/logoofthenexus.jpeg" alt="NIS" className="h-12 w-12 rounded-full object-cover" />
            <div className="hidden sm:block">
              <p className="font-black text-gray-900 text-sm leading-tight">Nexus Industrial</p>
              <p className="text-teal-700 text-[10px] font-bold tracking-wider uppercase">Solutions</p>
            </div>
          </a>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            {[['Home', '/'], ['About', '/#about-section'], ['Products', '/#products'], ['Industries', '/#industries'], ['Brands', '/brands'], ['Contact', '/contact']].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-bold text-gray-600 hover:text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-50 transition-all">{label}</a>
            ))}
          </nav>

          <a href="/contact" className="hidden lg:inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition shrink-0">
            Get a Quote →
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg border border-gray-200">☰</button>
        </div>

        {/* BOTTOM NAV BAR (ZFC style) */}
        <div className="hidden lg:block bg-[#1a3d35] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
            <ul className="flex items-center h-full">
              {[['Home', '/'], ['About Us', '/#about-section'], ['Products', '/#products'], ['Industries', '/#industries'], ['Brands', '/brands'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={label} className="h-full flex items-center">
                  <a href={href} className="text-white/70 font-bold text-[11px] hover:text-teal-300 transition-colors uppercase tracking-widest h-full flex items-center px-4">{label}</a>
                </li>
              ))}
            </ul>
            <span className="border border-teal-400/40 text-teal-300 px-4 py-1 rounded-full font-black text-[10px] tracking-widest uppercase animate-pulse">⚡ GENUINE PARTS · FAST DELIVERY</span>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-4 space-y-2">
            {[['Home', '/'], ['Products', '/#products'], ['Industries', '/#industries'], ['Brands', '/brands'], ['Contact', '/contact']].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block py-2 font-bold text-gray-700 hover:text-teal-700">{label}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden" style={{ background: 'linear-gradient(135deg, #071a16 0%, #0d2b24 40%, #0f3d32 70%, #155244 100%)' }}>
          {/* Industrial background image */}
        <img
          src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1800&h=1000&fit=crop&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.18) saturate(0.6)' }}
        />
        {/* teal gradient overlay on top of image */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(7,26,22,0.92) 0%, rgba(13,43,36,0.85) 40%, rgba(15,61,50,0.75) 100%)' }}></div>
        {/* left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-teal-400/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-0 lg:min-h-[92vh] flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

            {/* LEFT */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                Industrial Supply & Sourcing — Pakistan
              </span>
              <h1 className="text-white font-black leading-[0.95] tracking-tighter text-4xl md:text-5xl lg:text-6xl uppercase">
                Your Trusted<br />
                <span className="text-teal-400">Industrial</span><br />
                Supply Partner
              </h1>
              <p className="text-teal-50/70 text-base md:text-lg leading-relaxed max-w-lg font-medium">
                Genuine spare parts and equipment for Cement, Oil & Gas, Textile, Steel and Power industries. Competitive pricing, fast delivery across Pakistan.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['✅ Genuine Parts', '⚡ 24hr Quote', '🌍 Global Sourcing'].map(item => (
                  <span key={item} className="flex items-center gap-1.5 text-white/60 text-xs font-bold uppercase tracking-wide">{item}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="/contact" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-8 py-4 font-black text-sm tracking-widest uppercase bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-xl shadow-teal-500/30 hover:shadow-teal-500/60 hover:-translate-y-0.5 transition-all">
                  <span>Get a Quote</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="/#products" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-teal-400/50 text-teal-300 px-8 py-4 font-black text-sm tracking-widest uppercase hover:bg-teal-400/10 transition-all">
                  Browse Products
                </a>
              </div>
            </div>

            {/* RIGHT — stats cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { val: '500+', label: 'Products Sourced', icon: '📦' },
                { val: '150+', label: 'Brands Available', icon: '🏷️' },
                { val: '9', label: 'Industries Served', icon: '🏭' },
                { val: '24hr', label: 'Quote Turnaround', icon: '⚡' },
              ].map(s => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-teal-400/40 transition-all">
                  <p className="text-3xl mb-1">{s.icon}</p>
                  <p className="text-white font-black text-3xl leading-none">{s.val}</p>
                  <p className="text-teal-200/60 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about-section" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=85" alt="Industrial facility" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-teal-700 rounded-xl shadow-xl px-6 py-4 hidden md:block">
                <p className="text-3xl font-black text-white leading-none">ISB</p>
                <p className="text-teal-200 text-xs font-bold mt-1">Based in Islamabad</p>
              </div>
              <div className="absolute -top-5 -left-5 bg-white border border-teal-100 rounded-xl shadow-xl px-5 py-3 hidden md:flex items-center gap-3">
                <span className="text-teal-700 text-2xl font-black leading-none">9+</span>
                <span className="text-gray-500 text-xs font-bold leading-tight">Industries<br/>Served</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-teal-700 font-black tracking-[0.4em] text-[11px] uppercase mb-3 block">ABOUT US</span>
                <h2 className="text-gray-900 text-3xl lg:text-4xl font-black tracking-tighter uppercase leading-tight">
                  Dynamic & Reliable <span className="text-teal-700">Industrial Supply</span> Partner
                </h2>
              </div>
              <p className="text-gray-500 text-base leading-relaxed">
                Nexus Industrial Solutions is a dynamic and reliable provider specializing in supply, distribution, and import/export of high-quality industrial products. With established global sourcing channels and deep industry expertise, we ensure timely delivery, competitive pricing, and consistent product quality.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                We proudly serve multiple sectors including manufacturing, construction, engineering, FMCG, power, and trading industries — committed to delivering excellence and building long-term business relationships based on trust and performance.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                <p className="text-teal-800 text-xs leading-relaxed font-medium">
                  <span className="font-black">Compliance Note:</span> Nexus Industrial Solutions is a General Order Supplier and Procurement Contractor. We source products as per client technical specifications from reputable local and international markets. We do not represent ourselves as an authorized distributor, dealer, or agent of any manufacturer unless separately appointed in writing.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { val: '150+', label: 'Global Brands' },
                  { val: '500+', label: 'Products Sourced' },
                  { val: '24hr', label: 'Quote Turnaround' },
                  { val: '9', label: 'Industries Served' },
                ].map(s => (
                  <div key={s.label} className="border border-teal-100 rounded-xl p-4 bg-teal-50/50">
                    <p className="text-teal-700 font-black text-2xl leading-none">{s.val}</p>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="/contact" className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-black text-sm uppercase tracking-wide transition">Get In Touch →</a>
                <a href="/#products" className="inline-flex items-center gap-2 border-2 border-teal-700 text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-lg font-black text-sm uppercase tracking-wide transition">Our Products</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 lg:py-28 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-teal-700 font-black tracking-[0.4em] text-[11px] uppercase mb-3 block">WHAT WE SUPPLY</span>
              <h2 className="text-gray-900 text-3xl lg:text-4xl font-black tracking-tighter uppercase">Our Product <span className="text-teal-700">Categories</span></h2>
            </div>
            <a href="/brands" className="inline-flex items-center gap-2 border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white font-black text-xs tracking-widest px-6 py-3 rounded-lg transition-all uppercase shrink-0">View All Brands →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <a key={p.name} href={p.href} className="group rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-400/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="aspect-video relative overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  <span className="absolute bottom-3 left-3 bg-teal-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">{p.badge}</span>
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

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #071a16 0%, #0d2b24 50%, #0f3d32 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-400 font-black tracking-[0.4em] text-[11px] uppercase mb-3 block">SIMPLE PROCESS</span>
            <h2 className="text-white text-3xl lg:text-4xl font-black tracking-tighter uppercase">How It <span className="text-teal-400">Works</span></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            <div className="hidden lg:block absolute top-10 left-24 right-24 h-px border-t-2 border-dashed border-white/10"></div>
            {steps.map((s, i) => (
              <div key={s.num} className="text-center space-y-4 group">
                <div className={`w-20 h-20 mx-auto rounded-full border-4 flex items-center justify-center transition-all duration-300 ${i === 3 ? 'bg-gradient-to-br from-teal-400 to-teal-600 border-teal-400' : 'bg-[#0d2b24] border-white/10 group-hover:border-teal-400'}`}>
                  <span className="text-white font-black text-xl">{s.num}</span>
                </div>
                <div>
                  <h3 className="text-white font-black text-lg uppercase tracking-tighter">{s.title}</h3>
                  <p className="text-teal-200/60 text-sm leading-relaxed mt-2">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-20 lg:py-28 bg-gradient-to-br from-teal-50/50 via-white to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-teal-700 font-black tracking-[0.4em] text-[11px] uppercase mb-3 block">SECTORS WE SERVE</span>
            <h2 className="text-gray-900 text-3xl lg:text-4xl font-black tracking-tighter uppercase">Industries We <span className="text-teal-700">Support</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <a key={ind.name} href={ind.href} className="group rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-400/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="relative h-36 md:h-44 overflow-hidden">
                  <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-black text-base uppercase tracking-tight">{ind.name}</h3>
                    <span className="text-teal-400 text-[9px] font-black tracking-widest uppercase">Sector Expert</span>
                  </div>
                </div>
                <div className="p-3">
                  <span className="inline-flex items-center gap-1 text-teal-700 font-black text-[10px] uppercase tracking-widest">Explore →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="text-teal-700 font-black tracking-[0.4em] text-[11px] uppercase mb-3 block">WHY CHOOSE NIS</span>
              <h2 className="text-gray-900 text-3xl lg:text-4xl font-black tracking-tighter uppercase leading-tight mb-4">Your Trusted Advantage in <span className="text-teal-700">Industrial Sourcing</span></h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">At Nexus Industrial Solutions, we go beyond supply — we deliver certainty. Our clients choose us for our industry expertise, global reach, and commitment to performance.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map(w => (
                  <div key={w.title} className="flex items-start gap-3">
                    <span className="text-xl shrink-0 mt-0.5">{w.icon}</span>
                    <div>
                      <h4 className="font-black text-gray-900 text-sm">{w.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed mt-1">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=85" alt="Industrial facility" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-teal-700 rounded-xl shadow-xl px-6 py-4 hidden md:block">
                <p className="text-3xl font-black text-white leading-none">DHA</p>
                <p className="text-teal-200 text-xs font-bold mt-1">Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands-section" className="py-20 lg:py-28 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-teal-700 font-black tracking-[0.4em] text-[11px] uppercase mb-3 block">TRUSTED MANUFACTURERS</span>
            <h2 className="text-gray-900 text-3xl lg:text-4xl font-black tracking-tighter uppercase">Brands We <span className="text-teal-700">Stock</span></h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {brands.map(brand => (
              <div key={brand} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-center hover:border-teal-400 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <span className="text-gray-700 font-black text-xs text-center group-hover:text-teal-700 transition-colors">{brand}</span>
              </div>
            ))}
            <a href="/brands" className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:from-teal-600 hover:to-teal-800 transition-all">
              <span className="text-teal-300 font-black text-lg">150+</span>
              <span className="text-white text-[9px] font-black tracking-widest uppercase mt-1">View All →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-section" className="py-20 scroll-mt-20" style={{ background: 'linear-gradient(135deg, #071a16 0%, #0d2b24 50%, #0f3d32 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/25 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-teal-400 font-black text-[10px] tracking-[0.3em] uppercase">Ready to Source?</span>
          </div>
          <h2 className="text-white text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-tight mb-4">Ready to Power <span className="text-teal-400">Your Operations?</span></h2>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed mb-8">Send us your requirement and receive a competitive quote within 24 hours from our industrial sourcing team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-10 py-4 rounded-lg font-black text-sm tracking-[0.2em] uppercase shadow-lg shadow-teal-500/20 hover:-translate-y-1 transition-all">
              CONTACT US NOW →
            </a>
            <a href="tel:03351503555" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 px-10 py-4 rounded-lg font-black text-sm tracking-[0.2em] uppercase hover:bg-white/5 hover:border-white/40 transition-all">
              📞 CALL US
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
