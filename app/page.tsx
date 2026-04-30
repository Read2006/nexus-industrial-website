'use client'

import { useState } from 'react'

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-600">NIS</div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-600 hover:text-teal-600 transition text-sm font-medium">About</a>
            <a href="#why" className="text-gray-600 hover:text-teal-600 transition text-sm font-medium">Why Us</a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600 transition text-sm font-medium">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex gap-3 mb-6">
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-semibold">Trusted by 500+ Clients</span>
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-semibold">SECP Registered</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Industrial Supplier You Can Trust
            </h1>
            <p className="text-xl opacity-95 mb-8 leading-relaxed">
              SECP/FBR registered. Quality components. Fast delivery. Nationwide service across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-white text-teal-600 px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition transform hover:scale-105"
              >
                Get Quote Now
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
                className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:bg-opacity-10 transition"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 rounded-lg p-12 text-center">
              <div className="text-6xl">🏭</div>
              <p className="text-white mt-4 opacity-90">Industrial Components & Supplies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">20+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">48hrs</div>
            <p className="text-gray-600">Quote Response</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Nexus Industrial Solutions is a SECP/FBR registered industrial supplier, distributor, and import/export partner based in Islamabad. With extensive experience in sourcing and logistics, we serve cement, steel, sugar, refractory, and oil & gas industries across Pakistan.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-6">What We Provide</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Bearings & Power Transmission</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Valves, Pipes & Fittings</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Motors & Pumps</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Gaskets & Seals</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Safety Equipment (PPE)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Hand & Power Tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-gray-900">Custom Sourcing</p>
                  <p className="text-gray-600 text-sm">If it's not listed, ask us. We source through our extensive network.</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">OEM & Alternatives</p>
                  <p className="text-gray-600 text-sm">Genuine brands and quality cost-effective alternatives.</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">Certifications</p>
                  <p className="text-gray-600 text-sm">Mill Test Certificates, COC, COO available on request.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Nexus?</h2>
          <p className="text-lg text-gray-600 mb-12">Professional service, quality assurance, and competitive pricing</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SECP/FBR Registered</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Fully compliant with all regulations. NTN registered. Tax invoices guaranteed. Complete transparency in all transactions.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Quotations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Send RFQ by 5pm, get quote by next morning. Emergency quotes within 4 hours. No delays.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">100% inspection on all items. Test certificates available. Full traceability on every component.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Payment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">New: 50/50. Repeat: LC or 30-day credit. Bank transfer, pay order, cheque accepted.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nationwide Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Fast shipping across Pakistan. Trusted partners. All shipments insured. Instant claims.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">OEM & Alternatives</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Genuine brands (SKF, Grundfos) and quality alternatives. Full transparency on pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-12">Send us your requirements. We'll respond within 24 hours.</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick RFQ Form</h3>
              {formSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-6">
                  ✓ Thank you! We'll contact you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name *</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company *</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone *</label>
                  <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">What do you need? *</label>
                  <textarea required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"></textarea>
                </div>
                <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded font-semibold hover:bg-teal-700 transition">
                  Send RFQ
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-teal-600 uppercase mb-2">Phone</p>
                    <p className="text-lg text-gray-900 font-semibold"><a href="tel:+925151234567">+92-51-XXXX-XXXX</a></p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-teal-600 uppercase mb-2">WhatsApp</p>
                    <p className="text-lg text-gray-900 font-semibold"><a href="https://wa.me/923001234567">+92-300-XXXX-XXX</a></p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-teal-600 uppercase mb-2">Email</p>
                    <p className="text-lg text-gray-900 font-semibold"><a href="mailto:orders@nexusindustrial.com">orders@nexusindustrial.com</a></p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Office Location</h3>
                <div>
                  <p className="text-xs font-semibold text-teal-600 uppercase mb-2">Address</p>
                  <p className="text-gray-700 mb-4">[Your Full Address]<br />Islamabad, Pakistan</p>
                  <p className="text-xs font-semibold text-teal-600 uppercase mb-2">Hours</p>
                  <p className="text-gray-700">Mon-Fri: 9:00 AM - 5:00 PM<br />Sat: 10:00 AM - 2:00 PM<br />Emergency: 24/7</p>
                </div>
              </div>

              <div className="bg-teal-50 p-8 rounded-lg border border-teal-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
                <p className="text-gray-700 text-sm">SECP Registered • FBR Compliant • NTN: [NUMBER] • ISO Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">&copy; 2024 Nexus Industrial Solutions. All rights reserved.</p>
          <p className="text-gray-400 text-sm">SECP Reg: [NUMBER] | FBR NTN: [NUMBER] | Import/Export Licensed</p>
        </div>
      </footer>
    </div>
  )
}
