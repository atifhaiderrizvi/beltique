/* BELTIQUE storefront — deliberately framework-free for a fast, portable demo. */
const productData = [
  {
    id: "noir-atelier", name: "The Noir Atelier", gender: "Men", collection: "Signature", color: "Black", material: "Italian Leather", price: 148, rating: "4.9", reviews: 124,
    description: "Polished buckle, vegetable-tanned calf leather.", detail: "A refined essential cut from supple Italian calf leather and finished with our slim, hand-polished signature buckle.",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=88", image2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=88", image3: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=88",
    colors: [{ name: "Noir", hex: "#22201e" }, { name: "Espresso", hex: "#4b3428" }]
  },
  {
    id: "sienna-curve", name: "The Sienna Curve", gender: "Women", collection: "Essentials", color: "Brown", material: "Italian Leather", price: 132, rating: "4.8", reviews: 86,
    description: "Sculpted gold buckle, burnished cognac leather.", detail: "Designed around a fluid, sculptural buckle in softly brushed gold. Its rich cognac finish develops a character unique to its wearer.",
    image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?auto=format&fit=crop&w=1200&q=88", image2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=88", image3: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=88",
    colors: [{ name: "Sienna", hex: "#874c2e" }, { name: "Black", hex: "#252321" }]
  },
  {
    id: "ivory-link", name: "The Ivory Link", gender: "Women", collection: "Signature", color: "Ivory", material: "Italian Leather", price: 158, rating: "5.0", reviews: 57,
    description: "Smooth ivory leather, delicate chain detail.", detail: "A modern take on a jewel belt. Smooth ivory leather sits against a distinctive brushed-gold link fastening with effortless grace.",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=88", image2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=88", image3: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=88",
    colors: [{ name: "Ivory", hex: "#e9e2d5" }, { name: "Tan", hex: "#b6885e" }]
  },
  {
    id: "oxford-frame", name: "The Oxford Frame", gender: "Men", collection: "Essentials", color: "Brown", material: "Suede", price: 138, rating: "4.9", reviews: 92,
    description: "Deep espresso suede, quietly distinctive frame.", detail: "A tactile take on everyday tailoring. Our finely brushed Italian suede lends an otherwise classic profile a softer point of view.",
    image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=1200&q=88", image2: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1200&q=88", image3: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=88",
    colors: [{ name: "Espresso", hex: "#36251d" }, { name: "Navy", hex: "#202c3a" }]
  },
  {
    id: "celine-slim", name: "The Celine Slim", gender: "Women", collection: "Essentials", color: "Black", material: "Italian Leather", price: 118, rating: "4.8", reviews: 76,
    description: "Slim black leather with a softened oval buckle.", detail: "A slender, all-occasion silhouette with a subtle oval buckle. Crafted in leather chosen for its exceptional surface and structure.",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=88", image2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=88", image3: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=88",
    colors: [{ name: "Black", hex: "#22201e" }, { name: "Wine", hex: "#5b1f27" }]
  },
  {
    id: "ridge-braid", name: "The Ridge Braid", gender: "Men", collection: "Travel", color: "Brown", material: "Woven", price: 128, rating: "4.7", reviews: 61,
    description: "Flexible braided leather for movement and ease.", detail: "Hand-braided leather meets a low-profile buckle in a design made to shift with your day, without compromising its considered look.",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=88", image2: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=88", image3: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=88",
    colors: [{ name: "Chestnut", hex: "#754426" }, { name: "Navy", hex: "#23354b" }]
  },
  {
    id: "camel-arch", name: "The Camel Arch", gender: "Women", collection: "Signature", color: "Tan", material: "Italian Leather", price: 145, rating: "4.9", reviews: 104,
    description: "Warm camel leather with an architectural closure.", detail: "A sculpted gold-tone closure gives a polished finish to this warm camel belt, designed to complement a refined, everyday wardrobe.",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=88", image2: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=88", image3: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=88",
    colors: [{ name: "Camel", hex: "#af7545" }, { name: "Ivory", hex: "#e7dfd3" }]
  },
  {
    id: "midnight-reversible", name: "The Midnight Reversible", gender: "Men", collection: "Travel", color: "Black", material: "Italian Leather", price: 165, rating: "5.0", reviews: 49,
    description: "Black-to-navy reversible leather, precision edge paint.", detail: "Two essential tones in a single impeccably finished belt. Turn the buckle to move from classic black to an understated midnight navy.",
    image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1200&q=88", image2: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1200&q=88", image3: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=88",
    colors: [{ name: "Black", hex: "#1f1e1c" }, { name: "Midnight", hex: "#172331" }]
  }
];

