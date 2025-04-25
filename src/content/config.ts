import { defineCollection, z } from 'astro:content';

const workshopsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    hour: z.string(),
    placement: z.string(),
    cost: z.number(),
    requirements: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    url: z.string().optional(),
  }),
});

export const collections = {
  'workshops': workshopsCollection,
};