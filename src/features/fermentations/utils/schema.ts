import { z } from "zod";

const fruitSchema = z.object({
  fruit: z.enum(["Apples", "Grapes"]),
  variety: z.string().nonempty(),
  weight: z.number().positive("Weight must be greater than 0"),
  sugarLevel: z.number().positive("Sugar level must be positive"),
  pH: z.number().min(0.1).max(14, "pH must be between 0-14"),
});

export const newFermentationSchema = z.object({
  fruits: z.array(fruitSchema).min(1, "At least one fruit is required"),
  startDate: z.date(),
  estimatedEndDate:
    z.date().optional(),
});

export type NewFermentationFormValues = z.infer<typeof newFermentationSchema>;
