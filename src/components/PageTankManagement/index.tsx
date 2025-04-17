import { useState } from "react";
import { FormFields, TankForm } from "./TankForm";
import { TankList } from "./TankList";

export type Tank = {
    id: number;
    size: number;
    material: "Stainless Steel" | "Oak" | "Plastic";
    dateCreated: number;
}

export function PageTankManagement() {
  const [tanks, setTanks] = useState<Tank[]>([]);

  function handleAddTank(data: FormFields) {
    setTanks((prevTanks) => {
      const now = Date.now();

      const newTank = {
        id: now,
        size: data.size,
        material: data.material,
        dateCreated: now,
      };

      return [...prevTanks, newTank];
    });
  }

  return (
    <main>
      <TankForm handleAddTank={handleAddTank} />
      <TankList tanks={tanks} />
    </main>
  );
}
