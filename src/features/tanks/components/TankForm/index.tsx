import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./index.module.css";
import { useTankStore } from "@/stores/tankStore";

const schema = z.object({
  capacity: z.coerce.number().positive(),
  material: z.enum(["Stainless Steel", "Oak", "Plastic"]),
});

export type FormFields = z.infer<typeof schema>;

export function TankForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const { addTank } = useTankStore();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    addTank({
      capacity: data.capacity,
      material: data.material,
    });
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h2>Register a new tank</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formFields}>
          <div className={styles.textInput}>
            <label htmlFor="tank-capacity">Tank Capacity (litres):</label>
            <input {...register("capacity")} id="tank-capacity" type="number" />
            {errors.capacity && (
              <span role="alert">{errors.capacity.message}</span>
            )}
          </div>
          <div className={styles.selectFlex}>
            <label htmlFor="tank-material">Material:</label>
            <select
              {...register("material")}
              id="tank-material"
              className={styles.select}
            >
              <option>Stainless Steel</option>
              <option>Oak</option>
              <option>Plastic</option>
            </select>
          </div>
        </div>
        <div className={styles.formFooter}>
          <button
            disabled={isSubmitting}
            type="submit"
            className={styles.submitButton}
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
