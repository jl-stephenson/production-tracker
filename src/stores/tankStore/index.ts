import { create } from "zustand";
import { generateUniqueId } from "./utils";
import { Status, TankStore } from "./types";

export const useTankStore = create<TankStore>((set) => ({
  tanks: [],
  fermentations: [],
  addTank: (tank) =>
    set((state) => ({
      tanks: [
        ...state.tanks,
        { ...tank, id: generateUniqueId(), dateCreated: Date.now(), status: Status.Empty },
      ],
    })),
  addFermentation: (fermentation) =>
    set((state) => ({
      fermentations: [
        ...state.fermentations,
        {
          ...fermentation,
          id: generateUniqueId(),
        },
      ],
    })),
    
}));
