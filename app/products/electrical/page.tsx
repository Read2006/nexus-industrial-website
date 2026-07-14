'use client'

import { useState } from 'react'

const categories = [
  {
    id: 'motors',
    label: 'Motors',
    icon: '⚡',
    desc: 'Industrial motors including AC, DC, servo and variable speed applications for all duty cycles.',
    products: [
      { name: 'AC Electric Motor', desc: 'AC electric motor for general industrial applications', img: '/electrical/AC Electric Motor.jfif' },
      { name: 'DC Electric Motor', desc: 'DC electric motor for precise speed control applications', img: '/electrical/DC Electric Motor.jfif' },
      { name: 'Three Phase Motor', desc: 'Three phase motor for heavy-duty industrial drives', img: '/electrical/Three Phase Motor.jfif' },
      { name: 'Servo Motor', desc: 'Servo motor for precision positioning and automation', img: '/electrical/Servo Motor.jfif' },
      { name: 'Variable Frequency Drive', desc: 'VFD units for smooth motor speed control', img: '/electrical/Variable Frequency Drive.jfif' },
      { name: 'Soft Starters', desc: 'Motor soft starters for smooth, controlled startup', img: '/electrical/Soft Starters.jfif' },
      { name: 'Motor Couplings', desc: 'Flexible couplings for shaft-to-shaft connections', img: '/electrical/Motor Couplings.jfif' },
      { name: 'Motor Protection Relays', desc: 'Overload and short-circuit protection devices', img: '/electrical/Motor Protection Relays.jfif' },
    ]
  },
  {
    id: 'cables',
    label: 'Cables & Wiring',
    icon: '🔌',
    desc: 'Power, control and instrumentation cables built to international safety standards.',
    products: [
      { name: 'XLPE Power Cables', desc: 'Cross-linked polyethylene cables for medium voltage power', img: '/electrical/XLPE Power Cables.jfif' },
      { name: 'Control Cables', desc: 'Multi-core cables for control and signal circuits', img: '/electrical/Control Cables.jfif' },
      { name: 'Armoured Cables', desc: 'Steel wire armoured cables for underground/outdoor runs', img: '/electrical/Armoured Cables.jfif' },
      { name: 'Instrumentation Cables', desc: 'Shielded cables for sensitive instrumentation signals', img: '/electrical/Instrumentation Cables.jfif' },
      { name: 'Fire-Resistant Cables', desc: 'Cables rated for fire safety and emergency systems', img: '/electrical/Fire-Resistant Cables.jfif' },
      { name: 'Cable Glands & Lugs', desc: 'Termination accessories for secure cable connections', img: '/electrical/Cable Glands & Lugs.jfif' },
    ]
  },
  {
    id: 'switchgear',
    label: 'Switchgear',
    icon: '🔲',
    desc: 'Circuit breakers, contactors and switching equipment for power distribution.',
    products: [
      { name: 'Air Circuit Breakers', desc: 'Low voltage ACBs for main power distribution', img: '/electrical/Air Circuit Breakers.jfif' },
      { name: 'MCCBs', desc: 'Molded case circuit breakers for branch protection', img: '/electrical/MCCBs.jfif' },
      { name: 'Contactors', desc: 'Power contactors for motor and load switching', img: '/electrical/Contactors.jfif' },
      { name: 'Isolators & Switches', desc: 'Load break switches and disconnect isolators', img: '/electrical/Isolators & Switches.jfif' },
      { name: 'Fuses & Fuse Bases', desc: 'HRC fuses for overcurrent protection', img: '/electrical/Fuses & Fuse Bases.jfif' },
      { name: 'Relays & Timers', desc: 'Protection relays and control timers', img: '/electrical/Relays & Timers.jfif' },
    ]
  },
  {
    id: 'panels',
    label: 'Panels & Enclosures',
    icon: '🗄️',
    desc: 'Distribution boards, control panels and protective enclosures for electrical installations.',
    products: [
      { name: 'Distribution Boards', desc: 'Main and sub distribution boards for power distribution', img: '/electrical/Distribution Boards.jfif' },
      { name: 'Motor Control Centers', desc: 'MCC panels for centralized motor control', img: '/electrical/Motor Control Centers.jfif' },
      { name: 'Junction Boxes', desc: 'IP-rated enclosures for cable termination', img: '/electrical/Junction Boxes.jfif' },
      { name: 'PLC Control Panels', desc: 'Custom-built panels for automation systems', img: '/electrical/PLC Control Panels.jfif' },
      { name: 'Explosion-Proof Enclosures', desc: 'ATEX-rated enclosures for hazardous areas', img: '/electrical/Explosion-Proof Enclosures.jfif' },
      { name: 'Busbar Systems', desc: 'Copper and aluminum busbars for power distribution', img: '/electrical/Busbar Systems.jfif' },
    ]
  },
]

