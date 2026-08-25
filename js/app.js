/**
 * SQUCO — The Handkerchief Revival Application Logic
 * 4 Themed Collections based on Core Values: Everyday, Festival, Corporate, Kids
 * Pure Vanilla JavaScript
 */

// ==========================================================================
// 1. CONFIGURATION (Single Source of Truth)
// ==========================================================================
const CONFIG = {
  // Business WhatsApp number: 9019921521
  whatsappNumber: "919019921521",
  displayPhone: "9019921521",
  formattedPhone: "+91 9019921521",
  defaultMessage: "Hi SQUCO, I am interested in joining the hanky revival movement! Please share collection and ordering details."
};

// ==========================================================================
// 2. THEMED SUB-SECTIONS (Core Values & Pillars)
// ==========================================================================
const collectionPillars = {
  everyday: {
    id: "everyday",
    title: "Everyday Collection",
    tagline: "01 — Simplicity & Daily Habit",
    coreValue: "Habit • Pure Cotton • Everyday Utility",
    description: "Re-establishing the daily habit. Mindfully engineered handkerchiefs from breathable organic cotton and linen blends for work, commute, and daily life.",
    accentClass: "theme-everyday",
    badgeColor: "#059669",
    icon: "🌿"
  },
  festival: {
    id: "festival",
    title: "Festival & Occasion Collection",
    tagline: "02 — Heritage & Celebrations",
    coreValue: "Celebration • Sacred Keepsakes • Romance",
    description: "Honoring life's special moments. Heirloom silk borders, personalized wedding return gifts with custom printed names, and sacred blood-red first night keepsakes.",
    accentClass: "theme-festival",
    badgeColor: "#991B1B",
    icon: "🎉"
  },
  corporate: {
    id: "corporate",
    title: "Corporate Gifting Collection",
    tagline: "03 — Brand Identity & ESG",
    coreValue: "Identity • Sustainability • Executive Prestige",
    description: "Turn an everyday object into something clients and employees cherish. Sustainable ESG-friendly welcome gifts with custom corporate logo embroidery.",
    accentClass: "theme-corporate",
    badgeColor: "#1E3A8A",
    icon: "💼"
  },
  kids: {
    id: "kids",
    title: "Kids & Little Pockets Collection",
    tagline: "04 — Joyful Learning & Health",
    coreValue: "Delight • Hygiene • Childhood Habits",
    description: "Start the habit early. Ultra-soft double gauze cotton with adorable animal and fruit prints designed specifically for small hands and school uniform pockets.",
    accentClass: "theme-kids",
    badgeColor: "#D97706",
    icon: "🧸"
  }
};

