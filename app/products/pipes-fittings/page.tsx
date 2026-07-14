'use client'

import { useState } from 'react'

const categories = [
  {
    id: 'pipes',
    label: 'Pipes',
    icon: '⭕',
    desc: 'Complete range of industrial pipes for various applications and specifications.',
    products: [
      { name: 'Ductile Iron Pipe', desc: 'Ductile iron pipe for water supply systems', img: '/pipes-fittings/Ductile Iron Pipe.png' },
      { name: 'PVC UPVC Pipe', desc: 'PVC UPVC pipe for plumbing applications', img: '/pipes-fittings/PVC UPVC Pipe.png' },
      { name: 'CPVC Pipe', desc: 'Chlorinated polyvinyl chloride pipe for hot water', img: '/pipes-fittings/CPVC Pipe.png' },
      { name: 'Cast Iron Pipe', desc: 'Cast iron pipe for drainage systems', img: '/pipes-fittings/Cast Iron Pipe.png' },
      { name: 'Steel Pipe', desc: 'Steel pipe for high-pressure applications', img: '/pipes-fittings/Steel Pipe.png' },
      { name: 'Copper Pipe', desc: 'Copper pipe for water and gas systems', img: '/pipes-fittings/Copper Pipe.png' },
      { name: 'Galvanized Pipe', desc: 'Galvanized pipe for corrosion resistance', img: '/pipes-fittings/Galvanized Pipe.png' },
      { name: 'SS Pipe', desc: 'Stainless steel pipe for corrosive environments', img: '/pipes-fittings/SS Pipe.png' },
      { name: 'ERQ Pipe', desc: 'ERQ specification pipe', img: '/pipes-fittings/ERQ Pipe.png' },
      { name: 'HFW Pipe', desc: 'High frequency welded pipe', img: '/pipes-fittings/HFW Pipe.png' },
      { name: 'LSAW Pipes', desc: 'Longitudinal submerged arc welded pipes', img: '/pipes-fittings/LSAW Pipes.png' },
      { name: 'SSAW Pipes', desc: 'Spiral submerged arc welded pipes', img: '/pipes-fittings/SSAW Pipes.png' }
    ]
  },
  {
    id: 'flanges',
    label: 'Flanges',
    icon: '⚙️',
    desc: 'Extensive range of industrial flanges for secure pipe connections.',
    products: [
      { name: 'Threaded Flange', desc: 'Threaded flange for pipe connections', img: '/pipes-fittings/Threaded Flange.png' },
      { name: 'Orifice Flange', desc: 'Orifice flange for flow measurement', img: '/pipes-fittings/Orifice Flange.png' },
      { name: 'Welding Neck Flange', desc: 'Welding neck flange for high-pressure systems', img: '/pipes-fittings/Welding Neck Flange.png' },
      { name: 'Slip On Flange', desc: 'Slip on flange for easy installation', img: '/pipes-fittings/Slip On Flange.png' },
      { name: 'Spectacle Blind Flange', desc: 'Spectacle blind flange for isolation', img: '/pipes-fittings/Spectacle Blind Flange.png' },
      { name: 'Lap Joint Flange', desc: 'Lap joint flange for low-pressure systems', img: '/pipes-fittings/Lap Joint Flange.png' },
      { name: 'Blind Flange', desc: 'Blind flange for pipe closure', img: '/pipes-fittings/Blind Flange.png' }
    ]
  },
  {
    id: 'fittings',
    label: 'Fittings',
    icon: '🔧',
    desc: 'High-quality pipe fittings for directional changes, branching, and connections.',
    products: [
      { name: 'Threaded Fitting', desc: 'Threaded fitting for pipe connections', img: '/pipes-fittings/Threaded Fitting.png' },
      { name: 'Flat Fitting', desc: 'Flat fitting for low-pressure applications', img: '/pipes-fittings/Flat Fitting.png' },
      { name: 'Blind Fitting', desc: 'Blind fitting for pipe closure', img: '/pipes-fittings/Blind Fitting.png' },
      { name: 'Socket Weld Fitting', desc: 'Socket weld fitting for high-pressure applications', img: '/pipes-fittings/Socket Weld Fitting.png' },
      { name: 'Tee Fitting', desc: '3-way pipe tee fitting for branching lines', img: '/pipes-fittings/Tee Fitting.png' },
      { name: 'Elbow Fitting', desc: '90-degree elbow fitting for directional changes', img: '/pipes-fittings/Elbow Fitting.png' },
      { name: 'Cross Fitting', desc: '4-way cross pipe fitting for intersection joints', img: '/pipes-fittings/Cross Fitting.png' }
    ]
  },
  {
    id: 'gaskets',
    label: 'Gaskets',
    icon: '🛡️',
    desc: 'Industrial gaskets and sealing solutions for leak-proof pipe joints.',
    products: [
      { name: 'Non-Asbestos Gasket', desc: 'Non-asbestos gasket for safe sealing applications', img: '/pipes-fittings/Non-Asbestos Gasket.png' },
      { name: 'Grooved Gasket', desc: 'Grooved gasket for enhanced sealing performance', img: '/pipes-fittings/Grooved Gasket.png' },
      { name: 'Neoprene Rubber Gasket', desc: 'Neoprene rubber gasket for chemical resistance', img: '/pipes-fittings/Neoprene Rubber Gasket.png' },
      { name: 'Manway Gasket', desc: 'Manway gasket for access point sealing', img: '/pipes-fittings/Manway Gasket.png' },
      { name: 'Transformer Gasket', desc: 'Transformer gasket for electrical equipment sealing', img: '/pipes-fittings/Transformer Gasket.png' },
      { name: 'RTJ Gasket', desc: 'Ring joint gasket for high-pressure applications', img: '/pipes-fittings/RTJ Gasket.png' },
      { name: 'Semi-Metallic Gasket', desc: 'Semi-metallic gasket for extreme conditions', img: '/pipes-fittings/Semi-Metallic Gasket.png' },
      { name: 'Spiral Wound Gasket', desc: 'Spiral wound gasket for high-temperature applications', img: '/pipes-fittings/Spiral Wound Gasket.png' },
      { name: 'Rubber Gasket', desc: 'Rubber gasket for flexible sealing', img: '/pipes-fittings/Rubber Gasket.png' },
      { name: 'Teflon Gaskets', desc: 'Teflon gaskets for chemical compatibility', img: '/pipes-fittings/Teflon Gaskets.png' },
      { name: 'Metallic Seals', desc: 'Metallic seals for high-pressure systems', img: '/pipes-fittings/Metallic Seals.png' },
      { name: 'PTFE Gaskets', desc: 'PTFE gaskets for aggressive chemical environments', img: '/pipes-fittings/PTFE Gaskets.png' },
      { name: 'Graphite Gasket', desc: 'Graphite gasket for dark, flexible high-temperature sealing', img: '/pipes-fittings/Graphite Gasket.png' }
    ]
  },
  {
    id: 'nuts-bolts',
    label: 'Nuts & Bolts',
    icon: '🔩',
    desc: 'Fasteners and hardware for secure pipe and flange assemblies.',
    products: [
      { name: 'Hex Bolt', desc: 'Hex bolt for industrial fastening applications', img: '/pipes-fittings/Hex Bolt.png' },
      { name: 'Carriage Bolt', desc: 'Carriage bolt for flush mounting applications', img: '/pipes-fittings/Carriage Bolt.png' },
      { name: 'Eye Bolt', desc: 'Eye bolt for lifting and attachment applications', img: '/pipes-fittings/Eye Bolt.png' },
      { name: 'U-Bolt', desc: 'U-bolt for pipe clamping and support', img: '/pipes-fittings/U-Bolt.png' },
      { name: 'Socket Head Bolt', desc: 'Socket head bolt for high-strength applications', img: '/pipes-fittings/Socket Head Bolt.png' },
      { name: 'Lock Nut', desc: 'Lock nut for vibration-resistant fastening', img: '/pipes-fittings/Lock Nut.png' },
      { name: 'Wing Nut', desc: 'Wing nut for manual tightening applications', img: '/pipes-fittings/Wing Nut.png' },
      { name: 'Cap Nut', desc: 'Cap nut for bolt end protection', img: '/pipes-fittings/Cap Nut.png' },
      { name: 'Square Nut', desc: 'Square nut for traditional fastening applications', img: '/pipes-fittings/Square Nut.png' },
      { name: 'Jam Nut', desc: 'Jam nut for locking applications', img: '/pipes-fittings/Jam Nut.png' },
      { name: 'Industrial O-Rings', desc: 'Various sizes of elastomeric O-rings for sealing', img: '/pipes-fittings/Industrial O-Rings.png' }
    ]
  },
  {
    id: 'tubes',
    label: 'Tubes',
    icon: '🕳️',
    desc: 'Precision tubes for heat exchangers, instrumentation, and structural use.',
    products: [
      { name: 'Nuclear Fuel Tube', desc: 'Nuclear fuel tube for reactor applications', img: '/pipes-fittings/Nuclear Fuel Tube.png' },
      { name: 'Titanium Tube', desc: 'Titanium tube for high-corrosion environments', img: '/pipes-fittings/Titanium Tube.png' },
      { name: 'Hydraulic Tube', desc: 'Hydraulic tube for fluid power systems', img: '/pipes-fittings/Hydraulic Tube.png' },
      { name: 'Control Line Tube', desc: 'Control line tube for instrumentation systems', img: '/pipes-fittings/Control Line Tube.png' },
      { name: 'High Pressure Tube', desc: 'High pressure tube for demanding applications', img: '/pipes-fittings/High Pressure Tube.png' },
      { name: 'Condenser Tube', desc: 'Condenser tube for heat exchanger systems', img: '/pipes-fittings/Condenser Tube.png' },
      { name: 'Fin Tube', desc: 'Fin tube for enhanced heat transfer', img: '/pipes-fittings/Fin Tube.png' },
      { name: 'Instrumentation Tube', desc: 'Instrumentation tube for measurement systems', img: '/pipes-fittings/Instrumentation Tube.png' },
      { name: 'Cooling Tube', desc: 'Cooling tube for thermal management', img: '/pipes-fittings/Cooling Tube.png' },
      { name: 'HPLC Tube', desc: 'HPLC tube for analytical applications', img: '/pipes-fittings/HPLC Tube.png' },
      { name: 'Stainless Steel Tube', desc: 'Stainless steel and duplex stainless steel tubes', img: '/pipes-fittings/Stainless Steel Tube.png' }
    ]
  },
  {
    id: 'valves',
    label: 'Valves',
    icon: '🎛️',
    desc: 'Industrial valves for flow control, isolation, and pressure regulation.',
    products: [
      { name: 'Ball Valves', desc: 'Quarter-turn valves for reliable shut-off control', img: '/pipes-fittings/Ball Valves.png' },
      { name: 'Gate Valves', desc: 'Linear motion valves for on/off fluid isolation', img: '/pipes-fittings/Gate Valves.png' },
      { name: 'Globe Valves', desc: 'Precision flow throttling and regulation', img: '/pipes-fittings/Globe Valves.png' },
      { name: 'Check Valves', desc: 'Prevent backflow in critical piping systems', img: '/pipes-fittings/Check Valves.png' },
      { name: 'Butterfly Valves', desc: 'Compact rotary valves for large diameter flow control', img: '/pipes-fittings/Butterfly Valves.png' },
      { name: 'Safety Relief Valves', desc: 'Automatic pressure relief for system protection', img: '/pipes-fittings/Safety Relief Valves.png' },
      { name: 'Diaphragm Valves', desc: 'Specialized diaphragm valves for flow regulation and shut-off', img: '/pipes-fittings/Diaphragm Valves.png' },
      { name: 'Plug Valves', desc: 'Diverse plug valves and rising stem valves for reliable operation', img: '/pipes-fittings/Plug Valves.png' },
      { name: 'Needle Valves', desc: 'Technical needle valves for precise flow control and regulation', img: '/pipes-fittings/Needle Valves.png' }
    ]
  }
];

