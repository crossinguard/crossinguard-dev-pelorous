# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `yarn dev` | Starts local dev server at `localhost:4321` |
| `yarn build` | Build production site to `./dist/` |
| `yarn preview` | Preview build locally before deploying |
| `yarn astro` | Run Astro CLI commands |

## Architecture

This is an Astro 5 static site generator project with TypeScript support using strict mode configuration.

### Content Collections

The site uses Astro's content collections with two main collections defined in `src/content.config.ts`:

- **posts**: Blog posts stored in `src/content/posts/`
- **projects**: Project entries stored in `src/content/projects/`

Both collections:
- Use glob loader with pattern `["**/*.md", "!**/_*.md"]` (excludes files starting with underscore)
- Share identical Zod schema with title, description, optional image, pubDate, updatedDate, series, and tags
- Support markdown files with frontmatter

### Layout Structure

- **BaseLayout**: Main layout (`src/layouts/BaseLayout.astro`) provides HTML structure with meta tags, favicon setup, and global CSS
- Uses semantic HTML with `<main>`, skip links for accessibility
- Includes PrimaryHeader and Footer components

### Page Structure

- **Static pages**: `index.astro`, `about.astro`, `posts.astro`, `projects.astro`
- **Dynamic pages**: `[id].astro` routes for individual posts and projects using `getStaticPaths()`

### TypeScript Considerations

- Uses strict TypeScript configuration (`astro/tsconfigs/strict`)
- When working with content collections, always import `CollectionEntry` type from `astro:content`
- Type collection arrays as `CollectionEntry<"collection_name">[]` to avoid implicit `any` errors
- In dynamic routes, type the destructured props: `const { post }: { post: CollectionEntry<"posts"> } = Astro.props`

### Styling

- Global CSS in `src/styles/global.css`
- Component-scoped styles within `.astro` files
- Uses CSS custom properties (variables) for theming
- Responsive design with mobile-first approach (e.g., centering at max-width 500px)

### Content Organization

- Markdown files starting with underscore are excluded from collections
- Content stored in `src/content/posts/` and `src/content/projects/`
- Public assets in `public/` directory including favicon set and logos