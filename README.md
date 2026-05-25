# Komorebi Archive

Komorebi Archive is a focused wallpaper gallery application showcasing Sakura-themed imagery. It is implemented with React, Vite, Tailwind CSS, and Framer Motion, and includes a small tooling script to generate a wallpaper manifest from assets stored in `public/wallpapers`.

## Goals
- Provide a lightweight, responsive gallery for curated wallpaper collections.
- Keep asset management simple via an automated manifest generator.
- Offer a minimal, maintainable codebase for experimentation and deployment.

## Quick Start
Prerequisites: Node.js 18+ and npm.

```powershell
npm install
npm run generate:wallpapers
npm run dev
```

## Available Scripts
- `npm run dev` — start the Vite development server
- `npm run build` — build the production bundle
- `npm run preview` — locally preview the production build
- `npm run deploy` — deploy `dist` to GitHub Pages (`gh-pages`)
- `npm run generate:wallpapers` — scan `public/wallpapers` and produce `src/data/wallpaperManifest.json`

## Project Structure (high level)
- `public/wallpapers/` — image assets organized into subfolders (e.g. `hero`, `sakura`)
- `scripts/generate-wallpaper-manifest.mjs` — manifest generator script
- `src/data/wallpaperManifest.json` — generated manifest used by the app
- `src/components/` — React components (gallery, cards, modal, etc.)
- `src/pages/HomePage.jsx` — application entry view

## Development Notes
- Add or remove image files under `public/wallpapers/*`, then re-run `npm run generate:wallpapers` to refresh the manifest.
- Keep individual image filenames and folder organization consistent to avoid broken references.
- Tailwind configuration is in `tailwind.config.js`; styles are imported from `src/styles/index.css`.

## Contributing
Contributions are welcome. Please open issues or pull requests with focused changes. For changes to the asset collection, include a note confirming you regenerated the manifest.

## License
MIT — include a `LICENSE` file if you want to make the terms explicit.

If you'd like a shorter README, a README tailored for npm or a deploy guide added, tell me which and I'll update it.