const state = {
  cart: JSON.parse(localStorage.getItem("beltique-cart") || "[]"),
  saved: JSON.parse(localStorage.getItem("beltique-saved") || "[]"),
  filters: { gender: "All", color: "All", material: "All", sort: "Featured" },
  shopLimit: 8,
  listView: false,
  product: null,
  galleryImage: 0,
  productColor: 0,
  productSize: "30",
  productQuantity: 1,
  promo: 0,
  carouselIndex: 0,
  testimonialIndex: 0
};

const app = document.querySelector("#app");
const cartDrawer = document.querySelector(".cart-drawer");
const overlay = document.querySelector(".overlay");
const searchDialog = document.querySelector(".search-dialog");
const simpleDialog = document.querySelector(".simple-dialog");
const money = value => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
const getProduct = id => productData.find(product => product.id === id);
const escapeText = text => String(text).replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[char]);
const stars = () => '<span class="stars" aria-label="5 out of 5 stars">★★★★★</span>';

function refreshIcons() { if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.45 } }); }
function persist() { localStorage.setItem("beltique-cart", JSON.stringify(state.cart)); localStorage.setItem("beltique-saved", JSON.stringify(state.saved)); }
function announce(message) {
  const toast = document.createElement("div"); toast.className = "toast";
  toast.innerHTML = `<i data-lucide="sparkle"></i><span>${escapeText(message)}</span>`;
  document.querySelector(".toast-region").append(toast); refreshIcons();
  setTimeout(() => toast.remove(), 3200);
}
function goTo(hash) { history.pushState({}, "", hash); render(); window.scrollTo({ top: 0, behavior: "auto" }); }
function productCard(product) {
  const saved = state.saved.includes(product.id);
  return `<article class="product-card" data-product-card="${product.id}">
    <div class="product-visual" role="button" tabindex="0" aria-label="View ${escapeText(product.name)}" data-open-product="${product.id}">
      <img src="${product.image}" alt="${escapeText(product.name)} belt" loading="lazy" />
      <img class="secondary-image" src="${product.image2}" alt="" loading="lazy" />
      <button class="wishlist-button ${saved ? "is-saved" : ""}" data-save="${product.id}" aria-label="${saved ? "Remove from" : "Add to"} wishlist"><i data-lucide="heart"></i></button>
      <button class="quick-add button button-light" data-quick-add="${product.id}">QUICK ADD <i data-lucide="plus"></i></button>
    </div>
    <div class="product-info">
      <div class="product-meta"><span>${product.gender.toUpperCase()} · ${product.collection.toUpperCase()}</span>${stars()}</div>
      <h3 class="product-name"><button data-open-product="${product.id}">${escapeText(product.name)}</button></h3>
      <p class="product-desc">${escapeText(product.description)}</p>
      <p class="product-price">${money(product.price)}</p>
    </div>
  </article>`;
}

