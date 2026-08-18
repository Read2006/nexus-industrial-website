'use client'

import { useState } from 'react'

const jpg = (folder: string, name: string, desc: string) => ({
  name,
  desc,
  img: `/general-orders/${folder}/${encodeURIComponent(name)}.jpg`,
})

const png = (folder: string, name: string, desc: string) => ({
  name,
  desc,
  img: `/general-orders/${folder}/${encodeURIComponent(name)}.png`,
})

const categories = [
  {
    id: 'safety',
    label: 'Safety & PPE',
    icon: '🦺',
    desc: 'Complete PPE and emergency safety products for industrial sites, plants and workshops.',
    products: [
      jpg('safety', 'Safety Helmets', 'Industrial safety helmets for head protection on site'),
      jpg('safety', 'Safety Shoes', 'Steel-toe and industrial safety footwear'),
      jpg('safety', 'Safety Gloves', 'Cut-resistant, chemical and general work gloves'),
      jpg('safety', 'Safety Goggles', 'Impact-rated eye protection for industrial use'),
      jpg('safety', 'Face Shields', 'Full-face shields for grinding, chemical and splash protection'),
      jpg('safety', 'Safety Harnesses', 'Fall-protection harnesses for working at height'),
      jpg('safety', 'Coveralls', 'Industrial coveralls for plant and site work'),
      jpg('safety', 'Protective Clothing', 'Hi-vis and protective workwear for industrial environments'),
      jpg('safety', 'Ear Protection', 'Earmuffs and earplugs for high-noise areas'),
      jpg('safety', 'Respiratory Protection', 'Reusable and disposable respirators and masks'),
      jpg('safety', 'Welding Protection Equipment', 'Welding helmets and leather welding gloves'),
      jpg('safety', 'Fire Safety Equipment', 'Fire extinguishers, hose reels and fire protection gear'),
      jpg('safety', 'First Aid Kits', 'Workplace first aid kits and medical supplies'),
      jpg('safety', 'Safety Signs', 'Mandatory, warning, fire exit and prohibition signage'),
      jpg('safety', 'Emergency Safety Products', 'Exit signs, beacons and emergency lighting'),
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workshop',
    icon: '🔧',
    desc: 'Hand tools, power tools and workshop equipment for maintenance and fabrication.',
    products: [
      png('tools', 'Hand Tools', 'Hammers, wrenches, pliers, screwdrivers and general hand tools'),
      png('tools', 'Power Tools', 'Drills, grinders, saws and cordless power tools'),
      png('tools', 'Tool Kits', 'Organised tool chests and complete workshop kits'),
      png('tools', 'Cutting Tools', 'Saw blades, shears and industrial cutting tools'),
      png('tools', 'Grinding Tools', 'Bench grinders, angle grinders and grinding discs'),
      png('tools', 'Measuring Tools', 'Calipers, levels, micrometers and measuring instruments'),
      png('tools', 'Torque Tools', 'Torque wrenches and precision tightening tools'),
      png('tools', 'Pneumatic Tools', 'Air tools, nailers, grinders and hose reels'),
      png('tools', 'Hydraulic Tools', 'Jacks, pumps, hoses and hydraulic workshop tools'),
      png('tools', 'Workshop Equipment', 'Workbenches, vises and workshop fixtures'),
      png('tools', 'Tool Storage Systems', 'Mobile cabinets, pegboards and storage workstations'),
      png('tools', 'Maintenance Tools', 'Grease guns, oilers, brushes and service tools'),
      png('tools', 'Calibration Tools', 'Gauges, gauge blocks and calibration instruments'),
      png('tools', 'Portable Equipment', 'Generators, work lights and portable site equipment'),
      png('tools', 'Tool Accessories', 'Bits, blades, discs and small hardware accessories'),
    ],
  },
  {
    id: 'fasteners',
    label: 'Fasteners & Hardware',
    icon: '🔩',
    desc: 'Bolts, nuts, anchors and industrial hardware for assembly and construction.',
    products: [
      png('fasteners', 'Bolts', 'Hex bolts and industrial bolting for general assembly'),
      png('fasteners', 'Nuts', 'Hex nuts, castle nuts and locking nuts'),
      png('fasteners', 'Washers', 'Flat, lock and star washers in multiple sizes'),
      png('fasteners', 'Screws', 'Machine screws and industrial screw fasteners'),
      png('fasteners', 'Stud Bolts', 'Double-ended stud bolts for flange and high-pressure joints'),
      png('fasteners', 'Threaded Rods', 'All-thread rods in steel, coated and brass finishes'),
      png('fasteners', 'Anchors', 'Wedge, sleeve and mechanical anchors for concrete'),
      png('fasteners', 'Clamps', 'C-clamps, hose clamps and industrial clamping hardware'),
      png('fasteners', 'Brackets', 'L-brackets, gussets and mounting brackets'),
      png('fasteners', 'Rivets', 'Industrial rivets in multiple lengths and head styles'),
      png('fasteners', 'Stainless Steel Fasteners', 'Corrosion-resistant stainless bolts, nuts and washers'),
      png('fasteners', 'High Tensile Fasteners', 'Grade 8.8 / 10.9 high-tensile bolts and nuts'),
      png('fasteners', 'Industrial Hardware', 'Shackles, eyebolts, pulleys and rigging hardware'),
      png('fasteners', 'Fixing Accessories', 'Cable ties, wall plugs and mixed fixing kits'),
      png('fasteners', 'Assembly Hardware', 'Pins, plates, cotter pins and assembly components'),
    ],
  },
  {
    id: 'welding',
    label: 'Welding & Fabrication',
    icon: '🔥',
    desc: 'Welding machines, consumables and fabrication supplies for workshop and site work.',
    products: [
      png('welding', 'Welding Machines', 'MIG, TIG and stick welding machines for industrial fabrication'),
      png('welding', 'Welding Electrodes', 'Stick electrodes and welding rods for general fabrication'),
      png('welding', 'Welding Wires', 'MIG/MAG welding wires on spools and in cartons'),
      png('welding', 'Welding Accessories', 'Torches, ground clamps and electrode holders'),
      png('welding', 'Cutting Equipment', 'Cutting torches and fabrication cutting equipment'),
      png('welding', 'Welding Helmets', 'Auto-darkening and industrial welding helmets'),
      png('welding', 'Welding Gloves', 'Heat-resistant leather welding gloves'),
      png('welding', 'Welding Curtains', 'Workshop welding screens and curtains'),
      png('welding', 'Abrasive Discs', 'Grinding and blending discs for metalwork'),
      png('welding', 'Grinding Wheels', 'Industrial grinding wheels for fabrication shops'),
      png('welding', 'Cutting Wheels', 'Cut-off wheels for steel and general metal cutting'),
      png('welding', 'Welding Consumables', 'Tips, nozzles and general welding consumables'),
      png('welding', 'Fabrication Tools', 'Hand tools used in fabrication and metalwork'),
      png('welding', 'Workshop Consumables', 'Everyday welding shop consumables'),
      png('welding', 'Fabrication Supplies', 'Mesh, angles, rods and fabrication materials'),
    ],
  },
  {
    id: 'consumables',
    label: 'Consumables',
    icon: '🧴',
    desc: 'Adhesives, chemicals, sheets and maintenance supplies for daily plant operations.',
    products: [
      png('consumables', 'Adhesives', 'Industrial adhesives, epoxies and bonding compounds'),
      png('consumables', 'Sealants', 'Joint sealants and industrial sealing compounds'),
      png('consumables', 'Industrial Tapes', 'Insulation, duct and industrial tapes'),
      png('consumables', 'Cleaning Chemicals', 'Degreasers and industrial cleaning chemicals'),
      png('consumables', 'Maintenance Sprays', 'Lubricants, penetrating oils and maintenance sprays'),
      png('consumables', 'Industrial Sheets', 'Industrial sheet materials for maintenance and fabrication'),
      png('consumables', 'Rubber Sheets', 'Rubber sheeting for gaskets, lining and protection'),
      png('consumables', 'Plastic Components', 'Plastic parts and general plastic supplies'),
      png('consumables', 'Packaging Materials', 'Packaging film, wraps and packing supplies'),
      png('consumables', 'General Consumables', 'Day-to-day industrial consumables'),
      png('consumables', 'Maintenance Accessories', 'Small parts used in routine plant maintenance'),
      png('consumables', 'Workshop Supplies', 'General workshop consumables and supplies'),
      png('consumables', 'Cleaning Equipment', 'Industrial cleaning tools and equipment'),
      png('consumables', 'Storage Materials', 'Bins, organisers and storage materials'),
      png('consumables', 'General Site Supplies', 'Cones, extinguishers and general site supplies'),
    ],
  },
  {
    id: 'handling',
    label: 'Material Handling',
    icon: '🏗️',
    desc: 'Lifting, warehouse and material handling equipment for plants and stores.',
    products: [
      png('handling', 'Chain Blocks', 'Manual chain blocks and hand chain hoists'),
      png('handling', 'Lifting Slings', 'Webbing and lifting slings for load handling'),
      png('handling', 'Shackles', 'Bow and D-shackles for lifting applications'),
      png('handling', 'Lifting Clamps', 'Plate clamps and lifting clamps'),
      png('handling', 'Trolleys', 'Workshop and load trolleys'),
      png('handling', 'Pallet Trucks', 'Manual and powered pallet trucks'),
      png('handling', 'Lifting Accessories', 'Hooks, fittings and lifting accessories'),
      png('handling', 'Material Handling Equipment', 'General material handling equipment'),
      png('handling', 'Storage Racks', 'Industrial storage racking systems'),
      png('handling', 'Shelving Systems', 'Warehouse and workshop shelving'),
      png('handling', 'Warehouse Equipment', 'Ladders, pallet jacks and warehouse gear'),
      png('handling', 'Handling Tools', 'Straps, winches, binders and handling tools'),
      png('handling', 'Load Handling Equipment', 'Equipment for securing and moving loads'),
      png('handling', 'Industrial Trolleys', 'Heavy-duty industrial trolleys'),
    ],
  },
  {
    id: 'office',
    label: 'Office & Site',
    icon: '🏢',
    desc: 'Office furniture, site equipment and facility supplies for plants and projects.',
    products: [
      png('office', 'Office Furniture', 'Desks, chairs and office furniture for plant offices'),
      png('office', 'Storage Cabinets', 'Metal storage cabinets for offices and workshops'),
      png('office', 'Work Benches', 'Industrial work benches for site and workshop use'),
      png('office', 'Site Equipment', 'General equipment for construction and plant sites'),
      png('office', 'Cleaning Supplies', 'Facility cleaning supplies'),
      png('office', 'Facility Management Items', 'Items used in day-to-day facility management'),
      png('office', 'Packaging Supplies', 'Cartons, packing and dispatch supplies'),
      png('office', 'Sign Boards', 'Site and facility sign boards'),
      png('office', 'Barricades', 'Site barricades and access control'),
      png('office', 'General Office Requirements', 'Everyday office supplies and requirements'),
      png('office', 'Pantry Supplies', 'Pantry and staff-facility supplies'),
      png('office', 'Electrical Accessories', 'General-use electrical accessories for offices and sites'),
      png('office', 'Stationery Supplies', 'Stationery for office and site administration'),
      png('office', 'Site Consumables', 'Consumables used on construction and plant sites'),
      png('office', 'Miscellaneous Requirements', 'Other office, facility and site requirements'),
    ],
  },
]

const relatedCategories = [
  { name: 'Mechanical Products', desc: 'Bearings, pumps & mechanical systems', href: '/products/mechanical', img: '/new-heroes/mechanical.jpeg' },
  { name: 'Electrical Products', desc: 'Motors, cables & electrical systems', href: '/products/electrical', img: '/electrical.jfif' },
  { name: 'Pipes & Fittings', desc: 'Valves, fittings & pipe systems', href: '/products/pipes-fittings', img: '/pipes-and-fittings.jfif' },
  { name: 'Instruments', desc: 'Precision measurement tools', href: '/products/instruments', img: '/instruments.jfif' },
]

export default function GeneralOrdersPage() {
  const [activeTab, setActiveTab] = useState('safety')
  const active = categories.find(c => c.id === activeTab)!

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section className="relative min-h-[70vh] md:min-h-[85vh] overflow-hidden">
        <img src="/general-orders/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(13,27,26,0.78)' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10 flex flex-col justify-center min-h-[70vh] md:min-h-[85vh]">
          <a href="/#products" className="inline-flex items-center gap-2 text-teal-300 hover:text-white transition text-sm font-semibold mb-8 min-h-[44px]">
            ← Back to Products
          </a>
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              General Order Products
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Reliable Supply Across<br /><span className="text-teal-300">Every Sector</span>
            </h1>
            <p className="text-base md:text-lg text-teal-50/80 leading-relaxed max-w-xl">
              From everyday requirements to specialized products, we provide reliable sourcing solutions across multiple industries and business needs.
            </p>
            <div className="flex flex-wrap gap-8 pt-2">
              <div>
                <p className="text-3xl font-black text-white">500+</p>
                <p className="text-teal-200/60 text-xs uppercase tracking-widest mt-1">Products Sourced</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">50+</p>
                <p className="text-teal-200/60 text-xs uppercase tracking-widest mt-1">Trusted Brands</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">Multiple</p>
                <p className="text-teal-200/60 text-xs uppercase tracking-widest mt-1">Industries Served</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-teal-200/60 text-xs uppercase tracking-widest mt-1">Procurement Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Safety, tools, fasteners, welding, consumables, material handling and site supplies — sourced to specification for plants, projects and facilities.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Product Categories</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">Browse the full general-order range by category</p>
          </div>

          <div className="flex overflow-x-auto lg:grid lg:grid-cols-7 mb-12 gap-1.5 p-1 bg-slate-100 rounded-lg snap-x">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-shrink-0 lg:flex-shrink flex flex-col items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded-md transition-all snap-start ${
                  activeTab === cat.id
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'text-slate-600 hover:bg-white'
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="text-xs font-medium text-center whitespace-nowrap">{cat.label}</span>
              </button>
            ))}
          </div>

          <div>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{active.label}</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">{active.desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {active.products.map((p) => (
                <div
                  key={p.name}
                  className="rounded-lg shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 overflow-hidden bg-white"
                >
                  <div className="aspect-square relative overflow-hidden bg-slate-50">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">{p.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Explore Related Categories</h3>
            <p className="text-slate-600">Core industrial product lines for complete procurement support</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCategories.map((c) => (
              <a key={c.name} href={c.href} className="group">
                <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-teal-300 bg-white hover:-translate-y-1">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                  <div className="p-5 flex items-center gap-3">
                    <span className="text-teal-700 text-xl flex-shrink-0">→</span>
                    <div>
                      <h4 className="font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">{c.name}</h4>
                      <p className="text-sm text-slate-500 mt-1">{c.desc}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Product Outside This List?</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Send your specification and we will source it. General order procurement is built around client requirements, not a fixed catalogue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-teal-700 hover:bg-teal-800 text-white font-medium transition">
              Request a Quote
            </a>
            <a href="/#products" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-teal-700 font-medium transition">
              View All Categories
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
