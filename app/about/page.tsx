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

      {/* Page Title */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black text-gray-900 mb-4">About Nexus Industrial Solutions</h1>
          <p className="text-xl text-gray-600">Delivering Excellence in Industrial Supply & Global Trade</p>
        </div>
      </section>

      {/* Introduction Section with Image */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/Screenshot 2026-05-03 113802.png" 
                alt="Nexus Industrial Solutions" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <p className="text-teal-700 text-sm font-bold uppercase tracking-wider mb-4">Who We Are</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Nexus Industrial Solutions</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nexus Industrial Solutions is a dynamic and reliable provider specializing in supply, distribution, and import/export of high-quality industrial products. With established global sourcing channels and deep industry expertise, we ensure timely delivery, competitive pricing, and consistent product quality across multiple industrial sectors.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We proudly serve manufacturing, construction, engineering, FMCG, power, and trading industries. At Nexus Industrial Solutions, we are committed to delivering excellence and building long-term business relationships based on trust, reliability, and exceptional performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Distribution Supply</h3>
              <p className="text-gray-700">Efficient and reliable distribution networks ensuring products reach clients on time across Pakistan and globally</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Import & Export</h3>
              <p className="text-gray-700">Complete international trade solutions with full documentation, customs clearance, and compliance support</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sourcing Solutions</h3>
              <p className="text-gray-700">Expert product sourcing tailored to exact specifications with cost-effective options and quality assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Nexus?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Global Network</h3>
                  <p className="text-gray-700">Established sourcing channels with trusted suppliers worldwide</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Expertise</h3>
                  <p className="text-gray-700">Deep knowledge serving cement, steel, oil & gas, and 10+ other industries</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Timely Delivery</h3>
                  <p className="text-gray-700">Reliable logistics ensuring on-time delivery across regions</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-700">Market-leading prices without compromising on quality standards</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-700">Strict quality checks with certifications and compliance documentation</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Support</h3>
                  <p className="text-gray-700">Dedicated support team ready to assist with quotations and orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Partner With Us?</h2>
          <p className="text-lg opacity-95">Let's discuss your industrial supply needs and discover how Nexus can support your business growth.</p>
          <a href="/contact" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Contact Us Today</a>
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