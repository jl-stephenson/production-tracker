import { create } from "zustand";
import { generateUniqueId } from "./utils";
import { Status, TankStore } from "./types";

export const useTankStore = create<TankStore>((set, get) => ({
  tanks: [],
  fermentations: [],
  addTank: (tank) =>
    set((state) => ({
      tanks: [
        ...state.tanks,
        {
          ...tank,
          id: generateUniqueId(),
          dateCreated: Date.now(),
          status: Status.Empty,
          currentFermentation: null,
        },
      ],
    })),
    fetchTank: (tankId) => {
      const {tanks} = get();
      return tanks.find((tank) => tank.id === tankId)},
  startFermentation: (fermentation, tankId) =>
    set((state) => ({
      tanks: state.tanks.map((tank) =>
        tank.id === tankId
          ? {
              ...tank,
              status: Status.Fermenting,
              currentFermentation: {
                ...fermentation,
                id: generateUniqueId(),
              },
            }
          : tank,
      ),
    })),
}));
