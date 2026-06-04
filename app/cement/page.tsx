'use client'

export default function CementIndustry() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="bg-orange-700 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <div className="flex gap-2"><span>📞</span> <span>0335-1503555</span></div>
              <span className="text-gray-400">|</span>
              <div className="flex gap-2"><span>📧</span> <span>info@nexus-is.co</span></div>
            </div>
            <div className="text-orange-200">Sourcing Solutions. Delivering Results.</div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center text-white font-bold">N</div>
            <div><div className="font-bold">NIS</div><p className="text-xs text-gray-600">Nexus Industrial Solutions</p></div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="font-semibold hover:text-orange-700">Home</a>
            <a href="/about" className="font-semibold hover:text-orange-700">About</a>
            <a href="/#industries" className="font-semibold hover:text-orange-700">Industries</a>
            <a href="/contact" className="font-semibold hover:text-orange-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* ... REST OF CODE ... */}
    </div>
  )
}
