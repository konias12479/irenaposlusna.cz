import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(), // článek s datem v budoucnu se na webu ukáže až při prvním nasazení od toho dne
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    // Volitelně: vlastní text závěrečné výzvy a patičky článku (jinak výchozí o revizi pojistek)
    ctaTitle: z.string().optional(),
    ctaText: z.string().optional(),
    footnote: z.string().optional(),
  }),
});

export const collections = { blog };
