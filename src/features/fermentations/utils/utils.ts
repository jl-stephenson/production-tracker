import {
  Fruit,
  Tank,
} from "@/stores/tankStore/types";

export function calculateTotalVolume(fruits: Fruit[]): number {
  return fruits.reduce((acc, { litres }) => acc + litres, 0);
}

export function calculateAverageSugarLevel(fruits: Fruit[]): number {
  const totalVolume = calculateTotalVolume(fruits);
  const sugarSum = fruits.reduce(
    (sum, { litres, sugarLevel }) => sum + litres * sugarLevel,
    0,
  );
  return sugarSum / totalVolume;
}

export function calculateVarietyPercentages(
  fruits: Fruit[],
): Record<string, number> {
  const totalVolume = calculateTotalVolume(fruits);

  const percentages = fruits.reduce(
    (acc, fruit) => {
      acc[fruit.variety] = fruit.litres / totalVolume;
      return acc;
    },
    {} as Record<string, number>,
  );

  return percentages;
}

export function validateTankCapacity(
  tank: Tank,
  fruits: Fruit[],
): { isValid: boolean; error?: string } {
  const totalVolume = calculateTotalVolume(fruits);

  if (totalVolume > tank.capacity) {
    return {
      isValid: false,
      error: `Total volume (${totalVolume.toFixed(2)}L) exceeds tank capacity (${tank.capacity}L)`,
    };
  }

  return { isValid: true };
}
