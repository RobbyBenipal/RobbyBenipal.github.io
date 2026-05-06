# Robby Benipal — Portfolio

Static portfolio site for Robby Benipal, hosted on GitHub Pages.

## Overview

- Single-page portfolio in `index.html`
- Tailwind CSS output (`assets/css/tailwind.css`) + custom styles (`assets/css/style.css`)
- Vanilla JavaScript interactions in `assets/js/main.js`
- Contact form posts via FormSubmit AJAX endpoint

## Project Structure

```text
RobbyBenipal.github.io/
├── index.html
├── package.json
├── tailwind.config.js
├── assets/
│   ├── css/
│   │   ├── tailwind-input.css
│   │   ├── tailwind.css
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   └── og-preview.svg
│   └── resume-placeholder.txt
└── README.md
```

## Local Development

Run a local server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Tailwind Setup

This repo uses prebuilt Tailwind output.

- Source: `assets/css/tailwind-input.css`
- Output: `assets/css/tailwind.css`

Regenerate CSS with:

```bash
npx tailwindcss -i assets/css/tailwind-input.css -o assets/css/tailwind.css --minify
```

## Contact Form

The contact form in `index.html` sends submissions to:

`https://formsubmit.co/ajax/benipalrobby@gmail.com`

JavaScript handles async submit and toast messaging in `assets/js/main.js`.

## Content Updates

Common updates are in `index.html`:

- Hero/About/Experience text
- Featured projects and skills
- Social/profile links
- SEO/Open Graph metadata

## Deployment

Deploy from the `main` branch via GitHub Pages.

For this user-site repository (`RobbyBenipal.github.io`), the live URL is:

`https://robbybenipal.github.io/`

## Notes

- Add a real resume as `assets/resume.pdf` to enable the resume download buttons.
- Add a real profile photo at `assets/images/profile.jpg` if desired.

