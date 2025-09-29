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

The site uses Astro's content collections with three main collections defined in `src/content.config.ts`:

- **posts**: Blog posts stored in `src/content/posts/`
- **projects**: Project entries stored in `src/content/projects/`
- **pages**: Static page content stored in `src/content/pages/`

All collections:
- Use glob loader with pattern `["**/*.md", "!**/_*.md"]` (excludes files starting with underscore)
- Posts and projects share identical Zod schema with title, description, optional image, pubDate, updatedDate, series, and tags
- Pages collection has simplified schema with title, description, and optional image
- Support markdown files with YAML frontmatter (not TOML)

### Layout Structure

- **BaseLayout**: Main layout (`src/layouts/BaseLayout.astro`) provides HTML structure with meta tags, favicon setup, and global CSS
- Uses semantic HTML with `<main>`, skip links for accessibility
- Includes PrimaryHeader and Footer components

### Page Structure

- **Static pages**: `index.astro`, `about.astro`, `posts.astro`, `projects.astro`
- **Dynamic pages**: `[id].astro` routes for individual posts and projects using `getStaticPaths()`
- **Content-driven pages**: `about.astro`, `posts.astro`, `projects.astro` use content collections for their page content

### Components

- **Card.astro**: Reusable card component for displaying posts/projects with featured state support
- **PrimaryHeader.astro**: Site navigation with responsive design (centered at ≤500px)
- **Footer.astro**: Site footer
- **SkipLink.astro**: Accessibility skip navigation

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
- Content stored in `src/content/posts/`, `src/content/projects/`, and `src/content/pages/`
- Public assets in `public/` directory including favicon set and logos
- Use YAML frontmatter format (key: value) not TOML (key = value)

### Card Layout Pattern

The site uses a flexible card layout for posts:
- First post is featured (full width, larger title, centered)
- Remaining posts in 2-column grid on desktop, single column on mobile
- Cards are list items (`<li>`) with component-scoped styling
- Hover effects include color changes and box shadows
- Images use 2:1 aspect ratio with object-fit: cover