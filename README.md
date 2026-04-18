<div align="center">

# ⚡ SUSMIT ROY — Portfolio

**Technical Brutalist Personal Portfolio**

A high-performance, monochromatic portfolio built with vanilla HTML, CSS & JavaScript — engineered to reflect the precision of infrastructure work through a bold, minimalist design system.

[![HTML5](https://img.shields.io/badge/HTML5-0a0a0a?style=for-the-badge&logo=html5&logoColor=e84c30)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-0a0a0a?style=for-the-badge&logo=css3&logoColor=e84c30)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-0a0a0a?style=for-the-badge&logo=javascript&logoColor=e84c30)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[**View Live →**](#) · [**Download Resume**](#)

</div>

---

## 🎯 Overview

A meticulously crafted personal portfolio for **Susmit Roy** — Application Support Engineer & Full-Stack Developer. The design follows a **Technical Brutalist** aesthetic: dark monochromatic surfaces, sharp typography, and subtle accent highlights that convey technical authority.

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🏗️ **Hero Section** | Full-viewport landing with animated typography, live stat counters, and high-contrast portrait |
| 📋 **Interactive Timeline** | Scroll-triggered experience timeline with glowing dot indicators and domain tags |
| 🧩 **Project Showcase** | Bento-grid layout with hover-reveal animations and image scaling effects |
| 🛠️ **Skills Matrix** | 4-column responsive grid with glow-on-hover card interactions |
| 🎓 **Certifications** | Animated pop-in certification badges (ITIL, AZ-800, Python, Cisco) |
| 📱 **Fully Responsive** | Adaptive layouts for desktop, tablet, and mobile with hamburger menu |
| ⚡ **Smooth Animations** | Intersection Observer-driven scroll animations with staggered delays |
| 🎨 **Custom Scrollbar** | Styled scrollbar matching the dark theme |

---

## 🖥️ Screenshots

<div align="center">

### Hero Section
> Dark, high-contrast hero with animated stat counters (99% SLA Adherence, 35% Faster Resolution) and grayscale portrait.

### Projects Grid
> Bento-grid project cards with hover lift effect, border glow, and subtle image zoom.

### Skills & Certifications
> Minimal skill cards with accent glow borders on hover and pop-in certification badges.

</div>

---

## 🏛️ Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#0a0a0a` | Primary background |
| `--color-bg-elevated` | `#141414` | Elevated surfaces |
| `--color-bg-card` | `#1a1a1a` | Card backgrounds |
| `--color-surface` | `#1e1e1e` | Surface elements |
| `--color-border` | `#2a2a2a` | Borders & dividers |
| `--color-text` | `#f0f0f0` | Primary text |
| `--color-text-secondary` | `#999999` | Secondary text |
| `--color-accent` | `#e84c30` | Accent / CTA |
| `--color-accent-hover` | `#ff5a3d` | Accent hover state |

### Typography

- **Display:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — Headings & titles
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) — Body text & UI elements

### Animations

All scroll animations are powered by the **Intersection Observer API** with configurable animation types:

| Attribute | Effect |
|-----------|--------|
| `data-animate="slide-up"` | Slides up 40px into position |
| `data-animate="slide-left"` | Slides in from the left |
| `data-animate="fade-in"` | Fades in with subtle upward drift |
| `data-animate="fade-up"` | Fades up 30px |
| `data-animate="scale-in"` | Scales from 95% to 100% |
| `data-animate="pop-in"` | Pops from 85% to 100% |

---

## 📁 Project Structure

```
Susmit-roy.profile/
├── index.html              # Main HTML — semantic structure
├── styles.css              # Complete design system & responsive styles
├── script.js               # Scroll animations, nav behavior, counters
├── assets/
│   ├── images/
│   │   ├── portrait.jpg    # Hero portrait (grayscale)
│   │   ├── portrait.png    # Portrait source
│   │   ├── project-photographer.png
│   │   ├── project-itsm.png
│   │   ├── project-health.png
│   │   └── project-directory.png
│   └── Susmit_Roy_Resume.jpg
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- [Node.js](https://nodejs.org/) (optional — only for local dev server)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/Susmit-roy.profile.git

# Navigate to the project
cd Susmit-roy.profile

# Option 1: Open directly
# Simply open index.html in your browser

# Option 2: Use a local server (recommended)
npx serve -l 3000

# The site will be available at http://localhost:3000
```

### Deploy to GitHub Pages

1. Push the repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch and `/root` directory
4. Click **Save** — your site will be live at `https://your-username.github.io/Susmit-roy.profile/`

---

## 🧩 Sections Breakdown

### 1. Navigation
- Fixed top navbar with scroll-triggered backdrop blur
- Active section highlighting via scroll position tracking
- Mobile hamburger menu with full-screen overlay

### 2. Hero
- Three-line animated title: "Architecting / *Scalable* / Infrastructure."
- Animated stat counters with eased cubic interpolation
- High-contrast portrait with grayscale filter and hover reveal
- Parallax scroll effect on portrait (desktop only)

### 3. Experience Timeline
- Two professional roles with detailed achievements
- Scroll-triggered slide-in animations
- Domain tags with hover accent highlight
- Vertical timeline with glowing accent dots

### 4. Digital Craftsmanship (Projects)
- 2×2 bento grid layout
- Projects: Photographer Portfolio, ITSM Dashboard, Infra Health Monitor, Photographer Directory
- Hover effects: card lift (4px), border glow, image zoom (1.05×)

### 5. Skills
- 4-column grid (responsive: 2-col tablet, 1-col mobile)
- Categories: ITSM & Process, Systems & Infra, Cloud & Automation, Databases & Scripting
- Hover: accent border glow + lift animation

### 6. Education & Certifications
- B.Tech Electronics & Communication
- Animated certification badges: ITIL, AZ-800, Python, Cisco

### 7. CTA & Footer
- Bold call-to-action with radial gradient glow
- Email contact + downloadable resume
- Footer with LinkedIn & GitHub links

---

## ⚡ Performance

- **Zero dependencies** — No frameworks, no build tools
- **Vanilla CSS** — Custom properties for consistent theming
- **Async font loading** — Google Fonts with `preconnect`
- **Passive scroll listeners** — Optimized scroll performance
- **IntersectionObserver** — No scroll event overhead for animations
- **CSS `will-change`** — Hardware-accelerated transitions

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

<div align="center">

**Susmit Roy**

[![Email](https://img.shields.io/badge/Email-susmit99roy%40gmail.com-0a0a0a?style=for-the-badge&logo=gmail&logoColor=e84c30)](mailto:susmit99roy@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0a0a0a?style=for-the-badge&logo=linkedin&logoColor=e84c30)](https://linkedin.com)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-0a0a0a?style=for-the-badge&logo=github&logoColor=e84c30)](https://github.com)

</div>

---

<div align="center">
<sub>Designed & Engineered with precision by <strong>Susmit Roy</strong> · 2025</sub>
</div>