function homePage() {
  const featured = productData.slice(0, 4).map(productCard).join("");
  return `
    <section class="hero" id="home">
      <img class="hero-image" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=90" alt="A model in a tailored neutral fashion look" fetchpriority="high" />
      <div class="hero-content"><p class="eyebrow">THE AUTUMN / WINTER EDIT</p><h1>THE BELT,<br>REDEFINED.</h1><p>Timeless craftsmanship. Modern expression.</p><div class="hero-actions"><button class="button button-light" data-set-gender="Men">SHOP MEN <i data-lucide="arrow-up-right"></i></button><button class="button button-outline" data-set-gender="Women">SHOP WOMEN <i data-lucide="arrow-up-right"></i></button></div></div>
      <span class="hero-signature">Made to move through life beautifully.</span><span class="hero-scroll">SCROLL TO DISCOVER</span>
    </section>
    <section class="section" id="collections">
      <div class="section-heading"><div><p class="eyebrow">01 / THE ESSENTIALS</p><h2 class="section-title">THE SIGNATURE<br>COLLECTION</h2></div><div><p class="section-intro">The pieces that define us. Thoughtfully made in Italy for the rhythm of every day.</p><button class="text-link" data-shop-all>Explore the collection <i data-lucide="arrow-up-right"></i></button></div></div>
      <div class="collection-grid">${featured}</div>
    </section>
    <section class="story" id="story"><div class="story-image"><img src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1500&q=88" alt="Craftsperson working with fine leather" loading="lazy" /></div><div class="story-copy"><p class="eyebrow">OUR PHILOSOPHY</p><h2>MADE TO BE WORN.<br>BUILT TO LAST.</h2><p>BELTIQUE brings together exacting Italian leatherwork and a distinctly modern point of view. Every curve, edge and fastening has a reason to be there — and a life ahead of it.</p><button class="text-link" data-help="Our story">Discover our story <i data-lucide="arrow-up-right"></i></button></div></section>
    <section class="category-section" aria-label="Shop categories"><div class="category-grid">
      <a class="category-card" href="#shop" data-filter-link="Men"><img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1100&q=88" alt="Men's collection" loading="lazy"/><div class="category-info"><h3>MEN</h3><span class="circle-arrow"><i data-lucide="arrow-up-right"></i></span></div></a>
      <a class="category-card" href="#shop" data-filter-link="Women"><img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1100&q=88" alt="Women's collection" loading="lazy"/><div class="category-info"><h3>WOMEN</h3><span class="circle-arrow"><i data-lucide="arrow-up-right"></i></span></div></a>
      <a class="category-card" href="#shop" data-filter-link="Signature"><img src="https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&w=1400&q=88" alt="The BELTIQUE signature collection" loading="lazy"/><div class="category-info"><h3>SIGNATURE<br>COLLECTION</h3><span class="circle-arrow"><i data-lucide="arrow-up-right"></i></span></div></a>
    </div></section>
    <section class="section why" id="why"><div class="section-heading"><div><p class="eyebrow">THE BELTIQUE STANDARD</p><h2 class="section-title">EXCEPTIONAL<br>BY DESIGN.</h2></div><p class="section-intro">Created to become a quiet, indispensable part of your wardrobe.</p></div><div class="why-grid"><div class="feature"><span class="feature-number">01</span><h3>Premium Materials</h3><p>Exceptional leathers sourced from respected European tanneries.</p></div><div class="feature"><span class="feature-number">02</span><h3>Timeless Design</h3><p>Considered silhouettes that transcend a season or a trend.</p></div><div class="feature"><span class="feature-number">03</span><h3>Precision Craftsmanship</h3><p>Every edge is burnished, every closure meticulously finished by hand.</p></div><div class="feature"><span class="feature-number">04</span><h3>Everyday Luxury</h3><p>Made for the beautiful, ordinary moments that make up a life.</p></div></div></section>
    <section class="section best-sellers"><div class="carousel-top"><div><p class="eyebrow">CURATED FOR YOU</p><h2 class="section-title">BEST SELLERS</h2></div><div class="carousel-controls"><button data-carousel="prev" aria-label="Previous products"><i data-lucide="arrow-left"></i></button><button data-carousel="next" aria-label="Next products"><i data-lucide="arrow-right"></i></button></div></div><div class="product-carousel">${productData.slice(4).concat(productData.slice(0, 2)).map(productCard).join("")}</div></section>
    <section class="testimonial-section" aria-label="Client notes"><div class="quote-panel"><i data-lucide="quote"></i><h2>Worn well.<br>Loved longer.</h2><span class="quote-index">CLIENT NOTES / <span class="testimonial-number">01</span> — 03</span></div><div class="testimonial-slider">${testimonialMarkup()}<div class="testimonial-controls"><button data-testimonial="0" class="active" aria-label="Review 1"></button><button data-testimonial="1" aria-label="Review 2"></button><button data-testimonial="2" aria-label="Review 3"></button></div></div></section>
    <section class="newsletter" id="journal"><div class="newsletter-inner"><p class="eyebrow">PRIVATE ACCESS</p><h2>JOIN THE BELTIQUE CIRCLE</h2><p>Be the first to discover new collections, exclusive releases and private offers.</p><form class="newsletter-form"><input type="email" required aria-label="Email address" placeholder="YOUR EMAIL ADDRESS" /><button>SUBSCRIBE <i data-lucide="arrow-up-right"></i></button></form></div></section>`;
}
function testimonialMarkup() {
  const reviews = [
    ["I have searched for this exact belt for years — elegant, beautifully finished, and it makes everything I own feel considered.", "AMELIA R. · NEW YORK"],
    ["The leather is exceptional. It has the kind of restrained quality you notice every time you wear it.", "JAMES L. · LONDON"],
    ["A truly thoughtful object. The buckle feels substantial and the fit is exactly right.", "SOPHIE M. · PARIS"]
  ];
  return reviews.map((review, index) => `<article class="testimonial ${index === state.testimonialIndex ? "active" : ""}" data-testimonial-panel="${index}">${stars()}<blockquote>“${review[0]}”</blockquote><cite>${review[1]}</cite></article>`).join("");
}

