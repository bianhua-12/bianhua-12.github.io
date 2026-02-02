# Repository Guidelines

This repository hosts a personal website built with React (Vite + TypeScript) and deployed to GitHub Pages via GitHub Actions. A legacy Hexo site remains in `GitHubPage/` for reference only.

## Project Structure & Module Organization

- `src/`: React app.
  - `src/App.tsx`: page layout (hero/about/projects) and UI behavior (e.g., project image zoom modal).
  - `src/content.ts`: site content/config (links, About rich text segments, project list + image paths).
  - `src/styles.css`: CSS tokens + layout rules (responsive variables, header/hero overlap, project card sizing).
- `public/`: static assets copied as-is to the build output.
  - `public/img/`: images (e.g., `profile.png`, `projects/*.png`).
  - `public/attaches/`: downloadable files (e.g., `CV.pdf`).
- `website.pen`: design source (Penpot/Figma-export style JSON); use it as the visual spec.
- `.github/workflows/pages.yml`: CI build + GitHub Pages deploy on push.
- `.nvmrc`: Node version for local dev (Node 18).
- `GitHubPage/`: legacy Hexo project (do not wire into deploy unless explicitly migrating back).

## Build, Test, and Development Commands

Use Node 18 (`nvm use 18`; `.nvmrc` is provided). Run from repo root:

- `yarn install`: install dependencies (generates/uses `yarn.lock`).
- `yarn.lock`: commit this file; CI uses a frozen install.
- `yarn dev`: run local dev server.
- `yarn build`: build static site to `dist/`.
- `yarn preview`: serve the built `dist/` locally.
- `yarn typecheck`: TypeScript type-check.

## Coding Style & Naming Conventions

- TypeScript strict mode; keep components small and data in `src/content.ts`.
- Put new images under `public/img/` (suggested: `public/img/projects/<name>.png`) and reference them as `"/img/projects/<name>.png"`.
- Don’t commit build artifacts (`dist/`) or dependencies (`node_modules/`).

## Testing Guidelines

There is no dedicated test suite. Validate changes with `yarn typecheck`, `yarn build`, and a quick `yarn preview` smoke check.

## Responsive Layout Contract (Design → Code)

- Treat `website.pen` as the source of truth for typography, spacing, and component structure.
- Prefer responsive units over fixed pixels: `clamp()`, `%`, `vw`, and CSS variables (e.g., `--header-h`, `--hero-h`).
- The header intentionally overlaps the hero blob (the nav is not pushed below the hero art).

## Commit & Pull Request Guidelines

- Keep commit messages short and descriptive (the repo history commonly uses `update ...`).
- PRs should include a summary and screenshots for layout changes (especially if modifying hero/projects/about sections).
