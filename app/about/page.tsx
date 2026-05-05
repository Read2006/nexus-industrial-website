'use client'

export default function About() {
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
            <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-lg">N</div>
            <span className="font-bold text-gray-900 text-sm">NIS</span>
          </div>
          <nav className="flex gap-6">
            <a href="/" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Home</a>
            <a href="/about" className="text-sm font-semibold text-teal-700">About</a>
            <a href="/products" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Products</a>
            <a href="/industries" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Industries</a>
            <a href="/brands" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Brands</a>
            <a href="/contact" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* MAIN ABOUT SECTION - TEXT LEFT, IMAGE RIGHT */}
      <section className="bg-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text Content */}
            <div className="space-y-8">
              <div>
                <p className="text-teal-700 text-lg font-bold uppercase tracking-wider mb-4">About Us</p>
                <h2 className="text-5xl font-black text-gray-900 leading-tight">Nexus Industrial Solutions</h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Nexus Industrial Solutions is a dynamic and reliable provider specializing in supply, distribution, and import/export of high-quality industrial products. With established global sourcing channels and deep industry expertise, we ensure timely delivery, competitive pricing, and consistent product quality across multiple industrial sectors.
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Commitment</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We proudly serve manufacturing, construction, engineering, FMCG, power, and trading industries. We are committed to delivering excellence and building long-term business relationships based on trust, reliability, and exceptional performance.
                  </p>
                </div>

                <div className="pt-4 flex gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-teal-700 rounded-full"></div>
                    <span className="text-gray-700 font-semibold">Global Supply Chain</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-teal-700 rounded-full"></div>
                    <span className="text-gray-700 font-semibold">Quality Assured</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Image - CLEAN, NO OVERLAY */}
            <div className="relative h-96 md:h-[550px]">
              {/* Image Container - NO TEAL DIAGONAL */}
              <div className="relative h-full rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/pexels-canmiless-5860937.jpg" 
                  alt="Nexus Industrial Solutions Warehouse" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Professional Grid */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Nexus?</h2>
            <p className="text-lg text-gray-600">Trusted by industries across Pakistan and globally</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-teal-700">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Network</h3>
              <p className="text-gray-700 leading-relaxed">Established sourcing channels with trusted suppliers worldwide ensuring reliable supply</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-teal-700">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Expertise</h3>
              <p className="text-gray-700 leading-relaxed">Deep knowledge serving cement, steel, oil & gas, and 10+ industrial sectors</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-teal-700">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
              <p className="text-gray-700 leading-relaxed">Reliable logistics ensuring on-time delivery across regions and internationally</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-teal-700">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-700 leading-relaxed">Market-leading prices without compromising on quality and service standards</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-teal-700">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-700 leading-relaxed">Strict quality checks with full certifications and compliance documentation</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-teal-700">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Support</h3>
              <p className="text-gray-700 leading-relaxed">Dedicated support team ready to assist with quotations and special orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for industrial supply and trade</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-10 rounded-xl border-l-4 border-teal-700 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Distribution Supply</h3>
              <p className="text-gray-700 leading-relaxed">Efficient and reliable distribution networks ensuring products reach clients on time across Pakistan and globally with full tracking</p>
            </div>

            <div className="bg-gray-50 p-10 rounded-xl border-l-4 border-teal-700 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Import & Export</h3>
              <p className="text-gray-700 leading-relaxed">Complete international trade solutions with full documentation, customs clearance, and compliance support for seamless operations</p>
            </div>

            <div className="bg-gray-50 p-10 rounded-xl border-l-4 border-teal-700 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sourcing Solutions</h3>
              <p className="text-gray-700 leading-relaxed">Expert product sourcing tailored to exact specifications with cost-effective options and comprehensive quality assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Partner With Nexus?</h2>
          <p className="text-lg opacity-95">Discover how our solutions can optimize your industrial supply chain and drive business growth</p>
          <a href="/contact" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
            Get in Touch
          </a>
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
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
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
