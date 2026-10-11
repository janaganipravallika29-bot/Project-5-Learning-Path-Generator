# DESIGN.md
# AI Learning Path Generator — UI/UX Design System Specification

## 1. Design Vision & Philosophy
The **AI Learning Path Generator (PathForge AI)** uses a modern **Dark Cosmic Nebula** visual design system. The interface transitions away from flat, plain white layouts into a vibrant, high-contrast, production-grade AI SaaS experience utilizing glowing gradients in **royal blue, deep purple, violet, electric cyan, and soft pink accents**.

---

## 2. Core Visual Style & Color Palette

### Ambient Background & Surfaces
- **App Canvas Base:** `#090D16` (Deep Midnight Obsidian)
- **Glassmorphic Card Surfaces:** `rgba(17, 24, 39, 0.78)` with `backdrop-filter: blur(20px)`
- **Elevated Surfaces:** `rgba(24, 33, 56, 0.85)`
- **Input Background:** `rgba(15, 23, 42, 0.85)`

### Theme Gradients & Accents
- **Primary Brand Gradient:** `linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)`
- **Electric Cyan-Blue:** `linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)`
- **Purple-Violet Accent:** `linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)`
- **Radiant Gold Capstone:** `linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)`
- **Success Emerald:** `#10B981` (Glow: `rgba(16, 185, 129, 0.3)`)
- **Error / Attention Pink:** `#EC4899` (Border: `rgba(236, 72, 153, 0.45)`)

### High-Contrast Typography
- **Headings & Primary Text:** `#FFFFFF` / `#F8FAFC` (Pure bright white)
- **Secondary Readable Text:** `#CBD5E1` (Silver / Slate)
- **Muted Hints & Labels:** `#94A3B8`
- **Font Families:** `Plus Jakarta Sans` for UI, `JetBrains Mono` for code & technical schemas.

---

## 3. Page Architecture & Visual Elements

### 3.1 Hero Landing Page
- Ambient background light orbs (`.ambient-orb`) providing subtle depth.
- Sparkle badge indicator: `✨ Next-Gen AI Learning Path Generator • MCP v1.0 Verified`.
- Big bold gradient title: **Master Any Tech Career With A Personalized AI Roadmap**.
- High-visibility action CTAs:
  - `🚀 Get Started — Build My Path` (Smooth scroll directly to input form).
  - `⚡ Load Instant Demo` (Pre-fills sample profile with one click).
- 4 Value Pillar Cards with neon glow borders (Cyan, Purple, Blue, Pink).

### 3.2 Glassmorphic Form Card
- **Form Card:** Glassmorphism card container with multi-stop glowing border.
- **Dynamic Hours Widget:** Real-time calculation widget showing estimated study hours (e.g. `~112 hours total (8 weeks @ 2h/day)`).
- **Inputs:** Custom dark inputs with icon prefixes, subtle borders, and vivid purple/cyan focus glows.
- **Skill Chips:** Interactive pill buttons (`+ Python`, `+ SQL`, `+ PyTorch`, `+ Docker`) with hover elevation.
- **Conditional Goal:** Dynamic custom career goal field for "Other".
- **Dual Buttons:** Clear Form ghost button and glowing gradient submit button.

### 3.3 Learning Roadmap Master Display (Phases 4 & 5)
- **Master Banner:** Role track pill badge, estimated hours, and side-by-side skill gap comparison tags.
- **Progress Radial Meter:** High-impact completion percentage with vibrant gradient fill.
- **Daily Routine Breakdown:** 3-stage daily time allocation cards.
- **Weekly Modules Accordion:** Collapsible week-by-week cards with milestone tags, interactive topic checkboxes, hands-on coding drills, and weekly mini-projects.
- **Capstone Project Showcase:** Golden radiant card with trophy milestone badge.
- **Curated Resources:** Multi-column documentation and practice cards.
- **Export & Print Actions:** 1-click JSON download and dedicated print-to-PDF stylesheet.

### 3.4 Progress Tracking Dashboard (Phase 6)
- **4 Vibrant Stat Tiles:**
  - `Completed Tasks` (Cyan Glow)
  - `Tasks Remaining` (Purple Glow)
  - `Hours Invested` (Blue Glow)
  - `Current Stage` (Pink Glow)
- **Active Curriculum Table:** Real-time habit tracking and module review with persistent `localStorage` support.

### 3.5 MCP Diagnostics Inspector (Phase 3)
- Live tool telemetry modal displaying JSON-RPC protocol status, connected tools (`profile_analyzer`, `roadmap_synthesizer`, `progress_tracker`), and server health check data.

---

## 4. Design Tokens Reference

```css
:root {
  --bg-base: #090D16;
  --bg-surface: rgba(17, 24, 39, 0.78);
  --color-purple: #8B5CF6;
  --color-violet: #7C3AED;
  --color-blue: #2563EB;
  --color-cyan: #06B6D4;
  --color-pink: #EC4899;
  --color-emerald: #10B981;
  --color-gold: #F59E0B;
  
  --gradient-brand: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%);
  --gradient-cyan-blue: linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%);
  
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```
