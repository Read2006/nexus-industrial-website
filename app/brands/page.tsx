export default function BrandsPage() {
  const brands = [
    { name: "ABB", logo: "https://www.zfcorporation.co.uk/storage/media/abb-copy-copy-copy-copy-copy-copy-copy-1777881191.jpg" },
    { name: "Siemens", logo: "https://www.zfcorporation.co.uk/storage/media/Siemens .jpg" },
    { name: "Schneider Electric", logo: "https://www.zfcorporation.co.uk/storage/media/Schneider.jpg" },
    { name: "Honeywell", logo: "https://www.zfcorporation.co.uk/storage/media/honeywell.jpg" },
    { name: "Emerson", logo: "https://www.zfcorporation.co.uk/storage/media/Emerson.jpg" },
    { name: "Endress+Hauser", logo: "https://www.zfcorporation.co.uk/storage/media/Endress.jpg" },
    { name: "Yokogawa", logo: "https://www.zfcorporation.co.uk/storage/media/yokogawa.jpg" },
    { name: "Fluke", logo: "https://www.zfcorporation.co.uk/storage/media/Fluke.jpg" },
    { name: "Parker Hannifin", logo: "https://www.zfcorporation.co.uk/storage/media/Parker.jpg" },
    { name: "Rosemount", logo: "https://www.zfcorporation.co.uk/storage/media/Rosemount.jpg" },
    { name: "Danfoss", logo: "https://www.zfcorporation.co.uk/storage/media/Danfoss.jpg" },
    { name: "Grundfos", logo: "https://www.zfcorporation.co.uk/storage/media/Grundfos.jpg" },
    { name: "Atlas Copco", logo: "https://www.zfcorporation.co.uk/storage/media/Atlas copco.jpg" },
    { name: "Bosch", logo: "https://www.zfcorporation.co.uk/storage/media/Bosch.jpg" },
    { name: "Caterpillar", logo: "https://www.zfcorporation.co.uk/storage/media/Caterpillar.jpg" },
    { name: "Cummins", logo: "https://www.zfcorporation.co.uk/storage/media/Cummins.jpg" },
    { name: "Eaton", logo: "https://www.zfcorporation.co.uk/storage/media/Eaton.jpg" },
    { name: "Flowserve", logo: "https://www.zfcorporation.co.uk/storage/media/flowserve .jpg" },
    { name: "General Electric", logo: "https://www.zfcorporation.co.uk/storage/media/GE.jpg" },
    { name: "Rockwool", logo: "https://www.zfcorporation.co.uk/storage/media/Rockwool.jpg" },
    { name: "Rotork", logo: "https://www.zfcorporation.co.uk/storage/media/Rotork.jpg" },
    { name: "Swagelok", logo: "https://www.zfcorporation.co.uk/storage/media/swagelok.jpg" },
    { name: "Wika", logo: "https://www.zfcorporation.co.uk/storage/media/Wika.jpg" },
    { name: "Alfa Laval", logo: "https://www.zfcorporation.co.uk/storage/media/alfa-laval-copy-copy-copy-copy-copy-copy-copy-1777881191.jpg" },
    { name: "Allen Bradley", logo: "https://www.zfcorporation.co.uk/storage/media/allen-bradley-copy-copy-copy-copy-copy-copy-copy-1777881192.jpg" },
    { name: "Ametek", logo: "https://www.zfcorporation.co.uk/storage/media/ametek-copy-copy-copy-copy-copy-copy-copy-1777881192.jpg" },
    { name: "ASCO", logo: "https://www.zfcorporation.co.uk/storage/media/asco-copy-copy-copy-copy-copy-copy-copy-1777881192.jpg" },
    { name: "Ashcroft", logo: "https://www.zfcorporation.co.uk/storage/media/ashcroft-copy-copy-copy-copy-copy-copy-copy-1777881192.jpg" },
    { name: "Belden", logo: "https://www.zfcorporation.co.uk/storage/media/Belden.jpg" },
    { name: "Bonney Forge", logo: "https://www.zfcorporation.co.uk/storage/media/Bonney.jpg" },
    { name: "Buffalo Pump", logo: "https://www.zfcorporation.co.uk/storage/media/Buffalo Pump.jpg" },
    { name: "Cameron", logo: "https://www.zfcorporation.co.uk/storage/media/cameron.jpg" },
    { name: "Carrier", logo: "https://www.zfcorporation.co.uk/storage/media/carrier.jpg" },
    { name: "Cashco", logo: "https://www.zfcorporation.co.uk/storage/media/Cashco.jpg" },
    { name: "Copeland", logo: "https://www.zfcorporation.co.uk/storage/media/Copeland.jpg" },
    { name: "Decon", logo: "https://www.zfcorporation.co.uk/storage/media/Decon.jpg" },
    { name: "Dewalt", logo: "https://www.zfcorporation.co.uk/storage/media/Dewalt.jpg" },
    { name: "Donaldson", logo: "https://www.zfcorporation.co.uk/storage/media/Donaldson.jpg" },
    { name: "Deutz", logo: "https://www.zfcorporation.co.uk/storage/media/Duetz.jpg" },
    { name: "Durag", logo: "https://www.zfcorporation.co.uk/storage/media/Durag.jpg" },
    { name: "EagleBurg", logo: "https://www.zfcorporation.co.uk/storage/media/EagleBurg.jpg" },
    { name: "Fisher (Emerson)", logo: "https://www.zfcorporation.co.uk/storage/media/Fisher.jpg" },
    { name: "Flexitallic", logo: "https://www.zfcorporation.co.uk/storage/media/Flexitallic.jpg" },
    { name: "Fuji Electric", logo: "https://www.zfcorporation.co.uk/storage/media/Fuji Electric.jpg" },
    { name: "Gastron", logo: "https://www.zfcorporation.co.uk/storage/media/Gastron.jpg" },
    { name: "GWC", logo: "https://www.zfcorporation.co.uk/storage/media/GWC.jpg" },
    { name: "Hilliard", logo: "https://www.zfcorporation.co.uk/storage/media/Hilliard .jpg" },
    { name: "Hoppecke", logo: "https://www.zfcorporation.co.uk/storage/media/Hoppecke.jpg" },
    { name: "Hyundai Heavy Industries", logo: "https://www.zfcorporation.co.uk/storage/media/Hyundai .jpg" },
    { name: "IFM", logo: "https://www.zfcorporation.co.uk/storage/media/IFM.jpg" },
    { name: "Ingersoll Rand", logo: "https://www.zfcorporation.co.uk/storage/media/Ingersoll Rand.jpg" },
    { name: "John Crane", logo: "https://www.zfcorporation.co.uk/storage/media/John Crane.jpg" },
    { name: "John Deere", logo: "https://www.zfcorporation.co.uk/storage/media/John Deere.jpg" },
    { name: "Johnson Controls", logo: "https://www.zfcorporation.co.uk/storage/media/Johnson Control.jpg" },
    { name: "KSB", logo: "https://www.zfcorporation.co.uk/storage/media/KSB.jpeg" },
    { name: "Magnetrol", logo: "https://www.zfcorporation.co.uk/storage/media/Magnetrol.jpg" },
    { name: "Makita", logo: "https://www.zfcorporation.co.uk/storage/media/makita.jpg" },
    { name: "Megger", logo: "https://www.zfcorporation.co.uk/storage/media/Megger.jpg" },
    { name: "Milton Roy", logo: "https://www.zfcorporation.co.uk/storage/media/Milton Roy.jpg" },
    { name: "MSA", logo: "https://www.zfcorporation.co.uk/storage/media/MSA.jpg" },
    { name: "Norgren", logo: "https://www.zfcorporation.co.uk/storage/media/Norgren.jpg" },
    { name: "OMEGA", logo: "https://www.zfcorporation.co.uk/storage/media/OMEGa.jpg" },
    { name: "Pedrollo", logo: "https://www.zfcorporation.co.uk/storage/media/Pedrollo.jpg" },
    { name: "Raychem", logo: "https://www.zfcorporation.co.uk/storage/media/Raychem.jpg" },
    { name: "Renold", logo: "https://www.zfcorporation.co.uk/storage/media/Renold.jpg" },
    { name: "Rocol", logo: "https://www.zfcorporation.co.uk/storage/media/Rocol.jpg" },
    { name: "Saft", logo: "https://www.zfcorporation.co.uk/storage/media/Saft.jpg" },
    { name: "Sandvik", logo: "https://www.zfcorporation.co.uk/storage/media/sandvik.jpg" },
    { name: "SICK", logo: "https://www.zfcorporation.co.uk/storage/media/sick.jpg" },
    { name: "SMC", logo: "https://www.zfcorporation.co.uk/storage/media/SMC.jpg" },
    { name: "SPX", logo: "https://www.zfcorporation.co.uk/storage/media/SPX.jpg" },
    { name: "Tescom", logo: "https://www.zfcorporation.co.uk/storage/media/tescom.jpg" },
    { name: "Tyco", logo: "https://www.zfcorporation.co.uk/storage/media/Tyco.jpg" },
    { name: "Wartsila", logo: "https://www.zfcorporation.co.uk/storage/media/Wartsila.jpg" },
    { name: "WISE", logo: "https://www.zfcorporation.co.uk/storage/media/WISE.jpg" },
    { name: "Woodward", logo: "https://www.zfcorporation.co.uk/storage/media/Woodward.jpg" },
    { name: "Yanmar", logo: "https://www.zfcorporation.co.uk/storage/media/Yanmar.jpg" },
    { name: "Yuasa", logo: "https://www.zfcorporation.co.uk/storage/media/Yuasa.jpg" },
    { name: "Akasaka Diesel", logo: "https://www.zfcorporation.co.uk/storage/media/Akasaka Diesel .jpg" },
    { name: "Apollo Valve", logo: "https://www.zfcorporation.co.uk/storage/media/Apollo Valve.jpg" },
    { name: "Alcad", logo: "https://www.zfcorporation.co.uk/storage/media/alcad-copy-copy-copy-copy-copy-copy-copy-1777881191.jpg" },
    { name: "Alpha Wire", logo: "https://www.zfcorporation.co.uk/storage/media/alpha-wire-copy-copy-copy-copy-copy-copy-copy-1777881192.jpg" },
    { name: "Altronic", logo: "https://www.zfcorporation.co.uk/storage/media/altronic-copy-copy-copy-copy-copy-copy-copy-1777881192.jpg" },
    { name: "Bailey", logo: "https://www.zfcorporation.co.uk/storage/media/bailey.jpg" },
    { name: "Benkan", logo: "https://www.zfcorporation.co.uk/storage/media/Benkan.jpg" },
    { name: "Boll Filter", logo: "https://www.zfcorporation.co.uk/storage/media/Boll Filter.jpg" },
    { name: "Canon", logo: "https://www.zfcorporation.co.uk/storage/media/Canon.jpg" },
    { name: "Daihatsu", logo: "https://www.zfcorporation.co.uk/storage/media/daihastu.jpg" },
    { name: "Deka", logo: "https://www.zfcorporation.co.uk/storage/media/deka.jpg" },
    { name: "Dettron", logo: "https://www.zfcorporation.co.uk/storage/media/dettron.jpg" },
    { name: "Fargo", logo: "https://www.zfcorporation.co.uk/storage/media/fargo.jpg" },
    { name: "Isopur", logo: "https://www.zfcorporation.co.uk/storage/media/Isopur.jpg" },
    { name: "Kaydon", logo: "https://www.zfcorporation.co.uk/storage/media/Kaydon.jpg" },
    { name: "Kemet", logo: "https://www.zfcorporation.co.uk/storage/media/kemet .jpg" },
    { name: "Kimray", logo: "https://www.zfcorporation.co.uk/storage/media/kimray.jpg" },
    { name: "Klinger", logo: "https://www.zfcorporation.co.uk/storage/media/klinger.jpg" },
    { name: "Komatsu", logo: "https://www.zfcorporation.co.uk/storage/media/Komatsu.jpg" },
    { name: "Konan", logo: "https://www.zfcorporation.co.uk/storage/media/Konan.jpg" },
    { name: "Ktork", logo: "https://www.zfcorporation.co.uk/storage/media/Ktork.jpg" },
    { name: "MAK", logo: "https://www.zfcorporation.co.uk/storage/media/Mak.jpg" },
    { name: "McMaster-Carr", logo: "https://www.zfcorporation.co.uk/storage/media/McMaster.jpg" },
    { name: "Messko", logo: "https://www.zfcorporation.co.uk/storage/media/Messko.jpg" },
    { name: "Moeller", logo: "https://www.zfcorporation.co.uk/storage/media/Moeller.jpg" },
    { name: "Morgan", logo: "https://www.zfcorporation.co.uk/storage/media/morgan .jpg" },
    { name: "Perkin", logo: "https://www.zfcorporation.co.uk/storage/media/Perkin.jpg" },
    { name: "Rexroth", logo: "https://www.zfcorporation.co.uk/storage/media/rexroth.jpg" },
    { name: "Schwer", logo: "https://www.zfcorporation.co.uk/storage/media/schwer.jpg" },
    { name: "Semikron", logo: "https://www.zfcorporation.co.uk/storage/media/Semikron.jpg" },
    { name: "Sperre", logo: "https://www.zfcorporation.co.uk/storage/media/sperre.jpg" },
    { name: "Stenflex", logo: "https://www.zfcorporation.co.uk/storage/media/Stenflex.jpg" },
    { name: "Stubbe", logo: "https://www.zfcorporation.co.uk/storage/media/Stubbe.jpg" },
    { name: "Teledyne", logo: "https://www.zfcorporation.co.uk/storage/media/teledyne.jpg" },
    { name: "Tognella", logo: "https://www.zfcorporation.co.uk/storage/media/Tognella.jpg" },
    { name: "Wanco", logo: "https://www.zfcorporation.co.uk/storage/media/Wanco.jpg" },
    { name: "Waukesa", logo: "https://www.zfcorporation.co.uk/storage/media/Waukesa.jpg" },
    { name: "3M", logo: "https://www.zfcorporation.co.uk/storage/media/3m-logo.svg" },
    { name: "Phoenix Contact", logo: "https://www.zfcorporation.co.uk/storage/media/phoenix-contact-logo.svg" },
    { name: "Omron", logo: "https://www.zfcorporation.co.uk/storage/media/omron-logo.svg" },
    { name: "SKF", logo: "https://www.zfcorporation.co.uk/storage/media/skf-logo.svg" },
    { name: "Pepperl+Fuchs", logo: "https://www.zfcorporation.co.uk/storage/media/pepperlfuchs-logo.svg" },
    { name: "Festo", logo: "https://www.zfcorporation.co.uk/storage/media/festo-logo.svg" },
    { name: "Burkert", logo: "https://www.zfcorporation.co.uk/storage/media/burkert-logo.svg" },
    { name: "Hilti", logo: "https://www.zfcorporation.co.uk/storage/media/hilti-logo.svg" },
    { name: "Loctite", logo: "https://www.zfcorporation.co.uk/storage/media/loctite-logo.svg" },
    { name: "Shell", logo: "https://www.zfcorporation.co.uk/storage/media/shell-logo.svg" },
    { name: "Mobil", logo: "https://www.zfcorporation.co.uk/storage/media/mobil-logo.svg" },
    { name: "Baker Hughes", logo: "https://www.zfcorporation.co.uk/storage/media/baker-hughes-logo.svg" },
    { name: "Belzona", logo: "https://www.zfcorporation.co.uk/storage/media/belzona-logo.svg" },
    { name: "Cisco", logo: "https://www.zfcorporation.co.uk/storage/media/cisco-logo.svg" },
    { name: "ESAB", logo: "https://www.zfcorporation.co.uk/storage/media/esab-logo.svg" },
    { name: "Exide", logo: "https://www.zfcorporation.co.uk/storage/media/exide-logo.svg" },
    { name: "FAG", logo: "https://www.zfcorporation.co.uk/storage/media/fag-logo.svg" },
    { name: "FIAMM", logo: "https://www.zfcorporation.co.uk/storage/media/fiamm-logo.svg" },
    { name: "Finder", logo: "https://www.zfcorporation.co.uk/storage/media/finder-logo.svg" },
    { name: "Fleetguard", logo: "https://www.zfcorporation.co.uk/storage/media/fleetguard-logo.svg" },
    { name: "Flender", logo: "https://www.zfcorporation.co.uk/storage/media/flender-logo.svg" },
    { name: "Fuchs", logo: "https://www.zfcorporation.co.uk/storage/media/fuchs-logo.svg" },
    { name: "Gardner Denver", logo: "https://www.zfcorporation.co.uk/storage/media/gardner-denver-logo.svg" },
    { name: "KITZ", logo: "https://www.zfcorporation.co.uk/storage/media/kitz-logo.svg" },
    { name: "LG", logo: "https://www.zfcorporation.co.uk/storage/media/lg-logo.svg" },
    { name: "Merck", logo: "https://www.zfcorporation.co.uk/storage/media/merck-logo.svg" },
    { name: "Mersen", logo: "https://www.zfcorporation.co.uk/storage/media/mersen-logo.svg" },
    { name: "Motorola", logo: "https://www.zfcorporation.co.uk/storage/media/motorola-logo.svg" },
    { name: "Pall", logo: "https://www.zfcorporation.co.uk/storage/media/pall-logo.svg" },
    { name: "Pentair", logo: "https://www.zfcorporation.co.uk/storage/media/pentair-logo.svg" },
    { name: "Philips", logo: "https://www.zfcorporation.co.uk/storage/media/philips-logo.svg" },
    { name: "Restek", logo: "https://www.zfcorporation.co.uk/storage/media/restek-logo.svg" },
    { name: "Rossi", logo: "https://www.zfcorporation.co.uk/storage/media/rossi-logo.svg" },
    { name: "Socomec", logo: "https://www.zfcorporation.co.uk/storage/media/socomec-logo.svg" },
    { name: "Solar Turbines", logo: "https://www.zfcorporation.co.uk/storage/media/solar-turbines-logo.svg" },
    { name: "Stanley", logo: "https://www.zfcorporation.co.uk/storage/media/stanley-logo.svg" },
    { name: "Sulzer", logo: "https://www.zfcorporation.co.uk/storage/media/sulzer-logo.svg" },
    { name: "VEGA", logo: "https://www.zfcorporation.co.uk/storage/media/vega-logo.svg" },
    { name: "WAGO", logo: "https://www.zfcorporation.co.uk/storage/media/wago-logo.svg" },
    { name: "Weidmuller", logo: "https://www.zfcorporation.co.uk/storage/media/weidmuller-logo.svg" },
    { name: "Weir", logo: "https://www.zfcorporation.co.uk/storage/media/weir-logo.svg" },
    { name: "Zebra Technologies", logo: "https://www.zfcorporation.co.uk/storage/media/zebra-technologies-logo.svg" },
    { name: "Thermax", logo: "" },
    { name: "Thermo Fisher Scientific", logo: "" },
    { name: "TopWorx", logo: "" },
    { name: "TotalEnergies", logo: "" },
    { name: "Tuthill", logo: "" },
    { name: "Viking Pump", logo: "" },
    { name: "Auma", logo: "" },
    { name: "Barksdale", logo: "" },
    { name: "Baumer", logo: "" },
    { name: "Beamex", logo: "" },
    { name: "Borri", logo: "" },
    { name: "Brooks Instrument", logo: "" },
    { name: "Castrol", logo: "" },
    { name: "Chesterton", logo: "" },
    { name: "Chicago Pneumatic", logo: "" },
    { name: "Dwyer", logo: "" },
    { name: "EBRO", logo: "" },
    { name: "Foxboro", logo: "" },
    { name: "GEMU", logo: "" },
    { name: "Hach", logo: "" },
    { name: "Hi-Force", logo: "" },
    { name: "KNF", logo: "" },
    { name: "LEWA", logo: "" },
    { name: "Lovato Electric", logo: "" },
    { name: "Minebea Intec", logo: "" },
    { name: "Molykote", logo: "" },
    { name: "Moxa", logo: "" },
    { name: "MTL Instruments", logo: "" },
    { name: "MTU", logo: "" },
    { name: "Neway Valve", logo: "" },
    { name: "Nikkiso", logo: "" },
    { name: "Notifier", logo: "" },
    { name: "OMAL", logo: "" },
  ]

  const uniqueBrands = brands.filter((brand, index, self) =>
    index === self.findIndex((b) => b.name === brand.name)
  )

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
            <a href="/#about-section" className="text-sm font-semibold text-gray-700 hover:text-teal-700">About</a>
            <a href="/#products" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Products</a>
            <a href="/industries" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Industries</a>
            <a href="/brands" className="text-sm font-semibold text-teal-700 border-b-2 border-teal-700">Brands</a>
            <a href="/contact" className="text-sm font-semibold text-gray-700 hover:text-teal-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-teal-400 text-sm font-bold uppercase tracking-widest mb-3">Our Partners</p>
            <h1 className="text-5xl font-black text-white mb-4">
              Brands We <span className="text-teal-400">Source</span>
            </h1>
            <div className="w-16 h-1 bg-teal-400 mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Strategic partnerships with global industry leaders. We source genuine products from {uniqueBrands.length}+ trusted brands to deliver quality, reliability, and performance to your operations.
            </p>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="bg-teal-50 border-l-4 border-teal-600 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong className="font-bold text-teal-800">Disclaimer:</strong> Nexus Industrial Solutions is an independent supplier of products from the brands listed on this page. We are not officially affiliated with, endorsed by, or an authorised representative of any brand or manufacturer shown. All trademarks and brand names are the sole property of their respective owners and are referenced here for product identification purposes only.
          </p>
        </div>
      </div>

      {/* BRANDS GRID */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {uniqueBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl px-4 py-5 flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:border-teal-500 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="h-14 w-full flex items-center justify-center px-2">
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                  ) : (
                    <span className="text-gray-800 font-bold text-sm text-center uppercase leading-tight">{brand.name}</span>
                  )}
                </div>
                <h3 className="text-[10px] font-black text-gray-700 uppercase tracking-wider group-hover:text-teal-700 transition-colors text-center leading-tight">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Need a Specific Brand or Product?</h2>
          <p className="text-lg opacity-90">
            Can&apos;t find what you&apos;re looking for? We source from hundreds of global manufacturers. Get in touch and we&apos;ll find it for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-700 px-10 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
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
                <li><a href="/brands" className="hover:text-white transition">Brands</a></li>
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
