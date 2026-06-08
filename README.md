# Personal Portfolio Website

A personal portfolio website for `coniern`, built with Vite, React, and GSAP.

## Overview

This project is no longer a single product landing page. It has been upgraded into a personal website that combines:

- personal brand positioning
- portfolio project highlights
- resume-style profile sections
- interactive project navigation
- richer hover, pointer, and spotlight effects

The visual direction references stronger editorial and interactive portfolio websites rather than a standard resume page.

## Features

- large-format editorial hero layout
- bento-style capability cards
- flowing project navigation inspired by menu motion patterns
- hover-driven card feedback and pointer spotlight effects
- selected repositories integrated into a single portfolio narrative
- local MCP setup for `shadcn` + `@react-bits` registry usage

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
.vscode/
  mcp.json
components.json
images/
  *.png
```

## Commands

```bash
npm install
npm run dev
npm run build
```

## MCP Setup

This repository includes:

- `components.json` with the `@react-bits` registry
- `.vscode/mcp.json` with the `shadcn` MCP server entry

If you use Cursor or Claude Code instead of VS Code, equivalent MCP config files can be added separately.

## Notes

- Image assets are still original PNG files and should later be converted to WebP/AVIF.
- The current site is intended to evolve into a stronger personal showcase for full-stack + AI job applications.
