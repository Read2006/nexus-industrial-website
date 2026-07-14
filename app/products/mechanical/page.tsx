'use client'

import { useState } from 'react'

const categories = [
  {
    id: 'bearings',
    label: 'Bearings',
    icon: '⚙️',
    desc: 'Complete range of industrial bearings for rotating equipment across all sectors.',
    products: [
      { name: 'Deep Groove Ball Bearings', desc: 'High-speed, low-noise bearings for motors, pumps and gearboxes', img: '/mechanical/Deep Groove Ball Bearings.jfif' },
      { name: 'Spherical Roller Bearings', desc: 'Self-aligning bearings for heavy radial and axial loads', img: '/mechanical/Spherical Roller Bearings.jfif' },
      { name: 'Tapered Roller Bearings', desc: 'For combined radial and thrust loads in gearboxes and axles', img: '/mechanical/Tapered Roller Bearings.jfif' },
      { name: 'Cylindrical Roller Bearings', desc: 'High radial load capacity for heavy industrial machinery', img: '/mechanical/Cylindrical Roller Bearings.jfif' },
      { name: 'Thrust Ball Bearings', desc: 'Designed to handle axial loads in one or both directions', img: '/mechanical/Thrust Ball Bearings.jfif' },
      { name: 'Needle Roller Bearings', desc: 'Compact design with high load capacity for tight spaces', img: '/mechanical/Needle Roller Bearings.jfif' },
      { name: 'Pillow Block Bearings', desc: 'Mounted bearing units for easy shaft alignment and support', img: '/mechanical/Pillow Block Bearings.jfif' },
      { name: 'Linear Motion Bearings', desc: 'Precision bearings for linear guide systems and slides', img: '/mechanical/Linear Motion Bearings.jfif' },
    ]
  },
  {
    id: 'pumps',
    label: 'Pumps',
    icon: '💧',
    desc: 'Industrial pumps for water, chemical, slurry and oil transfer applications.',
    products: [
      { name: 'Centrifugal Pumps', desc: 'High-flow, low-pressure pumps for water and light fluids', img: '/mechanical/Centrifugal Pumps.jfif' },
      { name: 'Submersible Pumps', desc: 'For drainage, sewage and deep-well water extraction', img: '/mechanical/Submersible Pumps.jfif' },
      { name: 'Gear Pumps', desc: 'Positive displacement pumps for viscous fluids and oils', img: '/mechanical/Gear Pumps.jfif' },
      { name: 'Diaphragm Pumps', desc: 'Chemical-resistant pumps for corrosive fluid transfer', img: '/mechanical/Diaphragm Pumps.jfif' },
      { name: 'Booster Pumps', desc: 'Pressure booster systems for water supply networks', img: '/mechanical/Booster Pumps.jfif' },
      { name: 'Slurry Pumps', desc: 'Heavy-duty pumps for abrasive and thick slurry handling', img: '/mechanical/Slurry Pumps.jfif' },
      { name: 'Vertical Turbine Pumps', desc: 'High-capacity pumps for deep well and process applications', img: '/mechanical/Vertical Turbine Pumps.jfif' },
      { name: 'Dosing Pumps', desc: 'Precise metering pumps for chemical injection systems', img: '/mechanical/Dosing Pumps.jfif' },
    ]
  },
  {
    id: 'gearboxes',
    label: 'Gearboxes',
    icon: '🔧',
    desc: 'Industrial gearboxes and speed reducers for conveyors, mixers and heavy machinery.',
    products: [
      { name: 'Helical Gearboxes', desc: 'Smooth, quiet operation for high-efficiency power transmission', img: '/mechanical/Helical Gearboxes.jfif' },
      { name: 'Bevel Gearboxes', desc: 'Right-angle drive for change in shaft direction', img: '/mechanical/Bevel Gearboxes.jfif' },
      { name: 'Worm Gearboxes', desc: 'High reduction ratios in compact housing design', img: '/mechanical/Worm Gearboxes.jfif' },
      { name: 'Planetary Gearboxes', desc: 'Compact and robust for servo and precision applications', img: '/mechanical/Planetary Gearboxes.jfif' },
      { name: 'Gear Couplings', desc: 'Flexible shaft couplings for misalignment compensation', img: '/mechanical/Gear Couplings.jfif' },
      { name: 'Right Angle Gearboxes', desc: 'Compact gear units for perpendicular shaft applications', img: '/mechanical/Right Angle Gearboxes.jfif' },
    ]
  },
  {
    id: 'belts',
    label: 'Belts & Chains',
    icon: '🔗',
    desc: 'V-belts, timing belts, conveyor belts and roller chains for power transmission.',
    products: [
      { name: 'V-Belts', desc: 'Classical and narrow V-belts for general industrial drives', img: '/mechanical/V-Belts.jfif' },
      { name: 'Timing Belts', desc: 'Synchronous belts for precise positioning and indexing', img: '/mechanical/Timing Belts.jfif' },
      { name: 'Conveyor Belts', desc: 'Heavy-duty rubber conveyor belts for bulk material handling', img: '/mechanical/Conveyor Belts.jfif' },
      { name: 'Roller Chains', desc: 'Standard and heavy-duty roller chains for industrial drives', img: '/mechanical/Roller Chains.jfif' },
      { name: 'Conveyor Chains', desc: 'Attachment chains for material handling and assembly lines', img: '/mechanical/Conveyor Chains.jfif' },
      { name: 'Flat Belts', desc: 'High-speed drives for textile and printing machinery', img: '/mechanical/Flat Belts.jfif' },
    ]
  },
  {
    id: 'seals',
    label: 'Seals & Gaskets',
    icon: '🛡️',
    desc: 'Mechanical seals, oil seals, O-rings and gaskets for leak-free operation.',
    products: [
      { name: 'Mechanical Seals', desc: 'Rotary shaft seals for pumps and compressors', img: '/mechanical/Mechanical Seals.jfif' },
      { name: 'Oil Seals (Lip Seals)', desc: 'Radial shaft seals to prevent lubricant leakage', img: '/mechanical/Oil Seals (Lip Seals).jfif' },
      { name: 'Spiral Wound Gaskets', desc: 'High-pressure, high-temperature flange gaskets', img: '/mechanical/Spiral Wound Gaskets.jfif' },
      { name: 'O-Rings', desc: 'Elastomeric seals in NBR, EPDM, Viton for all fluids', img: '/mechanical/O-Rings.jfif' },
      { name: 'Sheet Gaskets', desc: 'Cut gaskets in compressed fiber, PTFE and rubber', img: '/mechanical/Sheet Gaskets.jfif' },
      { name: 'Packing Seals', desc: 'Braided packing for valve stems and pump stuffing boxes', img: '/mechanical/Packing Seals.jfif' },
    ]
  },
]

