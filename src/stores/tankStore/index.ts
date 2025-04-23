import { create } from "zustand";
import { generateUniqueId } from "./utils";
import { Status, TankStore } from "./types";
import {
  calculateAverageSugarLevel,
  calculateTotalVolume,
  calculateVarietyPercentages,
} from "@/features/fermentations/utils/utils";

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
    const { tanks } = get();
    return tanks.find((tank) => tank.id === tankId);
  },
  startFermentation: (fermentation, tankId) => {
    const newFermentation = {
      ...fermentation,
      id: generateUniqueId(),
      totalVolume: calculateTotalVolume(fermentation.fruits),
      averageSugarLevel: calculateAverageSugarLevel(fermentation.fruits),
      varietyPercentages: calculateVarietyPercentages(fermentation.fruits),
    };

    return set((state) => ({
      tanks: state.tanks.map((tank) =>
        tank.id === tankId
          ? {
              ...tank,
              status: Status.Fermenting,
              currentFermentation: newFermentation,
            }
          : tank,
      ),
    }));
  },
}));
