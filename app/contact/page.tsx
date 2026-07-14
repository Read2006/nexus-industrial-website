export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO BANNER */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-teal-400 text-sm font-bold uppercase tracking-widest mb-3">Get In Touch</p>
            <h1 className="text-5xl font-black text-white mb-4">
              Contact <span className="text-teal-400">Us</span>
            </h1>
            <div className="w-16 h-1 bg-teal-400 mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have a sourcing requirement or want to discuss a partnership? Our team is ready to help you find the right industrial solution.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT — Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-3">Let&apos;s Work Together</h2>
                <p className="text-gray-600 leading-relaxed">
                  Whether you need a quick quote, want to discuss a large project, or have questions about our sourcing capabilities — we&apos;re just a message away.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-white rounded-2xl p-6 flex items-start gap-5 shadow-sm border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:03351503555" className="text-xl font-black text-gray-900 hover:text-teal-700 transition">0335-1503555</a>
                    <p className="text-sm text-gray-500 mt-1">Mon – Sat, 9AM – 6PM PKT</p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-6 flex items-start gap-5 shadow-sm border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:info@nexus-is.co" className="text-xl font-black text-gray-900 hover:text-teal-700 transition">info@nexus-is.co</a>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white rounded-2xl p-6 flex items-start gap-5 shadow-sm border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-black text-gray-900">DHA Phase 2, Islamabad</p>
                    <p className="text-sm text-gray-500 mt-1">Serving clients across Pakistan & globally</p>
                  </div>
                </div>

                {/* NTN */}
                <div className="bg-white rounded-2xl p-6 flex items-start gap-5 shadow-sm border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-1">Compliance</p>
                    <p className="text-gray-900 font-bold">NTN: 123455</p>
                    <p className="text-gray-900 font-bold">STRN: 1233456</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-gray-500 text-sm mb-8">Fill in the details below and we&apos;ll get back to you shortly.</p>

              <form
                action="https://formsubmit.co/info@nexus-is.co"
                method="POST"
                className="space-y-5"
              >
                {/* Honeypot anti-spam */}
                <input type="text" name="_honey" className="hidden" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Enquiry from NIS Website" />
                <input type="hidden" name="_next" value="https://nexus-industrial-website-ih59.vercel.app/contact?sent=true" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+92 XXX XXXXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Request for Quotation">Request for Quotation (RFQ)</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your requirement, product needed, or any questions..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-700 text-white py-4 rounded-xl font-bold text-base hover:bg-teal-800 transition flex items-center justify-center gap-2"
                >
                  Send Message →
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form you agree to be contacted by our team regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA STRIP */}
      <section className="bg-teal-700 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-black mb-1">Need an Urgent Quote?</h3>
            <p className="text-teal-100 text-sm">Call us directly for same-day response on your requirements.</p>
          </div>
          <a
            href="tel:03351503555"
            className="bg-white text-teal-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition whitespace-nowrap"
          >
            📞 Call Now: 0335-1503555
          </a>
        </div>
      </section>

    </div>
  )
}
