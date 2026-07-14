export default function Footer() {
  return (
    <footer className="bg-[#050f0d] text-gray-400 pt-16 pb-6 border-t-4 border-teal-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logoofthenexus.jpeg" alt="NIS" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-white font-black text-sm">Nexus Industrial</p>
                <p className="text-teal-400 text-[10px] font-bold uppercase tracking-widest">Solutions</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">Delivering reliable industrial supply and global trade solutions across Pakistan's key industries.</p>
          </div>
          <div>
            <h4 className="text-white font-black text-[11px] tracking-[0.2em] uppercase border-l-2 border-teal-500 pl-3 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[['About', '/#about-section'], ['Products', '/#products'], ['Industries', '/#industries'], ['Brands', '/brands'], ['Contact', '/contact']].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-teal-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-[11px] tracking-[0.2em] uppercase border-l-2 border-teal-500 pl-3 mb-4">Products</h4>
            <ul className="space-y-3 text-sm">
              {[['Mechanical', '/products/mechanical'], ['Electrical', '/products/electrical'], ['Pipes & Fittings', '/products/pipes-fittings'], ['Instruments', '/products/instruments']].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-teal-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-[11px] tracking-[0.2em] uppercase border-l-2 border-teal-500 pl-3 mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p>📞 <a href="tel:03351503555" className="hover:text-teal-400 transition">0335-1503555</a></p>
              <p>📧 <a href="mailto:info@nexus-is.co" className="hover:text-teal-400 transition">info@nexus-is.co</a></p>
              <p>📍 DHA Phase 2, Islamabad</p>
              <p className="text-gray-600">NTN: 123455 | STRN: 1233456</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          <p>© 2024 Nexus Industrial Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