const relatedCategories = [
  { name: 'Electrical Products', desc: 'Motors, cables & electrical systems', href: '/products/electrical', img: '/electrical.jfif' },
  { name: 'Pipes & Fittings', desc: 'Valves, fittings & pipe systems', href: '/products/pipes-fittings', img: '/pipes-and-fittings.jfif' },
  { name: 'Instruments', desc: 'Precision measurement tools', href: '/products/instruments', img: '/instruments.jfif' },
  { name: 'General Orders', desc: 'Custom & specialized equipment', href: '/products/general', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=350&fit=crop&q=80' },
]

export default function MechanicalProductsPage() {
  const [activeTab, setActiveTab] = useState('bearings')
  const active = categories.find(c => c.id === activeTab)!

  return (
    <div className="min-h-screen bg-white">
      
     

      {/* HERO */}
      <section className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1b1a 0%, #0f2e2a 35%, #0d4d42 70%, #115e4f 100%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(45,212,191,.25), transparent 50%)' }}></div>
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 relative z-10">
          <div className="mb-8">
            <a href="/#products" className="inline-flex items-center gap-2 text-teal-300 hover:text-white transition text-sm font-semibold">
              ← Back to Products
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-left space-y-5">
              <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                ⚙️ Mechanical Products
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Engineered for<br /><span className="text-teal-300">Industrial Power</span>
              </h1>
              <p className="text-base md:text-lg text-teal-50/80 leading-relaxed max-w-xl">
                Bearings, Pumps, Gearboxes, Belts &amp; More — genuine parts from globally trusted brands, engineered for demanding industrial environments.
              </p>
              <div className="flex gap-8 pt-2">
                <div>
                  <p className="text-3xl font-black text-white">500+</p>
                  <p className="text-teal-200/60 text-xs uppercase tracking-widest mt-1">SKUs</p>
                </div>
                <div className="w-px bg-white/15"></div>
                <div>
                  <p className="text-3xl font-black text-white">20+</p>
                  <p className="text-teal-200/60 text-xs uppercase tracking-widest mt-1">Brands</p>
                </div>
                <div className="w-px bg-white/15"></div>
                <div>
                  <p className="text-3xl font-black text-white">5</p>
                  <p className="text-teal-200/60 text-xs uppercase tracking-widest mt-1">Categories</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ transform: 'perspective(1000px) rotateY(-6deg) rotateX(2deg)' }}>
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&h=650&fit=crop&q=85"
                  alt="Industrial mechanical equipment"
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-2xl px-5 py-3 hidden md:block">
                <p className="text-2xl font-black text-teal-700 leading-none">100%</p>
                <p className="text-gray-500 text-[11px] font-semibold mt-1">Genuine Parts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Explore our full range of mechanical equipment built for industrial performance and reliability — bearings, pumps, gearboxes, belts and more. Our mechanical solutions are sourced from globally trusted brands, providing exceptional durability and operational efficiency for your plant.
          </p>
        </div>
      </section>

      {/* CATEGORIES + TABS */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Product Categories</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Explore our comprehensive mechanical product range organized by specialized categories</p>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-5 mb-12 gap-1.5 p-1 bg-slate-100 rounded-lg scrollbar-none snap-x">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-shrink-0 md:flex-shrink flex flex-row md:flex-col items-center justify-center gap-2 py-3 md:py-4 px-5 md:px-2 rounded-md transition-all snap-start ${
                  activeTab === cat.id
                    ? 'bg-teal-700 text-white shadow-md'
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
                    <h4 className="font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">{p.name}</h4>
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
                <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-teal-300 bg-white hover:-translate-y-1">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                  <div className="p-5 flex items-center gap-3">
                    <span className="text-teal-700 text-xl flex-shrink-0">→</span>
                    <div>
                      <h4 className="font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">{c.name}</h4>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need Specific Mechanical Solutions?</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Our team can help you select the right equipment for your specific applications. Contact us for technical specifications, custom configurations, and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-teal-700 hover:bg-teal-800 text-white font-medium transition">
              Get Technical Quote
            </a>
            <a href="/#products" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-teal-700 font-medium transition">
              View All Categories
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
