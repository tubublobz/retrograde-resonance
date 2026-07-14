import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lookbook = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lookbook' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    coverImage: image(),
    gallery: z.array(image()).optional(),
    description: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    coverImage: image(),
    category: z.enum(['matieres', 'savoir-faire', 'entretien']).optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { lookbook, blog };