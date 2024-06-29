import { expect, test, describe, vi, afterAll } from "vitest";
import ejercitario from "../../src/ejercitario";

const consoleMock = vi
  .spyOn(console, "log")
  .mockImplementation(() => undefined);
afterAll(() => {
  consoleMock.mockReset();
});

describe("numeroMasGrande -> Number", () => {
  test("Deberia retornar un numero", () => {
    expect(
      ejercitario.numeroMasGrande([1, 2, 4, 8, 16, 32, 64, 128, 256])
    ).toBe(256);
    consoleMock.mockReset();
  });
});

describe("ordenarArray -> Array", () => {
  test("Deberia retornar un array", () => {
    expect(ejercitario.ordenarArray([6, 5, 4, 3, 2, 1, 0])).toMatchObject([
      0, 1, 2, 3, 4, 5, 6,
    ]);
    consoleMock.mockReset();
  });
});

describe("elementosComunes -> Array", () => {
  test("Deberia retornar un array", () => {
    expect(
      ejercitario.elementosComunes([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9, 0])
    ).toMatchObject([4, 5, 6]);
    consoleMock.mockReset();
  });
});

describe("stringsMayusculas -> Array", () => {
  test("Deberia devolver un array", () => {
    expect(
      ejercitario.stringsMayusculas(["yo", "amo", "programando", "paraguay"])
    ).toMatchObject(["YO", "AMO", "PROGRAMANDO", "PARAGUAY"]);
    consoleMock.mockReset();
  });
});

describe("sumaAcumulativa -> Array", () => {
  test("Deberia devolver un array", () => {
    expect(ejercitario.sumaAcumulativa([0, 1, 2, 3, 4, 5])).toStrictEqual([
      0, 1, 3, 6, 10, 15,
    ]);
    consoleMock.mockReset();
  });
});
