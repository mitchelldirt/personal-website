import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    type: z.enum(["coding", "personal"]).default("coding"),
  }),
});

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    longDescription: z.string(),
    image: z.string(),
    github: z.string(),
    liveLink: z.string(),
    tech: z.array(z.string()),
  }),
});

export const collections = {
  project: project,
  blog: blog,
};
