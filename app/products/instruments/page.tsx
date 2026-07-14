'use client'

import { useState } from 'react'

const categories = [
  {
    id: 'pressure-gauges',
    label: 'Pressure Gauges',
    icon: '⏱️',
    desc: 'Precision pressure measurement instruments for various industrial applications.',
    products: [
      { name: 'Bourdon Tube Gauge', desc: 'Mechanical bourdon tube pressure gauge for industrial applications', img: '/instruments/Compound Pressure Gauge.png' },
      { name: 'Digital Pressure Gauge', desc: 'High-accuracy digital pressure display for precise measurements', img: '/instruments/Compound Pressure Gauge.png' },
      { name: 'Diaphragm Pressure Gauge', desc: 'Sensitive diaphragm pressure gauge for low pressure applications', img: '/instruments/Diaphragm Pressure Gauge.png' },
      { name: 'Differential Pressure Gauge', desc: 'Differential pressure measurement instrument for flow and level applications', img: '/instruments/Differential Pressure Gauge.png' },
      { name: 'Pressure Switch', desc: 'Pressure switch for control and safety applications', img: '/instruments/Differential Pressure Gauge.png' },
      { name: 'Vacuum Gauge', desc: 'Vacuum gauge for negative pressure measurement', img: '/instruments/Vacuum Gauge.png' },
      { name: 'Compound Pressure Gauge', desc: 'Compound pressure gauge for positive and negative pressure measurement', img: '/instruments/Compound Pressure Gauge.png' }
    ]
  },
  {
    id: 'transmitters',
    label: 'Transmitters',
    icon: '📡',
    desc: 'Electronic transmitters for converting physical measurements to standard signals.',
    products: [
      { name: '4-20mA Pressure Transmitter', desc: '4-20mA pressure transmitter for industrial process control', img: '/instruments/4-20mA Pressure Transmitter.png' },
      { name: 'Temperature Transmitter', desc: 'Temperature transmitter for RTD and thermocouple signal conditioning', img: '/instruments/Temperature Transmitter.png' },
      { name: 'Level Transmitter', desc: 'Level transmitter for continuous liquid level monitoring', img: '/instruments/Level Transmitter.png' },
      { name: 'Flow Transmitter', desc: 'Flow transmitter for fluid flow measurement and control', img: '/instruments/Flow Transmitter.png' }
    ]
  },
  {
    id: 'calibration-instruments',
    label: 'Calibration Instruments',
    icon: '⚖️',
    desc: 'Professional calibration tools and equipment for maintaining measurement accuracy.',
    products: [
      { name: 'Pressure Calibrator', desc: 'Precision pressure calibration instrument for field and lab use', img: '/instruments/Pressure Calibrator.png' },
      { name: 'Temperature Calibrator', desc: 'Temperature calibration reference source for RTD and thermocouple verification', img: '/instruments/Temperature Calibrator.png' },
      { name: 'Multifunction Calibrator', desc: 'Multi-parameter calibration instrument for electrical and process signals', img: '/instruments/Multifunction Calibrator.png' },
      { name: 'Dead Weight Tester', desc: 'Primary pressure standard dead weight tester for high accuracy calibration', img: '/instruments/Dead Weight Tester.png' }
    ]
  },
  {
    id: 'temperature-instruments',
    label: 'Temperature Instruments',
    icon: '🌡️',
    desc: 'Complete range of temperature measurement and monitoring solutions.',
    products: [
      { name: 'Type K Thermocouple', desc: 'Type K thermocouple sensor for high temperature measurement', img: '/instruments/Type K Thermocouple.png' },
      { name: 'Type J Thermocouple', desc: 'Type J thermocouple sensor for general purpose applications', img: '/instruments/Type J Thermocouple.png' },
      { name: 'Type T Thermocouple', desc: 'Type T thermocouple sensor for low temperature applications', img: '/instruments/Type T Thermocouple.png' },
      { name: 'Type E Thermocouple', desc: 'Type E thermocouple sensor for high accuracy measurements', img: '/instruments/Type E Thermocouple.png' },
      { name: 'Thermocouple Extension Wire', desc: 'Thermocouple extension wire for signal transmission', img: '/instruments/Thermocouple Extension Wire.png' },
      { name: 'Thermocouple Connector', desc: 'Thermocouple connector for reliable signal connections', img: '/instruments/Thermocouple Connector.png' },
      { name: 'Thermocouple Protection Tube', desc: 'Thermocouple protection tube for harsh environment applications', img: '/instruments/Thermocouple Protection Tube.png' }
    ]
  },
  {
    id: 'level-gauges',
    label: 'Level Gauges',
    icon: '📏',
    desc: 'Advanced level measurement instruments for liquid and solid applications.',
    products: [
      { name: 'Radar Level Gauge', desc: 'Non-contact radar level measurement instrument', img: '/instruments/Radar Level Gauge.png' },
      { name: 'Ultrasonic Level Gauge', desc: 'Ultrasonic level sensor for continuous monitoring', img: '/instruments/Ultrasonic Level Gauge.png' },
      { name: 'Magnetostrictive Level Gauge', desc: 'Magnetostrictive level gauge for precise interface detection', img: '/instruments/Magnetostrictive Level Gauge.png' }
    ]
  }
];

const relatedCategories = [
  { name: 'Mechanical Products', desc: 'Bearings, pumps & mechanical systems', href: '/products/mechanical', img: '/mechanical.jfif' },
  { name: 'Electrical Products', desc: 'Motors, cables & electrical systems', href: '/products/electrical', img: '/electrical.jfif' },
  { name: 'Pipes & Fittings', desc: 'Valves, fittings & pipe systems', href: '/products/pipes-fittings', img: '/pipes-and-fittings.jfif' },
  { name: 'General Orders', desc: 'Custom & specialized equipment', href: '/contact', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=350&fit=crop&q=80' },
];

export default function InstrumentsPage() {
  const [activeTab, setActiveTab] = useState('pressure-gauges')
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
                ⏱️ Measuring Instruments
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Precision Measurement <br /><span className="text-teal-300">&amp; Control</span>
              </h1>
              <p className="text-base md:text-lg text-teal-50/80 leading-relaxed max-w-xl">
                Gauges, Transmitters, Calibration Tools &amp; Temperature Sensors — genuine instrumentation from globally trusted brands, engineered for demanding industrial environments.
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
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&h=650&fit=crop&q=85"
                  alt="Industrial measurement equipment"
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
            Explore our full range of measurement and control instruments built for industrial accuracy and reliability — pressure gauges, transmitters, calibration tools, and temperature sensors. Our solutions are sourced from globally trusted brands, providing exceptional precision and operational efficiency for your plant.
          </p>
        </div>
      </section>

      {/* CATEGORIES + TABS */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Product Categories</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Explore our comprehensive instrumentation range organized by specialized categories</p>
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
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{active?.label}</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">{active?.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {active?.products.map((p, i) => (
                <div
                  key={i}
                  className="rounded-lg shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 overflow-hidden bg-white"
                >
                  <div className="aspect-video relative overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need Specific Instrumentation Solutions?</h2>
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
    </div>
  )
}
