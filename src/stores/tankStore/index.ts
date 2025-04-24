import { create } from "zustand";
import { generateUniqueId } from "./utils";
import { Status, TankStore } from "./types";
import {
  calculateAverageSugarLevel,
  calculateTotalVolume,
  calculateVarietyPercentages,
} from "@/features/fermentations/utils/utils";
import { getItem, setItem } from "./storage";

const initialData = getItem("cider-production") || {
  tanks: [],
  fermentations: [],
};

export const useTankStore = create<TankStore>((set, get) => ({
  tanks: initialData.tanks,
  fermentations: initialData.fermentations,
  addTank: (tank) =>
    set((state) => {
      const newState = {
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
      };
      setItem("cider-production", newState);
      return newState;
    }),
  fetchTank: (tankId) => {
    const { tanks } = get();
    return tanks.find((tank) => tank.id === tankId);
  },
  startFermentation: (fermentation, tankId) =>
    set((state) => {
      const newFermentation = {
        ...fermentation,
        id: generateUniqueId(),
        totalVolume: calculateTotalVolume(fermentation.fruits),
        averageSugarLevel: calculateAverageSugarLevel(fermentation.fruits),
        varietyPercentages: calculateVarietyPercentages(fermentation.fruits),
      };

      const newState = {
        tanks: state.tanks.map((tank) =>
          tank.id === tankId
            ? {
                ...tank,
                status: Status.Fermenting,
                currentFermentation: newFermentation,
              }
            : tank,
        ),
        fermentations: [...state.fermentations, newFermentation],
      };
      setItem("cider-production", newState);
      return newState;
    }),
}));
