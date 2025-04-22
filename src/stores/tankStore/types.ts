export enum Status {
  Empty = "empty",
  Fermenting = "fermenting",
  Aging = "aging",
  Ready = "ready",
}

export type Tank = {
  id: string;
  fermentationId?: string;
  capacity: number;
  material: "Stainless Steel" | "Oak" | "Plastic";
  dateCreated: number;
  status: Status;
};

export type Fruit = {
  fruit: "Apples" | "Grapes";
  variety: string;
  weight: number;
  sugarLevel: number;
  pH: number;
};

export type Fermentation = {
  id: string;
  tankId: string;
  startDate: Date;
  estimatedEndDate?: Date;
  fruits: Fruit[];
};

export type TankStore = {
    tanks: Tank[];
    fermentations: Fermentation[];
    addTank: (tank: Omit<Tank, "id" | "dateCreated" | "status">) => void;
    addFermentation: (fermentation: Omit<Fermentation, "id" | "tankId">, tankId: string) => void;
}
