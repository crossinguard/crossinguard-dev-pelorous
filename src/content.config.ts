// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const posts = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!**/_*.md"],
    base: "./src/content/posts",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    series: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!**/_*.md"],
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    status: z.string(),
    repo: z.url().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!**/_*.md"],
    base: "./src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts, projects, pages };
