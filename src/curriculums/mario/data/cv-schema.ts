import { z } from 'zod';

export const DateSchema = z.object({
  start: z.string().optional(),
  end: z.string().optional(),
  date: z.string().optional(), // For courses/single date items
});

export const TechItemSchema = z.object({
  name: z.string(),
  icon: z.string(),
});

export const TechCategorySchema = z.object({
  kind: z.string(),
  name: z.string(),
  usual: z.array(TechItemSchema),
  used: z.array(z.string()),
});

export const TechsSchema = z.object({
  environments: TechCategorySchema,
  ides: TechCategorySchema,
  languages: TechCategorySchema,
  frontend: TechCategorySchema,
  backend: TechCategorySchema,
  dependencies: TechCategorySchema,
  repositories: TechCategorySchema,
  terminals: TechCategorySchema,
  others: TechCategorySchema,
  databases: TechCategorySchema,
  cloud: TechCategorySchema,
});

export const ExperienceSchema = z.object({
  kind: z.string(),
  company: z.string(),
  subCompany: z.string().optional(),
  where: z.string(),
  date: DateSchema,
  place: z.string(),
  description: z.string().optional(),
});

export const EducationSchema = z.object({
  kind: z.string(),
  company: z.string(),
  where: z.string(),
  date: DateSchema,
  place: z.string(),
  description: z.string().optional(),
});

export const CourseSchema = z.object({
  kind: z.string(),
  place: z.string(),
  date: z.string(),
  description: z.string(),
  time: z.number().optional(),
  isOnline: z.boolean().optional(),
});

export const LanguageSchema = z.object({
  kind: z.string().optional(),
  place: z.string().optional(),
  date: z.string().optional(),
  description: z.string(),
  subDescription: z.string().optional(),
});

export const ProjectSchema = z.object({
  kind: z.string().optional(), // Optional for now as not all might have it yet, but we aimed for it
  name: z.string(),
  repository: z.string(),
  npm: z.string().optional(),
  dependency: z.string().optional(),
  install: z.string().optional(),
  description: z.string(),
  shortDescription: z.string(),
  highlight: z.boolean().optional(),
});

export const ContactSchema = z.object({
  kind: z.string(),
  icon: z.string(),
  value: z.string(),
  shortValue: z.string(),
  position: z.enum(['left', 'right']),
  isPlace: z.boolean().optional(),
});

export const OtherInterestSchema = z.object({
  name: z.string(),
  icon: z.string(),
});

export const CvDataSchema = z.object({
  techs: TechsSchema,
  professionalExperience: z.array(ExperienceSchema),
  otherExperience: z.array(ExperienceSchema),
  oficialEducation: z.array(EducationSchema),
  complementaryEducation: z.array(CourseSchema),
  languages: z.array(LanguageSchema),
  openProjects: z.array(ProjectSchema),
  otherInterest: z.array(OtherInterestSchema),
  contact: z.array(ContactSchema),
});

export type CvData = z.infer<typeof CvDataSchema>;