const relatedCategories = [
  { name: 'Mechanical Products', desc: 'Bearings, pumps & mechanical systems', href: '/products/mechanical', img: '/mechanical.jfif' },
  { name: 'Pipes & Fittings', desc: 'Valves, fittings & pipe systems', href: '/products/pipes-fittings', img: '/pipes-and-fittings.jfif' },
  { name: 'Instruments', desc: 'Precision measurement tools', href: '/products/instruments', img: '/instruments.jfif' },
  { name: 'General Orders', desc: 'Custom & specialized equipment', href: '/products/general', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=350&fit=crop&q=80' },
]

export default function ElectricalProductsPage() {
  const [activeTab, setActiveTab] = useState('motors')
  const active = categories.find(c => c.id === activeTab)!

  return (
    <div className="min-h-screen bg-white">
      

      {/* HERO */}
      <section className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0f1f3d 35%, #1a2f5c 70%, #1e3a8a 100%)' }}>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(251,191,36,.25), transparent 50%)' }}></div>
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 relative z-10">
          <div className="mb-8">
            <a href="/#products" className="inline-flex items-center gap-2 text-amber-300 hover:text-white transition text-sm font-semibold">
              ← Back to Products
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-left space-y-5">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                ⚡ Electrical Products
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Powering Industrial<br /><span className="text-amber-300">Systems Reliably</span>
              </h1>
              <p className="text-base md:text-lg text-blue-50/80 leading-relaxed max-w-xl">
                Motors, Cables, Switchgear &amp; Panels — genuine electrical components sourced from globally trusted brands, built for safety and operational reliability.
              </p>
              <div className="flex gap-8 pt-2">
                <div>
                  <p className="text-3xl font-black text-white">400+</p>
                  <p className="text-blue-200/60 text-xs uppercase tracking-widest mt-1">SKUs</p>
                </div>
                <div className="w-px bg-white/15"></div>
                <div>
                  <p className="text-3xl font-black text-white">15+</p>
                  <p className="text-blue-200/60 text-xs uppercase tracking-widest mt-1">Brands</p>
                </div>
                <div className="w-px bg-white/15"></div>
                <div>
                  <p className="text-3xl font-black text-white">4</p>
                  <p className="text-blue-200/60 text-xs uppercase tracking-widest mt-1">Categories</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ transform: 'perspective(1000px) rotateY(-6deg) rotateX(2deg)' }}>
                <img
                  src="/electrical/elec.jfif"
                  alt="Industrial electrical control panel"
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-2xl px-5 py-3 hidden md:block">
                <p className="text-2xl font-black text-blue-900 leading-none">IEC</p>
                <p className="text-gray-500 text-[11px] font-semibold mt-1">Safety Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Explore our comprehensive electrical solutions including motors, cables, switchgear, and panel components. Our electrical products meet international safety standards and are sourced from globally trusted brands for reliable operation in demanding industrial environments.
          </p>
        </div>
      </section>

      {/* CATEGORIES + TABS */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Product Categories</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Explore our comprehensive electrical product range designed for safety and efficiency</p>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-4 mb-12 gap-1.5 p-1 bg-slate-100 rounded-lg scrollbar-none snap-x">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-shrink-0 md:flex-shrink flex flex-row md:flex-col items-center justify-center gap-2 py-3 md:py-4 px-5 md:px-2 rounded-md transition-all snap-start ${
                  activeTab === cat.id
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'text-slate-600 hover:bg-white'
                }`}
              >
                <span className="text-xl md:text-2xl">{cat.icon}</span>
                <span className="text-xs md:text-sm font-medium text-center whitespace-nowrap">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* ACTIVE TAB CONTENT */}
          <div>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{active.label}</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">{active.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {active.products.map((p, i) => (
                <div
                  key={i}
                  className="rounded-lg shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 overflow-hidden bg-white"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-900 transition-colors">{p.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CATEGORIES */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Explore Related Categories</h3>
            <p className="text-slate-600">Discover complementary product categories for complete industrial solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCategories.map((c, i) => (
              <a key={i} href={c.href} className="group">
                <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-blue-300 bg-white hover:-translate-y-1">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                  <div className="p-5 flex items-center gap-3">
                    <span className="text-blue-900 text-xl flex-shrink-0">→</span>
                    <div>
                      <h4 className="font-semibold text-slate-800 group-hover:text-blue-900 transition-colors">{c.name}</h4>
                      <p className="text-sm text-slate-500 mt-1">{c.desc}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need Electrical Engineering Support?</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Our team can help you design and implement safe, efficient electrical systems. Contact us for technical consultations and custom electrical solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-blue-900 hover:bg-blue-950 text-white font-medium transition">
              Get Electrical Quote
            </a>
            <a href="/#products" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-blue-900 font-medium transition">
              View All Categories
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
    </div>
  )
}
