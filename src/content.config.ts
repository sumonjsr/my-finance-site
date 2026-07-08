import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/articles" }),
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string(),
    emoji: z.string(),
    readTime: z.string(),
    author: z.string().optional(),
    keywords: z.string().optional(),
    // ✨ নতুন যোগ করা fields — এগুলো আগে থেকেই আপনার .md ফাইলগুলোতে ছিল,
    // কিন্তু schema-তে declare না থাকায় Astro এগুলো silently drop করে দিচ্ছিল
    image: z.string().optional(),
    dateModified: z.string().optional(),
    authorRole: z.string().optional(),
    authorUrl: z.string().optional(),
    canonical: z.string().optional(),
  }),
});

export const collections = { articles };