function filteredProducts() {
  let result = [...productData]; const { gender, color, material, sort } = state.filters;
  if (gender !== "All") result = result.filter(product => product.gender === gender || product.collection === gender);
  if (color !== "All") result = result.filter(product => product.color === color);
  if (material !== "All") result = result.filter(product => product.material === material);
  if (sort === "Price: Low to High") result.sort((a,b) => a.price - b.price);
  if (sort === "Price: High to Low") result.sort((a,b) => b.price - a.price);
  if (sort === "Most Loved") result.sort((a,b) => b.reviews - a.reviews);
  return result;
}
function filterButton(type, value) { return `<button class="filter-option ${state.filters[type] === value ? "selected" : ""}" data-filter-type="${type}" data-filter-value="${value}">${value}</button>`; }
function shopPage() {
  const matches = filteredProducts(); const visible = matches.slice(0, state.shopLimit);
  return `<section class="page-hero"><p class="eyebrow">THE COMPLETE EDIT</p><h1>MADE FOR<br>YOUR MOMENT.</h1><p>Fine belts and considered accessories, made to become the foundation of your personal uniform.</p></section>
  <section class="shop-layout"><div class="shop-toolbar"><div class="filter-controls"><button class="filter-trigger" data-toggle-filters>FILTER <i data-lucide="sliders-horizontal"></i></button><button class="filter-trigger" data-clear-filters>RESET</button></div><span class="shop-status">${matches.length} PIECES</span><div class="view-controls"><button class="${!state.listView ? "active" : ""}" data-view="grid" aria-label="Grid view"><i data-lucide="grid-2x2"></i></button><button class="${state.listView ? "active" : ""}" data-view="list" aria-label="List view"><i data-lucide="list"></i></button></div></div>
  <div class="filter-panel"><div class="filter-group"><span>COLLECTION</span><div class="filter-options">${["All","Men","Women","Signature"].map(value => filterButton("gender", value)).join("")}</div></div><div class="filter-group"><span>COLOUR</span><div class="filter-options">${["All","Black","Brown","Tan","Ivory"].map(value => filterButton("color", value)).join("")}</div></div><div class="filter-group"><span>MATERIAL</span><div class="filter-options">${["All","Italian Leather","Suede","Woven"].map(value => filterButton("material", value)).join("")}</div></div><div class="filter-group"><span>SORT BY</span><div class="filter-options">${["Featured","Most Loved","Price: Low to High","Price: High to Low"].map(value => filterButton("sort", value)).join("")}</div></div></div>
  ${matches.length ? `<div class="shop-products ${state.listView ? "list" : ""}">${visible.map(productCard).join("")}</div>${visible.length < matches.length ? '<button class="button button-dark load-more" data-load-more>LOAD MORE <i data-lucide="plus"></i></button>' : ""}` : '<div class="shop-empty"><div><h3>No pieces found</h3><p>Try adjusting your filters to explore the collection.</p><button class="text-link" data-clear-filters>Clear filters</button></div></div>'}</section>`;
}
function productPage(product) {
  const images = [product.image, product.image2, product.image3]; const current = images[state.galleryImage];
  const related = productData.filter(item => item.id !== product.id && (item.gender === product.gender || item.collection === product.collection)).slice(0,4);
  return `<section class="product-page"><div class="breadcrumbs"><button data-shop-all>SHOP</button> / ${product.gender.toUpperCase()} / <span>${product.name.toUpperCase()}</span></div><div class="product-layout"><div class="gallery"><div class="gallery-thumbs">${images.map((image,index) => `<button class="${index === state.galleryImage ? "active" : ""}" data-gallery-image="${index}" aria-label="View photo ${index+1}"><img src="${image}" alt="" /></button>`).join("")}</div><div class="gallery-main"><img src="${current}" alt="${escapeText(product.name)} leather belt" /></div></div><article class="product-detail"><p class="eyebrow">${product.collection.toUpperCase()} / ${product.gender.toUpperCase()}</p><h1>${product.name}</h1><div class="detail-review">${stars()} <span>${product.rating} / 5 (${product.reviews} REVIEWS)</span></div><p class="detail-price">${money(product.price)}</p><hr><div class="choice-row"><span>COLOUR — ${product.colors[state.productColor].name.toUpperCase()}</span></div><div class="swatches">${product.colors.map((color,index) => `<button class="swatch ${index === state.productColor ? "active" : ""}" data-colour="${index}" aria-label="Select ${color.name}"><span style="background:${color.hex}"></span></button>`).join("")}</div><div class="choice-row"><span>SELECT LENGTH</span><button data-help="Size guide">SIZE GUIDE</button></div><div class="sizes">${["28","30","32","34","36","38"].map(size => `<button class="size-button ${size === state.productSize ? "active" : ""}" data-size="${size}">${size}</button>`).join("")}</div><div class="purchase-row"><div class="quantity-control"><button data-product-quantity="-1" aria-label="Decrease quantity">−</button><span>${state.productQuantity}</span><button data-product-quantity="1" aria-label="Increase quantity">+</button></div><button class="button button-dark" data-add-detail="${product.id}">ADD TO BAG <i data-lucide="arrow-right"></i></button></div><div class="detail-actions"><button class="button button-outline-dark" data-buy-now="${product.id}">BUY NOW</button><button class="wishlist-button ${state.saved.includes(product.id) ? "is-saved" : ""}" data-save="${product.id}" aria-label="Add to wishlist"><i data-lucide="heart"></i></button></div><div class="accordion"><details open><summary>DESCRIPTION</summary><p>${product.detail}</p></details><details><summary>MATERIALS & CARE</summary><p>100% Italian leather. Solid brass hardware with a plated finish. Keep away from moisture and condition leather periodically with a neutral cream.</p></details><details><summary>SIZE & FIT</summary><p>Measured from buckle pin to centre hole. Select your usual trouser size, or consult the guide for an exact fit.</p></details><details><summary>SHIPPING & RETURNS</summary><p>Complimentary shipping on orders over $75. Return unused pieces in their original packaging within 30 days.</p></details></div></article></div></section><section class="related-section"><div class="section-heading"><div><p class="eyebrow">COMPLETE THE LOOK</p><h2 class="section-title">YOU MAY ALSO LIKE</h2></div><button class="text-link" data-shop-all>View all <i data-lucide="arrow-up-right"></i></button></div><div class="collection-grid">${related.map(productCard).join("")}</div></section>`;
}