// ==========================================================================
// 3. PRODUCT DATASTORE (Grouped by 4 Core Pillars)
// ==========================================================================
const products = [
  // --- EVERYDAY COLLECTION ---
  {
    id: "daily-hanky",
    category: "everyday",
    categoryLabel: "🌿 Everyday Organic",
    name: "SQUCO Daily (Everyday Cotton)",
    description: "Your everyday reminder to carry a hanky again. Crafted from organic 100% fine cotton, ultra-absorbent and soft against the skin for commute, desk, and daily life.",
    image: "assets/products/daily-hanky.jpg",
    highlights: [
      "100% Premium Organic Cotton Weave",
      "Signature 2×2×2 inches Zigzag Pocket Cube",
      "Quick-dry & highly absorbent weave",
      "Minimalist contrast stitch edge detail"
    ],
    included: [
      "1x SQUCO Premium Daily Handkerchief",
      "1x Reusable 2×2×2 inches Zigzag Pocket Cube",
      "1x Habit Revival Care Guide"
    ],
    idealFor: "Office commute, daily errands, work desk, travel, and personal hygiene",
    tagline: "2×2×2\" Zigzag Cube",
    theme: "theme-everyday"
  },
  {
    id: "grownups-hanky",
    category: "everyday",
    categoryLabel: "👔 Everyday Executive",
    name: "SQUCO Grownups (Linen-Cotton)",
    description: "Grown-up life is full of small moments. Be prepared with a modern, elegant linen-cotton handkerchief that looks sophisticated in suit pockets or bags.",
    image: "assets/products/grownups-hanky.jpg",
    highlights: [
      "Sophisticated linen-cotton blend",
      "1×1×3 inches slim stick single pack",
      "Hand-stitched perimeter border",
      "Wrinkle-resistant luxury finish"
    ],
    included: [
      "1x SQUCO Executive Handkerchief",
      "1x Slim 1×1×3 inches Pocket Stick Pack",
      "1x Monogram Styling Card"
    ],
    idealFor: "Business meetings, formal events, evening dining, and everyday executive carry",
    tagline: "1×1×3\" Slim Stick Pack",
    theme: "theme-everyday"
  },
  {
    id: "everyday-earth",
    category: "everyday",
    categoryLabel: "🌾 Minimalist Raw Earth",
    name: "Minimalist Earth (Undyed Raw Cotton)",
    description: "Pure, untouched nature in your pocket. 100% unbleached, chemical-free organic raw cotton with natural seed flecks. The softest, purest embrace for sensitive skin.",
    image: "assets/products/everyday-earth.jpg",
    highlights: [
      "100% Undyed & Unbleached Raw Cotton",
      "Zero chemical finishes or synthetic dyes",
      "Hypoallergenic & dermatologically soothing",
      "Eco-kraft biodegradable gift packaging"
    ],
    included: [
      "1x SQUCO Raw Earth Handkerchief",
      "1x Recycled Kraft Cube Box",
      "1x Zero-Waste Living Handbook"
    ],
    idealFor: "Sensitive skin, eco-conscious minimalists, newborn baby care, and pure living",
    tagline: "Raw Organic Earth",
    theme: "theme-everyday"
  },

  // --- FESTIVAL & OCCASION COLLECTION ---
  {
    id: "festival-newyear",
    category: "festival",
    categoryLabel: "🎉 New Year Cotton Greetings",
    name: "Happy New Year Cotton Greeting Edition",
    description: "Send Cotton Greetings instead of paper cards or digital texts! Change a small habit, save the world — gift a pristine organic cotton handkerchief with elegant 'Happy New Year' gold cursive embroidery that lives in their pocket all year round instead of a trash bin.",
    image: "assets/products/festival-newyear.jpg",
    highlights: [
      "Golden Thread Cursive 'Happy New Year' Hand Embroidery",
      "Send Cotton Greetings instead of paper cards or digital texts",
      "Change a small habit, save the world from paper waste",
      "Signature Deep Forest Green SQUCO Gold Foil Presentation Box"
    ],
    included: [
      "1x SQUCO 'Happy New Year' Embroidered Cotton Greeting Handkerchief",
      "1x Signature Deep Forest Green SQUCO Box",
      "1x 'Cotton Greetings & Habit Revival' Parchment Card"
    ],
    idealFor: "New Year wishes, eco-friendly cotton greetings, replacing paper cards & WhatsApp forwards, and zero-waste gift traditions",
    tagline: "Cotton Greetings Edition",
    theme: "theme-festival"
  },
  {
    id: "couple-hanky",
    category: "festival",
    categoryLabel: "💕 First Night Keepsake",
    name: "Marriage Handkerchief (Blood Red & Gold)",
    description: "Blood Red & Gold First Night Keepsake. Two people. One sacred habit. Crafted from rich blood-red silk with golden embroidery in an exquisite presentation box.",
    image: "assets/products/couple-hanky-red.jpg",
    highlights: [
      "Rich Blood Red Silk with Gold Thread Monogram",
      "Exclusive 'First Night Keepsake of Love' Set",
      "Dual matching couple's handkerchief pair",
      "Luxury burgundy presentation box with satin lining"
    ],
    included: [
      "2x SQUCO Blood Red Silk Handkerchiefs with Gold Embroidery",
      "2x Matching 2×2×2 inches Crimson Travel Cubes",
      "1x Royal Keepsake Presentation Box & Love Note"
    ],
    idealFor: "First night together, wedding night keepsake, romantic honeymoon, and marriage anniversaries",
    tagline: "Blood Red First Night",
    theme: "theme-festival"
  },
  {
    id: "festival-valentines",
    category: "festival",
    categoryLabel: "🌹 Valentine's Day Love",
    name: "Valentine's Day Rose Embroidered Love Keepsake",
    description: "Say goodbye to throwaway flowers that wilt in days. Gift a soft organic cotton handkerchief with a delicate hand-embroidered crimson rose and custom initials that lasts for years.",
    image: "assets/products/festival-valentines.jpg",
    highlights: [
      "Delicate Hand-Embroidered Crimson Rose Emblem",
      "Pure whisper-soft organic cotton in blush-white",
      "Custom his & her initials option on request",
      "Velvet-lined romantic keepsake presentation box"
    ],
    included: [
      "1x SQUCO Valentine Rose Handkerchief",
      "1x Royal Crimson Presentation Box",
      "1x Wax-Sealed Romantic Parchment Love Note"
    ],
    idealFor: "Valentine's Day, wedding proposals, anniversaries, romantic dates, and timeless romantic gestures",
    tagline: "Valentine's Edition",
    theme: "theme-festival"
  },

  // --- CORPORATE COLLECTION ---
  {
    id: "corporate-hanky",
    category: "corporate",
    categoryLabel: "💼 Corporate & Brand",
    name: "SQUCO Corporate (Carry Your Brand)",
    description: "Turn an everyday object into something employees and clients actually use and cherish. Custom branded handkerchief sets with company logo embroidery for modern ESG gifting.",
    image: "assets/products/corporate-hanky.jpg",
    highlights: [
      "Custom corporate logo embroidery",
      "Sustainable ESG-friendly zero-waste gift",
      "Bulk custom branded packaging options",
      "High employee and client daily utility value"
    ],
    included: [
      "Custom SQUCO Corporate Handkerchief Sets",
      "Custom Branded 2×2×2 inches Cube Boxes",
      "Direct Corporate Account Manager Assistance"
    ],
    idealFor: "Employee onboarding kits, client appreciation, conferences, and sustainable corporate gifts",
    tagline: "Corporate ESG Gifting",
    theme: "theme-corporate"
  },
  {
    id: "corporate-esg",
    category: "corporate",
    categoryLabel: "🌱 ESG Zero-Waste Starter",
    name: "Corporate ESG Sustainability Box",
    description: "Empower your workforce to ditch single-use bleached paper tissues. A complete green-office initiative gift set made from 100% GOTS certified organic combed cotton with subtle brand tags.",
    image: "assets/products/corporate-esg.jpg",
    highlights: [
      "100% GOTS Certified Organic Cotton Weave",
      "Measurable ESG Green Impact certification",
      "Custom company pledge card included",
      "Zero-plastic recycled kraft gift packaging"
    ],
    included: [
      "2x SQUCO Organic Cotton ESG Handkerchiefs",
      "1x Corporate Sustainability Pledge Card",
      "1x Recycled Kraft Executive Presentation Box"
    ],
    idealFor: "Corporate ESG initiatives, sustainability drives, Earth Day corporate gifts, and eco-conscious workplaces",
    tagline: "ESG Zero-Waste Edition",
    theme: "theme-corporate"
  },
  {
    id: "corporate-leadership",
    category: "corporate",
    categoryLabel: "🏅 Executive Leadership",
    name: "Leadership Heritage Black & Gold Box",
    description: "Designed for CXOs, directors, and keynote leaders. Premium linen-cotton weave in midnight slate with gold-foil embossed monogramming in a luxury matte black presentation case.",
    image: "assets/products/corporate-leadership.jpg",
    highlights: [
      "Fine European Linen & Egyptian Cotton Blend",
      "Custom Hand-Embroidered Executive Monogram",
      "Matte Black Keepsake Box with Gold Foil Inlay",
      "Wrinkle-resistant executive pocket square fold"
    ],
    included: [
      "2x SQUCO Executive Leadership Handkerchiefs",
      "1x Deluxe Matte Black Presentation Case",
      "1x Personalized Leadership Citation Card"
    ],
    idealFor: "Board member appreciation, retirement milestones, CXO promotions, and executive annual summits",
    tagline: "Leadership Black & Gold",
    theme: "theme-corporate"
  },

  // --- KIDS & LITTLE POCKETS COLLECTION ---
  {
    id: "kids-bedtime-hanky",
    category: "kids",
    categoryLabel: "🌙 Kids Bedtime & Daily",
    name: "Kids Bedtime Dreamer & Daily Comfort Cloth",
    description: "Whisper-soft organic double-gauze cotton with soothing embroidery. Designed for school uniform pockets, naptime comfort, and daily hygiene habit building.",
    image: "assets/products/kids-bedtime-hanky.jpg",
    highlights: [
      "Cloud-soft 100% organic double-gauze muslin",
      "Gentle stars, moon & animal character embroidery",
      "Signature Forest Green Kids Square Gift Box",
      "Soothes children for school, play & peaceful bedtime"
    ],
    included: [
      "3x SQUCO Kids Bedtime Comfort Handkerchiefs",
      "1x Signature Forest Green SQUCO Kids Box",
      "1x Sweet Dreams & Daily Habit Story Card"
    ],
    idealFor: "Toddler soothing, primary school uniform pockets, bedtime routine, nursery comfort, and daily hygiene",
    tagline: "Bedtime & Daily Comfort",
    theme: "theme-kids"
  },
  {
    id: "kids-animal-hanky",
    category: "kids",
    categoryLabel: "🦁 Kids Animal Friends",
    name: "Kids Safari Friends (Animal Printed)",
    description: "Ultra-soft pastel organic cotton handkerchiefs featuring cute baby animal embroidery (Lion, Panda, Elephant) with rounded safety corners.",
    image: "assets/products/kids-animal-hanky.jpg",
    highlights: [
      "Soft Baby Lion, Panda & Elephant Characters",
      "Rounded safety hem with gentle stitching",
      "Hypoallergenic 100% organic combed cotton",
      "Includes Forest Green SQUCO Kids Gift Box"
    ],
    included: [
      "3x SQUCO Kids Animal Embroidered Handkerchiefs",
      "1x Forest Green SQUCO Kids Box",
      "1x 'Hanky Hero' Reward Sticker Sheet"
    ],
    idealFor: "Play school, primary school uniform pockets, travel days, and teaching children everyday personal hygiene",
    tagline: "Animal Friends Edition",
    theme: "theme-kids"
  },
  {
    id: "kids-school-hanky",
    category: "kids",
    categoryLabel: "🎒 Kids Uniform Classic",
    name: "Kids School Uniform Classic (Name Tag Edition)",
    description: "Teach children self-reliance and daily hygiene early. Crafted to fit school pinafores and trouser pockets with a dedicated iron-on name label so it never gets lost.",
    image: "assets/products/kids-school-hanky.jpg",
    highlights: [
      "Extra soft skin-friendly organic weave",
      "Dedicated write-on name label for school",
      "Signature Forest Green SQUCO Box",
      "Durable machine-washable & color-fast cotton"
    ],
    included: [
      "3x SQUCO School Uniform Handkerchiefs",
      "1x Signature Forest Green SQUCO Box",
      "1x 'Carry Your Hanky' School Habit Badge"
    ],
    idealFor: "Primary school uniform pockets, sports day sweat, lunchbox spills, and daily school habits",
    tagline: "School Uniform Classic",
    theme: "theme-kids"
  }
];

