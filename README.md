# lamsauced — Personal Website

Personal website for **Lam Nguyen**, built with [Astro](https://astro.build) and hosted on [Cloudflare Pages](https://pages.cloudflare.com).

A single, professional, resume-first page: About → Experience → Education → Projects → Awards → Skills → Contact, followed by a **Personal** zone (albums / games / media). Light/dark themes, toggleable and user-extensible.

## Commands

| Command          | Action                                          |
| :--------------- | :---------------------------------------------- |
| `pnpm install`   | Install dependencies                            |
| `pnpm dev`       | Dev server at `localhost:4321`                  |
| `pnpm build`     | Production build to `dist/`                     |
| `pnpm preview`   | Preview the production build locally            |

## Editing content

All resume/site content lives in plain TypeScript data modules — edit and rebuild, no CMS:

| File                      | What it controls                                  |
| :------------------------ | :------------------------------------------------ |
| `src/data/site.ts`        | Name, tagline, location, email, links, about text |
| `src/data/experience.ts`  | Work experience (orgs, roles, bullets, dates)     |
| `src/data/education.ts`   | Education entries                                 |
| `src/data/projects.ts`    | Project cards (name, description, tags, URL)      |
| `src/data/awards.ts`      | Awards & honors list                              |
| `src/data/skills.ts`      | Skill groups + chips                              |
| `src/data/personal.ts`    | Personal zone: albums, games, media               |

## Adding personal media (albums / games / media)

1. Put your files under `public/personal/` (e.g. `public/personal/albums/yosemite.png`).
2. Add entries in `src/data/personal.ts`:

```ts
export const albums: Album[] = [
  { title: 'Trip to Yosemite', cover: '/personal/albums/yosemite.png' },
];
```

Empty sub-sections render as dashed placeholder tiles until you add entries.

## Themes

The theme picker (top-right) offers **System**, **Porcelain** (light), and **Graphite** (dark). The choice is stored in `localStorage` (`theme`), and "System" follows `prefers-color-scheme`.

### Adding your own color scheme

1. Create `src/themes/<id>.css` copying `porcelain.css` (or `graphite.css`) and changing the CSS variables:

```css
:root[data-theme='midnight'] {
  color-scheme: dark;
  --bg: #0f1115;
  --bg-subtle: #0a0c0f;
  --card: #171a20;
  --text: #e8eaf0;
  --text-muted: #8b93a3;
  --accent: #f59e0b;
  --accent-strong: #fbbf24;
  --accent-contrast: #14100a;
  --accent-soft: rgba(245, 158, 11, 0.12);
  --border: #262b34;
  --border-strong: #39414e;
  --shadow: 0 1px 2px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.35);
}
```

2. Import it in `src/layouts/Layout.astro` next to the other theme files:

```ts
import '../themes/midnight.css';
```

3. Register it in `src/themes/index.ts`:

```ts
export const themes: Theme[] = [
  { id: 'porcelain', name: 'Porcelain', scheme: 'light' },
  { id: 'graphite', name: 'Graphite', scheme: 'dark' },
  { id: 'midnight', name: 'Midnight', scheme: 'dark' },
];
```

It will automatically appear in the theme picker. If "System" should pick your dark theme instead of `graphite`, update `systemDarkTheme` in the same file.

## Deployment

Hosted on Cloudflare Pages. To deploy manually:

1. Push to this repo — Cloudflare Pages picks up the branch and builds automatically.
2. Build settings: framework preset **Astro**, build command `pnpm build`, output directory `dist/`.
