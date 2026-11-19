# print-cv

**A CV application you can print.** Built with Vue 3, TypeScript and Vite, with a curriculum
modelled as validated data, internationalised in English and Spanish, and a print mode designed
around real paper — page breaks that never split a heading from its content.

[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev)
[![Playwright](https://img.shields.io/badge/Playwright-1.58-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)
[![Zod](https://img.shields.io/badge/Zod-4-3E67B1?style=flat-square&logo=zod&logoColor=white)](https://zod.dev)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

---

## What it does

- **Curriculum as data.** One JSON document describes a CV; a Zod schema validates it, and the
  sections render from that validated shape instead of from hardcoded markup.
- **Print-first layout.** A dedicated print mode hides the chrome, keeps headings with their
  content across page breaks, and offers a visual guide while editing.
- **Two languages, one source.** English and Spanish share the same data keys; a missing
  translation is a test failure, not a surprise at print time.
- **Live npm statistics.** Open projects can show their real download counts, fetched from the
  npm registry at runtime.
- **Theming.** Light and dark mode plus an accent colour, applied without touching the content.
- **Structured data.** The rendered CV ships JSON-LD so it can be parsed by machines, not only
  read by humans.

---

## Stack

| Layer | Choice |
| --- | --- |
| UI | Vue 3.5 (`<script setup>`), Vue Router, Vue I18n |
| Language | TypeScript 5.9, `vue-tsc` for type checking |
| Build | Vite 7 |
| Validation | Zod 4 |
| Styling | Tailwind CSS 4 + SCSS, design tokens in CSS custom properties |
| Unit tests | Vitest 4 + `@vue/test-utils` + jsdom |
| End-to-end | Playwright 1.58 |
| Quality | ESLint 9, Prettier 3, `npm-run-all2` |
| Local dev | Bun or npm; Docker Compose for a containerised environment |

---

## Getting started

```console
bun install          # or: npm install
bun run dev          # or: npm run dev
```

The dev server listens on the port declared in `.env` (`VITE_PORT`, 7000 by default). The CV
itself lives at `/cv/mario`.

### Containerised development

```console
docker compose up
```

The Compose file builds the image from the committed `Dockerfile`, mounts the working tree into
the container and runs the dev server there, so the environment matches CI and other machines.
The variables it needs (`PROJECT`, `DOCKER_IMAGE`, `DOCKER_FOLDER`, `VITE_PORT`) are already
defined in the committed `.env`.

---

## Commands

| Command | What it does |
| --- | --- |
| `bun run dev` | Vite dev server with hot reload |
| `bun run build` | Type check and production build |
| `bun run preview` | Serve the production build locally |
| `bun run test` | Vitest unit suite in watch mode |
| `bunx vitest run` | Vitest unit suite, single run (what CI uses) |
| `bun run test:e2e` | Playwright end-to-end suite |
| `bun run type-check` | `vue-tsc --build` type checking |
| `bun run lint` / `lint:fix` | ESLint over the workspace |
| `bun run format` | Prettier over the workspace |
| `bun run validate` | The full gate: lint → type check → tests |

---

## Tests

The suite is part of the contract, not an afterthought:

- **Unit** (`src/__tests__/`) — the data layer and its schema, layout behaviour, print-mode
  switching, translation completeness and general sanity.
- **End-to-end** (`e2e/`) — the real user path: navigate to the CV, toggle print preview, switch
  theme, toggle dark mode. Selectors are role-based, so the tests fail when the accessible
  contract breaks, not only when the markup changes.

```console
bun run validate      # lint + type check + unit tests
bun run test:e2e      # end-to-end (needs a browser: bunx playwright install)
```

---

## Project layout

```text
src/
├── curriculums/mario/     # one curriculum = data + schema + sections + translations
│   ├── data/              # cv-data.json and the Zod schema that validates it
│   ├── sections/          # experience, education, languages, skills, personal info
│   ├── components/        # reusable field renderers
│   └── langs/             # curriculum-specific translations
├── shared/                # layout, helpers, shared contracts, global languages
├── __tests__/             # unit tests
└── router/                # routes
e2e/                       # Playwright end-to-end specs
```

---

## Status

Active. The curriculum data is validated, the print layout is stable and both language sets are
complete.

---

## License

[MIT](./LICENSE)