// ==========================================================================
// 4. WHATSAPP ORDERING UTILITY
// ==========================================================================
/**
 * Opens WhatsApp with a pre-filled message for ordering or inquiring
 * @param {string} productName - Name of the collection or topic
 */
function orderOnWhatsApp(productName) {
  const number = CONFIG.whatsappNumber;
  let messageText = "";

  if (productName && productName.trim().length > 0) {
    messageText = `Hi SQUCO, I am interested in the ${productName}. Please share pricing, customization options, and ordering details.`;
  } else {
    messageText = CONFIG.defaultMessage;
  }

  const encodedUrl = `https://wa.me/${number}?text=${encodeURIComponent(messageText)}`;
  window.open(encodedUrl, "_blank", "noopener,noreferrer");
}

// ==========================================================================
// 5. UI INITIALIZATION & RENDER SYSTEM
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  initFilterTabs();
  initHeaderScroll();
  initMobileNav();
  initFaqAccordion();
  initModalListeners();
  initScrollAnimations();
});

// Render 4 Themed Collection Sub-Sections
function renderProducts(categoryFilter = "all") {
  const container = document.getElementById("products-container");
  if (!container) return;

  container.innerHTML = "";

  // Determine which categories to render
  const categoriesToRender = categoryFilter === "all"
    ? Object.keys(collectionPillars)
    : [categoryFilter];

  categoriesToRender.forEach(catKey => {
    const pillar = collectionPillars[catKey];
    if (!pillar) return;

    const catProducts = products.filter(p => p.category === catKey);
    if (catProducts.length === 0) return;

    // Create Themed Sub-section Container
    const sectionBlock = document.createElement("div");
    sectionBlock.className = `collection-subsection ${pillar.accentClass}`;
    sectionBlock.id = `sub-${catKey}`;

    // Sub-section Value Header
    const headerHTML = `
      <div class="subsection-header">
        <div class="subsection-header-left">
          <span class="subsection-tag">${pillar.icon} ${pillar.tagline}</span>
          <h3 class="subsection-title">${pillar.title}</h3>
          <p class="subsection-desc">${pillar.description}</p>
        </div>
        <div class="subsection-value-badge">
          <span class="value-badge-label">Core Value</span>
          <span class="value-badge-text">${pillar.coreValue}</span>
        </div>
      </div>
    `;

    // Cards Grid
    const cardsGrid = document.createElement("div");
    cardsGrid.className = "subsection-grid";

    catProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = `product-card ${product.theme}`;
      card.setAttribute("data-id", product.id);

      const highlightsHTML = product.highlights
        .slice(0, 3)
        .map(h => `<li>${h}</li>`)
        .join("");

      card.innerHTML = `
        <div class="product-card-badge">${product.categoryLabel}</div>
        <div class="product-img-wrapper">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-brand-stamp">
            <img src="assets/logo/logo.jpg?v=5" alt="SQUCO Insignia" class="stamp-logo" />
            <span class="stamp-text">SQUCO</span>
          </div>
        </div>
        <div class="product-card-body">
          <span class="product-category">${pillar.title}</span>
          <h4 class="product-title">${product.name}</h4>
          <p class="product-desc">${product.description}</p>
          <ul class="product-highlights">
            ${highlightsHTML}
          </ul>
          <div class="product-card-footer">
            <div class="product-price-info">
              <span class="price-label">Form Factor</span>
              <span class="price-val-tag">${product.tagline}</span>
            </div>
            <button type="button" class="btn btn-secondary card-explore-btn">
              Explore Collection →
            </button>
          </div>
        </div>
      `;

      // Click card or Explore button to view detail modal
      card.addEventListener("click", () => {
        openProductModal(product.id);
      });

      cardsGrid.appendChild(card);
    });

    sectionBlock.innerHTML = headerHTML;
    sectionBlock.appendChild(cardsGrid);
    container.appendChild(sectionBlock);
  });
}

