import { z } from "zod";
import { validateTankCapacity } from "./utils";
import { Tank } from "@/stores/tankStore/types";

// const fruitSchema = z.object({
//   fruit: z.enum(["Apples", "Grapes"]),
//   variety: z.string().nonempty(),
//   litres: z.number().positive("Quantity must be greater than 0"),
//   sugarLevel: z.number().positive("Sugar level must be positive"),
//   pH: z.number().min(0.1).max(14, "pH must be between 0-14"),
// });


export function createFermentationSchema(tank: Tank) {
  return z
    .object({
      name: z.string().min(1, "Name is required"),
      startDate: z.date(),
      estimatedEndDate: z.date().optional(),
      fruits: z
        .array(
          z.object({
            fruit: z.enum(["Apples", "Grapes"]),
            variety: z.string().nonempty("Variety is required"),
            litres: z.number().positive("Quantity must be > 0"),
            sugarLevel: z.number().positive("Sugar level must be positive"),
            pH: z.number().min(0.1).max(14, "pH must be between 0.1–14"),
          })
        )
        .min(1, "At least one fruit is required"),
    })
    .superRefine((data, ctx) => {
      const { isValid, error } = validateTankCapacity(tank, data.fruits);
      if (!isValid) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["fruits"],       // ← bind it to the fruits field
          message: error,         // ← dynamic message from your util
        });
      }
    });
}

export type NewFermentationFormValues = z.infer<
  ReturnType<typeof createFermentationSchema>
>;
