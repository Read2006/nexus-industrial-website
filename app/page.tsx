'use client'

export default function Home() {
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

      {/* HEADER - FLUSH BELOW TOP BAR, NO GAP */}
      <header className="sticky top-[36px] bg-white border-b border-gray-100 z-40 w-full">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-lg">N</div>
            <span className="font-bold text-gray-900 text-sm">NIS</span>
          </div>
          <nav className="flex gap-6">
            <a href="/" className="text-sm font-semibold text-teal-700">Home</a>
            <a href="/about" className="text-sm font-semibold text-gray-700 hover:text-teal-700">About</a>
            <a href="/products" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Products</a>
            <a href="/industries" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Industries</a>
            <a href="/brands" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Brands</a>
            <a href="/contact" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white py-12 px-6">
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
                <button className="bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800">Get Started</button>
                <button className="border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50">Learn More</button>
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

      {/* Core Values - Professional 2x2 Grid */}
      <section className="bg-white py-0 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="relative h-64 rounded-t-2xl overflow-hidden shadow-lg">
            <img src="/images/WhatsApp Image 2026-05-02 at 4.42.44 PM.jpeg" alt="Industrial Complex" className="w-full h-full object-cover" />
          </div>

          {/* Content Section */}
          <div className="bg-gray-50 py-20 px-8 rounded-b-2xl">
            <div className="max-w-5xl mx-auto">
              {/* Heading */}
              <div className="mb-12">
                <p className="text-teal-700 text-2xl font-semibold mb-2">Our</p>
                <h2 className="text-5xl font-bold text-gray-900 mb-2">CORE VALUES</h2>
                <div className="w-16 h-1 bg-teal-700"></div>
              </div>

              {/* Intro Text */}
              <p className="text-gray-700 text-lg font-medium mb-12">At Nexus Industrial Solutions, our business is built on strong values:</p>

              {/* 2x2 Grid for Desktop, 1 Column for Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Value 1 */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Integrity</h3>
                      <p className="text-lg text-gray-700">Honest and transparent dealings in every transaction with our clients</p>
                    </div>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality Commitment</h3>
                      <p className="text-lg text-gray-700">Delivering only the best products that meet international standards</p>
                    </div>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-teal-700 rounded-sm flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Focus</h3>
                      <p className="text-lg text-gray-700">Client satisfaction is our highest priority in every interaction</p>
                    </div>
                  </div>
                </div>

                {/* Value 4 */}
                <div className="space-y-4">
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
        </div>
      </section>

      {/* ABOUT US SECTION - Scrollable */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
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
                <a href="/about" className="inline-block bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
                  Learn More
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/pexels-canmiless-5860937.jpg" 
                alt="Nexus Industrial Warehouse" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-700 text-lg font-bold uppercase tracking-wider mb-3">Our Products</p>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600">Comprehensive industrial solutions across multiple sectors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Electrical */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-pixabay-257736.jpg" alt="Electrical" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Motors, cables, switchgear, and electrical components for industrial applications</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition flex items-center gap-2">
                  View Products <span>→</span>
                </a>
              </div>
            </div>

            {/* Mechanical */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-mikhail-nilov-9242910.jpg" alt="Mechanical" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mechanical</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Bearings, belts, pumps, and mechanical equipment for reliable operations</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition flex items-center gap-2">
                  View Products <span>→</span>
                </a>
              </div>
            </div>

            {/* Instruments */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-padrinan-16679542.jpg" alt="Instruments" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instruments</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Gauges, meters, sensors, and control instruments for precision monitoring</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition flex items-center gap-2">
                  View Products <span>→</span>
                </a>
              </div>
            </div>

            {/* Pipes & Fittings */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src="/images/pexels-zakhar-36878027.jpg" alt="Pipes & Fittings" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pipes & Fittings</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">MS, GI, SS pipes, tubes, and fittings for all industrial needs</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition flex items-center gap-2">
                  View Products <span>→</span>
                </a>
              </div>
            </div>

            {/* General Orders */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                <span className="text-6xl">📦</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">General Orders</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Custom supplies and specialized equipment tailored to your needs</p>
                <a href="#" className="text-teal-700 font-semibold hover:text-teal-800 transition flex items-center gap-2">
                  View Products <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Partner With Us?</h2>
          <p className="text-lg opacity-95">Get in touch today to discuss your industrial supply needs and discover how we can support your business growth.</p>
          <button className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Contact Us</button>
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
                <li><a href="/products" className="hover:text-white transition">Products</a></li>
                <li><a href="/industries" className="hover:text-white transition">Industries</a></li>
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
