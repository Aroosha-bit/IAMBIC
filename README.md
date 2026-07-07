# IAMBIC — Precision-Fit Footwear Marketing Platform

An elegant, highly interactive marketing web platform for **IAMBIC**, a brand dedicated to crafting precision-fit, personalized footwear through smartphone-based foot scans and continuous feedback.

The site is built as a modern, responsive, single-page application using **Next.js (App Router)**, **React 19**, and **Tailwind CSS v4**.

---

## ✨ Key Features

1. **Scroll-Driven Workflow Showcase**
   - Interactive, scroll-linked progress indicator for the 3-step IAMBIC fit lifecycle: **Scan** ➔ **Wear** ➔ **Evolve**.
   - Side-by-side transition showing active cards alongside dynamic SVG states.

2. **Parallax Shoe Animation**
   - A smooth, scroll-controlled vertical translation animation of the precision-fit shoe, guiding the user visually through the luxury section of the page.

3. **Premium Visual Assets & Design**
   - Customized brand palettes featuring rich crimson red (`#BA1F00`), warm peach/orange tones (`#FFA06C`), and clean white spaces.
   - Elegant typography, smooth micro-animations, and full responsiveness across mobile, tablet, and desktop layouts.

4. **Interactive Carousels & Marquees**
   - Smooth testimonial slider powered by **Swiper.js**.
   - Custom infinite scrolling ticker marquee ("IAMBIC IS BUILT TO BE BETTER").

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI & Logic**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Slider/Carousel**: [Swiper](https://swiperjs.com/)

---

## 📂 Project Structure

```text
├── app/
│   ├── data/
│   │   └── homeData.ts      # Structured data for testimonials, workflow steps, and marquees
│   ├── globals.css          # Tailwind CSS directives and custom page defaults
│   ├── layout.tsx           # Base HTML layout and font optimization setup
│   └── page.tsx             # Interactive Home Page component with scroll-linked animations
├── public/                  # Static assets (brand logos, SVG visuals, and shoe renders)
├── tailwind.config.ts       # Tailwind configurations
├── tsconfig.json            # TypeScript configuration
└── package.json             # Core scripts and dependencies
```

---

## 🚀 Getting Started

### 1. Install Dependencies

Using `npm`:
```bash
npm install
```

### 2. Run the Development Server

Start the local server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the live site.

### 3. Build for Production

Compile the production application:
```bash
npm run build
```

To run the production build locally:
```bash
npm run start
```
