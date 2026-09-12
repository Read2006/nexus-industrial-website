'use client'

import { useState } from 'react'

export default function MobilePreview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* TOP BAR */}
      <div className="sticky top-0 bg-gray-900 text-white text-xs sm:text-sm py-2 px-4 sm:px-6 z-50 w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <a href="tel:03351503555" className="hover:text-teal-400 transition whitespace-nowrap">📞 0335-1503555</a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a href="mailto:info@nexus-is.co" className="hover:text-teal-400 transition whitespace-nowrap">📧 info@nexus-is.co</a>
          </div>
          <div className="text-teal-400 font-semibold text-xs sm:text-sm text-center">
            Sourcing Solutions. Delivering Results.
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-[40px] sm:top-[36px] bg-white border-b border-gray-100 z-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">N</div>
              <span className="font-bold text-gray-900 text-sm sm:text-base">NIS</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex gap-4 xl:gap-6">
              <a href="/preview-mobile" className="text-sm font-semibold whitespace-nowrap text-gray-700 hover:text-teal-700">Home</a>
              <a href="#about" className="text-sm font-semibold whitespace-nowrap text-gray-700 hover:text-teal-700">About</a>
              <a href="#products" className="text-sm font-semibold whitespace-nowrap text-gray-700 hover:text-teal-700">Products</a>
              <a href="#industries" className="text-sm font-semibold whitespace-nowrap text-gray-700 hover:text-teal-700">Industries</a>
              <a href="#brands" className="text-sm font-semibold whitespace-nowrap text-gray-700 hover:text-teal-700">Brands</a>
              <a href="#contact" className="text-sm font-semibold whitespace-nowrap text-gray-700 hover:text-teal-700">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col space-y-3">
                <a href="/preview-mobile" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-2 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded">Home</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-2 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded">About</a>
                <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-2 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded">Products</a>
                <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-2 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded">Industries</a>
                <a href="#brands" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-2 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded">Brands</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-2 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-white py-12 sm:py-20 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-teal-700 text-sm font-bold uppercase mb-4">Welcome to</p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 break-words">Nexus Industrial Solutions</h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8">Delivering reliable industrial supply & global trade solutions. Your trusted partner in quality, efficiency, and business growth.</p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold text-gray-900">Why Partner With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 justify-center md:justify-start">
                    <span className="text-teal-700 font-bold">✓</span>
                    <div><p className="font-semibold">Timely Delivery</p><p className="text-sm text-gray-600">Fast & reliable delivery across Pakistan and globally</p></div>
                  </div>
                  <div className="flex items-start gap-3 justify-center md:justify-start">
                    <span className="text-teal-700 font-bold">✓</span>
                    <div><p className="font-semibold">Competitive Pricing</p><p className="text-sm text-gray-600">Market-leading prices without compromising quality</p></div>
                  </div>
                  <div className="flex items-start gap-3 justify-center md:justify-start">
                    <span className="text-teal-700 font-bold">✓</span>
                    <div><p className="font-semibold">Global Network</p><p className="text-sm text-gray-600">Trusted supplier network with established channels worldwide</p></div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800">Get Started</button>
                <button className="border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50">Learn More</button>
              </div>
            </div>
            
            <div className="relative h-80 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mt-8 md:mt-0">
              <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <span className="text-teal-700 font-bold">Industrial Image</span>
              </div>
              <div className="absolute top-4 right-4 bg-white bg-opacity-95 p-3 rounded-lg">
                <p className="text-xs font-bold text-teal-700">Registered</p>
                <p className="text-xs text-gray-600">NTN: 123455</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">To provide high-quality industrial products and efficient services that help businesses operate smoothly and grow sustainably. We build strong relationships with our clients through reliability, transparency, and customer satisfaction.</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">To become a highly recognized and trusted name in industrial supply and trading, known for delivering excellence, innovation, and outstanding customer service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-700 text-2xl font-semibold">Our</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">CORE VALUES</h2>
            <div className="w-16 h-1 bg-teal-700 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left"><div className="flex items-start gap-4"><div className="w-5 h-5 bg-teal-700 rounded-sm mt-1 mx-auto md:mx-0"></div><div><h3 className="text-xl font-bold mb-2">Integrity</h3><p>Honest and transparent dealings with our clients</p></div></div></div>
            <div className="text-center md:text-left"><div className="flex items-start gap-4"><div className="w-5 h-5 bg-teal-700 rounded-sm mt-1 mx-auto md:mx-0"></div><div><h3 className="text-xl font-bold mb-2">Quality Commitment</h3><p>Delivering products that meet international standards</p></div></div></div>
            <div className="text-center md:text-left"><div className="flex items-start gap-4"><div className="w-5 h-5 bg-teal-700 rounded-sm mt-1 mx-auto md:mx-0"></div><div><h3 className="text-xl font-bold mb-2">Customer Focus</h3><p>Client satisfaction is our highest priority</p></div></div></div>
            <div className="text-center md:text-left"><div className="flex items-start gap-4"><div className="w-5 h-5 bg-teal-700 rounded-sm mt-1 mx-auto md:mx-0"></div><div><h3 className="text-xl font-bold mb-2">Global Connectivity</h3><p>Established global sourcing channels worldwide</p></div></div></div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-teal-700 font-bold uppercase mb-2">About Us</p>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6">Nexus Industrial Solutions</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Nexus Industrial Solutions is a dynamic and reliable provider specializing in supply, distribution, and import/export of high-quality industrial products. With established global sourcing channels and deep industry expertise, we ensure timely delivery, competitive pricing, and consistent product quality.</p>
              <a href="/about" className="inline-block bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800">Learn More</a>
            </div>
            <div className="h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl mt-8 md:mt-0 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
              <span className="text-teal-700">About Us Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-700 font-bold uppercase mb-2">Our Products</p>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">Product Categories</h2>
            <p className="text-gray-600">Comprehensive industrial solutions across multiple sectors</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {['Electrical', 'Mechanical', 'Instruments', 'Pipes & Fittings', 'General Orders'].map((product, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border">
                <div className="h-48 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                  <span className="text-teal-700">{product}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product}</h3>
                  <p className="text-gray-700 mb-4 text-sm">High-quality {product.toLowerCase()} products for industrial applications</p>
                  <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 inline-flex items-center gap-2">View Products →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section id="industries" className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-700 font-bold uppercase mb-2">Industrial Excellence</p>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Nexus delivers specialized solutions across diverse industrial sectors with deep expertise in each industry.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Cement', 'Oil & Gas', 'Textile', 'Steel', 'Fertilizer', 'Aluminum', 'FMCG', 'Power', 'Chemical/Pharma'].map((industry, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-40 h-40 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl shadow-lg mb-4 flex items-center justify-center">
                  <span className="text-teal-700 text-sm font-bold">{industry}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry}</h3>
                <a href="#" className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">View Solutions</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section id="brands" className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-700 font-bold uppercase mb-2">Trusted Partners</p>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">Brands We Source</h2>
            <p className="text-gray-600">150+ globally trusted industrial brands</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['ABB', 'Siemens', 'Schneider', 'Honeywell', 'Emerson', 'Yokogawa', 'Parker', 'Danfoss', 'Atlas Copco', 'Bosch', 'Fluke', 'Grundfos'].map((brand, i) => (
              <div key={i} className="bg-gray-50 border rounded-xl p-4 text-center hover:shadow-md hover:border-teal-400 transition">
                <div className="h-12 w-full flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center text-xs font-bold text-teal-700">{brand.substring(0,2)}</div>
                </div>
                <p className="text-xs font-bold uppercase text-gray-700">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="bg-teal-700 text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg mb-8">Get in touch today to discuss your industrial supply needs and discover how we can support your business growth.</p>
          <button className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Contact Us</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
            <div><h3 className="text-white font-bold mb-4">Nexus Industrial</h3><p className="text-sm">Delivering reliable industrial supply solutions.</p></div>
            <div><h3 className="text-white font-bold mb-4">Quick Links</h3><ul className="space-y-2 text-sm"><li><a href="#about" className="hover:text-white">About</a></li><li><a href="#products" className="hover:text-white">Products</a></li><li><a href="#industries" className="hover:text-white">Industries</a></li><li><a href="#brands" className="hover:text-white">Brands</a></li></ul></div>
            <div><h3 className="text-white font-bold mb-4">Contact</h3><p className="text-sm">📞 0335-1503555</p><p className="text-sm">📧 info@nexus-is.co</p></div>
            <div><h3 className="text-white font-bold mb-4">Compliance</h3><p className="text-sm">NTN: 123455</p><p className="text-sm">STRN: 1233456</p></div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Nexus Industrial Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile View Badge */}
      <div className="fixed bottom-4 right-4 bg-teal-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
        Mobile Preview
      </div>
    </div>
  )
}
