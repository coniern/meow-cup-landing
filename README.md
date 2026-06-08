# Meow Cup Landing

An editorial product landing page for a ceramic cat cup, built with Vite, React, and GSAP.

## Overview

This project turns a small image set into a luxury campaign-style landing page with:

- a dominant hero composition
- controlled reveal animations
- desktop sticky storytelling
- mobile-friendly sequential layouts
- a cleaner repository structure for presentation and maintenance

## Tech Stack

- React 18
- Vite 5
- GSAP + ScrollTrigger
- Plain CSS

## Project Structure

```text
src/
  App.jsx
  content.js
  main.jsx
  styles.css
  components/
    PhotoCard.jsx
  hooks/
    useLandingAnimations.js
    usePointerGlow.js
images/
  *.png
```

## Commands

```bash
npm install
npm run dev
npm run build
```

## Notes

- Image assets currently remain as original PNG files.
- A future optimization pass should convert images to WebP/AVIF and generate responsive sizes.
- The repository was simplified from an earlier 3D prototype into a focused 2D editorial product page.