// Direct Filter and Scroll Helper (used by Header Sub-menu and Footer)
function filterAndScroll(category) {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    if (btn.getAttribute("data-filter") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProducts(category);

  // Close mobile nav if open
  const navMenu = document.getElementById("nav-menu");
  const toggleBtn = document.getElementById("mobile-toggle-btn");
  if (navMenu && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", false);
  }

  // Smooth scroll to products section or sub-section
  setTimeout(() => {
    const targetElement = document.getElementById(`sub-${category}`) || document.getElementById("products");
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, 50);
}

// Category Filter Button Listeners
function initFilterTabs() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProducts(category);
    });
  });
}

// Header Transparency & Active State on Scroll
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Mobile Hamburger & Drawer Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle-btn");
  const closeBtn = document.getElementById("mobile-drawer-close-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");

  const openDrawer = () => {
    if (!navMenu) return;
    navMenu.classList.add("active");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    if (!navMenu) return;
    navMenu.classList.remove("active");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      const isActive = navMenu.classList.contains("active");
      if (isActive) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", closeDrawer);
    }

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeDrawer();
      });
    });
  }
}

// FAQ Accordion Toggle
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const headerBtn = item.querySelector(".faq-header");
    if (!headerBtn) return;

    headerBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all items
      faqItems.forEach(i => i.classList.remove("active"));

      // If clicked wasn't active before, open it
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// 6. PRODUCT DETAIL MODAL SYSTEM
// ==========================================================================
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  if (!modal) return;

  document.getElementById("modal-img").src = product.image;
  document.getElementById("modal-img").alt = product.name;
  document.getElementById("modal-category").textContent = product.categoryLabel;
  document.getElementById("modal-title").textContent = product.name;
  document.getElementById("modal-desc").textContent = product.description;
  document.getElementById("modal-ideal").innerHTML = `<strong>✨ Ideal For:</strong> <span>${product.idealFor}</span>`;

  const includedList = document.getElementById("modal-included");
  includedList.innerHTML = product.included
    .map(item => `<li>${item}</li>`)
    .join("");

  const modalCtaBtn = document.getElementById("modal-cta-btn");
  modalCtaBtn.onclick = () => orderOnWhatsApp(product.name);

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function initModalListeners() {
  const modal = document.getElementById("product-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProductModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProductModal();
      }
    });
  }

  // Keyboard ESC listener
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
    }
  });
}

