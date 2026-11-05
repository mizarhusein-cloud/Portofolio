# Portofolio — Franshin Mizar Husain

Personal portfolio of **Franshin Mizar Husain**, Frontend Developer.
An immersive, scroll-driven 3D landing page built with React, Vite, TypeScript and Three.js.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5175.

## Editing the content

All text (hero, about, projects, skills, contact) lives in one file:

```
public/landing-pages/portfolio-data.js
```

To add a project, copy one `{ ... }` block inside `projects`, paste it at the end of the list and change the text.
Card numbering, stats and footer links update automatically. Put only **live website** links in `liveUrl`.

## Tech

- React 19 + TypeScript + Vite
- Three.js (WebGL scene)
- Vanilla JS content renderer (`portfolio-render.js`)

## Contact

- Email: mizarhusein@gmail.com
- LinkedIn: https://www.linkedin.com/in/franshin-mizar-h-aa4b73119
