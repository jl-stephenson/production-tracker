import { z } from "zod";

export const newFermentationSchema = z.object({
  fruit: z.enum(["Apples", "Grapes"]),
  variety: z.string(),
  sugarContent: z.number(),
  percentage: z.number().optional(),
  startDate: z.date(),
  estimatedEndDate: z.date().optional(),
});
