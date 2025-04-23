export enum Status {
  Empty = "empty",
  Fermenting = "fermenting",
  Aging = "aging",
  Ready = "ready",
}

export type Tank = {
  id: string;
  capacity: number;
  material: "Stainless Steel" | "Oak" | "Plastic";
  dateCreated: number;
  status: Status;
  currentFermentation: Fermentation | null;
};

export type Fruit = {
  fruit: "Apples" | "Grapes";
  variety: string;
  litres: number;
  sugarLevel: number;
  pH: number;
};

export type Fermentation = {
  id: string;
  name: string;
  totalVolume: number;
  averageSugarLevel: number;
  varietyPercentages: Record<string, number>;
  startDate: Date;
  estimatedEndDate?: Date;
  fruits: Fruit[];
};

export type TankStore = {
  tanks: Tank[];
  fermentations: Fermentation[];
  addTank: (
    tank: Omit<Tank, "id" | "dateCreated" | "status" | "currentFermentation">,
  ) => void;
  fetchTank: (tankId: string) => Tank | undefined;
  startFermentation: (
    fermentation: Omit<
      Fermentation,
      | "id"
      | "tankId"
      | "totalVolume"
      | "averageSugarLevel"
      | "varietyPercentages"
    >,
    tankId: string,
  ) => void;
};
