'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.getElementById('about-section')
      const productsElement = document.getElementById('products')
      
      if (aboutElement && productsElement) {
        const aboutRect = aboutElement.getBoundingClientRect()
        const productsRect = productsElement.getBoundingClientRect()
        
        if (productsRect.top <= window.innerHeight / 2 && productsRect.top > -productsRect.height) {
          setActiveSection('products')
        } else if (aboutRect.top <= window.innerHeight / 2 && aboutRect.top > -aboutRect.height) {
          setActiveSection('about-section')
        } else {
          setActiveSection('home')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

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

      {/* HEADER - FIXED NAVBAR */}
      <header className="sticky top-[40px] sm:top-[36px] bg-white border-b border-gray-100 z-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 w-full">
          <div className="flex justify-between items-center w-full">
            
            {/* Logo - Fixed positioning */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                N
              </div>
              <span className="font-bold text-gray-900 text-sm sm:text-base">NIS</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-4 xl:gap-6">
              <a href="/" className={`text-sm font-semibold whitespace-nowrap ${activeSection === 'home' ? 'text-teal-700' : 'text-gray-700 hover:text-teal-700'}`}>
                Home
              </a>
              <a href="/#about-section" className={`text-sm font-semibold whitespace-nowrap ${activeSection === 'about-section' ? 'text-teal-700' : 'text-gray-700 hover:text-teal-700'} scroll-smooth`}>
                About
              </a>
              <a href="/#products" className={`text-sm font-semibold whitespace-nowrap ${activeSection === 'products' ? 'text-teal-700' : 'text-gray-700 hover:text-teal-700'} scroll-smooth`}>
                Products
              </a>
              <a href="/industries" className="text-sm font-semibold whitespace-nowrap text-gray-700 hover:text-teal-700">
                Industries
              </a>
              <a href="/brands" className="text-sm font-semibold whitespace-nowrap text-gray-700 hover:text-teal-700">
                Brands
              </a>
              <a href="/contact" className="text-sm font-semibold whitespace-nowrap text-gray-700 hover:text-teal-700">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none flex-shrink-0"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col space-y-3">
                <a href="/" onClick={handleNavClick} className={`text-sm font-semibold py-2 px-2 ${activeSection === 'home' ? 'text-teal-700 bg-teal-50' : 'text-gray-700 hover:text-teal-700 hover:bg-gray-50'} rounded transition`}>
                  Home
                </a>
                <a href="/#about-section" onClick={handleNavClick} className={`text-sm font-semibold py-2 px-2 ${activeSection === 'about-section' ? 'text-teal-700 bg-teal-50' : 'text-gray-700 hover:text-teal-700 hover:bg-gray-50'} rounded transition`}>
                  About
                </a>
                <a href="/#products" onClick={handleNavClick} className={`text-sm font-semibold py-2 px-2 ${activeSection === 'products' ? 'text-teal-700 bg-teal-50' : 'text-gray-700 hover:text-teal-700 hover:bg-gray-50'} rounded transition`}>
                  Products
                </a>
                <a href="/industries" onClick={handleNavClick} className="text-sm font-semibold py-2 px-2 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded transition">
                  Industries
                </a>
                <a href="/brands" onClick={handleNavClick} className="text-sm font-semibold py-2 px-2 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded transition">
                  Brands
                </a>
                <a href="/contact" onClick={handleNavClick} className="text-sm font-semibold py-2 px-2 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded transition">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO SECTION - FIXED CENTERING */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
            
            {/* Left Content - Now properly centered */}
            <div className="space-y-4 sm:space-y-6 w-full text-center md:text-left">
              <div>
                <p className="text-teal-700 text-sm font-bold uppercase mb-4">Welcome to</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 break-words leading-tight">
                  Nexus Industrial Solutions
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Delivering reliable industrial supply & global trade solutions. Your trusted partner in quality, efficiency, and business growth.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Why Partner With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 justify-center md:justify-start">
                    <span className="text-teal-700 font-bold text-lg flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Timely Delivery</p>
                      <p className="text-sm text-gray-600">Fast & reliable delivery across Pakistan and globally</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-center md:justify-start">
                    <span className="text-teal-700 font-bold text-lg flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Competitive Pricing</p>
                      <p className="text-sm text-gray-600">Market-leading prices without compromising quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-center md:justify-start">
                    <span className="text-teal-700 font-bold text-lg flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Global Network</p>
                      <p className="text-sm text-gray-600">Trusted supplier network with established channels worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <button className="bg-teal-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
                  Get Started
                </button>
                <button className="border-2 border-teal-700 text-teal-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-80 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mt-8 md:mt-0">
              <img 
                src="/images/WhatsApp Image 2026-05-02 at 4.42.44 PM.jpeg" 
                alt="Industrial Building" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 bg-white bg-opacity-95 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg">
                <p className="text-xs font-bold text-teal-700 uppercase">Registered</p>
                <p className="text-xs text-gray-600 font-semibold">NTN: 123455</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION - Centered */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 w-full">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">To provide high-quality industrial products and efficient services that help businesses operate smoothly and grow sustainably. We build strong relationships with our clients through reliability, transparency, and customer satisfaction.</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">To become a highly recognized and trusted name in industrial supply and trading, known for delivering excellence, innovation, and outstanding customer service. Building strong and long-term partnerships through continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES - Centered */}
      <section className="bg-white px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative h-48 sm:h-64 rounded-t-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/WhatsApp Image 2026-05-02 at 4.42.44 PM.jpeg" 
              alt="Industrial Complex" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="bg-gray-50 py-12 sm:py-20 px-4 sm:px-8 rounded-b-2xl">
            <div className="max-w-5xl mx-auto text-center sm:text-left">
              <div className="mb-8 sm:mb-12">
                <p className="text-teal-700 text-xl sm:text-2xl font-semibold mb-2">Our</p>
                <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">CORE VALUES</h2>
                <div className="w-16 h-1 bg-teal-700 mx-auto sm:mx-0"></div>
              </div>
              <p className="text-gray-700 text-base sm:text-lg font-medium mb-8 sm:mb-12">At Nexus Industrial Solutions, our business is built on strong values:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 text-center md:text-left">
                    <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1 mx-auto md:mx-0"></div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Integrity</h3>
                      <p className="text-base sm:text-lg text-gray-700">Honest and transparent dealings in every transaction with our clients</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 text-center md:text-left">
                    <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1 mx-auto md:mx-0"></div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Quality Commitment</h3>
                      <p className="text-base sm:text-lg text-gray-700">Delivering only the best products that meet international standards</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 text-center md:text-left">
                    <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1 mx-auto md:mx-0"></div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Customer Focus</h3>
                      <p className="text-base sm:text-lg text-gray-700">Client satisfaction is our highest priority in every interaction</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 text-center md:text-left">
                    <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1 mx-auto md:mx-0"></div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Global Connectivity</h3>
                      <p className="text-base sm:text-lg text-gray-700">Established extensive global sourcing channels for worldwide reach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US - Centered */}
      <section id="about-section" className="bg-white py-12 sm:py-16 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <div>
                <p className="text-teal-700 text-base sm:text-lg font-bold uppercase tracking-wider mb-2">About Us</p>
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 sm:mb-6">Nexus Industrial Solutions</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Nexus Industrial Solutions is a dynamic and reliable provider specializing in supply, distribution, and import/export of high-quality industrial products. With established global sourcing channels and deep industry expertise, we ensure timely delivery, competitive pricing, and consistent product quality across multiple industrial sectors.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We proudly serve manufacturing, construction, engineering, FMCG, power, and trading industries. We are committed to delivering excellence and building long-term business relationships based on trust, reliability, and exceptional performance.
                </p>
              </div>
              <div>
                <a href="/about" className="inline-block bg-teal-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl mt-8 md:mt-0">
              <img 
                src="/images/pexels-canmiless-5860937.jpg" 
                alt="Nexus Industrial Warehouse" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION - Centered Grid */}
      <section id="products" className="bg-white py-16 sm:py-20 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-16">
            <p className="text-teal-700 text-base sm:text-lg font-bold uppercase tracking-wider mb-3">Our Products</p>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">Product Categories</h2>
            <p className="text-base sm:text-lg text-gray-600">Comprehensive industrial solutions across multiple sectors</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 w-full">
            {/* Product 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-pixabay-257736.jpg" alt="Electrical" className="w-full h-full object-cover hover:scale-105 transition duration-300" loading="lazy" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Electrical</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Motors, cables, switchgear, and electrical components for industrial applications</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition inline-flex items-center gap-2">View Products <span>→</span></a>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-mikhail-nilov-9242910.jpg" alt="Mechanical" className="w-full h-full object-cover hover:scale-105 transition duration-300" loading="lazy" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Mechanical</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Bearings, belts, pumps, and mechanical equipment for reliable operations</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition inline-flex items-center gap-2">View Products <span>→</span></a>
              </div>
            </div>
            {/* Add remaining 3 products similarly... */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-padrinan-16679542.jpg" alt="Instruments" className="w-full h-full object-cover hover:scale-105 transition duration-300" loading="lazy" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Instruments</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Gauges, meters, sensors, and control instruments for precision monitoring</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition inline-flex items-center gap-2">View Products <span>→</span></a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-zakhar-36878027.jpg" alt="Pipes & Fittings" className="w-full h-full object-cover hover:scale-105 transition duration-300" loading="lazy" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Pipes & Fittings</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">MS, GI, SS pipes, tubes, and fittings for all industrial needs</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition inline-flex items-center gap-2">View Products <span>→</span></a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/WhatsApp Image 2026-05-07 at 8.54.00 PM.jpeg" alt="General Orders" className="w-full h-full object-cover hover:scale-105 transition duration-300" loading="lazy" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">General Orders</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Custom supplies and specialized equipment tailored to your needs</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition inline-flex items-center gap-2">View Products <span>→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep your existing Industries, Brands, CTA, and Footer sections */}
      {/* Just make sure to add className="w-full" and "max-w-7xl mx-auto" to their containers */}

      {/* CTA Section */}
      <section className="bg-teal-700 text-white py-16 sm:py-20 px-4 sm:px-6 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Partner With Us?</h2>
          <p className="text-base sm:text-lg opacity-95 px-4">Get in touch today to discuss your industrial supply needs and discover how we can support your business growth.</p>
          <button className="bg-white text-teal-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
            <div>
              <h3 className="text-white font-bold mb-4">Nexus Industrial</h3>
              <p className="text-sm">Delivering reliable industrial supply and global trade solutions.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/products" className="hover:text-white transition">Products</a></li>
                <li><a href="/industries" className="hover:text-white transition">Industries</a></li>
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
