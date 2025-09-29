# Resume Builder

A small React + Vite app that helps you build and preview a resume. The project is intentionally minimal so you can learn component composition, controlled inputs, and Tailwind CSS integration.

Table of contents
- [Features](#features)
- [Quick start](#quick-start)
- [Tailwind CSS notes](#tailwind-css-notes)
- [Project structure](#project-structure)
- [Component patterns and suggestions](#component-patterns-and-suggestions)
- [Git / deployment notes](#git--deployment)
- [Troubleshooting](#troubleshooting)

## Features

- Controlled form inputs for General Information, Education, and Experience
- Live preview components for each section
- Tailwind CSS for quick, utility-based styling

## Quick start

Requirements
- Node.js 18+ and npm

Install dependencies

```bash
npm install
```

Start the dev server

```bash
npm run dev
```

Open the local URL printed by Vite (commonly `http://localhost:5173` or `http://localhost:5174`).

Build for production

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

## Tailwind CSS notes

This project uses Tailwind via PostCSS. If you run into PostCSS or Tailwind build errors, follow these checks:

1. Make sure required dev dependencies are installed:

```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
```

2. Confirm `postcss.config.cjs` uses the adapter:

```js
module.exports = {
	plugins: {
		'@tailwindcss/postcss': {},
		autoprefixer: {},
	},
};
```

3. If you see errors complaining about `@apply` or unknown utility classes, ensure you:

- Wrap `@apply` usage inside `@layer` blocks when defining component utilities in `src/index.css`.
- Include every file that contains Tailwind classes in `tailwind.config.cjs` `content` array (e.g. `./index.html`, `./src/**/*.{js,jsx,ts,tsx,html}`).

In this workspace a pragmatic `src/index.css` defines reusable component classes in `@layer components` and avoids fragile `@apply` usages that can fail in some PostCSS setups.

## Project structure

```
index.html
package.json
tailwind.config.cjs
postcss.config.cjs
src/
	main.jsx         # React entry (imports global CSS)
	index.css        # Tailwind directives + component utilities
	App.jsx          # Top-level layout and state
	components/
		GeneralInfo.jsx
		GeneralInfroPrev.jsx
		PracticalInfo.jsx
		PracticalInfoPrev.jsx
		Experience.jsx
		ExperiencePrev.jsx
```

## Component patterns and suggestions

- Controlled inputs: each input is controlled with `useState` in `App.jsx` and passed down as props. Consider grouping related fields into objects or using `useReducer` to reduce prop drilling.
- Prefer `onChange` over `onInput` for controlled form inputs in React.
- Always add `id` to inputs and match labels with `htmlFor` for accessibility.
- Keep preview behavior consistent: choose per-component preview toggles or a single global preview mode.

Recommended small refactors:

- Group related state: `const [general, setGeneral] = useState({ name:'', email:'', phone:'' })` and pass `general` + `setGeneral` to `GeneralInfo`.
- Create a small `Input` component to reduce repeated label + input markup and unify classes.

## Git / deployment

If you hit `error: src refspec main does not match any` while pushing, it usually means you haven't committed or your local branch isn't `main`.

Quick fix:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

Or push the current branch explicitly:

```bash
git push -u origin HEAD
```

## Troubleshooting

- Styles not appearing: ensure `src/index.css` is imported in `src/main.jsx` and Vite shows no PostCSS errors when running `npm run dev`.
- PostCSS/Tailwind errors: follow the Tailwind CSS notes above and confirm `@tailwindcss/postcss` is installed.
- Component not rendering: add `console.log` inside the component to confirm it mounts and inspect props in DevTools console.

## Contribution

Small steps welcome: open issues for bugs or PRs for small UI improvements. If you want, I can:

- Convert per-field states into grouped state or `useReducer`.
- Create a shared `Input` component and apply consistent accessibility attributes.
- Style the remaining preview components to a final design.

---

This README was generated to help you run and extend the project. If you'd like, I can update it with step-by-step screenshots or add a CONTRIBUTING.md.