const relatedCategories = [
  { name: 'Mechanical Products', desc: 'Bearings, pumps & mechanical systems', href: '/products/mechanical', img: '/mechanical.jfif' },
  { name: 'Electrical Products', desc: 'Motors, cables & electrical systems', href: '/products/electrical', img: '/electrical.jfif' },
  { name: 'Instruments', desc: 'Precision measurement tools', href: '/products/instruments', img: '/instruments.jfif' },
  { name: 'General Orders', desc: 'Custom & specialized equipment', href: '/contact', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=350&fit=crop&q=80' },
];

export default function PipesFittingsPage() {
  const [activeTab, setActiveTab] = useState('pipes')
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
                ⭕ Pipes & Fittings
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Engineered for<br /><span className="text-teal-300">Fluid Control</span>
              </h1>
              <p className="text-base md:text-lg text-teal-50/80 leading-relaxed max-w-xl">
                Pipes, Flanges, Fittings, Valves, Gaskets &amp; More — genuine parts from globally trusted brands, engineered for demanding industrial environments.
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
                  <p className="text-3xl font-black text-white">7</p>
                  <p className="text-teal-200/60 text-xs uppercase tracking-widest mt-1">Categories</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ transform: 'perspective(1000px) rotateY(-6deg) rotateX(2deg)' }}>
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&h=650&fit=crop&q=85"
                  alt="Industrial piping equipment"
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
            Explore our full range of piping products and fluid control equipment built for industrial performance and reliability — pipes, flanges, fittings, gaskets, and valves. Our solutions are sourced from globally trusted brands, providing exceptional durability and operational efficiency for your plant.
          </p>
        </div>
      </section>

      {/* CATEGORIES + TABS */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Product Categories</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Explore our comprehensive piping product range organized by specialized categories</p>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-7 mb-12 gap-1.5 p-1 bg-slate-100 rounded-lg scrollbar-none snap-x">
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
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{active?.label}</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">{active?.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {active?.products.map((p, i) => (
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need Specific Piping Solutions?</h2>
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
