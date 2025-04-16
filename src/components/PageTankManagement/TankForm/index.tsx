import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  size: z.coerce.number().positive(),
  material: z.enum(["Stainless Steel", "Oak", "Plastic"]),
});

type FormFields = z.infer<typeof schema>;

export function TankForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register a new tank</h2>
      <label htmlFor="tank-size">Tank Size (litres)</label>
      <input {...register("size")} id="tank-size" type="text" />
      {errors.size && <p>{errors.size.message}</p>}
      <label htmlFor="tank-material">Material</label>
      <select {...register("material")} id="tank-material">
        <option>Stainless Steel</option>
        <option>Oak</option>
        <option>Plastic</option>
      </select>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
