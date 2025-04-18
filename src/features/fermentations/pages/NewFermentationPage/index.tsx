import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NewFermentationFormValues,
  newFermentationSchema,
} from "@/features/fermentations/utils/schema";
import styles from "./index.module.css";

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
      startDate: new Date(),
      estimatedEndDate: undefined,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fruits",
  });

  const onSubmit: SubmitHandler<NewFermentationFormValues> = async (
    data,
    errors
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    console.log("Errors:", errors);
  };

  //   const formState = useFormState({ control });
  //   console.log("Current form state:", formState);

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h2>Register new fermentation</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <section key={item.id} className={styles.fruitSection}>
            <div className={styles.fruitFields}>
              <div className={styles.fieldsFlex}>
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
              </div>
              <div className={styles.fieldsFlex}>
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
              </div>
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
            </div>
            <div className={styles.fruitButtons}>
              <button
                className={styles.addButton}
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
              <button
                className={styles.deleteButton}
                type="button"
                onClick={() => remove(index)}
              >
                Delete
              </button>
            </div>
          </section>
        ))}
        <div className={styles.dateFields}>
          <label>
            Fermentation start date:
            <input
              type="date"
              {...register("startDate", {
                valueAsDate: true,
              })}
            />
            {errors.startDate && <span>{errors.startDate.message}</span>}
          </label>
          <label>
            Estimated end date (optional):
            <input
              type="date"
              {...register("estimatedEndDate", {
                setValueAs: (val) => (val === "" ? undefined : new Date(val)),
              })}
            />
          </label>
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