function updateSchema(product) {
  document.querySelector("#product-schema")?.remove();
  if (!product) return;
  const schema = document.createElement("script"); schema.id = "product-schema"; schema.type = "application/ld+json";
  schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: product.name, image: [product.image, product.image2], description: product.detail, brand: { "@type": "Brand", name: "BELTIQUE" }, offers: { "@type": "Offer", priceCurrency: "USD", price: product.price, availability: "https://schema.org/InStock" }, aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating, reviewCount: product.reviews } });
  document.head.append(schema);
}
function render() {
  const hash = location.hash.replace("#", "") || "home"; const [route, id] = hash.split("/");
  if (route === "product" && getProduct(id)) { state.product = id; state.galleryImage = 0; app.innerHTML = productPage(getProduct(id)); document.title = `${getProduct(id).name} — BELTIQUE`; updateSchema(getProduct(id)); }
  else if (route === "shop") { app.innerHTML = shopPage(); document.title = "Shop Premium Belts — BELTIQUE"; updateSchema(null); }
  else { app.innerHTML = homePage(); document.title = "BELTIQUE — Crafted for Your Style"; updateSchema(null); }
  refreshIcons(); updateCartUI(); observeReveal();
}

function addToCart(productId, quantity = 1, options = {}) {
  const line = state.cart.find(item => item.id === productId && item.size === options.size && item.color === options.color);
  if (line) line.quantity += quantity; else state.cart.push({ id: productId, quantity, size: options.size || "30", color: options.color || 0 });
  persist(); updateCartUI(); announce(`${getProduct(productId).name} added to your bag.`);
}
function cartTotal() { return state.cart.reduce((total,item) => total + getProduct(item.id).price * item.quantity, 0); }
function updateCartUI() {
  const count = state.cart.reduce((total,item) => total + item.quantity, 0); const countLabels = document.querySelectorAll(".bag-count, .drawer-count");
  countLabels.forEach(label => { label.textContent = count; label.dataset.empty = count === 0 ? "true" : "false"; });
  cartDrawer.classList.toggle("empty", count === 0);
  const lineContainer = document.querySelector(".cart-lines"); if (!lineContainer) return;
  lineContainer.innerHTML = state.cart.map((item,index) => { const product = getProduct(item.id); const color = product.colors[item.color]?.name || product.colors[0].name; return `<article class="cart-line"><img src="${product.image}" alt="${escapeText(product.name)}" /><div><h3>${product.name}</h3><p>${color.toUpperCase()} / ${item.size}</p><div class="quantity-control"><button data-cart-quantity="${index}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-cart-quantity="${index}" data-change="1" aria-label="Increase quantity">+</button></div></div><div><span class="cart-line-price">${money(product.price * item.quantity)}</span><button class="remove-line" data-remove-line="${index}">REMOVE</button></div></article>`; }).join("");
  document.querySelector(".cart-subtotal").textContent = money(Math.max(0, cartTotal() * (1 - state.promo)));
  refreshIcons();
}
function openCart() { cartDrawer.classList.add("open"); cartDrawer.setAttribute("aria-hidden", "false"); overlay.classList.add("visible"); }
function closeCart() { cartDrawer.classList.remove("open"); cartDrawer.setAttribute("aria-hidden", "true"); overlay.classList.remove("visible"); }
function openSimpleDialog(kind) {
  const content = {
    "Account": ["YOUR BELTIQUE", "Sign in to save favourites, revisit your selections and enjoy a quicker checkout.", "CREATE AN ACCOUNT"],
    "Size guide": ["FIND YOUR FIT", "BELTIQUE lengths are measured from the buckle pin to the centre hole. Choose your usual trouser size for a comfortable, balanced fit. For between sizes, we suggest taking the larger length.", "VIEW THE COLLECTION"],
    "Shipping & returns": ["SHIPPING & RETURNS", "We offer complimentary standard shipping on all orders over $75. If your piece is not quite right, return it unused and in its original packaging within 30 days.", "CONTINUE SHOPPING"],
    "Care guide": ["CARE, CONSIDERED", "Keep leather away from moisture, heat and prolonged direct sunlight. Store your belt unrolled or loosely curved and use a neutral leather conditioner once or twice a year.", "EXPLORE BELTS"],
    "Contact concierge": ["CONTACT CONCIERGE", "Our client service team is here Monday through Friday, 9am to 6pm EST. Email hello@beltique.example or call +1 800 555 0189.", "SHOP THE EDIT"],
    "Checkout": ["CHECKOUT", "Your selection is reserved in your bag. This polished storefront prototype keeps payment securely out of the demo — ready for a live checkout connection when you are.", "CONTINUE SHOPPING"],
    "Our story": ["OUR STORY", "BELTIQUE was founded on a simple idea: a well-made belt can make the familiar feel extraordinary. We create pieces with permanent relevance, in materials that age beautifully.", "DISCOVER THE COLLECTION"],
    "Privacy policy": ["PRIVACY, SIMPLIFIED", "This demonstration storefront keeps your bag and wishlist only in your local browser. No customer data is collected or sent from this experience.", "CLOSE"],
    "Terms & conditions": ["TERMS", "This interactive BELTIQUE concept is provided as a storefront demonstration. Pricing and product availability are sample values.", "CLOSE"]
  }[kind] || [kind.toUpperCase(), "Our client services team is happy to assist with this request.", "CONTINUE"];
  simpleDialog.querySelector(".simple-dialog-content").innerHTML = `<p class="eyebrow">BELTIQUE CLIENT SERVICES</p><h2>${content[0]}</h2><p>${content[1]}</p><button class="button button-dark" data-close-simple>${content[2]} <i data-lucide="arrow-right"></i></button>`;
  simpleDialog.showModal(); refreshIcons();
}
function openSearch() { searchDialog.showModal(); setTimeout(() => document.querySelector("#search-input")?.focus(), 50); }
function openProduct(id) { state.product = id; goTo(`#product/${id}`); }
function observeReveal() {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = "1"; entry.target.style.transform = "none"; observer.unobserve(entry.target); } }), { threshold: .08 });
  document.querySelectorAll(".section-heading, .story-copy, .feature, .newsletter-inner").forEach(element => { element.style.opacity = "0"; element.style.transform = "translateY(15px)"; element.style.transition = "opacity .7s var(--ease), transform .7s var(--ease)"; observer.observe(element); });
}

