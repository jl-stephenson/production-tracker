import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NewFermentationFormValues,
  newFermentationSchema,
} from "@/features/fermentations/utils/schema";

export function NewFermentationForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewFermentationFormValues>({
    resolver: zodResolver(newFermentationSchema),
    defaultValues: {
      fruits: [
        { fruit: "Apples", variety: "", weight: 0, sugarLevel: 0, pH: 0 },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fruits",
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {fields.map((item, index) => (
        <section key={item.id}>
          <label>
            Fruit:
            <select {...register(`fruits.${index}.fruit` as const)}>
              <option>Apples</option>
              <option>Grapes</option>
            </select>
          </label>
          <label>
            Variety:
            <input
              type="text"
              {...register(`fruits.${index}.variety` as const)}
            />
            {errors.fruits?.[index]?.variety && (
              <span>{errors.fruits?.[index]?.variety?.message}</span>
            )}
          </label>
          <label>
            Weight harvested (KG):
            <input
              type="number"
              {...register(`fruits.${index}.weight` as const, {
                valueAsNumber: true,
              })}
            />
              {errors.fruits?.[index]?.weight && (
              <span>{errors.fruits?.[index]?.weight?.message}</span>
            )}
          </label>
          <label>
            Sugar level (SG):
            <input
              type="number"
              {...register(`fruits.${index}.sugarLevel` as const, {
                valueAsNumber: true,
              })}
            />
              {errors.fruits?.[index]?.sugarLevel && (
              <span>{errors.fruits?.[index]?.sugarLevel?.message}</span>
            )}
          </label>
          <label>
            pH:
            <input
              type="number"
              {...register(`fruits.${index}.pH` as const, {
                valueAsNumber: true,
              })}
            />
              {errors.fruits?.[index]?.pH && (
              <span>{errors.fruits?.[index]?.pH?.message}</span>
            )}
          </label>
          <button type="button" onClick={() => remove(index)}>
            DELETE
          </button>
        </section>
      ))}
      <button
        type="button"
        onClick={() =>
          append({
            fruit: "Apples",
            variety: "",
            weight: 0,
            sugarLevel: 0,
            pH: 0,
          })
        }
      >
        Add another fruit
      </button>
      <label>
        Fermentation start date:
        <input type="date" {...register("startDate")} />
        {errors.startDate && (
            <span>{errors.startDate.message}</span>
        )}
      </label>
      <label>
        Estimated end date (optional):
        <input type="date" {...register("estimatedEndDate")} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
