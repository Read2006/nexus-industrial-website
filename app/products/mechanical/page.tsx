'use client'

import { useState } from 'react'

const categories = [
  {
    id: 'bearings',
    label: 'Bearings',
    icon: '⚙️',
    description: 'Precision bearings for every industrial application — from heavy-load roller bearings to high-speed ball bearings.',
    brands: ['SKF', 'FAG', 'NSK', 'Timken', 'INA'],
    products: [
      { name: 'Deep Groove Ball Bearings', desc: 'High-speed, low-noise bearings for motors, pumps and gearboxes', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=250&fit=crop' },
      { name: 'Spherical Roller Bearings', desc: 'Self-aligning bearings for heavy radial and axial loads', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
      { name: 'Tapered Roller Bearings', desc: 'For combined radial and thrust loads in gearboxes and axles', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop' },
      { name: 'Cylindrical Roller Bearings', desc: 'High radial load capacity for heavy industrial machinery', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=400&h=250&fit=crop' },
      { name: 'Thrust Ball Bearings', desc: 'Designed to handle axial loads in one or both directions', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=250&fit=crop' },
      { name: 'Needle Roller Bearings', desc: 'Compact design with high load capacity for tight spaces', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
    ]
  },
  {
    id: 'pumps',
    label: 'Pumps',
    icon: '💧',
    description: 'Industrial pumps for water, chemicals, slurry, and oil applications across all major industrial sectors.',
    brands: ['Grundfos', 'KSB', 'Pedrollo', 'Flowserve', 'Sulzer'],
    products: [
      { name: 'Centrifugal Pumps', desc: 'High-flow, low-pressure pumps for water and light fluids', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop' },
      { name: 'Submersible Pumps', desc: 'For drainage, sewage and deep-well water extraction', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop' },
      { name: 'Gear Pumps', desc: 'Positive displacement pumps for viscous fluids and oils', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=250&fit=crop' },
      { name: 'Diaphragm Pumps', desc: 'Chemical-resistant pumps for corrosive fluid transfer', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
      { name: 'Booster Pumps', desc: 'Pressure booster systems for water supply networks', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=400&h=250&fit=crop' },
      { name: 'Slurry Pumps', desc: 'Heavy-duty pumps for abrasive and thick slurry handling', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop' },
    ]
  },
  {
    id: 'gearboxes',
    label: 'Gearboxes',
    icon: '🔧',
    description: 'Industrial gearboxes and speed reducers for conveyors, mixers, crushers and heavy machinery.',
    brands: ['Flender', 'SEW', 'Rexnord', 'Renold', 'Nord'],
    products: [
      { name: 'Helical Gearboxes', desc: 'Smooth, quiet operation for high-efficiency power transmission', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
      { name: 'Bevel Gearboxes', desc: 'Right-angle drive for change in shaft direction', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=250&fit=crop' },
      { name: 'Worm Gearboxes', desc: 'High reduction ratios in compact housing design', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop' },
      { name: 'Planetary Gearboxes', desc: 'Compact and robust for servo and precision applications', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=400&h=250&fit=crop' },
      { name: 'Gear Couplings', desc: 'Flexible shaft couplings for misalignment compensation', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop' },
      { name: 'Chain Drives', desc: 'Roller chain drives for synchronized power transmission', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
    ]
  },
  {
    id: 'belts',
    label: 'Belts & Chains',
    icon: '🔗',
    description: 'V-belts, timing belts, conveyor belts and roller chains for all drive and conveying applications.',
    brands: ['Gates', 'Optibelt', 'Dayco', 'Renold', 'Fenner'],
    products: [
      { name: 'V-Belts', desc: 'Classical and narrow V-belts for general industrial drives', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop' },
      { name: 'Timing Belts', desc: 'Synchronous belts for precise positioning and indexing', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop' },
      { name: 'Flat Belts', desc: 'High-speed drives for textile and printing machinery', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=250&fit=crop' },
      { name: 'Conveyor Belts', desc: 'Heavy-duty rubber conveyor belts for bulk material handling', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
      { name: 'Roller Chains', desc: 'Standard and heavy-duty roller chains for industrial drives', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=400&h=250&fit=crop' },
      { name: 'Conveyor Chains', desc: 'Attachment chains for material handling and assembly lines', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop' },
    ]
  },
  {
    id: 'seals',
    label: 'Seals & Gaskets',
    icon: '🛡️',
    description: 'Mechanical seals, oil seals, O-rings and gaskets for leak-free operation in all conditions.',
    brands: ['John Crane', 'Flexitallic', 'Parker', 'SKF', 'Freudenberg'],
    products: [
      { name: 'Mechanical Seals', desc: 'Rotary shaft seals for pumps and compressors', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
      { name: 'Oil Seals (Lip Seals)', desc: 'Radial shaft seals to prevent lubricant leakage', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=250&fit=crop' },
      { name: 'Spiral Wound Gaskets', desc: 'High-pressure, high-temperature flange gaskets', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop' },
      { name: 'O-Rings', desc: 'Elastomeric seals in NBR, EPDM, Viton for all fluids', img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?w=400&h=250&fit=crop' },
      { name: 'Sheet Gaskets', desc: 'Cut gaskets in compressed fiber, PTFE and rubber', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop' },
      { name: 'Packing Seals', desc: 'Braided packing for valve stems and pump stuffing boxes', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
    ]
  },
]

const relatedProducts = [
  { name: 'Electrical', desc: 'Motors, cables & switchgear', href: '/products/electrical', color: 'bg-blue-50 border-blue-200 hover:border-blue-400', icon: '⚡' },
  { name: 'Instruments', desc: 'Gauges, sensors & meters', href: '/products/instruments', color: 'bg-purple-50 border-purple-200 hover:border-purple-400', icon: '📊' },
  { name: 'Pipes & Fittings', desc: 'Pipes, valves & flanges', href: '/products/pipes-fittings', color: 'bg-orange-50 border-orange-200 hover:border-orange-400', icon: '🔩' },
  { name: 'General Orders', desc: 'Custom & specialized items', href: '/products/general', color: 'bg-green-50 border-green-200 hover:border-green-400', icon: '📦' },
]

export default function MechanicalProductsPage() {
  const [activeTab, setActiveTab] = useState('bearings')
  const active = categories.find(c => c.id === activeTab)!

  return (
    <div className="min-h-screen bg-white">
      {/* TOP BAR */}
      <div className="sticky top-0 bg-gray-900 text-white text-sm py-2 px-6 z-50">
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
      <header className="sticky top-[36px] bg-white border-b border-gray-100 z-40 w-full">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/logoofthenexus.jpeg" alt="NIS Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-bold text-gray-900 text-sm">NIS</span>
          </a>
          <nav className="flex gap-6">
            <a href="/" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Home</a>
            <a href="/#about-section" className="text-sm font-semibold text-gray-700 hover:text-teal-700">About</a>
            <a href="/#products" className="text-sm font-semibold text-teal-700 border-b-2 border-teal-700">Products</a>
            <a href="/#industries" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Industries</a>
            <a href="/brands" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Brands</a>
            <a href="/contact" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="bg-gray-900 py-14 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1400&h=400&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <a href="/#products" className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold mb-6 hover:text-teal-300 transition">
            ← Back to Products
          </a>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-700/30 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                ⚙️ Mechanical Products
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                Bearings, Pumps,<br />
                <span className="text-teal-400">Gearboxes & More</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Genuine mechanical components from world-leading brands — engineered for demanding industrial environments and long-term operational reliability.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-black text-teal-400">500+</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">SKUs Available</p>
                </div>
                <div className="w-px bg-gray-700"></div>
                <div className="text-center">
                  <p className="text-3xl font-black text-teal-400">20+</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Global Brands</p>
                </div>
                <div className="w-px bg-gray-700"></div>
                <div className="text-center">
                  <p className="text-3xl font-black text-teal-400">5</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Categories</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="relative w-72 h-56 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=450&fit=crop" alt="Mechanical Products" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-10 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            From precision bearings to heavy-duty pumps, our mechanical product range covers everything your plant needs. We source from top global manufacturers including <strong className="text-gray-900">SKF, Grundfos, Flender, Gates</strong> and many more — with genuine parts, fast lead times, and competitive pricing.
          </p>
        </div>
      </section>

      {/* TABS + PRODUCTS */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-gray-900 mb-3">Product Categories</h2>
            <p className="text-gray-500 text-lg">Select a category to explore our full range</p>
          </div>

          {/* TAB BUTTONS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12 bg-white p-2 rounded-2xl shadow-sm border border-gray-200">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex flex-col items-center gap-2 py-4 px-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-teal-700 text-white shadow-lg shadow-teal-700/20'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-teal-700'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* ACTIVE CATEGORY INFO */}
          <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {active.icon} {active.label}
                </h3>
                <p className="text-gray-600">{active.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:max-w-xs">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest w-full mb-1">Key Brands:</p>
                {active.brands.map(brand => (
                  <span key={brand} className="bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* PRODUCT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {active.products.map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-teal-700 text-white text-xs font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Enquire Now
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-black text-gray-900 mb-2 group-hover:text-teal-700 transition-colors text-base">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{product.desc}</p>
                  <a
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-teal-700 text-sm font-bold hover:gap-2 transition-all"
                  >
                    Request Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-black text-gray-900 mb-3">Explore Other Product Categories</h3>
            <p className="text-gray-500">Complete industrial solutions across all disciplines</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProducts.map((p, i) => (
              <a
                key={i}
                href={p.href}
                className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${p.color}`}
              >
                <span className="text-3xl">{p.icon}</span>
                <div>
                  <h4 className="font-black text-gray-900 text-sm">{p.name}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-14 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-black text-white">Need Specific Mechanical Parts?</h2>
          <p className="text-teal-100 text-lg leading-relaxed">
            Share your part number, brand, or specification — we&apos;ll source it for you with fast lead times and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-teal-700 px-10 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
              Get a Quote →
            </a>
            <a href="tel:03351503555" className="border-2 border-white text-white px-10 py-3 rounded-xl font-bold hover:bg-white/10 transition">
              📞 Call: 0335-1503555
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
