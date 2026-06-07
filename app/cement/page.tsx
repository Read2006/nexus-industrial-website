'use client';

import Image from 'next/image';

export default function CementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* TOP BAR */}
      <div className="sticky top-0 bg-gray-900 text-white text-sm py-2 px-6 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:03351503555" className="hover:text-orange-400 transition">📞 0335-1503555</a>
            <span className="text-gray-600">|</span>
            <a href="mailto:info@nexus-is.co" className="hover:text-orange-400 transition">📧 info@nexus-is.co</a>
          </div>
          <div className="text-orange-400 font-semibold">Cement Industry Solutions</div>
        </div>
      </div>

      {/* HEADER NAV */}
      <header className="sticky top-[36px] bg-white border-b border-gray-100 z-40 w-full">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">N</div>
            <span className="font-bold text-gray-900">NIS</span>
          </a>
          <nav className="flex gap-6">
            <a href="/" className="text-sm font-semibold text-gray-700 hover:text-orange-600">Home</a>
            <a href="#overview" className="text-sm font-semibold text-gray-700 hover:text-orange-600">Overview</a>
            <a href="#products" className="text-sm font-semibold text-gray-700 hover:text-orange-600">Products</a>
            <a href="#why" className="text-sm font-semibold text-gray-700 hover:text-orange-600">Why Us</a>
            <a href="/contact" className="text-sm font-semibold text-white bg-orange-600 px-4 py-2 rounded hover:bg-orange-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-sm">
            <a href="/" className="hover:text-orange-200">Home</a>
            <span>/</span>
            <a href="/#industries" className="hover:text-orange-200">Industries</a>
            <span>/</span>
            <span className="text-orange-200">Cement</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-4 text-sm font-bold">
                🏭 CEMENT MANUFACTURING
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                Cement Industry <span className="text-orange-200">Solutions</span>
              </h1>
              <p className="text-lg text-orange-50 mb-8 leading-relaxed">
                Nexus Industrial Solutions is your trusted supplier of electrical, instrumentation, and mechanical components for cement plants. We keep your plant running reliably—from raw materials to finished product dispatch.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  Request Quotation
                </a>
                <a href="#products" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition">
                  View Products
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center">
                <div className="text-4xl font-black text-orange-200 mb-2">500+</div>
                <div className="text-sm">Products Supplied</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center">
                <div className="text-4xl font-black text-orange-200 mb-2">25+</div>
                <div className="text-sm">Plants Served</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center">
                <div className="text-4xl font-black text-orange-200 mb-2">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center">
                <div className="text-4xl font-black text-orange-200 mb-2">24h</div>
                <div className="text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION WITH IMAGES */}
      <section id="overview" className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-xl overflow-hidden shadow-xl h-96">
              <img 
                src="/images/pexels-fabnel-ldn-2147803336-33690927.jpg" 
                alt="Cement Plant Operations" 
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div>
              <div className="inline-block bg-orange-100 border border-orange-300 rounded-full px-4 py-2 mb-4 text-sm font-bold text-orange-700">
                WHO WE SERVE
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Powering Cement Plants <span className="text-orange-600">Nationwide</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cement production operates in one of the harshest industrial environments — extreme heat, heavy dust, and 24/7 operation. We supply the components your plant depends on, from raw material crushing to final product dispatch.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">🏗️</span>
                  <div>
                    <p className="font-bold text-gray-900">Full Plant Coverage</p>
                    <p className="text-sm text-gray-600">Components for every stage — crushing, grinding, pyroprocessing, cooling, and packing</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">🔩</span>
                  <div>
                    <p className="font-bold text-gray-900">OEM & Replacement Parts</p>
                    <p className="text-sm text-gray-600">Genuine OEM parts and qualified replacements from verified manufacturers</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-gray-900">Emergency Procurement</p>
                    <p className="text-sm text-gray-600">Fast-track sourcing to minimize plant downtime — every hour counts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION WITH IMAGES */}
      <section id="products" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 border border-orange-300 rounded-full px-4 py-2 mb-4 text-sm font-bold text-orange-700">
              WHAT WE SUPPLY
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Product <span className="text-orange-600">Categories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Electrical Components */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="/images/pexels-pixabay-257736.jpg" 
                  alt="Electrical Components" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">⚡ Electrical Components</h3>
                <p className="text-gray-700 mb-4 text-sm">Motors, switchgear, VFDs, cables, transformers, and control systems for plant distribution</p>
                <div className="flex flex-wrap gap-2">
                  {['Switchgear', 'Motors', 'VFDs', 'Cables'].map((tag, i) => (
                    <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Instrumentation */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="/images/pexels-padrinan-16679542.jpg" 
                  alt="Instrumentation" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🎛️ Instrumentation</h3>
                <p className="text-gray-700 mb-4 text-sm">Sensors, transmitters, PLCs, analyzers, and SCADA systems for precision control</p>
                <div className="flex flex-wrap gap-2">
                  {['Sensors', 'Transmitters', 'PLCs', 'SCADA'].map((tag, i) => (
                    <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mechanical Equipment */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="/images/pexels-mikhail-nilov-9242910.jpg" 
                  alt="Mechanical Equipment" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">⚙️ Mechanical Equipment</h3>
                <p className="text-gray-700 mb-4 text-sm">Bearings, gearboxes, couplings, and seals for extreme heat and abrasion</p>
                <div className="flex flex-wrap gap-2">
                  {['Bearings', 'Gearboxes', 'Couplings', 'Seals'].map((tag, i) => (
                    <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Kiln & Pyroprocessing */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="/images/pexels-kalpesh-damor-774903984-18920790.jpg" 
                  alt="Kiln Operations" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🔥 Kiln & Pyroprocessing</h3>
                <p className="text-gray-700 mb-4 text-sm">Specialist components for rotary kilns, preheaters, and clinker coolers</p>
                <div className="flex flex-wrap gap-2">
                  {['Kiln Seals', 'Burners', 'Fans', 'Refractory'].map((tag, i) => (
                    <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pumps & Valves */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="/images/pexels-nishantaneja-11703173.jpg" 
                  alt="Pumps and Valves" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">💧 Pumps & Valves</h3>
                <p className="text-gray-700 mb-4 text-sm">Centrifugal pumps, diaphragm pumps, and industrial valves for slurry and cooling</p>
                <div className="flex flex-wrap gap-2">
                  {['Centrifugal', 'Diaphragm', 'Gate Valves', 'Butterfly'].map((tag, i) => (
                    <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pipes & Fittings */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="/images/pexels-zakhar-36878027.jpg" 
                  alt="Pipes and Fittings" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🔩 Pipes & Fittings</h3>
                <p className="text-gray-700 mb-4 text-sm">MS, GI, SS pipes, tubes, flanges, and fittings for all piping requirements</p>
                <div className="flex flex-wrap gap-2">
                  {['Flanges', 'Elbows', 'Gaskets', 'Fasteners'].map((tag, i) => (
                    <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS FLOW SECTION WITH IMAGE */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block bg-orange-100 border border-orange-300 rounded-full px-4 py-2 mb-4 text-sm font-bold text-orange-700">
                PROCESS COVERAGE
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Cement Plant <span className="text-orange-600">Process Areas</span>
              </h2>
              <p className="text-gray-700 mb-8">We supply components across every stage of cement manufacturing.</p>

              <div className="space-y-0">
                {[
                  { num: '01', title: 'Quarrying & Crushing', desc: 'Heavy crushers, conveyors, and dust collection systems' },
                  { num: '02', title: 'Raw Milling', desc: 'Ball mills, vertical roller mills, separators' },
                  { num: '03', title: 'Pyroprocessing', desc: 'Preheater towers, rotary kilns, clinker coolers' },
                  { num: '04', title: 'Clinker Grinding', desc: 'Finish mills, bucket elevators, pneumatic systems' },
                  { num: '05', title: 'Packing & Dispatch', desc: 'Packing machines, bulk loaders, weighing systems' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 py-4 border-b last:border-b-0 hover:bg-orange-50 px-3 transition rounded">
                    <div className="text-2xl font-bold text-orange-600 w-12">{step.num}</div>
                    <div>
                      <p className="font-bold text-gray-900">{step.title}</p>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl h-full">
              <img 
                src="/images/pexels-canmiless-5860937.jpg" 
                alt="Cement Manufacturing Process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 border border-orange-300 rounded-full px-4 py-2 mb-4 text-sm font-bold text-orange-700">
              OUR ADVANTAGE
            </div>
            <h2 className="text-4xl font-black text-gray-900">
              Why Choose <span className="text-orange-600">Nexus</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '⏱️', title: 'Timely Delivery', desc: 'Fast and reliable delivery across Pakistan and globally' },
              { icon: '💰', title: 'Competitive Pricing', desc: 'Market-leading prices without compromising quality' },
              { icon: '🌍', title: 'Global Network', desc: 'Access to 100+ international brands and suppliers' },
              { icon: '📋', title: 'Full Documentation', desc: 'Complete traceability, test certificates, compliance docs' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-bold text-orange-700 uppercase tracking-wider mb-4">Trusted Brands</p>
          <h2 className="text-3xl font-black text-gray-900 mb-12">We Supply for Cement Industry</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Siemens', 'ABB', 'Schneider Electric', 'WIKA', 'Endress+Hauser', 'SEW-Eurodrive', 'SKF', 'Flender', 'KSB', 'Grundfos'].map((brand, i) => (
              <div key={i} className="bg-white px-6 py-3 rounded-lg border border-gray-200 font-semibold text-gray-700 hover:border-orange-400 transition">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Ready to Source Your Parts?</h2>
          <p className="text-lg text-orange-50 mb-8">Send us your requirement list or technical specifications. Our team will respond with a competitive quotation within 24 hours.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Contact Us
            </a>
            <a href="tel:03351503555" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition">
              📞 0335-1503555
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Nexus Industrial Solutions</h3>
            <p className="text-sm">Delivering reliable industrial supply and global trade solutions for cement and other industries.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/#industries" className="hover:text-white transition">Industries</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/cement" className="hover:text-white transition">Cement</a></li>
              <li><a href="#" className="hover:text-white transition">Oil & Gas</a></li>
              <li><a href="#" className="hover:text-white transition">Steel</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p className="text-sm mb-2">📞 0335-1503555</p>
            <p className="text-sm">📧 info@nexus-is.co</p>
            <p className="text-sm mt-4 text-gray-400">NTN: 123455<br/>SECP Registered</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 Nexus Industrial Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}