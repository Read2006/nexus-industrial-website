
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Oil & Gas Industry Solutions</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#0d1b2e;--navy2:#0f2137;--navy3:#162840;--orange:#f97316;--orange2:#fb923c;--blue:#2563eb;--green:#16a34a;--green2:#4ade80;--white:#fff;--gray:#94a3b8;--gray2:#64748b}
body{font-family:'Inter',sans-serif;background:var(--navy);color:var(--white);overflow-x:hidden}
a{text-decoration:none;color:inherit}
img{display:block}
nav{background:rgba(13,27,46,.97);border-bottom:1px solid rgba(255,255,255,.08);padding:0 48px;display:flex;align-items:center;justify-content:space-between;height:66px;position:sticky;top:0;z-index:100;backdrop-filter:blur(12px)}
.nav-logo{display:flex;align-items:center;gap:10px}
.nav-icon{width:38px;height:38px;background:var(--orange);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:#000}
.nav-name{font-size:14px;font-weight:800}.nav-name span{color:var(--orange)}
nav ul{display:flex;gap:2px;list-style:none}
nav ul li a{color:var(--gray);font-size:13px;font-weight:500;padding:7px 12px;border-radius:6px;transition:all .2s}
nav ul li a:hover,nav ul li.active a{color:var(--white);background:rgba(255,255,255,.06)}
nav ul li.active a{color:var(--orange)}
.nav-btn{background:var(--orange);color:#000;padding:8px 20px;border-radius:7px;font-size:13px;font-weight:700}

/* HERO */
.hero{background:linear-gradient(135deg,#091422 0%,#0d1f3c 40%,#0e2244 70%,#182c4e 100%);min-height:580px;display:flex;align-items:center;padding:70px 48px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(37,99,235,.15),transparent)}
.hero-left{flex:1;max-width:580px;position:relative;z-index:2}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(249,115,22,.15);border:1px solid rgba(249,115,22,.4);color:var(--orange);font-size:11px;font-weight:700;letter-spacing:1.5px;padding:7px 16px;border-radius:20px;margin-bottom:26px;text-transform:uppercase}
.hero h1{font-size:56px;font-weight:900;line-height:1.04;letter-spacing:-2px;margin-bottom:20px}
.hero h1 .ora{color:var(--orange);display:block}
.hero-desc{font-size:15.5px;color:var(--gray);line-height:1.8;max-width:460px;margin-bottom:32px}
.hero-stats{display:flex;gap:32px;margin-bottom:36px}
.hs-num{font-size:28px;font-weight:900;color:var(--orange);line-height:1}
.hs-lbl{font-size:12px;color:var(--gray);margin-top:3px}
.hero-btns{display:flex;gap:12px}
.btn-ora{background:var(--orange);color:#000;padding:14px 28px;font-weight:700;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px}
.btn-drk{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:var(--white);padding:14px 28px;font-weight:600;font-size:14px;border-radius:8px;display:inline-flex;align-items:center;gap:8px}
.hero-right{position:relative;z-index:2;flex-shrink:0;margin-left:52px}
.hero-img-wrap{position:relative;width:460px;height:320px;border-radius:12px;overflow:hidden}
.hero-img-wrap img{width:100%;height:100%;object-fit:cover}
.fc{position:absolute;background:white;color:#000;border-radius:10px;padding:11px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,.4)}
.fc.tr{top:-14px;right:-14px}
.fc-icon{width:34px;height:34px;background:#16a34a;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.fc .fn{font-size:18px;font-weight:900;color:#000;line-height:1}
.fc .fl{font-size:11px;color:#666;margin-top:2px}
.fc.bl{bottom:-14px;left:-14px;background:var(--blue);color:white;border-radius:10px;padding:12px 18px}
.fc.bl .fn{font-size:22px;font-weight:900;color:white}
.fc.bl .fl{font-size:11px;color:rgba(255,255,255,.7);margin-top:2px}
.fc-cert{position:absolute;bottom:-14px;right:40px;background:rgba(13,27,46,.95);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:11px 16px}
.fc-cert p{font-size:11px;color:var(--gray);margin-bottom:3px}
.fc-cert strong{font-size:12px;font-weight:700;color:white}
.explore{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);text-align:center;color:var(--gray);font-size:10px;letter-spacing:2px;text-transform:uppercase;z-index:2}
.mouse{width:22px;height:34px;border:2px solid var(--gray);border-radius:11px;margin:7px auto 0;position:relative}
.mouse::after{content:'';width:3px;height:7px;background:var(--orange);border-radius:2px;position:absolute;top:5px;left:50%;transform:translateX(-50%);animation:sc 1.5s infinite}
@keyframes sc{0%{opacity:1;top:5px}100%{opacity:0;top:17px}}

/* STATS */
.stats{background:linear-gradient(180deg,#091422,#0f1e35);padding:52px 48px}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.sc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px 24px;text-align:center;transition:border-color .2s}
.sc:hover{border-color:rgba(249,115,22,.3)}
.sc-icon{width:52px;height:52px;background:var(--orange);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 18px}
.sc .num{font-size:44px;font-weight:900;color:var(--white);line-height:1;margin-bottom:6px}
.sc .lbl{font-size:13px;color:var(--gray)}

/* VALUE CHAIN */
.vc-section{background:#fff;padding:80px 48px;color:#111}
.sec-center{text-align:center;margin-bottom:52px}
.tag-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(249,115,22,.1);border:1px solid rgba(249,115,22,.3);color:var(--orange);font-size:11px;font-weight:700;letter-spacing:1.5px;padding:6px 16px;border-radius:20px;margin-bottom:16px;text-transform:uppercase}
.vc-section h2{font-size:40px;font-weight:900;color:#111;letter-spacing:-1.5px;margin-bottom:10px}
.vc-section h2 span{color:var(--orange)}
.sec-sub{font-size:15px;color:#666;max-width:480px;margin:0 auto}
.vc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.vcc{border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;transition:box-shadow .25s,transform .25s}
.vcc:hover{transform:translateY(-5px);box-shadow:0 20px 48px rgba(0,0,0,.1)}
.vch{padding:26px 26px 22px;position:relative;overflow:hidden}
.vch.blue{background:linear-gradient(135deg,#2563eb,#1d4ed8)}
.vch.green{background:linear-gradient(135deg,#16a34a,#15803d)}
.vch.red{background:linear-gradient(135deg,#dc2626,#c2410c)}
.vch::after{content:'';position:absolute;top:-30px;right:-30px;width:110px;height:110px;border-radius:50%;background:rgba(255,255,255,.1)}
.vch-icon{width:46px;height:46px;background:rgba(255,255,255,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:21px;margin-bottom:14px}
.vch h3{font-size:21px;font-weight:800;color:white;margin-bottom:3px}
.vch p{font-size:12px;color:rgba(255,255,255,.75);font-weight:500}
.vcb{padding:22px 26px}
.vcb .desc{font-size:13.5px;color:#555;line-height:1.65;margin-bottom:16px}
.vcm{display:flex;gap:24px;margin-bottom:18px;padding-bottom:16px;border-bottom:1px solid #f0f0f0}
.vm-val{font-size:19px;font-weight:800;color:#111}
.vm-val.g{color:var(--green)}
.vm-lbl{font-size:11.5px;color:#888;margin-top:2px}
.vc-list{list-style:none;display:flex;flex-direction:column;gap:9px}
.vc-list li{display:flex;align-items:center;gap:9px;font-size:13.5px;color:#444}
.vc-list li::before{content:'✓';width:19px;height:19px;min-width:19px;background:#d1fae5;color:var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800}

/* SAFETY */
.safety{position:relative;padding:90px 48px;text-align:center;overflow:hidden}
.s-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.s-ov{position:absolute;inset:0;background:rgba(6,16,32,.83)}
.s-cnt{position:relative;z-index:2}
.s-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(22,163,74,.2);border:1px solid rgba(22,163,74,.4);color:#4ade80;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:6px 16px;border-radius:20px;margin-bottom:20px;text-transform:uppercase}
.safety h2{font-size:44px;font-weight:900;letter-spacing:-1.5px;margin-bottom:14px}
.safety h2 span{color:#4ade80}
.s-sub{font-size:15.5px;color:rgba(255,255,255,.6);max-width:540px;margin:0 auto 48px;line-height:1.7}
.s-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:24px}
.s-card{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:22px 18px;text-align:left;backdrop-filter:blur(8px)}
.s-card-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.s-card-ico{width:34px;height:34px;background:rgba(22,163,74,.2);border:1px solid rgba(22,163,74,.35);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;color:#4ade80}
.s-val{font-size:22px;font-weight:900;color:#4ade80}
.s-card h4{font-size:13px;font-weight:700;color:white;margin-bottom:5px}
.s-card p{font-size:12px;color:rgba(255,255,255,.5);line-height:1.55}
.cert-row{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:18px 28px;display:flex;align-items:center;justify-content:center;gap:32px;flex-wrap:wrap}
.ci{display:flex;align-items:center;gap:9px}
.ci-chk{color:#4ade80;font-size:15px}
.ci strong{font-size:13px;color:white;font-weight:700}
.ci span{font-size:11px;color:rgba(255,255,255,.5);display:block;margin-top:1px}

/* LIFECYCLE */
.lifecycle{background:#fff;padding:80px 48px;color:#111}
.lifecycle h2{font-size:40px;font-weight:900;color:#111;letter-spacing:-1.5px;margin-bottom:10px}
.lifecycle h2 span{color:var(--orange)}
.lc-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(249,115,22,.1);border:1px solid rgba(249,115,22,.25);color:var(--orange);font-size:11px;font-weight:700;letter-spacing:1.5px;padding:6px 16px;border-radius:20px;margin-bottom:16px;text-transform:uppercase}
.tl{position:relative;display:grid;grid-template-columns:repeat(6,1fr);gap:0;margin-top:56px}
.tl::before{content:'';position:absolute;top:38px;left:6.5%;right:6.5%;height:3px;background:linear-gradient(90deg,#2563eb,#1d4ed8,#1e3a8a,#1e40af,#1d4ed8,#111827);z-index:0}
.tl-s{text-align:center;position:relative;z-index:1;padding:0 8px}
.tl-ico{width:76px;height:76px;background:var(--blue);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 16px;position:relative;z-index:1;transition:transform .2s}
.tl-s:last-child .tl-ico{background:#111827}
.tl-s:hover .tl-ico{transform:scale(1.08)}
.tl-num{font-size:10px;font-weight:700;letter-spacing:1.5px;color:#999;margin-bottom:7px;text-transform:uppercase}
.tl-s h4{font-size:15px;font-weight:800;color:#111;margin-bottom:7px}
.tl-s p{font-size:12px;color:#666;line-height:1.6}

/* CTA */
.cta{background:linear-gradient(135deg,#091422,#0f2137,#162840);padding:72px 48px;text-align:center;position:relative;overflow:hidden}
.cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(249,115,22,.07),transparent)}
.cta h2{font-size:40px;font-weight:900;letter-spacing:-1.5px;margin-bottom:12px;position:relative}
.cta h2 span{color:var(--orange)}
.cta p{color:var(--gray);font-size:16px;max-width:480px;margin:0 auto 32px;line-height:1.7;position:relative}
.cta-btns{display:flex;justify-content:center;gap:12px;position:relative}
footer{background:#060e1c;border-top:1px solid rgba(255,255,255,.07);padding:56px 48px 26px}
.fg{display:grid;grid-template-columns:2.2fr 1fr 1fr 1.2fr;gap:44px;margin-bottom:44px}
.flr{display:flex;align-items:center;gap:10px;margin-bottom:12px}
.flb{width:36px;height:36px;background:var(--orange);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#000}
.fbn{font-size:14px;font-weight:800}.fbn span{color:var(--orange)}
.fd{font-size:13px;color:var(--gray2);line-height:1.75;margin-bottom:14px}
.ctags{display:flex;gap:7px;flex-wrap:wrap}
.ct{background:rgba(249,115,22,.1);border:1px solid rgba(249,115,22,.25);color:var(--orange);font-size:11px;font-weight:600;padding:3px 9px;border-radius:4px}
.fc2 h5{font-size:11px;font-weight:700;letter-spacing:2px;color:var(--orange);text-transform:uppercase;margin-bottom:16px}
.fc2 ul{list-style:none;display:flex;flex-direction:column;gap:9px}
.fc2 ul li a{font-size:13.5px;color:var(--gray2);transition:color .2s}
.fc2 ul li a:hover{color:white}
.fco{display:flex;align-items:center;gap:9px;font-size:13.5px;color:var(--gray2);margin-bottom:9px}
.fco .i{color:var(--orange)}
.fb{border-top:1px solid rgba(255,255,255,.07);padding-top:22px;display:flex;justify-content:space-between;align-items:center}
.fb p{font-size:12px;color:var(--gray2)}
</style>
</head>
<body>

<nav>
  <div class="nav-logo">
    <div class="nav-icon">A</div>
    <div class="nav-name">ABT <span>EUROPE</span> LIMITED</div>
  </div>
  <ul>
    <li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Products</a></li>
    <li class="active"><a href="#">Industries</a></li><li><a href="#">Brands</a></li><li><a href="#">Contact</a></li>
  </ul>
  <a href="#" class="nav-btn">Get a Quote</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-left">
    <div class="hero-badge">⛽ OIL &amp; GAS INDUSTRY SOLUTIONS</div>
    <h1>Powering Global<span class="ora">Energy Operations</span></h1>
    <p class="hero-desc">Comprehensive solutions for upstream exploration, midstream transportation, and downstream refining operations. Trusted by leading energy companies across 50+ countries.</p>
    <div class="hero-stats">
      <div><div class="hs-num">140+</div><div class="hs-lbl">Projects</div></div>
      <div><div class="hs-num">25+</div><div class="hs-lbl">Years</div></div>
      <div><div class="hs-num">50+</div><div class="hs-lbl">Countries</div></div>
    </div>
    <div class="hero-btns">
      <a href="#" class="btn-ora">Request Quote →</a>
      <a href="#" class="btn-drk">▶ View Capabilities</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-img-wrap">
      <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=85" alt="Oil plant"/>
      <div class="fc tr">
        <div class="fc-icon">🛡️</div>
        <div><div class="fn">5M+</div><div class="fl">Safe Man-Hours</div></div>
      </div>
      <div class="fc bl">
        <div><div class="fn">Zero LTI</div><div class="fl">Safety Record</div></div>
      </div>
      <div class="fc-cert">
        <p>API Q1 &amp; Q2 Certified</p>
        <strong>Quality Management System</strong>
      </div>
    </div>
  </div>
  <div class="explore">EXPLORE<div class="mouse"></div></div>
</section>

<!-- STATS -->
<section class="stats">
  <div class="stats-grid">
    <div class="sc"><div class="sc-icon">📋</div><div class="num">140+</div><div class="lbl">Projects Delivered</div></div>
    <div class="sc"><div class="sc-icon">🏆</div><div class="num">25+</div><div class="lbl">Years Experience</div></div>
    <div class="sc"><div class="sc-icon">🌐</div><div class="num">50+</div><div class="lbl">Countries Served</div></div>
    <div class="sc"><div class="sc-icon">⛑️</div><div class="num">5M+</div><div class="lbl">Safe Man-Hours</div></div>
  </div>
</section>

<!-- VALUE CHAIN -->
<section class="vc-section">
  <div class="sec-center">
    <div class="tag-pill">🔗 VALUE CHAIN COVERAGE</div>
    <h2>Complete <span>Oil &amp; Gas</span> Value Chain</h2>
    <p class="sec-sub">End-to-end solutions covering every segment of the oil and gas industry</p>
  </div>
  <div class="vc-grid">
    <div class="vcc">
      <div class="vch blue"><div class="vch-icon">⚓</div><h3>Upstream</h3><p>Exploration &amp; Production</p></div>
      <div class="vcb">
        <p class="desc">Equipment and services for oil and gas exploration, drilling, and production operations.</p>
        <div class="vcm"><div><div class="vm-val">45+</div><div class="vm-lbl">Projects</div></div><div><div class="vm-val g">99.2%</div><div class="vm-lbl">Uptime</div></div></div>
        <ul class="vc-list"><li>Offshore Platforms</li><li>Onshore Drilling</li><li>Well Completion</li><li>Production Optimization</li></ul>
      </div>
    </div>
    <div class="vcc">
      <div class="vch green"><div class="vch-icon">🚛</div><h3>Midstream</h3><p>Transportation &amp; Storage</p></div>
      <div class="vcb">
        <p class="desc">Pipeline systems, storage solutions, and transportation infrastructure for oil and gas.</p>
        <div class="vcm"><div><div class="vm-val">60+</div><div class="vm-lbl">Projects</div></div><div><div class="vm-val g">99.5%</div><div class="vm-lbl">Uptime</div></div></div>
        <ul class="vc-list"><li>Pipeline Systems</li><li>Tank Farms</li><li>Compression Stations</li><li>Terminal Operations</li></ul>
      </div>
    </div>
    <div class="vcc">
      <div class="vch red"><div class="vch-icon">📊</div><h3>Downstream</h3><p>Refining &amp; Distribution</p></div>
      <div class="vcb">
        <p class="desc">Refinery equipment, petrochemical processing, and distribution solutions.</p>
        <div class="vcm"><div><div class="vm-val">35+</div><div class="vm-lbl">Projects</div></div><div><div class="vm-val g">98.8%</div><div class="vm-lbl">Uptime</div></div></div>
        <ul class="vc-list"><li>Refineries</li><li>Petrochemicals</li><li>LNG Plants</li><li>Distribution Networks</li></ul>
      </div>
    </div>
  </div>
</section>

<!-- SAFETY -->
<section class="safety">
  <img class="s-bg" src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1600&q=80" alt="Offshore platform"/>
  <div class="s-ov"></div>
  <div class="s-cnt">
    <div class="s-tag">🛡️ HEALTH, SAFETY &amp; ENVIRONMENT</div>
    <h2>Safety is Our <span>Core Value</span></h2>
    <p class="s-sub">Zero incidents, zero compromises. Our commitment to HSE excellence protects people, assets, and the environment.</p>
    <div class="s-cards">
      <div class="s-card"><div class="s-card-top"><div class="s-card-ico">🛡️</div><div class="s-val">0 LTI</div></div><h4>Process Safety Management</h4><p>Comprehensive PSM programs ensuring safe operations across all facilities</p></div>
      <div class="s-card"><div class="s-card-top"><div class="s-card-ico">⚠️</div><div class="s-val">&lt;30 min</div></div><h4>Emergency Response</h4><p>24/7 emergency response teams with rapid deployment capabilities</p></div>
      <div class="s-card"><div class="s-card-top"><div class="s-card-ico">🌿</div><div class="s-val">100%</div></div><h4>Environmental Compliance</h4><p>Full compliance with EPA, EU ETS, and international environmental standards</p></div>
      <div class="s-card"><div class="s-card-top"><div class="s-card-ico">✅</div><div class="s-val">API Q1</div></div><h4>Quality Assurance</h4><p>API, ASME, and ISO certified quality management systems</p></div>
    </div>
    <div class="cert-row">
      <div class="ci"><span class="ci-chk">✓</span><div><strong>API Q1</strong><span>Quality Management</span></div></div>
      <div class="ci"><span class="ci-chk">✓</span><div><strong>API Q2</strong><span>Service Quality</span></div></div>
      <div class="ci"><span class="ci-chk">✓</span><div><strong>ISO 9001</strong><span>Quality Systems</span></div></div>
      <div class="ci"><span class="ci-chk">✓</span><div><strong>ISO 14001</strong><span>Environmental</span></div></div>
      <div class="ci"><span class="ci-chk">✓</span><div><strong>ISO 45001</strong><span>Health &amp; Safety</span></div></div>
      <div class="ci"><span class="ci-chk">✓</span><div><strong>ATEX</strong><span>Explosive Atmospheres</span></div></div>
    </div>
  </div>
</section>

<!-- LIFECYCLE -->
<section class="lifecycle">
  <div class="sec-center">
    <div class="lc-tag">🔄 OIL &amp; GAS LIFECYCLE</div>
    <h2>From Exploration to <span>Distribution</span></h2>
    <p class="sec-sub">Our solutions support every stage of the oil and gas value chain</p>
  </div>
  <div class="tl">
    <div class="tl-s"><div class="tl-ico">🧭</div><div class="tl-num">STEP 01</div><h4>Exploration</h4><p>Seismic surveys, geological studies, and reservoir analysis to identify hydrocarbon reserves.</p></div>
    <div class="tl-s"><div class="tl-ico">📚</div><div class="tl-num">STEP 02</div><h4>Drilling</h4><p>Well construction using advanced drilling technologies for optimal reservoir access.</p></div>
    <div class="tl-s"><div class="tl-ico">💧</div><div class="tl-num">STEP 03</div><h4>Production</h4><p>Extraction of crude oil and natural gas using primary, secondary, and enhanced recovery methods.</p></div>
    <div class="tl-s"><div class="tl-ico">🧪</div><div class="tl-num">STEP 04</div><h4>Processing</h4><p>Separation, treatment, and processing of hydrocarbons to meet pipeline specifications.</p></div>
    <div class="tl-s"><div class="tl-ico">🚛</div><div class="tl-num">STEP 05</div><h4>Transportation</h4><p>Pipeline, tanker, and rail transportation of crude oil, natural gas, and refined products.</p></div>
    <div class="tl-s"><div class="tl-ico" style="background:#111827">🏭</div><div class="tl-num">STEP 06</div><h4>Refining</h4><p>Converting crude oil into valuable petroleum products through distillation and cracking.</p></div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <h2>Ready to <span>Partner</span> With Us?</h2>
  <p>Get in touch today to discuss your Oil &amp; Gas supply needs and discover how we can support your operations.</p>
  <div class="cta-btns"><a href="#" class="btn-ora">Request a Quote →</a><a href="#" class="btn-drk">View All Products</a></div>
</section>

<!-- FOOTER -->
<footer>
  <div class="fg">
    <div>
      <div class="flr"><div class="flb">A</div><div class="fbn">ABT <span>EUROPE</span> LIMITED</div></div>
      <p class="fd">Delivering reliable industrial supply and global trade solutions for Oil &amp; Gas, Cement, Fertilizer, and EPC industries worldwide.</p>
      <div class="ctags"><span class="ct">UK Registered</span><span class="ct">ISO Certified</span><span class="ct">API Q1</span></div>
    </div>
    <div class="fc2"><h5>Quick Links</h5><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Products</a></li><li><a href="#">Industries</a></li></ul></div>
    <div class="fc2"><h5>Industries</h5><ul><li><a href="#">Oil &amp; Gas</a></li><li><a href="#">Cement</a></li><li><a href="#">Fertilizer</a></li><li><a href="#">EPC Projects</a></li></ul></div>
    <div class="fc2"><h5>Contact</h5>
      <div class="fco"><span class="i">📞</span>+44 (0) 1234 567890</div>
      <div class="fco"><span class="i">📧</span>info@abteurope.uk</div>
      <div class="fco"><span class="i">🌐</span>abteurope.uk</div>
      <div class="fco"><span class="i">📍</span>United Kingdom</div>
    </div>
  </div>
  <div class="fb"><p>© 2024 ABT Europe Limited. All rights reserved.</p><div class="ctags"><span class="ct">Oil &amp; Gas Specialist</span></div></div>
</footer>
</body>
</html>
