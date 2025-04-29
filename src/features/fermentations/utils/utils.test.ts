import { describe, expect, it } from "vitest";
import { calculateTotalVolume } from "./utils";
import { Fruit } from "@/stores/tankStore/types";

describe("total volume", () => {
  const mockFruits: Fruit[] = [
    {
      fruit: "Apples",
      variety: "Test",
      litres: 100,
      sugarLevel: 1.4,
      pH: 3.8,
      TA: 5,
    },
    {
      fruit: "Apples",
      variety: "Test2",
      litres: 200,
      sugarLevel: 1.4,
      pH: 3.8,
      TA: 5.2,
    },
    {
      fruit: "Apples",
      variety: "Test3",
      litres: 200,
      sugarLevel: 1.4,
      pH: 3.8,
      TA: 5.3,
    },
  ];

  it("returns corret total", () => {
    const result = calculateTotalVolume(mockFruits);
    expect(result).toBe(500);
  })
});
