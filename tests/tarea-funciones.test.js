import { expect, test, describe } from "vitest";
import { cualEsMayor } from "../src/funciones";

describe("cualEsMayor -> Number", () => {
  test("El nombre debe ser cualEsMayor", () => {
    expect(cualEsMayor.name).toBe("cualEsMayor");
  });

  test("Utiliza return", () => {
    expect(cualEsMayor(1, 2, 3)).toBeDefined();
  });

  test("El algoritmo devuelve el numero mayor", () => {
    expect(cualEsMayor(1, 2, 3)).toBe(3);
    expect(cualEsMayor(3, 2, 1)).toBe(3);
    expect(cualEsMayor(2, 1, 3)).toBe(3);
  });
});
