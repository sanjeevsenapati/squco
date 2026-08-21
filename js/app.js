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
    id: "handwoven-hanky",
    category: "everyday",
    categoryLabel: "🧵 Everyday Handloom",
    name: "Handwoven Artisan Handkerchief",
    description: "Traditional handwoven cotton handkerchief for everyday use. Woven on heritage pit looms with a geometric star Ikat motif, natural dyed yarns, and breathable pure cotton weave.",
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
    tagline: "Handloom Artisan Weave",
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
    id: "everyday-commuter",
    category: "everyday",
    categoryLabel: "☕ Morning Commuter",
    name: "Morning Commuter Waffle-Weave Hanky",
    description: "Engineered for daily hustle and summer commutes. Breathable micro-waffle organic cotton that wicks moisture instantly and dries 2x faster in your pocket.",
    image: "assets/products/everyday-commuter.jpg",
    highlights: [
      "High-absorption micro-waffle organic weave",
      "Quick-drying & odor-resistant natural cotton",
      "Compact roll-and-tuck pocket design",
      "Gentle cooling comfort on skin"
    ],
    included: [
      "1x SQUCO Commuter Waffle Handkerchief",
      "1x Breathable Commuter Pouch",
      "1x Daily Care Card"
    ],
    idealFor: "Morning metro commutes, gym sessions, outdoor travel, and humid weather comfort",
    tagline: "Commuter Quick-Dry",
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
    id: "festival-rakshabandhan",
    category: "festival",
    categoryLabel: "🌸 Raksha Bandhan Special",
    name: "Raksha Bandhan Saffron & Gold Keepsake",
    description: "The sacred bond of love and protection. Gifted alongside the sacred Rakhi thread — a pure organic cotton handkerchief carrying a sister and brother's lifelong promise of care in every pocket.",
    image: "assets/products/festival-rakshabandhan.jpg",
    highlights: [
      "Sacred Saffron & Maroon Hand-Stitched Border",
      "100% Breathable Organic Cotton with Gold Zari Accents",
      "Special 'Bandhan of Care' Festive Keepsake Box",
      "Includes handmade silk Rakhi thread & Roli Chawal pack"
    ],
    included: [
      "1x SQUCO Raksha Bandhan Keepsake Handkerchief",
      "1x Handcrafted Silk Rakhi Thread & Roli Chawal",
      "1x Gold-Embossed Festival Presentation Box",
      "1x Handwritten Sibling Wish Card"
    ],
    idealFor: "Raksha Bandhan gifting, Bhai Dooj, sibling celebrations, and lasting everyday pocket carry",
    tagline: "Rakhi Special Edition",
    theme: "theme-festival"
  },
  {
    id: "festival-sabitri",
    category: "festival",
    categoryLabel: "🪔 Sabitri Brata Sacred",
    name: "Sabitri Brata Crimson & Gold Temple Hanky",
    description: "Sacred prayers and devotion for marital blessings and long life. Woven from auspicious vermilion crimson red cotton with gold temple brocade borders, traditionally kept during rituals.",
    image: "assets/products/festival-sabitri.jpg",
    highlights: [
      "Auspicious Vermilion Crimson Red Weave",
      "Traditional Golden Temple Border Brocade",
      "Soft holy prayer weave for morning rituals & temples",
      "Sacred blessing keepsake quality"
    ],
    included: [
      "1x SQUCO Sabitri Brata Crimson Handkerchief",
      "1x Brass-Etched Sacred Keepsake Box",
      "1x Auspicious Kumkum & Chandan Blessing Pouch"
    ],
    idealFor: "Sabitri Brata, Karwa Chauth, Vat Savitri, temple offerings, and sacred married blessings",
    tagline: "Sabitri Brata Sacred Edition",
    theme: "theme-festival"
  },
  {
    id: "festival-rathyatra",
    category: "festival",
    categoryLabel: "🎪 Rath Yatra Devotion",
    name: "Rath Yatra Sacred Nandighosa Pit-Loom Hanky",
    description: "Inspired by the holy Rath Yatra chariot colors and temple sanctity. Handwoven pit-loom cotton in vibrant sacred yellow and chariot-red with subtle temple wheel embroidery.",
    image: "assets/products/festival-rathyatra.jpg",
    highlights: [
      "Sacred Nandighosa Yellow & Scarlet Red Chariot Palette",
      "Handwoven pit-loom artisan cotton with wheel motif",
      "Absorbent, breathable for spiritual pilgrimages and monsoon yatras",
      "Cultural keepsake of Lord Jagannath's grand celebration"
    ],
    included: [
      "1x SQUCO Rath Yatra Sacred Handkerchief",
      "1x Handcrafted Miniature Chariot Wheel Token",
      "1x Eco-friendly Palm Leaf Carrying Box"
    ],
    idealFor: "Rath Yatra pilgrimage, spiritual gatherings, cultural heritage lovers, and auspicious gifting",
    tagline: "Rath Yatra Heritage Edition",
    theme: "theme-festival"
  },
  {
    id: "festival-newyear",
    category: "festival",
    categoryLabel: "✨ New Year Fresh Start",
    name: "New Year Fresh Start (Pristine White & Gold)",
    description: "Start the new calendar year with fresh intentions and clean mindful habits. Pristine snow-white Egyptian combed cotton with subtle silver & emerald monogramming.",
    image: "assets/products/festival-newyear.jpg",
    highlights: [
      "Pristine Snow-White Combed Organic Cotton",
      "Subtle Emerald & Gold Laurels Monogram",
      "Symbol of clean beginnings, fresh mindset, and zero waste",
      "Luxury gift packaging with New Year habit card"
    ],
    included: [
      "1x SQUCO New Year Edition Handkerchief",
      "1x 'Habit for the Year' Mindfulness Goal Guide",
      "1x Deluxe White & Emerald Embossed Gift Box"
    ],
    idealFor: "New Year gifts, corporate executive resolutions, clean beginnings, and holiday gifting",
    tagline: "New Year Edition",
    theme: "theme-festival"
  },
  {
    id: "festival-friendship",
    category: "festival",
    categoryLabel: "🤝 Friendship Day Special",
    name: "Friendship Day 'Always With You' Twin Set",
    description: "A pair of twin complementary woven handkerchiefs for best friends. A gentle reminder that true friendship is always there in times of laughter, adventure, or wiped tears.",
    image: "assets/products/festival-friendship.jpg",
    highlights: [
      "Twin Complementary Handkerchief Set (Blue & Honey Gold)",
      "Soft breathable double-gauze natural organic cotton",
      "Tied with natural jute twine and keepsake card",
      "Symbol of unspoken everyday care and companionship"
    ],
    included: [
      "2x SQUCO Twin Friendship Handkerchiefs",
      "1x Rustic Jute Bound Gift Wrapping",
      "1x 'Always in Your Pocket' Friendship Keepsake Card"
    ],
    idealFor: "Friendship Day, best friend birthdays, college farewells, travel companions, and close bonds",
    tagline: "Friendship Twin Set",
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
    id: "occasion-hanky",
    category: "festival",
    categoryLabel: "🎁 Wedding Return Gift",
    name: "Moments Worth Remembering (Occasion Gift)",
    description: "Some moments deserve something more personal than disposable tissues. Designed for festivals, family milestones, and personalized wedding return gifts with custom printed names.",
    image: "assets/products/occasion-hanky.jpg",
    highlights: [
      "Silk-bordered celebration weave",
      "Wedding return gift with custom name printing",
      "Gold foil embossed presentation box",
      "Timeless heirloom keepsake quality"
    ],
    included: [
      "1x SQUCO Celebration Handkerchief",
      "1x Gold Foil Embossed Gift Packaging",
      "1x Personalized Name Printed Keepsake Card"
    ],
    idealFor: "Wedding return gifts, festivals, milestone birthdays, family celebrations, and thoughtful gifts",
    tagline: "Wedding Return Gift",
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
  {
    id: "corporate-delegate",
    category: "corporate",
    categoryLabel: "🤝 Delegate & Conference",
    name: "Global Delegate Welcome Hanky Set",
    description: "Welcome international summit delegates and VIP guests with a meaningful, culturally rooted gift. Compact 2×2×2\" cube pack that travels effortlessly in luggage.",
    image: "assets/products/corporate-delegate.jpg",
    highlights: [
      "Lightweight travel-friendly 2×2×2 inches cube",
      "Custom conference event logo branding",
      "Soft breathable Indian heritage weave",
      "Thoughtful alternative to throwaway conference swag"
    ],
    included: [
      "1x SQUCO Delegate Handkerchief",
      "1x Custom Branded Delegate Cube Pack",
      "1x Welcome Message Card"
    ],
    idealFor: "International summits, annual conventions, investor meetings, and delegate welcome kits",
    tagline: "Delegate Welcome Set",
    theme: "theme-corporate"
  },

  // --- KIDS & LITTLE POCKETS COLLECTION ---
  {
    id: "kids-animal-hanky",
    category: "kids",
    categoryLabel: "🦁 Kids Animal Friends",
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
    tagline: "Animal Friends Edition",
    theme: "theme-kids"
  },
  {
    id: "kids-fruit-hanky",
    category: "kids",
    categoryLabel: "🍓 Kids Sweet Fruits",
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
    tagline: "Sweet Fruits Edition",
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
      "Custom 3×3×1 inches flat pocket pack",
      "Durable machine-washable & color-fast cotton"
    ],
    included: [
      "3x SQUCO School Uniform Handkerchiefs",
      "1x Kids Flat 3×3×1 inches Pocket Pack",
      "1x 'Carry Your Hanky' School Habit Badge"
    ],
    idealFor: "Primary school uniform pockets, sports day sweat, lunchbox spills, and daily school habits",
    tagline: "School Uniform Classic",
    theme: "theme-kids"
  },
  {
    id: "kids-artist-hanky",
    category: "kids",
    categoryLabel: "🎨 Kids Little Artist",
    name: "Kids Little Artist (Messy Play & Colors)",
    description: "Designed for young creators! Playful rainbow border stitching and ultra-absorbent double-layer cotton that cleans watercolor paints, clay messes, and glitter with a smile.",
    image: "assets/products/kids-artist-hanky.jpg",
    highlights: [
      "Vibrant rainbow edge stitching",
      "Double-layer absorbent organic cotton",
      "Stain-release quick wash weave",
      "Fun crayon-themed mini travel box"
    ],
    included: [
      "2x SQUCO Little Artist Handkerchiefs",
      "1x Color Palette Carrying Tin",
      "1x Mini Creative Drawing Bookmark"
    ],
    idealFor: "Art class, clay crafting, preschool messy play, watercolor painting, and cheerful daily wipes",
    tagline: "Little Artist Edition",
    theme: "theme-kids"
  },
  {
    id: "kids-bedtime-hanky",
    category: "kids",
    categoryLabel: "🌙 Kids Bedtime Dreamer",
    name: "Kids Bedtime Dreamer (Organic Comfort Cloth)",
    description: "Whisper-soft organic double-gauze cotton with tiny embroidered stars and moon. A soothing comfort handkerchief for toddlers to hold during bedtime stories and peaceful sleep.",
    image: "assets/products/kids-bedtime-hanky.jpg",
    highlights: [
      "Cloud-soft organic double-gauze muslin",
      "Gentle bedtime stars & moon pastel embroidery",
      "Calming, natural unbleached cotton feel",
      "Soothes toddlers for peaceful naps & bedtime"
    ],
    included: [
      "2x SQUCO Bedtime Dreamer Comfort Handkerchiefs",
      "1x Night-sky Pillow Gift Pouch",
      "1x Sweet Dreams Bedtime Story Card"
    ],
    idealFor: "Toddler soothing, bedtime routine, nursery comfort, car ride naps, and newborn gentle touch",
    tagline: "Bedtime Comfort Cloth",
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

// Mobile Hamburger Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");

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
