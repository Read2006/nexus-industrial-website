'use client'

import React from 'react'

const TextilePage = () => {
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
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-lg">N</div>
            <span className="font-bold text-gray-900 text-sm">NIS</span>
          </a>
          <nav className="flex gap-6">
            <a href="/" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Home</a>
            <a href="/#about-section" className="text-sm font-semibold text-gray-700 hover:text-teal-700">About</a>
            <a href="/#products" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Products</a>
            <a href="/#industries" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Industries</a>
            <a href="/brands" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Brands</a>
            <a href="/contact" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-bold">
              🧵 TEXTILE INDUSTRY SOLUTIONS
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Powering Global <span className="text-teal-400">Textile Operations</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Comprehensive solutions for fiber production, yarn manufacturing, fabric processing, and finished textile products. Trusted by leading textile companies across 40+ countries.
            </p>
            <div className="grid grid-cols-3 gap-8 my-8">
              <div>
                <div className="text-4xl font-black text-teal-400">200+</div>
                <div className="text-sm text-gray-300 mt-2">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-black text-teal-400">30+</div>
                <div className="text-sm text-gray-300 mt-2">Years</div>
              </div>
              <div>
                <div className="text-4xl font-black text-teal-400">40+</div>
                <div className="text-sm text-gray-300 mt-2">Countries</div>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="/contact" className="px-8 py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition">
                Request Quote →
              </a>
              <a href="#" className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition">
                ▶ View Capabilities
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=900&q=85" 
              alt="Textile factory" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-teal-600 mb-2">200+</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-teal-600 mb-2">30+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-teal-600 mb-2">40+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-teal-600 mb-2">8M+</div>
              <p className="text-gray-600">Safe Man-Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE CHAIN SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-teal-600 font-bold uppercase text-sm mb-4">🔗 TEXTILE VALUE CHAIN</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Complete <span className="text-teal-600">Textile</span> Manufacturing Chain
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end solutions covering every segment of textile production
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌾',
                title: 'Fiber Production',
                subtitle: 'Natural & Synthetic Fibers',
                desc: 'Equipment and services for cotton, wool, polyester, nylon, and specialty fiber production.',
                stats: ['50+ Projects', '99.5% Uptime'],
                items: ['Cotton Ginning', 'Polymer Extrusion', 'Staple Fiber Lines', 'Bale Press Systems']
              },
              {
                icon: '🔄',
                title: 'Yarn Manufacturing',
                subtitle: 'Spinning & Twisting',
                desc: 'Complete spinning solutions including blow room, carding, drawing, roving, and ring spinning.',
                stats: ['80+ Projects', '99.3% Uptime'],
                items: ['Ring Spinning', 'Open End Rotor', 'Air Jet Spinning', 'Twisting Machines']
              },
              {
                icon: '📊',
                title: 'Fabric Processing',
                subtitle: 'Weaving & Knitting',
                desc: 'Advanced weaving, knitting, and non-woven fabric production technologies.',
                stats: ['70+ Projects', '98.9% Uptime'],
                items: ['Air Jet Looms', 'Rapier Looms', 'Circular Knitting', 'Non-Woven Lines']
              }
            ].map((chain, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 text-white">
                  <div className="text-4xl mb-3">{chain.icon}</div>
                  <h3 className="text-2xl font-bold mb-1">{chain.title}</h3>
                  <p className="text-teal-100">{chain.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{chain.desc}</p>
                  <div className="flex gap-4 mb-4 pb-4 border-b border-gray-200">
                    {chain.stats.map((stat, j) => (
                      <div key={j}>
                        <div className="font-bold text-teal-600">{stat.split(' ')[0]}</div>
                        <div className="text-xs text-gray-600">{stat.split(' ').slice(1).join(' ')}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {chain.items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="text-teal-600">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & SUSTAINABILITY */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-900 text-green-300 px-4 py-2 rounded-full text-sm font-bold mb-4">
              🏭 QUALITY & SUSTAINABILITY
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Excellence in <span className="text-green-400">Textile Manufacturing</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Commitment to quality, sustainability, and ethical production across all textile operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: '✅', val: '99.7%', label: 'Quality Yield' },
              { icon: '🌱', val: '100%', label: 'Sustainable' },
              { icon: '⚡', val: '15%', label: 'Energy Reduction' },
              { icon: '🏅', val: 'ISO', label: 'Quality Assurance' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-green-400 mb-1">{item.val}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-8 grid md:grid-cols-3 gap-6">
            {[
              { cert: 'OEKO-TEX', desc: 'Standard 100' },
              { cert: 'GOTS', desc: 'Organic Certified' },
              { cert: 'ISO 9001', desc: 'Quality Systems' },
              { cert: 'ISO 14001', desc: 'Environmental' },
              { cert: 'BS OHSAS', desc: 'Health & Safety' },
              { cert: 'GRS', desc: 'Recycled Claim' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <div className="font-bold">{item.cert}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to <span className="text-teal-400">Partner</span> With Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Get in touch today to discuss your Textile industry supply needs and discover how we can support your manufacturing operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition">
              Request a Quote →
            </a>
            <a href="#" className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition">
              View All Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TextilePage
