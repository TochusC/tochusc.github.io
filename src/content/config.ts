import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    titleEn: z.string().optional(),
    descriptionEn: z.string().optional(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'zh']).default('en'),
    tags: z.array(z.string()).default([]),
    kind: z.enum(['essay', 'link']).default('essay'),
    externalUrl: z.string().url().optional(),
    source: z.string().optional(),
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});
export const collections = { blog };
