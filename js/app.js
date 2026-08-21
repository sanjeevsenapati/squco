/**
 * SQUCO — The Handkerchief Revival Application Logic
 * Pure Vanilla JavaScript
 */

// ==========================================================================
// 1. CONFIGURATION (Single Source of Truth)
// ==========================================================================
const CONFIG = {
  // Business WhatsApp number: 7788778800
  whatsappNumber: "917788778800",
  displayPhone: "7788778800",
  formattedPhone: "+91 7788778800",
  defaultMessage: "Hi SQUCO, I am interested in joining the hanky revival movement! Please share pricing and collection details."
};

// ==========================================================================
// 2. PRODUCT DATASTORE (SQUCO Handkerchief Collections)
// ==========================================================================
const products = [
  {
    id: "daily-hanky",
    category: "daily",
    categoryLabel: "🏠 SQUCO Daily",
    name: "Everyday Handkerchief",
    description: "Your everyday reminder to carry a hanky again. Crafted from organic 100% fine cotton, soft against the skin, and ultra-durable for work, commute, and daily life.",
    image: "assets/products/daily-hanky.jpg",
    highlights: [
      "100% Premium Organic Cotton",
      "Signature 2×2×2 inches zigzag pocket cube",
      "Quick-dry & highly absorbent weave",
      "Minimalist contrast stitch detail"
    ],
    included: [
      "1x SQUCO Premium Daily Handkerchief",
      "1x Reusable 2×2×2 inches Zigzag Pocket Cube",
      "1x Habit Revival Care Guide"
    ],
    idealFor: "Office commute, daily errands, work desk, travel, and personal hygiene",
    tagline: "2×2×2\" Zigzag Cube"
  },
  {
    id: "handwoven-hanky",
    category: "handwoven",
    categoryLabel: "🧵 SQUCO Handwoven",
    name: "Handwoven Artisan Handkerchief",
    description: "Traditional handwoven cotton handkerchief for everyday use. Woven on heritage pit looms with a geometric star Ikat motif, natural dyed yarns, and breathable pure cotton weave that gets softer with every wash.",
    image: "assets/products/handwoven-hanky.jpg",
    highlights: [
      "100% Handloom Organic Cotton Weave",
      "Heritage Geometric Star Ikat Motif",
      "Ultra-soft breathable natural dyed yarn",
      "Signature 2×2×2 inches Zigzag Pocket Fold"
    ],
    included: [
      "1x SQUCO Handwoven Artisan Handkerchief",
      "1x Reusable 2×2×2 inches Craft Box",
      "1x Handloom Weaver Certificate of Origin"
    ],
    idealFor: "Everyday carry, cultural gatherings, summer heat, mindful lifestyle, and artisanal gifting",
    tagline: "Handloom Artisan Weave"
  },
  {
    id: "kids-animal-hanky",
    category: "kids",
    categoryLabel: "👶 SQUCO Kids",
    name: "Kids Safari Friends (Animal Printed)",
    description: "Ultra-soft pastel organic cotton handkerchiefs featuring cute baby animal embroidery (Lion, Panda, Elephant) with rounded safety corners and a playful 3×3×1\" pocket cube.",
    image: "assets/products/kids-animal-hanky.jpg",
    highlights: [
      "Soft Baby Lion, Panda & Elephant Characters",
      "Rounded safety hem with gentle stitching",
      "Hypoallergenic 100% organic combed cotton",
      "Includes colorful 3×3×1 inches Kids Pocket Cube"
    ],
    included: [
      "3x SQUCO Kids Animal Embroidered Handkerchiefs",
      "1x Kids Adventure 3×3×1 inches Pocket Cube",
      "1x 'Hanky Hero' Reward Sticker Sheet"
    ],
    idealFor: "Play school, primary school uniform pockets, travel days, and teaching children everyday personal hygiene",
    tagline: "Animal Friends Edition"
  },
  {
    id: "kids-fruit-hanky",
    category: "kids",
    categoryLabel: "👶 SQUCO Kids",
    name: "Kids Sweet Fruits (Fruit Printed)",
    description: "Delightful pastel cotton handkerchiefs with smiling fruit prints (Strawberries, Watermelon slices, Sunny Lemons). Lightweight, super-absorbent, and cheerful for little hands.",
    image: "assets/products/kids-fruit-hanky.jpg",
    highlights: [
      "Joyful smiling strawberry & watermelon prints",
      "Breathable double-gauze ultra-soft cotton",
      "Color-fast natural non-toxic vegetable dyes",
      "Quick-dry weave for messy playtime moments"
    ],
    included: [
      "4x SQUCO Kids Sweet Fruits Handkerchiefs",
      "1x Pastel 3×3×1 inches Carrying Tin",
      "1x Fun Habit Tracker Chart"
    ],
    idealFor: "Lunchboxes, school picnics, art class, everyday outdoor play, and toddler care",
    tagline: "Sweet Fruits Edition"
  },
  {
    id: "kids-hanky",
    category: "kids",
    categoryLabel: "👶 SQUCO Kids",
    name: "Kids School Uniform Classic",
    description: "Teach them a simple habit they'll carry for life. Before children grow up carrying everything on a phone, teach them to carry something useful in their pocket.",
    image: "assets/products/kids-hanky.jpg",
    highlights: [
      "Extra soft skin-friendly weave",
      "Custom 3×3×1 inches flat pocket pack",
      "Fits small school uniform pockets perfectly",
      "Machine-washable & color-fast"
    ],
    included: [
      "1x SQUCO Kids Classic Handkerchief",
      "1x Kids Flat 3×3×1 inches Pocket Pack",
      "1x Fun 'Carry Your Hanky' Habit Badge"
    ],
    idealFor: "School days, playground fun, family outings, and building healthy childhood habits",
    tagline: "School Uniform Classic"
  },
  {
    id: "grownups-hanky",
    category: "grownups",
    categoryLabel: "🧑 SQUCO Grownups",
    name: "For Him. For Her. For Everyone.",
    description: "Grown-up life is full of small moments. Be prepared for them with a modern, elegant handkerchief that looks sophisticated in any pocket or purse.",
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
    tagline: "1×1×3\" Slim Stick Pack"
  },
  {
    id: "occasion-hanky",
    category: "occasion",
    categoryLabel: "🎁 SQUCO Occasion",
    name: "Moments Worth Remembering",
    description: "Some moments deserve something more personal than a disposable tissue. Designed for celebrations, festivals, birthdays, and personalized wedding return gifts with custom printed names.",
    image: "assets/products/occasion-hanky.jpg",
    highlights: [
      "Silk-bordered celebration weave",
      "Wedding return gift with custom name printing",
      "Gold foil embossed presentation box",
      "Timeless heirloom quality"
    ],
    included: [
      "1x SQUCO Celebration Handkerchief",
      "1x Gold Foil Embossed Gift Packaging",
      "1x Personalized Name Printed Keepsake Card"
    ],
    idealFor: "Wedding return gifts, festivals, milestone birthdays, family celebrations, and thoughtful gifts",
    tagline: "Wedding Return Gift"
  },
  {
    id: "corporate-hanky",
    category: "corporate",
    categoryLabel: "💼 SQUCO Corporate",
    name: "Carry Your Brand",
    description: "Turn an everyday object into something employees and clients actually use and cherish. Custom branded handkerchief sets for modern companies and executive gifting.",
    image: "assets/products/corporate-hanky.jpg",
    highlights: [
      "Custom corporate logo embroidery",
      "Sustainable ESG-friendly corporate gift",
      "Bulk custom branded packaging options",
      "High employee and client utility value"
    ],
    included: [
      "Custom SQUCO Corporate Handkerchief Sets",
      "Custom Branded 2×2×2 inches Cube Boxes",
      "Direct Corporate Account Assistance"
    ],
    idealFor: "Employee onboarding kits, client appreciation, conferences, and sustainable corporate gifts",
    tagline: "Corporate Gifting"
  },
  {
    id: "couple-hanky",
    category: "couple",
    categoryLabel: "💕 First Night Keepsake",
    name: "Marriage Handkerchief (Blood Red)",
    description: "Blood Red & Gold First Night Keepsake. Two people. One sacred habit. Crafted from rich blood-red silk with golden embroidery in an exquisite presentation box, designed for the couple's first night together and lifelong romantic memories.",
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
    tagline: "Blood Red First Night"
  }
];

// ==========================================================================
// 3. WHATSAPP ORDERING UTILITY
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
// 4. UI INITIALIZATION & EVENT HANDLERS
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

// Render Collection Cards Dynamically
function renderProducts(categoryFilter = "all") {
  const container = document.getElementById("products-container");
  if (!container) return;

  const filteredProducts = categoryFilter === "all"
    ? products
    : products.filter(p => p.category === categoryFilter);

  container.innerHTML = "";

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    if (product.category === "couple") {
      card.classList.add("card-vibrant-red");
    }
    card.setAttribute("data-id", product.id);

    const highlightsHTML = product.highlights
      .slice(0, 3)
      .map(h => `<li>${h}</li>`)
      .join("");

    card.innerHTML = `
      <div class="product-card-badge">${product.categoryLabel}</div>
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-card-body">
        <span class="product-category">Handkerchief Collection</span>
        <h3 class="product-title">${product.name}</h3>
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

    container.appendChild(card);
  });
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

// Mobile Hamburger Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const isActive = navMenu.classList.contains("active");
      toggleBtn.setAttribute("aria-expanded", isActive);
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        toggleBtn.setAttribute("aria-expanded", false);
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
// 5. PRODUCT DETAIL MODAL SYSTEM
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
