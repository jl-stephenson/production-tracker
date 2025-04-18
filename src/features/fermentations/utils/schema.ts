import { z } from "zod";

const fruitSchema = z.object({
  fruit: z.enum(["Apples", "Grapes"]),
  variety: z.string(),
  weight: z.number().min(0, "Weight must be positive"),
  sugarLevel: z.number().min(0, "Sugar level must be positive"),
  pH: z.number().min(0).max(14, "pH must be between 0-14"),
});

export const newFermentationSchema = z.object({
  fruits: z.array(fruitSchema).min(1, "At least one fruit is required"),
  startDate: z.date(),
  estimatedEndDate: z.date().optional(),
});

export type NewFermentationFormValues = z.infer<typeof newFermentationSchema>;
