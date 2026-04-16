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
    // নিচের দুটি ফিল্ড অবশ্যই যোগ করতে হবে কারণ আপনার নতুন আর্টিকেলে এগুলো আছে
    author: z.string().optional(), 
    keywords: z.string().optional(),
  }),
});

export const collections = { articles };