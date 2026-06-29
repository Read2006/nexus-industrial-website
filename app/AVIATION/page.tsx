<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Products for Aviation & Airports — ZFC Corporations</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@600;700;800&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --teal: #00C896;
    --teal-dark: #00A87A;
    --dark: #0d1f1a;
    --dark2: #0f2820;
    --light-bg: #f0f4f3;
    --card-bg: #ffffff;
    --text-dark: #0d1f1a;
    --text-muted: #5a7068;
    --border: #dde8e4;
  }

  body {
    font-family: 'Barlow', sans-serif;
    background: #fff;
    color: var(--text-dark);
    overflow-x: hidden;
  }

  /* ============ HERO ============ */
  .hero {
    position: relative;
    min-height: 520px;
    background: linear-gradient(to right, rgba(10,25,20,0.97) 45%, rgba(10,25,20,0.5) 100%),
                url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80') center/cover no-repeat;
    display: flex;
    align-items: center;
    padding: 60px 80px;
    overflow: hidden;
  }

  .hero-content {
    max-width: 660px;
    position: relative;
    z-index: 2;
  }

  .sector-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 20px;
    padding: 6px 14px;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 22px;
  }

  .sector-badge .flag {
    font-size: 16px;
  }

  .hero h1 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 60px;
    font-weight: 800;
    color: #fff;
    line-height: 1.05;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .hero-divider {
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #3a5aff, var(--teal));
    margin-bottom: 20px;
    border-radius: 2px;
  }

  .hero p {
    color: rgba(255,255,255,0.75);
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 32px;
    max-width: 520px;
  }

  .hero-stats {
    display: flex;
    gap: 12px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  }

  .stat-pill {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    padding: 10px 18px;
    text-align: center;
  }

  .stat-pill .num {
    display: block;
    font-size: 22px;
    font-weight: 800;
    color: var(--teal);
    line-height: 1;
  }

  .stat-pill .label {
    display: block;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    margin-top: 4px;
  }

  .hero-btns {
    display: flex;
    gap: 14px;
    align-items: center;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--teal);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 14px 26px;
    border-radius: 6px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-primary:hover { background: var(--teal-dark); }
  .btn-primary svg { width: 14px; height: 14px; fill: currentColor; }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 13px 24px;
    border-radius: 6px;
    border: 1.5px solid rgba(255,255,255,0.35);
    text-decoration: none;
    cursor: pointer;
    transition: border-color 0.2s;
  }
  .btn-secondary:hover { border-color: #fff; }

  /* ============ OVERVIEW ============ */
  .overview {
    background: var(--light-bg);
    padding: 80px 80px;
  }

  .overview-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    align-items: start;
    max-width: 1400px;
    margin: 0 auto;
  }

  .overview-text {
    padding-right: 20px;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 14px;
  }

  .section-label::before {
    content: '';
    width: 28px;
    height: 2px;
    background: var(--teal);
    border-radius: 2px;
    display: inline-block;
  }

  .overview-text h2 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 40px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .overview-text h2 span {
    color: var(--teal);
  }

  .overview-text p {
    font-size: 14px;
    line-height: 1.75;
    color: var(--text-muted);
    margin-bottom: 16px;
  }

  .overview-text .ov-btns {
    display: flex;
    gap: 14px;
    margin-top: 28px;
    align-items: center;
    flex-wrap: wrap;
  }

  .btn-primary-dark {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--teal);
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 13px 22px;
    border-radius: 6px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-primary-dark:hover { background: var(--teal-dark); }

  .btn-outline-dark {
    display: inline-flex;
    align-items: center;
    background: transparent;
    color: var(--text-dark);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 12px 22px;
    border-radius: 6px;
    border: 1.5px solid #c0d0cc;
    text-decoration: none;
    cursor: pointer;
    transition: border-color 0.2s;
  }
  .btn-outline-dark:hover { border-color: var(--teal); }

  .supply-card {
    background: #fff;
    border-radius: 14px;
    padding: 28px 26px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
  }

  .supply-card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text-dark);
    margin-bottom: 18px;
  }

  .supply-card-header .icon-box {
    width: 28px;
    height: 28px;
    border: 1.5px solid var(--teal);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .supply-card-header .icon-box svg {
    width: 14px;
    height: 14px;
    fill: var(--teal);
  }

  .supply-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .supply-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  .supply-list li::before {
    content: '';
    width: 7px;
    height: 7px;
    min-width: 7px;
    background: var(--teal);
    border-radius: 50%;
    margin-top: 5px;
  }

  .why-card {
    background: var(--dark2);
    border-radius: 14px;
    padding: 28px 26px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  }

  .why-card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 18px;
  }

  .why-card-header .icon-box {
    width: 28px;
    height: 28px;
    border: 1.5px solid var(--teal);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .why-card-header .icon-box svg {
    width: 13px;
    height: 13px;
    stroke: var(--teal);
    fill: none;
  }

  .why-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .why-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    color: rgba(255,255,255,0.8);
    line-height: 1.5;
  }

  .why-list li .check-icon {
    width: 18px;
    height: 18px;
    min-width: 18px;
    border: 1.5px solid var(--teal);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
  }

  .why-list li .check-icon svg {
    width: 9px;
    height: 9px;
    stroke: var(--teal);
    fill: none;
    stroke-width: 2.5;
  }

  /* ============ PRODUCT RANGE ============ */
  .products-section {
    background: var(--light-bg);
    padding: 60px 80px;
    border-top: 1px solid #e0eae6;
  }

  .products-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 36px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }

  .products-header h2 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 36px;
    font-weight: 800;
    text-transform: uppercase;
  }

  .carousel-btns {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px solid #c0d0cc;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
  }

  .carousel-btn:hover { border-color: var(--teal); }
  .carousel-btn.active { background: var(--teal); border-color: var(--teal); }
  .carousel-btn svg { width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 2; }
  .carousel-btn.active svg { stroke: #fff; }

  .product-cards {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;
  }

  .product-card {
    background: #fff;
    border-radius: 12px;
    padding: 22px 18px;
    border-top: 3px solid;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    position: relative;
    overflow: hidden;
  }

  .product-card:nth-child(1) { border-top-color: #6c5ce7; }
  .product-card:nth-child(2) { border-top-color: #00c896; }
  .product-card:nth-child(3) { border-top-color: #4a9eff; }
  .product-card:nth-child(4) { border-top-color: #fd7b22; }
  .product-card:nth-child(5) { border-top-color: #f9ca0a; }
  .product-card:nth-child(6) { border-top-color: #f9ca0a; }

  .product-card .pc-icon {
    font-size: 32px;
    margin-bottom: 14px;
    display: block;
  }

  .product-card h3 {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--text-dark);
    margin-bottom: 8px;
  }

  .product-card p {
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.55;
  }

  /* ============ GALLERY ============ */
  .gallery-section {
    background: var(--dark);
    padding: 60px 80px;
  }

  .gallery-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }

  .gallery-header h2 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 36px;
    font-weight: 800;
    text-transform: uppercase;
    color: #fff;
  }

  .browse-link {
    color: var(--teal);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .browse-link:hover { text-decoration: underline; }

  .gallery-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 280px 280px;
    gap: 10px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .gallery-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
  }

  .gallery-item:first-child {
    grid-row: 1 / 3;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
  }

  .gallery-item:hover img { transform: scale(1.04); }

  .gallery-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%);
    padding: 20px 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .gallery-item:first-child .gallery-overlay {
    justify-content: space-between;
  }

  .gallery-item:first-child .carousel-arrow {
    align-self: flex-end;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--teal);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gallery-item:first-child .carousel-arrow svg {
    width: 14px; height: 14px; stroke: #fff; fill: none; stroke-width: 2;
  }

  .gallery-cat {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 6px;
  }

  .gallery-link {
    color: var(--teal);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  /* ============ PROCESS ============ */
  .process-section {
    background: #fff;
    padding: 80px 80px;
    text-align: center;
  }

  .process-section .section-label {
    justify-content: center;
  }

  .process-section h2 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 36px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 60px;
  }

  .process-steps {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    align-items: start;
    gap: 0;
    max-width: 900px;
    margin: 0 auto 50px;
  }

  .process-step {
    text-align: center;
    padding: 0 10px;
  }

  .step-icon-wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: var(--dark);
    border-radius: 50%;
    margin: 0 auto 20px;
  }

  .step-icon-wrap .step-num {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 24px;
    height: 24px;
    background: var(--teal);
    border-radius: 50%;
    font-size: 10px;
    font-weight: 800;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .step-icon-wrap svg {
    width: 28px;
    height: 28px;
    stroke: var(--teal);
    fill: none;
    stroke-width: 1.5;
  }

  .process-connector {
    align-self: center;
    margin-top: -60px;
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, var(--teal), rgba(0,200,150,0.3));
    min-width: 60px;
  }

  .process-step h3 {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .process-step p {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.65;
    max-width: 200px;
    margin: 0 auto;
  }

  .process-section .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--teal);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 16px 32px;
    border-radius: 8px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
  }

  .process-section .cta-btn:hover { background: var(--teal-dark); }

  .process-section .cta-btn svg {
    width: 15px;
    height: 15px;
    fill: #fff;
  }

  @media (max-width: 1100px) {
    .product-cards { grid-template-columns: repeat(3, 1fr); }
    .overview-inner { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
    .gallery-item:first-child { grid-row: auto; }
  }

  @media (max-width: 768px) {
    .hero, .overview, .products-section, .gallery-section, .process-section { padding: 40px 24px; }
    .hero h1 { font-size: 36px; }
    .product-cards { grid-template-columns: repeat(2, 1fr); }
    .process-steps { grid-template-columns: 1fr; }
    .process-connector { display: none; }
    .gallery-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<!-- ===== HERO ===== -->
<section class="hero">
  <div class="hero-content">
    <div class="sector-badge">
      <span class="flag">🏭</span>
      AVIATION SECTOR
    </div>

    <h1>Products for Aviation<br>& Airports</h1>
    <div class="hero-divider"></div>

    <p>We supply ground support instruments, fuel monitoring, UPS and electrical equipment to airports, airside facilities and aviation fuel operations.</p>

    <div class="hero-stats">
      <div class="stat-pill">
        <span class="num">500+</span>
        <span class="label">Products in Stock</span>
      </div>
      <div class="stat-pill">
        <span class="num">20+</span>
        <span class="label">Global Brands</span>
      </div>
      <div class="stat-pill">
        <span class="num">IP66</span>
        <span class="label">Rated Products</span>
      </div>
      <div class="stat-pill">
        <span class="num">24hr</span>
        <span class="label">Quote Turnaround</span>
      </div>
    </div>

    <div class="hero-btns">
      <a href="#" class="btn-primary">
        <svg viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        Request a Quote
      </a>
      <a href="#" class="btn-secondary">Talk to a Specialist</a>
    </div>
  </div>
</section>

<!-- ===== OVERVIEW ===== -->
<section class="overview">
  <div class="overview-inner">
    <div class="overview-text">
      <div class="section-label">Overview</div>
      <h2>Supplying the <span>Aviation</span> Sector</h2>
      <p>ZFC Corporations supplies instrumentation, power and electrical products to airport facilities, aviation fuel operations and airside service providers. We stock products from globally trusted brands — everything from aviation fuel flow meters to critical UPS systems for terminal and ATC infrastructure.</p>
      <p>Genuine OEM products with full manufacturer documentation, supplied fast to keep airport operations running.</p>
      <div class="ov-btns">
        <a href="#" class="btn-primary-dark">Request a Quote →</a>
        <a href="#" class="btn-outline-dark">Talk to a Specialist</a>
      </div>
    </div>

    <!-- What We Supply Card -->
    <div class="supply-card">
      <div class="supply-card-header">
        <div class="icon-box">
          <svg viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        What We Supply
      </div>
      <ul class="supply-list">
        <li>Aviation fuel flow meters and custody transfer instruments</li>
        <li>Fuel level gauging and tank monitoring systems</li>
        <li>UPS systems for ATC, FIDS and gate equipment</li>
        <li>Fire and gas detection systems</li>
        <li>Pressure gauges and transmitters for fuel systems</li>
        <li>Grounding and bonding equipment for fueling</li>
        <li>Surge protection for avionics and ATC electronics</li>
        <li>Power distribution — LV switchgear &amp; panel components</li>
      </ul>
    </div>

    <!-- Why Choose ZFC Card -->
    <div class="why-card">
      <div class="why-card-header">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        Why Choose ZFC
      </div>
      <ul class="why-list">
        <li>
          <div class="check-icon">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          Products meeting aviation industry standards
        </li>
        <li>
          <div class="check-icon">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          Genuine OEM with full manufacturer documentation
        </li>
        <li>
          <div class="check-icon">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          Urgent supply for airport maintenance shutdowns
        </li>
        <li>
          <div class="check-icon">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          Traceability certificates for fuel system instruments
        </li>
        <li>
          <div class="check-icon">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          Technical consultation for procurement specifications
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- ===== PRODUCT RANGE ===== -->
<section class="products-section">
  <div style="max-width:1400px;margin:0 auto;">
    <div class="products-header">
      <div>
        <div class="section-label" style="margin-bottom:8px;">Product Range</div>
        <h2>Products We Supply</h2>
      </div>
      <div class="carousel-btns">
        <button class="carousel-btn">
          <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button class="carousel-btn active">
          <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>

    <div class="product-cards">
      <div class="product-card">
        <span class="pc-icon">⛽</span>
        <h3>Fuel Flow Meters</h3>
        <p>Emerson, Endress+Hauser — custody transfer and fuel monitoring meters</p>
      </div>
      <div class="product-card">
        <span class="pc-icon">📡</span>
        <h3>Level Instruments</h3>
        <p>WIKA, Vega — aviation fuel tank level gauges and transmitters</p>
      </div>
      <div class="product-card">
        <span class="pc-icon">🔋</span>
        <h3>Critical UPS Systems</h3>
        <p>GUTOR, Borri — UPS for ATC, FIDS and gate systems</p>
      </div>
      <div class="product-card">
        <span class="pc-icon">🔥</span>
        <h3>Fire &amp; Gas Detection</h3>
        <p>Apollo, Hochiki, Honeywell — airport and hangar fire detection</p>
      </div>
      <div class="product-card">
        <span class="pc-icon">💡</span>
        <h3>Emergency Lighting</h3>
        <p>Legrand, Schneider — runway and terminal emergency lighting</p>
      </div>
      <div class="product-card">
        <span class="pc-icon">⚡</span>
        <h3>Surge Protection</h3>
        <p>Dehn, OBO — SPDs for avionics and ATC electronic systems</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== GALLERY ===== -->
<section class="gallery-section">
  <div class="gallery-header">
    <h2>Where Our Products Are Used</h2>
    <a href="#" class="browse-link">Browse All Products →</a>
  </div>

  <div class="gallery-grid">
    <!-- Large left item -->
    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&q=80" alt="Industrial Automation" />
      <div class="gallery-overlay">
        <div class="carousel-arrow">
          <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </div>
        <div>
          <div class="gallery-cat">Industrial Automation</div>
          <a href="#" class="gallery-link">View Products →</a>
        </div>
      </div>
    </div>

    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" alt="Control & Instrumentation" />
      <div class="gallery-overlay">
        <div class="gallery-cat">Control &amp; Instrumentation</div>
        <a href="#" class="gallery-link">View Products →</a>
      </div>
    </div>

    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" alt="Electrical Equipment" />
      <div class="gallery-overlay">
        <div class="gallery-cat">Electrical Equipment</div>
        <a href="#" class="gallery-link">View Products →</a>
      </div>
    </div>

    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80" alt="Valves & Flow Control" />
      <div class="gallery-overlay">
        <div class="gallery-cat">Valves &amp; Flow Control</div>
        <a href="#" class="gallery-link">View Products →</a>
      </div>
    </div>

    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?w=600&q=80" alt="Pumps & Drive Systems" />
      <div class="gallery-overlay">
        <div class="gallery-cat">Pumps &amp; Drive Systems</div>
        <a href="#" class="gallery-link">View Products →</a>
      </div>
    </div>

    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80" alt="Safety & Process Systems" />
      <div class="gallery-overlay">
        <div class="gallery-cat">Safety &amp; Process Systems</div>
        <a href="#" class="gallery-link">View Products →</a>
      </div>
    </div>
  </div>
</section>

<!-- ===== PROCESS ===== -->
<section class="process-section">
  <div class="section-label">How It Works</div>
  <h2>Simple 3-Step Procurement</h2>

  <div class="process-steps">
    <!-- Step 1 -->
    <div class="process-step">
      <div class="step-icon-wrap">
        <span class="step-num">01</span>
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <path d="M9 7h6M9 11h6M9 15h4"/>
        </svg>
      </div>
      <h3>Submit Your Enquiry</h3>
      <p>Send us part numbers, datasheets, model numbers or a full project BOM. Our team responds within 24 hours.</p>
    </div>

    <div class="process-connector"></div>

    <!-- Step 2 -->
    <div class="process-step">
      <div class="step-icon-wrap">
        <span class="step-num">02</span>
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="8" r="6"/>
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
      </div>
      <h3>We Source &amp; Verify</h3>
      <p>We confirm availability from authorised channels, verify authenticity and match your exact specifications.</p>
    </div>

    <div class="process-connector"></div>

    <!-- Step 3 -->
    <div class="process-step">
      <div class="step-icon-wrap">
        <span class="step-num">03</span>
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="1"/>
          <path d="M16 8h4l3 5v3h-7V8z"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      </div>
      <h3>You Receive</h3>
      <p>Products dispatched with full documentation — certificate of conformity, datasheet and packing list.</p>
    </div>
  </div>

  <a href="#" class="cta-btn">
    <svg viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    Start Your Enquiry
  </a>
</section>

</body>
</html>
