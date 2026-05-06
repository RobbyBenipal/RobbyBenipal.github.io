# Robby Benipal — Portfolio

A modern, dark-themed static portfolio website for **Robby Benipal** — Software Engineer & Full Stack Developer based in Dallas / Denton, Texas. Hosted on GitHub Pages.

Built with **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript** — no build step required.

---

## ✨ Features

- **Dark modern developer aesthetic** with cyan/blue/purple gradient accents
- **Animated particle network** background in the hero section
- **Typing animation** cycling through job titles
- **Smooth scroll** navigation with active section highlighting
- **Custom cursor** with follower effect (desktop only)
- **Scroll progress bar** at the top of the page
- **Animated skill bars** that trigger on scroll
- **Responsive design** — mobile-first, works on all screen sizes
- **Hamburger mobile menu** with smooth open/close
- **Contact form** (UI with toast notification; plug in Formspree/EmailJS for real sending)
- **SEO meta tags** (Open Graph, Twitter Card, canonical URL)
- **Accessibility** — semantic HTML, ARIA labels, keyboard-navigable

---

## 📁 Project Structure

```
Portfolio-RobbyBenipal/
├── index.html              # Single-page portfolio (all sections)
├── assets/
│   ├── css/
│   │   └── style.css       # Custom animations, effects, and component styles
│   ├── js/
│   │   └── main.js         # Interactive features (cursor, particles, typing, etc.)
│   ├── images/
│   │   └── profile.jpg     # ← ADD YOUR PHOTO HERE
│   └── resume.pdf          # ← ADD YOUR RESUME HERE
└── README.md
```

---

## 🚀 Getting Started

### Local Development

No build step needed. Just open the file in your browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server (recommended — avoids CORS issues with fonts/scripts)
npx serve .
# or
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## 🌐 Deploying to GitHub Pages

### Method 1: Automatic via Repository Settings (Recommended)

1. Push this repository to GitHub (repo name: `Portfolio-RobbyBenipal` or `<username>.github.io`)
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set branch to `main` (or `master`) and folder to `/ (root)`
5. Click **Save**
6. Your site will be live at:
   - `https://<username>.github.io/Portfolio-RobbyBenipal/` (if named `Portfolio-RobbyBenipal`)
   - `https://<username>.github.io/` (if repo is named `<username>.github.io`)

### Method 2: GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🎨 Customization Guide

### 1. Personal Info
Edit `index.html` and update:
- Your name, title, and location (search for `Robby Benipal`)
- The professional summary in the **Hero** and **About** sections
- Social links (GitHub, LinkedIn, Twitch, Email)
- Your email address (search `robby@benipal.dev`)

### 2. Profile Photo
Replace the placeholder in `index.html` About section:
```html
<!-- Find this comment and uncomment the img tag below it -->
<img src="assets/images/profile.jpg" alt="Robby Benipal" ... />
```
Then add your photo to `assets/images/profile.jpg`.

### 3. Resume
Add your PDF resume to `assets/resume.pdf`.
The **Download Resume** buttons throughout the page will automatically link to it.

### 4. Projects
Each project is an `<article class="project-card">` in the Projects section.
Update:
- Project title and description
- Tech stack tags (`<span class="tech-tag">`)
- GitHub and Live Demo links (`href` on `.project-link-btn`)
- Emoji icon in `.project-img-placeholder` (or replace with `<img>`)

### 5. Experience / Timeline
Edit the `.timeline-item` blocks in the Experience section.
Update company names, dates, roles, and bullet points.

### 6. Skills & Progress Bars
Each skill bar has `data-width="XX"` controlling the fill percentage (0–100).
Update to match your actual proficiency levels.

### 7. Contact Form (Real Email)
The form currently simulates submission. To send real emails:

**Option A — Formspree:**
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option B — EmailJS:** Follow [EmailJS docs](https://emailjs.com/docs/) and update `main.js`.

### 8. Theme Colors
Colors are defined as CSS variables in `assets/css/style.css`:
```css
:root {
  --cyan:   #00d4ff;
  --blue:   #0080ff;
  --purple: #8b5cf6;
  --bg-dark: #0a0a0f;
}
```

### 9. SEO / Open Graph
Update the `<meta>` tags in `index.html` `<head>`:
- `og:url` — your actual GitHub Pages URL
- `og:image` — add a preview image at `assets/images/og-preview.png` (1200×630px)
- `twitter:card` fields

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Markup     | HTML5 (Semantic)                    |
| Styling    | Tailwind CSS (Play CDN) + Custom CSS|
| Icons      | Font Awesome 6                      |
| Fonts      | Google Fonts (Inter, JetBrains Mono)|
| JavaScript | Vanilla JS (ES6+)                   |
| Hosting    | GitHub Pages                        |

> **Note on Tailwind CDN:** The site uses Tailwind's Play CDN for zero-config setup.
> For production, consider switching to the [Tailwind CLI](https://tailwindcss.com/docs/installation) or
> [PostCSS build](https://tailwindcss.com/docs/installation/using-postcss) to purge unused styles
> and reduce the CSS bundle size.

---

## 📜 License

&copy; 2025 Robby Benipal. All rights reserved.

