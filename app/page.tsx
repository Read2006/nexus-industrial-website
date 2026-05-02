'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-lg">N</div>
            <span className="text-sm font-bold text-gray-900 hidden sm:inline">NIS</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-sm font-medium text-teal-700">Home</a>
            <a href="/about" className="text-sm font-medium text-gray-600 hover:text-teal-700 transition">About</a>
            <a href="/products" className="text-sm font-medium text-gray-600 hover:text-teal-700 transition">Products</a>
            <a href="/industries" className="text-sm font-medium text-gray-600 hover:text-teal-700 transition">Industries</a>
            <a href="/brands" className="text-sm font-medium text-gray-600 hover:text-teal-700 transition">Brands</a>
            <a href="/contact" className="text-sm font-medium text-gray-600 hover:text-teal-700 transition">Contact</a>
          </nav>
          <button className="md:hidden text-gray-600">☰</button>
        </div>
      </header>

      {/* Hero Section - With Real Images */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 z-10">
              <div>
                <p className="text-teal-700 text-sm font-bold uppercase tracking-wider mb-4">Welcome to</p>
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                  Nexus Industrial Solutions
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Delivering reliable industrial supply & global trade solutions. Your trusted partner in quality, efficiency, and business growth.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Why Partner With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold text-lg mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Timely Delivery</p>
                      <p className="text-sm text-gray-600">Fast & reliable delivery across Pakistan and globally</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold text-lg mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Competitive Pricing</p>
                      <p className="text-sm text-gray-600">Market-leading prices without compromising quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold text-lg mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Global Network</p>
                      <p className="text-sm text-gray-600">Trusted supplier network with established channels worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right: Real Building Image - CLEAN, NO TEXT, NO LOGO */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              {/* Real Building Image - FULL */}
              <img 
                src="/images/WhatsApp Image 2026-05-02 at 4.42.44 PM.jpeg" 
                alt="Industrial Building" 
                className="w-full h-full object-cover"
              />

              {/* Compliance Badge (Top Right) - ONLY THIS */}
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
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality industrial products and efficient services that help businesses operate smoothly and grow sustainably. We build strong relationships with our clients through reliability, transparency, and customer satisfaction.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a highly recognized and trusted name in industrial supply and trading, known for delivering excellence, innovation, and outstanding customer service. Building strong and long-term partnerships through continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 rounded-xl hover:bg-teal-50 transition">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 font-bold text-xl">◆</div>
              <h3 className="text-xl font-bold text-gray-900">Integrity</h3>
              <p className="text-gray-600">Honest and transparent dealings in every transaction</p>
            </div>
            <div className="space-y-3 p-6 rounded-xl hover:bg-teal-50 transition">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 font-bold text-xl">◆</div>
              <h3 className="text-xl font-bold text-gray-900">Quality Commitment</h3>
              <p className="text-gray-600">Delivering only the best products that meet standards</p>
            </div>
            <div className="space-y-3 p-6 rounded-xl hover:bg-teal-50 transition">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 font-bold text-xl">◆</div>
              <h3 className="text-xl font-bold text-gray-900">Customer Focus</h3>
              <p className="text-gray-600">Client satisfaction is our highest priority</p>
            </div>
            <div className="space-y-3 p-6 rounded-xl hover:bg-teal-50 transition">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 font-bold text-xl">◆</div>
              <h3 className="text-xl font-bold text-gray-900">Reliability</h3>
              <p className="text-gray-600">Consistent and timely service delivery</p>
            </div>
            <div className="space-y-3 p-6 rounded-xl hover:bg-teal-50 transition">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 font-bold text-xl">◆</div>
              <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
              <p className="text-gray-600">Adapting to modern industry needs</p>
            </div>
            <div className="space-y-3 p-6 rounded-xl hover:bg-teal-50 transition">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 font-bold text-xl">◆</div>
              <h3 className="text-xl font-bold text-gray-900">Global Connectivity</h3>
              <p className="text-gray-600">Extensive global sourcing channels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-teal-300 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Distribution Supply</h3>
              <p className="text-gray-600">Efficient and reliable distribution for industrial products with strong network and timely delivery.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-teal-300 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Import & Export</h3>
              <p className="text-gray-600">Complete import/export solutions with documentation and customs clearance compliance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-teal-300 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sourcing Solutions</h3>
              <p className="text-gray-600">High-quality product sourcing meeting exact specifications with cost-effective options.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-teal-300 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bulk Trading</h3>
              <p className="text-gray-600">Specialized bulk order management with efficient handling and competitive pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Cement', 'Steel', 'Oil & Gas', 'Fertilizer', 'Textile', 'Aluminum', 'FMCG', 'Power', 'Chemical/Pharma'].map((industry, i) => (
              <div key={i} className="bg-teal-50 border border-teal-200 rounded-lg p-4 text-center hover:bg-teal-100 hover:border-teal-400 transition cursor-pointer font-semibold text-gray-900 text-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Partner With Us?</h2>
          <p className="text-lg opacity-95">Get in touch today to discuss your industrial supply needs and discover how we can support your business growth.</p>
          <button className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
            Contact Us
          </button>
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
              <p className="text-sm">📞 0316-5333566</p>
              <p className="text-sm">📧 osama.asif83@gmail.com</p>
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
