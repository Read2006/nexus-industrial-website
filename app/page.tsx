'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-section', 'products', 'industries', 'brands-section', 'contact-section']
      const scrollY = window.scrollY + 120

      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      }
      setActiveSection(current)
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
          <div className="flex items-center gap-2">
            <img src="/images/logoofthenexus.jpeg" alt="NIS Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-bold text-gray-900 text-sm">NIS</span>
          </div>
          <nav className="flex gap-6 items-center">
            <a href="#top" className={`text-sm font-semibold transition ${activeSection === 'home' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-700 hover:text-teal-700'}`}>Home</a>
            <a href="#about-section" className={`text-sm font-semibold transition ${activeSection === 'about-section' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-700 hover:text-teal-700'}`}>About</a>
            <a href="#products" className={`text-sm font-semibold transition ${activeSection === 'products' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-700 hover:text-teal-700'}`}>Products</a>
            <a href="#industries" className={`text-sm font-semibold transition ${activeSection === 'industries' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-700 hover:text-teal-700'}`}>Industries</a>
            <a href="#brands-section" className={`text-sm font-semibold transition ${activeSection === 'brands-section' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-700 hover:text-teal-700'}`}>Brands</a>
            <a href="#contact-section" className={`text-sm font-semibold transition ${activeSection === 'contact-section' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-700 hover:text-teal-700'}`}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="bg-white pt-8 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-teal-700 text-sm font-bold uppercase mb-4">Welcome to</p>
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Nexus Industrial Solutions</h1>
                <p className="text-lg text-gray-600">Delivering reliable industrial supply & global trade solutions. Your trusted partner in quality, efficiency, and business growth.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Why Partner With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Timely Delivery</p>
                      <p className="text-sm text-gray-600">Fast & reliable delivery across Pakistan and globally</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Competitive Pricing</p>
                      <p className="text-sm text-gray-600">Market-leading prices without compromising quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Global Network</p>
                      <p className="text-sm text-gray-600">Trusted supplier network with established channels worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#products" className="bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800">Get Started</a>
                <a href="/about" className="border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50">Learn More</a>
              </div>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/WhatsApp Image 2026-05-02 at 4.42.44 PM.jpeg" alt="Industrial Building" className="w-full h-full object-cover" />
              <div className="absolute top-6 right-6 z-20 bg-white bg-opacity-95 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <p className="text-xs font-bold text-teal-700 uppercase">Registered</p>
                <p className="text-xs text-gray-600 font-semibold">NTN: 123455</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">To provide high-quality industrial products and efficient services that help businesses operate smoothly and grow sustainably. We build strong relationships with our clients through reliability, transparency, and customer satisfaction.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">To become a highly recognized and trusted name in industrial supply and trading, known for delivering excellence, innovation, and outstanding customer service. Building strong and long-term partnerships through continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-0 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-64 rounded-t-2xl overflow-hidden shadow-lg">
            <img src="/images/WhatsApp Image 2026-05-02 at 4.42.44 PM.jpeg" alt="Industrial Complex" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-50 py-20 px-8 rounded-b-2xl">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <p className="text-teal-700 text-2xl font-semibold mb-2">Our</p>
                <h2 className="text-5xl font-bold text-gray-900 mb-2">CORE VALUES</h2>
                <div className="w-16 h-1 bg-teal-700"></div>
              </div>
              <p className="text-gray-700 text-lg font-medium mb-12">At Nexus Industrial Solutions, our business is built on strong values:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Integrity</h3>
                    <p className="text-lg text-gray-700">Honest and transparent dealings in every transaction with our clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality Commitment</h3>
                    <p className="text-lg text-gray-700">Delivering only the best products that meet international standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Focus</h3>
                    <p className="text-lg text-gray-700">Client satisfaction is our highest priority in every interaction</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Connectivity</h3>
                    <p className="text-lg text-gray-700">Established extensive global sourcing channels for worldwide reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about-section" className="bg-white py-12 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-teal-700 text-lg font-bold uppercase tracking-wider mb-2">About Us</p>
                <h2 className="text-5xl font-black text-gray-900 mb-6">Nexus Industrial Solutions</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nexus Industrial Solutions is a dynamic and reliable provider specializing in supply, distribution, and import/export of high-quality industrial products. With established global sourcing channels and deep industry expertise, we ensure timely delivery, competitive pricing, and consistent product quality across multiple industrial sectors.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We proudly serve manufacturing, construction, engineering, FMCG, power, and trading industries. We are committed to delivering excellence and building long-term business relationships based on trust, reliability, and exceptional performance.
                </p>
              </div>
              <div>
                <a href="/about" className="inline-block bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition">Learn More</a>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/pexels-canmiless-5860937.jpg" alt="Nexus Industrial Warehouse" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="bg-white py-20 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-700 text-lg font-bold uppercase tracking-wider mb-3">Our Products</p>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600">Comprehensive industrial solutions across multiple sectors</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-pixabay-257736.jpg" alt="Electrical" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Motors, cables, switchgear, and electrical components for industrial applications</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition flex items-center gap-2">View Products <span>→</span></a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-mikhail-nilov-9242910.jpg" alt="Mechanical" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mechanical</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Bearings, belts, pumps, and mechanical equipment for reliable operations</p>
                <a href="/products/mechanical" className="text-teal-700 font-semibold hover:text-teal-800 transition flex items-center gap-2">View Products <span>→</span></a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-padrinan-16679542.jpg" alt="Instruments" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instruments</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Gauges, meters, sensors, and control instruments for precision monitoring</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition flex items-center gap-2">View Products <span>→</span></a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-zakhar-36878027.jpg" alt="Pipes & Fittings" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pipes & Fittings</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">MS, GI, SS pipes, tubes, and fittings for all industrial needs</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition flex items-center gap-2">View Products <span>→</span></a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/WhatsApp Image 2026-05-07 at 8.54.00 PM.jpeg" alt="General Orders" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">General Orders</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Custom supplies and specialized equipment tailored to your needs</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition flex items-center gap-2">View Products <span>→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section id="industries" className="bg-gray-50 py-20 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-700 text-lg font-bold uppercase tracking-wider mb-3">Industrial Excellence</p>
            <h2 className="text-5xl font-black text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nexus Industrial Solutions delivers specialized solutions across diverse industrial sectors. With deep expertise in each industry, we provide tailored products and services to meet your unique operational requirements and drive sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 overflow-hidden bg-orange-100">
                <img src="/images/CEMENT.jpeg" alt="Cement" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cement</h3>
              <a href="/cement" className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition transform hover:scale-105 shadow-md">View Solutions</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 bg-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Oil & Gas</h3>
              <a href="/oil-gas" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition transform hover:scale-105 shadow-md">View Solutions</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 bg-red-100 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Textile</h3>
              <a href="/textile" className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition transform hover:scale-105 shadow-md">View Solutions</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 bg-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Steel</h3>
              <a href="/steel" className="px-6 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-lg hover:from-slate-700 hover:to-slate-800 transition transform hover:scale-105 shadow-md">View Solutions</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 bg-green-100 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fertilizer</h3>
              <a href="/fertilizer" className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition transform hover:scale-105 shadow-md">View Solutions</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 bg-amber-100 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aluminum</h3>
              <a href="/aluminum" className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition transform hover:scale-105 shadow-md">View Solutions</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 bg-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FMCG</h3>
              <a href="/fmcg" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition transform hover:scale-105 shadow-md">View Solutions</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 bg-yellow-100 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Power</h3>
              <a href="/power" className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition transform hover:scale-105 shadow-md">View Solutions</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 bg-cyan-100 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Chemical/Pharma</h3>
              <a href="/chemical-pharma" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition transform hover:scale-105 shadow-md">View Solutions</a>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section id="brands-section" className="bg-white py-20 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-700 text-lg font-bold uppercase tracking-wider mb-3">Trusted Partners</p>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Brands We Source</h2>
            <div className="w-16 h-1 bg-teal-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We source genuine products from 150+ globally trusted industrial brands — delivering quality you can count on.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
            {[
              { name: "ABB", logo: "https://www.zfcorporation.co.uk/storage/media/abb-copy-copy-copy-copy-copy-copy-copy-1777881191.jpg" },
              { name: "Siemens", logo: "https://www.zfcorporation.co.uk/storage/media/Siemens .jpg" },
              { name: "Schneider Electric", logo: "https://www.zfcorporation.co.uk/storage/media/Schneider.jpg" },
              { name: "Honeywell", logo: "https://www.zfcorporation.co.uk/storage/media/honeywell.jpg" },
              { name: "Emerson", logo: "https://www.zfcorporation.co.uk/storage/media/Emerson.jpg" },
              { name: "Yokogawa", logo: "https://www.zfcorporation.co.uk/storage/media/yokogawa.jpg" },
              { name: "Parker Hannifin", logo: "https://www.zfcorporation.co.uk/storage/media/Parker.jpg" },
              { name: "Danfoss", logo: "https://www.zfcorporation.co.uk/storage/media/Danfoss.jpg" },
              { name: "Atlas Copco", logo: "https://www.zfcorporation.co.uk/storage/media/Atlas copco.jpg" },
              { name: "Bosch", logo: "https://www.zfcorporation.co.uk/storage/media/Bosch.jpg" },
              { name: "Fluke", logo: "https://www.zfcorporation.co.uk/storage/media/Fluke.jpg" },
              { name: "Grundfos", logo: "https://www.zfcorporation.co.uk/storage/media/Grundfos.jpg" },
            ].map((brand, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-5 flex flex-col items-center justify-center gap-2 hover:shadow-md hover:border-teal-400 hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="h-12 w-full flex items-center justify-center">
                  <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200" />
                </div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider text-center leading-tight group-hover:text-teal-700 transition-colors">{brand.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/brands" className="inline-flex items-center gap-2 bg-teal-700 text-white px-10 py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
              View All Brands <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact-section" className="bg-teal-700 text-white py-20 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Partner With Us?</h2>
          <p className="text-lg opacity-95">Get in touch today to discuss your industrial supply needs and discover how we can support your business growth.</p>
          <a href="/contact" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Contact Us</a>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#products" className="hover:text-white transition">Products</a></li>
                <li><a href="#industries" className="hover:text-white transition">Industries</a></li>
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
