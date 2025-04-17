import { useState } from "react";
import { FormFields, TankForm } from "./TankForm";
import { TankList } from "./TankList";

enum Status {
  Empty = "empty",
  Fermenting = "fermenting",
  Aging = "aging",
  Ready = "ready",
}

export type Tank = {
  id: number;
  capacity: number;
  material: "Stainless Steel" | "Oak" | "Plastic";
  dateCreated: number;
  status: Status;
};

export function PageTankManagement() {
  const [tanks, setTanks] = useState<Tank[]>([]);

  function handleAddTank(data: FormFields) {
    setTanks((prevTanks) => {
      const now = Date.now();

      const newTank = {
        id: now,
        capacity: data.capacity,
        material: data.material,
        dateCreated: now,
        status: Status.Ready,
      };

      return [...prevTanks, newTank];
    });
  }

  function handleDeleteTank(id: number) {
    setTanks((prevTanks) => prevTanks.filter((tank) => tank.id !== id));
  }

  return (
    <main>
      <TankForm handleAddTank={handleAddTank} />
      <TankList tanks={tanks} handleDeleteTank={handleDeleteTank} />
    </main>
  );
}
