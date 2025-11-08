import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const experience = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/experience" }),
    schema: z.object({
        companyName: z.string(),
        jobTitle: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        details: z.array(z.string()),
    }),
});

const education = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/education" }),
    schema: z.object({
        institutionName: z.string(),
        qualification: z.string(),
        enrollmentYear: z.coerce.string(),
        graduationYear: z.coerce.string(),
        details: z.array(z.string()),
    }),
});

const skills = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/skills" }),
    schema: z.object({
        category: z.string(),
        content: z.string(),
    }),
});

const languages = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/languages" }),
    schema: z.object({
        language: z.string(),
        proficiency: z.string(),
    }),
});

export const collections = { experience, education, skills, languages };
