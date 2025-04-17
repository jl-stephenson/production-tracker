import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./index.module.css";

const schema = z.object({
  size: z.coerce.number().positive(),
  material: z.enum(["Stainless Steel", "Oak", "Plastic"]),
});

export type FormFields = z.infer<typeof schema>;

type TankFormProps = {
  handleAddTank: (data: FormFields) => void;
};

export function TankForm({ handleAddTank }: TankFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    handleAddTank(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h2>Register a new tank</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formFields}>
          <div className={styles.textInput}>
            <label htmlFor="tank-size">Tank Size (litres):</label>
            <input {...register("size")} id="tank-size" type="text" />
            {errors.size && <p>{errors.size.message}</p>}
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
