'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="bg-[#0d2b26] text-[#98c4b8] text-xs py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>📞 <a href="tel:03351503555" className="hover:text-teal-400 transition">0335-1503555</a></span>
            <span className="text-white/20">|</span>
            <span>📧 <a href="mailto:info@nexus-is.co" className="hover:text-teal-400 transition">info@nexus-is.co</a></span>
            <span className="text-white/20">|</span>
            <span>📍 DHA Phase 2, Islamabad</span>
          </div>
          <span className="bg-teal-400/10 border border-teal-400/30 text-teal-300 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase">⚡ Same Day Response · NTN: 123455</span>
        </div>
      </div>

      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img src="/images/logoofthenexus.jpeg" alt="NIS" className="h-12 w-12 rounded-full object-cover" />
            <div className="hidden sm:block">
              <p className="font-black text-gray-900 text-sm leading-tight">Nexus Industrial</p>
              <p className="text-teal-700 text-[10px] font-bold tracking-wider uppercase">Solutions</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {[['Home', '/'], ['About', '/#about-section'], ['Products', '/#products'], ['Industries', '/#industries'], ['Brands', '/brands'], ['Contact', '/contact']].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-bold text-gray-600 hover:text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-50 transition-all">{label}</a>
            ))}
          </nav>

          <a href="/contact" className="hidden lg:inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition shrink-0">
            Get a Quote →
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-50 focus:outline-none transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-inner px-6 py-2 divide-y divide-gray-100">
            {[
              ['Home', '/'],
              ['About', '/#about-section'],
              ['Products', '/#products'],
              ['Industries', '/#industries'],
              ['Brands', '/brands'],
              ['Contact', '/contact']
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-bold text-gray-700 hover:text-teal-700 hover:pl-2 transition-all duration-200"
              >
                {label}
              </a>
            ))}
            <div className="py-4">
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-lg font-bold text-sm transition"
              >
                Get a Quote →
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
