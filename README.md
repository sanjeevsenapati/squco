# SQUCO — The Handkerchief Revival

A modern, premium, mobile-first static website for **SQUCO** — bringing back the habit of carrying a handkerchief.

## Key Concept & Features

- **"Bring Back the Hanky" Movement**: Emotional storytelling explaining why carrying a handkerchief is a small, essential everyday habit worth reviving.
- **Revolutionary 2 × 2 × 2 CM Packet**: Compact packaging concept that makes carrying a hanky effortless in any pocket or bag.
- **Prominent WhatsApp Contact (`7788778800`)**:
  - Configured globally in `js/app.js` (`whatsappNumber: "917788778800"`).
  - Displayed prominently across the top announcement bar, header, hero card, movement banner, modal, mobile bottom bar, and footer.
- **6 Tailored Collections**:
  1. 🏠 **SQUCO Daily**: Everyday Handkerchief
  2. 👶 **SQUCO Kids**: For Little Pockets
  3. 🧑 **SQUCO Grownups**: Him, Her & Everyone
  4. 🎁 **SQUCO Occasion**: Moments Worth Remembering
  5. 💼 **SQUCO Corporate**: Carry Your Brand
  6. 💕 **SQUCO Marriage / Couple**: Two People. One Little Habit.
- **Direct WhatsApp Commerce**: No cart or checkout forms. Every button generates a collection-specific pre-filled message directly to WhatsApp **7788778800**.

---

## File Architecture

```text
squco.in/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   ├── logo/
│   │   └── logo.jpg
│   ├── hero/
│   │   └── hero-hanky-packet.jpg
│   ├── packaging/
│   │   └── packet-2x2x2.jpg
│   └── products/
│       ├── daily-hanky.jpg
│       ├── kids-hanky.jpg
│       ├── grownups-hanky.jpg
│       ├── occasion-hanky.jpg
│       ├── corporate-hanky.jpg
│       └── couple-hanky.jpg
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## Local Development & Testing

Serve locally via Python or any static web server:

```bash
python3 -m http.server 8085
```

Open `http://localhost:8085` in any browser.

---

## License & Copyright

© 2026 SQUCO. All rights reserved. #BringBackTheHanky
