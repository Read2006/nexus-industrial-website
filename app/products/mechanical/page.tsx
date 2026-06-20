'use client'

import { useState } from 'react'

const categories = [
  {
    id: 'bearings',
    label: 'Bearings',
    icon: '⚙️',
    desc: 'Complete range of industrial bearings for rotating equipment across all sectors.',
    products: [
      { name: 'Deep Groove Ball Bearings', desc: 'High-speed, low-noise bearings for motors, pumps and gearboxes', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=350&fit=crop&q=80' },
      { name: 'Spherical Roller Bearings', desc: 'Self-aligning bearings for heavy radial and axial loads', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop&q=80' },
      { name: 'Tapered Roller Bearings', desc: 'For combined radial and thrust loads in gearboxes and axles', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=350&fit=crop&q=80' },
      { name: 'Cylindrical Roller Bearings', desc: 'High radial load capacity for heavy industrial machinery', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=500&h=350&fit=crop&q=80' },
      { name: 'Thrust Ball Bearings', desc: 'Designed to handle axial loads in one or both directions', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=350&fit=crop&q=80' },
      { name: 'Needle Roller Bearings', desc: 'Compact design with high load capacity for tight spaces', img: 'https://images.unsplash.com/photo-1622957461302-2d6b4f9c1d76?w=500&h=350&fit=crop&q=80' },
      { name: 'Pillow Block Bearings', desc: 'Mounted bearing units for easy shaft alignment and support', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=350&fit=crop&q=80' },
      { name: 'Linear Motion Bearings', desc: 'Precision bearings for linear guide systems and slides', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop&q=80' },
    ]
  },
  {
    id: 'pumps',
    label: 'Pumps',
    icon: '💧',
    desc: 'Industrial pumps for water, chemical, slurry and oil transfer applications.',
    products: [
      { name: 'Centrifugal Pumps', desc: 'High-flow, low-pressure pumps for water and light fluids', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=350&fit=crop&q=80' },
      { name: 'Submersible Pumps', desc: 'For drainage, sewage and deep-well water extraction', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=500&h=350&fit=crop&q=80' },
      { name: 'Gear Pumps', desc: 'Positive displacement pumps for viscous fluids and oils', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=350&fit=crop&q=80' },
      { name: 'Diaphragm Pumps', desc: 'Chemical-resistant pumps for corrosive fluid transfer', img: 'https://images.unsplash.com/photo-1622957461302-2d6b4f9c1d76?w=500&h=350&fit=crop&q=80' },
      { name: 'Booster Pumps', desc: 'Pressure booster systems for water supply networks', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=350&fit=crop&q=80' },
      { name: 'Slurry Pumps', desc: 'Heavy-duty pumps for abrasive and thick slurry handling', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop&q=80' },
      { name: 'Vertical Turbine Pumps', desc: 'High-capacity pumps for deep well and process applications', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=350&fit=crop&q=80' },
      { name: 'Dosing Pumps', desc: 'Precise metering pumps for chemical injection systems', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=500&h=350&fit=crop&q=80' },
    ]
  },
  {
    id: 'gearboxes',
    label: 'Gearboxes',
    icon: '🔧',
    desc: 'Industrial gearboxes and speed reducers for conveyors, mixers and heavy machinery.',
    products: [
      { name: 'Helical Gearboxes', desc: 'Smooth, quiet operation for high-efficiency power transmission', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=350&fit=crop&q=80' },
      { name: 'Bevel Gearboxes', desc: 'Right-angle drive for change in shaft direction', img: 'https://images.unsplash.com/photo-1622957461302-2d6b4f9c1d76?w=500&h=350&fit=crop&q=80' },
      { name: 'Worm Gearboxes', desc: 'High reduction ratios in compact housing design', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=350&fit=crop&q=80' },
      { name: 'Planetary Gearboxes', desc: 'Compact and robust for servo and precision applications', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop&q=80' },
      { name: 'Gear Couplings', desc: 'Flexible shaft couplings for misalignment compensation', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=350&fit=crop&q=80' },
      { name: 'Right Angle Gearboxes', desc: 'Compact gear units for perpendicular shaft applications', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=500&h=350&fit=crop&q=80' },
    ]
  },
  {
    id: 'belts',
    label: 'Belts & Chains',
    icon: '🔗',
    desc: 'V-belts, timing belts, conveyor belts and roller chains for power transmission.',
    products: [
      { name: 'V-Belts', desc: 'Classical and narrow V-belts for general industrial drives', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=350&fit=crop&q=80' },
      { name: 'Timing Belts', desc: 'Synchronous belts for precise positioning and indexing', img: 'https://images.unsplash.com/photo-1622957461302-2d6b4f9c1d76?w=500&h=350&fit=crop&q=80' },
      { name: 'Conveyor Belts', desc: 'Heavy-duty rubber conveyor belts for bulk material handling', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=350&fit=crop&q=80' },
      { name: 'Roller Chains', desc: 'Standard and heavy-duty roller chains for industrial drives', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop&q=80' },
      { name: 'Conveyor Chains', desc: 'Attachment chains for material handling and assembly lines', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=350&fit=crop&q=80' },
      { name: 'Flat Belts', desc: 'High-speed drives for textile and printing machinery', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=500&h=350&fit=crop&q=80' },
    ]
  },
  {
    id: 'seals',
    label: 'Seals & Gaskets',
    icon: '🛡️',
    desc: 'Mechanical seals, oil seals, O-rings and gaskets for leak-free operation.',
    products: [
      { name: 'Mechanical Seals', desc: 'Rotary shaft seals for pumps and compressors', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=350&fit=crop&q=80' },
      { name: 'Oil Seals (Lip Seals)', desc: 'Radial shaft seals to prevent lubricant leakage', img: 'https://images.unsplash.com/photo-1622957461302-2d6b4f9c1d76?w=500&h=350&fit=crop&q=80' },
      { name: 'Spiral Wound Gaskets', desc: 'High-pressure, high-temperature flange gaskets', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=350&fit=crop&q=80' },
      { name: 'O-Rings', desc: 'Elastomeric seals in NBR, EPDM, Viton for all fluids', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop&q=80' },
      { name: 'Sheet Gaskets', desc: 'Cut gaskets in compressed fiber, PTFE and rubber', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=350&fit=crop&q=80' },
      { name: 'Packing Seals', desc: 'Braided packing for valve stems and pump stuffing boxes', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=500&h=350&fit=crop&q=80' },
    ]
  },
]

const relatedCategories = [
  { name: 'Electrical Products', desc: 'Motors, cables & electrical systems', href: '/products/electrical', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=350&fit=crop&q=80' },
  { name: 'Pipes & Fittings', desc: 'Valves, fittings & pipe systems', href: '/products/pipes-fittings', img: 'https://images.unsplash.com/photo-1622957461302-2d6b4f9c1d76?w=500&h=350&fit=crop&q=80' },
  { name: 'Instruments', desc: 'Precision measurement tools', href: '/products/instruments', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=350&fit=crop&q=80' },
  { name: 'General Orders', desc: 'Custom & specialized equipment', href: '/products/general', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop&q=80' },
]

export default function MechanicalProductsPage() {
  const [activeTab, setActiveTab] = useState('bearings')
  const active = categories.find(c => c.id === activeTab)!

  return (
    <div className="min-h-screen bg-white">
      {/* TOP BAR */}
      <div className="bg-gray-900 text-white text-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:03351503555" className="hover:text-teal-400 transition">📞 0335-1503555</a>
            <span className="text-gray-600">|</span>
            <a href="mailto:info@nexus-is.co" className="hover:text-teal-400 transition">📧 info@nexus-is.co</a>
          </div>
          <div className="text-teal-400 font-semibold">Sourcing Solutions. Delivering Results.</div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/logoofthenexus.jpeg" alt="NIS Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-bold text-gray-900 text-sm">NIS</span>
          </a>
          <nav className="hidden lg:flex gap-6">
            <a href="/" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Home</a>
            <a href="/#about-section" className="text-sm font-semibold text-gray-700 hover:text-teal-700">About</a>
            <a href="/#products" className="text-sm font-semibold text-teal-700 border-b-2 border-teal-700">Products</a>
            <a href="/#industries" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Industries</a>
            <a href="/brands" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Brands</a>
            <a href="/contact" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Contact</a>
          </nav>
        </div>
      </header>

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
          <div className="grid grid-cols-2 md:grid-cols-5 mb-12 gap-1 p-1 bg-slate-100 rounded-lg">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex flex-col items-center gap-2 py-4 px-2 rounded-md transition-all ${
                  activeTab === cat.id
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'text-slate-600 hover:bg-white'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.label}</span>
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

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Nexus Industrial</h3>
              <p className="text-sm">Delivering reliable industrial supply and global trade solutions.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/#products" className="hover:text-white transition">Products</a></li>
                <li><a href="/#industries" className="hover:text-white transition">Industries</a></li>
                <li><a href="/brands" className="hover:text-white transition">Brands</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <p className="text-sm">📞 0335-1503555</p>
              <p className="text-sm">📧 info@nexus-is.co</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Compliance</h3>
              <p className="text-sm">NTN: 123455</p>
              <p className="text-sm">STRN: 1233456</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Nexus Industrial Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
