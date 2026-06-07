'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CementIndustry() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sectionsMap = [
        { id: 'hero', name: 'hero' },
        { id: 'overview', name: 'overview' },
        { id: 'products', name: 'products' },
        { id: 'process', name: 'process' },
        { id: 'why', name: 'why' },
      ]

      for (const section of sectionsMap) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.top > -rect.height) {
            setActiveSection(section.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <div className="text-orange-400 font-semibold">Sourcing Solutions. Delivering Results.</div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-[36px] bg-white border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center text-white font-bold text-lg">N</div>
            <span className="font-bold text-gray-900 text-sm hidden sm:block">NIS</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-orange-700">Home</Link>
            <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-orange-700">About</Link>
            <Link href="/#industries" className="text-sm font-semibold text-gray-700 hover:text-orange-700">Industries</Link>
            <Link href="/brands" className="text-sm font-semibold text-gray-700 hover:text-orange-700">Brands</Link>
            <Link href="/contact" className="text-sm font-semibold text-gray-700 hover:text-orange-700">Contact</Link>
          </nav>
          <Link href="/contact" className="px-4 py-2 bg-orange-700 text-white rounded-lg font-semibold hover:bg-orange-800 transition">Get Quote</Link>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="bg-gradient-to-r from-orange-700 to-orange-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-orange-200 text-sm font-bold uppercase">Industry Solutions</div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">Cement Industry Solutions</h1>
              <p className="text-lg text-orange-100">
                Nexus Industrial Solutions is a trusted supplier of electrical, instrumentation, and mechanical components for cement plants across Pakistan and globally. We keep your plant running — reliable, efficient, and cost-effective.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Request Quotation</Link>
                <a href="#products" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-700 transition">View Products</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-orange-100 mt-2">Products Supplied</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-orange-100 mt-2">Years Experience</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">40+</div>
                <div className="text-sm text-orange-100 mt-2">Global Brands</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">24h</div>
                <div className="text-sm text-orange-100 mt-2">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-orange-700 text-sm font-bold uppercase">Who We Serve</div>
              <h2 className="text-4xl font-black text-gray-900">Powering Cement Plants Nationwide & Beyond</h2>
              <p className="text-gray-700 leading-relaxed">
                Cement production runs in one of the harshest industrial environments — extreme heat, heavy dust, and 24/7 operation. We supply the components your plant depends on, from raw material handling to finished product dispatch.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl">🏗️</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Full Plant Coverage</h4>
                    <p className="text-sm text-gray-600">Components for every stage — crushing, grinding, pyroprocessing, cooling, and packing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">🔩</div>
                  <div>
                    <h4 className="font-bold text-gray-900">OEM & Replacement Parts</h4>
                    <p className="text-sm text-gray-600">Genuine OEM parts and qualified replacements from verified international manufacturers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Emergency Procurement</h4>
                    <p className="text-sm text-gray-600">Fast-track sourcing to minimise plant downtime — because every hour of stoppage costs you.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 flex items-center justify-center min-h-96">
              <div className="text-8xl opacity-30">🏭</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-orange-700 text-sm font-bold uppercase mb-2">What We Supply</div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Product Categories</h2>
            <p className="text-gray-600">Comprehensive industrial supply across all sections of the cement manufacturing process.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Electrical Components', desc: 'Motors to switchgear', tags: ['Switchgear', 'Motors', 'VFDs', 'Cables', 'Transformers'] },
              { icon: '🎛️', title: 'Instrumentation', desc: 'Sensors and control systems', tags: ['Sensors', 'Transmitters', 'PLCs', 'Analysers', 'SCADA'] },
              { icon: '⚙️', title: 'Mechanical Equipment', desc: 'Heavy-duty components', tags: ['Bearings', 'Gearboxes', 'Couplings', 'Seals'] },
              { icon: '🔥', title: 'Kiln & Pyroprocessing', desc: 'Rotary kilns and coolers', tags: ['Kiln Seals', 'Burners', 'Fans', 'Refractory'] },
              { icon: '💧', title: 'Pumps & Valves', desc: 'Industrial pumping solutions', tags: ['Centrifugal', 'Diaphragm', 'Gate Valves', 'Butterfly'] },
              { icon: '🔩', title: 'Pipes & Fittings', desc: 'MS, GI, SS pipes and tubes', tags: ['Flanges', 'Elbows', 'Gaskets', 'Fasteners'] },
            ].map((product, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition border border-gray-200 hover:border-orange-300">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-orange-700 text-sm font-bold uppercase mb-2">Process Coverage</div>
            <h2 className="text-4xl font-black text-gray-900">Cement Plant Process Areas</h2>
            <p className="text-gray-600">We supply components across every stage of cement manufacturing.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-0">
              {[
                { num: '01', title: 'Quarrying & Crushing', desc: 'Heavy crushers and dust collection systems.' },
                { num: '02', title: 'Raw Milling', desc: 'Ball mills and vertical roller mills.' },
                { num: '03', title: 'Pyroprocessing', desc: 'Preheater towers, rotary kilns, and coolers.' },
                { num: '04', title: 'Clinker Grinding', desc: 'Finish mills and bucket elevators.' },
                { num: '05', title: 'Packing & Dispatch', desc: 'Packing machines and logistics automation.' },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 py-4 border-b border-gray-200 hover:bg-white px-4 rounded transition">
                  <div className="text-2xl font-black text-orange-700">{step.num}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-sm font-bold uppercase text-gray-600 mb-6">Production Flow</div>
              <div className="space-y-0">
                {[
                  'Quarrying & Raw Materials',
                  'Crushing & Pre-blending',
                  'Raw Milling & Homogenisation',
                  'Preheating & Calcination',
                  'Rotary Kiln — Clinkering',
                  'Clinker Cooling',
                  'Finish Grinding — Cement Mill',
                  'Storage, Packing & Dispatch',
                ].map((stage, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-3">
                    <div className="w-3 h-3 bg-orange-700 rounded-full"></div>
                    <span className="text-gray-700 font-semibold">{stage}</span>
                    {idx < 7 && <div className="flex-1 border-b border-dashed border-orange-200 mx-2"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-orange-700 text-sm font-bold uppercase mb-2">Our Advantage</div>
            <h2 className="text-4xl font-black text-gray-900">Why Choose Nexus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Reliable supply, competitive pricing, and technical expertise — backed by years of experience serving cement plants.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '⏱️', title: 'Timely Delivery', desc: 'Fast and reliable delivery across Pakistan and globally.' },
              { icon: '💰', title: 'Competitive Pricing', desc: 'Market-leading prices without compromising quality.' },
              { icon: '🌍', title: 'Global Network', desc: 'Access to 100+ international brands worldwide.' },
              { icon: '📋', title: 'Full Documentation', desc: 'Complete material traceability and certificates.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition border border-gray-200">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg font-bold uppercase text-gray-600 mb-8">Brands We Supply</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Siemens', 'ABB', 'Schneider Electric', 'WIKA', 'Endress+Hauser', 'SEW-Eurodrive', 'SKF', 'Flender', 'KSB', 'Grundfos', 'Spirax Sarco', 'Venti Oelde'].map((brand, idx) => (
              <span key={idx} className="px-6 py-2 bg-white rounded-lg text-gray-700 font-semibold border border-gray-200 hover:border-orange-400 transition">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BACK TO MAIN PAGE */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Explore More Industries</h2>
          <Link href="/#industries" className="inline-block bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition">
            View All Industries
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-black">Ready to Source Your Parts?</h2>
          <p className="text-lg opacity-95">Send us your requirement list or technical specifications. Our team responds within 24 hours with a competitive quotation.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Contact Us</Link>
            <a href="tel:03351503555" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">📞 Call Us</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-3">Nexus Industrial Solutions</h3>
              <p className="text-sm">Delivering reliable industrial supply and global trade solutions.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/" className="hover:text-white transition">About</Link></li>
                <li><Link href="/#industries" className="hover:text-white transition">Industries</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Contact</h3>
              <p className="text-sm">📞 0335-1503555</p>
              <p className="text-sm">📧 info@nexus-is.co</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Compliance</h3>
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