document.addEventListener("click", event => {
  if (event.target === overlay) { closeCart(); return; }
  const target = event.target.closest("button, a, [role=button]"); if (!target) return;
  if (target.matches(".bag-button, .mobile-bag")) { openCart(); return; }
  if (target.matches(".close-drawer, .overlay")) { closeCart(); return; }
  if (target.matches(".continue-shopping")) { closeCart(); goTo("#shop"); return; }
  if (target.matches(".account-button")) { openSimpleDialog("Account"); return; }
  if (target.matches("#search-button, .mobile-search")) { openSearch(); return; }
  if (target.matches(".modal-close")) { target.closest("dialog")?.close(); return; }
  if (target.matches("[data-help]")) { openSimpleDialog(target.dataset.help); return; }
  if (target.matches("[data-search-suggest]")) { const input = document.querySelector("#search-input"); if (input) { input.value = target.dataset.searchSuggest; input.closest("form").requestSubmit(); } return; }
  if (target.matches("[data-close-simple]")) { simpleDialog.close(); return; }
  if (target.matches("[data-open-product]")) { event.preventDefault(); openProduct(target.dataset.openProduct); return; }
  if (target.matches("[data-quick-add]")) { event.preventDefault(); event.stopPropagation(); addToCart(target.dataset.quickAdd); return; }
  if (target.matches("[data-add-detail]")) { addToCart(target.dataset.addDetail, state.productQuantity, { size: state.productSize, color: state.productColor }); return; }
  if (target.matches("[data-buy-now]")) { addToCart(target.dataset.buyNow, state.productQuantity, { size: state.productSize, color: state.productColor }); openCart(); return; }
  if (target.matches("[data-save]")) { event.preventDefault(); event.stopPropagation(); const id = target.dataset.save; state.saved = state.saved.includes(id) ? state.saved.filter(saved => saved !== id) : [...state.saved, id]; persist(); render(); announce(state.saved.includes(id) ? "Saved to your wishlist." : "Removed from your wishlist."); return; }
  if (target.matches("[data-set-gender], [data-filter-link]")) { state.filters.gender = target.dataset.setGender || target.dataset.filterLink; state.shopLimit = 8; goTo("#shop"); return; }
  if (target.matches("[data-shop-all]")) { state.filters = { gender: "All", color: "All", material: "All", sort: "Featured" }; goTo("#shop"); return; }
  if (target.matches("[data-toggle-filters]")) { document.querySelector(".filter-panel")?.classList.toggle("open"); return; }
  if (target.matches("[data-clear-filters]")) { state.filters = { gender: "All", color: "All", material: "All", sort: "Featured" }; state.shopLimit = 8; render(); return; }
  if (target.matches("[data-filter-type]")) { state.filters[target.dataset.filterType] = target.dataset.filterValue; state.shopLimit = 8; render(); return; }
  if (target.matches("[data-view]")) { state.listView = target.dataset.view === "list"; render(); return; }
  if (target.matches("[data-load-more]")) { state.shopLimit += 4; render(); return; }
  if (target.matches("[data-gallery-image]")) { state.galleryImage = Number(target.dataset.galleryImage); render(); return; }
  if (target.matches("[data-colour]")) { state.productColor = Number(target.dataset.colour); render(); return; }
  if (target.matches("[data-size]")) { state.productSize = target.dataset.size; render(); return; }
  if (target.matches("[data-product-quantity]")) { state.productQuantity = Math.max(1, state.productQuantity + Number(target.dataset.productQuantity)); render(); return; }
  if (target.matches("[data-cart-quantity]")) { const index = Number(target.dataset.cartQuantity); state.cart[index].quantity += Number(target.dataset.change); if (state.cart[index].quantity < 1) state.cart.splice(index, 1); persist(); updateCartUI(); return; }
  if (target.matches("[data-remove-line]")) { state.cart.splice(Number(target.dataset.removeLine), 1); persist(); updateCartUI(); announce("Removed from your bag."); return; }
  if (target.matches("[data-carousel]")) { state.carouselIndex = Math.max(0, Math.min(2, state.carouselIndex + (target.dataset.carousel === "next" ? 1 : -1))); const carousel = document.querySelector(".product-carousel"); if (carousel && innerWidth > 620) carousel.style.transform = `translateX(-${state.carouselIndex * 306}px)`; return; }
  if (target.matches("[data-testimonial]")) { state.testimonialIndex = Number(target.dataset.testimonial); document.querySelectorAll(".testimonial").forEach(panel => panel.classList.toggle("active", Number(panel.dataset.testimonialPanel) === state.testimonialIndex)); document.querySelectorAll("[data-testimonial]").forEach(button => button.classList.toggle("active", Number(button.dataset.testimonial) === state.testimonialIndex)); document.querySelector(".testimonial-number").textContent = String(state.testimonialIndex + 1).padStart(2, "0"); return; }
  if (target.matches(".checkout-button")) { closeCart(); openSimpleDialog("Checkout"); return; }
});
document.addEventListener("submit", event => {
  if (event.target.matches(".newsletter-form")) { event.preventDefault(); const email = event.target.querySelector("input").value; announce(`Thank you — ${email} is on the list.`); event.target.reset(); }
  if (event.target.matches(".search-form")) { event.preventDefault(); const term = event.target.querySelector("input").value.trim().toLowerCase(); searchDialog.close(); state.filters = { gender: "All", color: "All", material: "All", sort: "Featured" }; goTo("#shop"); setTimeout(() => { const cards = [...document.querySelectorAll(".product-card")]; cards.forEach(card => { const product = getProduct(card.dataset.productCard); card.style.display = product.name.toLowerCase().includes(term) || product.description.toLowerCase().includes(term) || product.color.toLowerCase().includes(term) ? "" : "none"; }); document.querySelector(".shop-status").textContent = term ? `SEARCH RESULTS FOR “${term.toUpperCase()}”` : `${productData.length} PIECES`; }, 30); }
  if (event.target.matches(".promo-form")) { event.preventDefault(); const input = event.target.querySelector("input"); if (input.value.trim().toUpperCase() === "BELTIQUE10") { state.promo = .1; updateCartUI(); announce("BELTIQUE10 applied — 10% off."); } else announce("Try code BELTIQUE10 for 10% off."); }
});
document.querySelector(".menu-button").addEventListener("click", () => { const menu = document.querySelector(".primary-nav"); const expanded = document.querySelector(".menu-button").getAttribute("aria-expanded") === "true"; document.querySelector(".menu-button").setAttribute("aria-expanded", String(!expanded)); menu.classList.toggle("mobile-open", !expanded); });
window.addEventListener("scroll", () => document.querySelector(".site-header").classList.toggle("is-scrolled", scrollY > 15), { passive: true });
window.addEventListener("popstate", render);
render();