// Scroll Reveal Animations
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".section, .benefit-card, .step-card, .moment-card, .story-box, .dimension-card").forEach(el => {
    observer.observe(el);
  });
}

// ==========================================================================
// 7. RUNTIME JSON CONTENT LOADER (Easy Editing via data/site-content.json)
// ==========================================================================
let currentSiteContent = null;

async function loadSiteContentJSON() {
  try {
    const response = await fetch("data/site-content.json?t=" + Date.now());
    if (!response.ok) throw new Error("Failed to fetch data/site-content.json");
    const data = await response.json();
    currentSiteContent = data;
    window.SITE_CONTENT = data;
    applyContentToDOM(data);
    console.log("🌱 [SQUCO] Site content loaded successfully from data/site-content.json");
  } catch (err) {
    console.warn("⚠️ [SQUCO] Note: Could not fetch data/site-content.json via HTTP (CORS or static mode). HTML defaults remain active.", err.message);
  }
}

function applyContentToDOM(data) {
  if (!data) return;

  // 1. Site Metadata
  if (data.siteMeta) {
    if (data.siteMeta.title) document.title = data.siteMeta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && data.siteMeta.description) metaDesc.content = data.siteMeta.description;
  }

  // 2. Hero Section
  if (data.hero) {
    const heroBadge = document.querySelector(".hero-badge span:not(.pulse-dot)");
    if (heroBadge && data.hero.badgeText) heroBadge.textContent = data.hero.badgeText;

    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle && data.hero.headline) heroTitle.innerHTML = data.hero.headline;

    const heroTagline = document.querySelector(".hero-tagline-lead");
    if (heroTagline && data.hero.subheadline) heroTagline.textContent = data.hero.subheadline;

    const heroSubtitle = document.querySelector(".hero-subtitle");
    if (heroSubtitle && data.hero.leadParagraph) heroSubtitle.textContent = data.hero.leadParagraph;

    const heroQuote = document.querySelector(".floating-info span");
    if (heroQuote && data.hero.glassQuote) heroQuote.textContent = data.hero.glassQuote;

    const ctaPrimary = document.querySelector(".hero-cta-group .btn-primary");
    if (ctaPrimary && data.hero.ctaPrimary) ctaPrimary.textContent = data.hero.ctaPrimary;

    const ctaSecondary = document.querySelector(".hero-cta-group .btn-secondary");
    if (ctaSecondary && data.hero.ctaSecondary) ctaSecondary.textContent = data.hero.ctaSecondary;
  }

  // 3. Principles Section
  if (data.principles) {
    const pTag = document.querySelector("#squco-principles .section-tag");
    if (pTag && data.principles.sectionTag) pTag.textContent = data.principles.sectionTag;

    const pTitle = document.querySelector("#squco-principles .section-title");
    if (pTitle && data.principles.title) pTitle.innerHTML = data.principles.title;

    const pSub = document.querySelector("#squco-principles .section-subtitle");
    if (pSub && data.principles.subtitle) pSub.textContent = data.principles.subtitle;

    const pConv = document.querySelector("#squco-principles .story-lead");
    if (pConv && data.principles.convictionText) pConv.textContent = data.principles.convictionText;

    const pQuoteHead = document.querySelector("#squco-principles .principle-callout-box h3");
    if (pQuoteHead && data.principles.quoteHeadline) pQuoteHead.textContent = data.principles.quoteHeadline;

    const pQuoteSub = document.querySelector("#squco-principles .principle-callout-box p");
    if (pQuoteSub && data.principles.quoteSubtext) pQuoteSub.textContent = data.principles.quoteSubtext;
  }

  // 4. Collections Section Header
  if (data.collections) {
    const cTag = document.querySelector("#products .section-tag");
    if (cTag && data.collections.sectionTag) cTag.textContent = data.collections.sectionTag;

    const cTitle = document.querySelector("#products .section-title");
    if (cTitle && data.collections.title) cTitle.textContent = data.collections.title;

    const cSub = document.querySelector("#products .section-subtitle");
    if (cSub && data.collections.subtitle) cSub.textContent = data.collections.subtitle;
  }

  // 5. Footer Section
  if (data.footer) {
    const fTagline = document.querySelector(".footer-brand p");
    if (fTagline && data.footer.tagline) fTagline.textContent = data.footer.tagline;

    const fCopy = document.querySelector(".footer-bottom p");
    if (fCopy && data.footer.copyright) fCopy.textContent = data.footer.copyright;
  }
}

// Global hook for manual content refresh
window.reloadSiteContent = loadSiteContentJSON;

// Run content loader on DOM load
document.addEventListener("DOMContentLoaded", () => {
  loadSiteContentJSON();
});
