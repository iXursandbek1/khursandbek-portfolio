# Khursandbek Kambaraliyev — Portfolio

Personal portfolio + CV website. Animated dark-glass design.

- **Stack:** Astro 5 + Tailwind CSS 4
- **Hosting:** Vercel (free Hobby plan)

## Commands

| Command         | Action                                    |
| :-------------- | :---------------------------------------- |
| `npm install`   | Install dependencies                      |
| `npm run dev`   | Start local dev server at `localhost:4321`|
| `npm run build` | Build production site to `./dist/`        |
| `npm run preview` | Preview the production build locally    |

## Structure

```
public/images/projects   # app screenshots
public/images/awards     # award & team photos
src/components           # page sections
src/data/site.ts         # all site content (edit here to update copy)
src/layouts/Layout.astro # base HTML shell + SEO
src/pages/index.astro    # the single page
src/styles/global.css    # design tokens + global styles
```

## Updating content

All text, projects, skills, awards and links live in `src/data/site.ts`.
Drop new photos into `public/images/awards/` and reference them there.
