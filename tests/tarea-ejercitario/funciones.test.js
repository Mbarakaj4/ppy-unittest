import { expect, test, describe, vi, afterAll } from "vitest";
import ejercitario from "../../src/ejercitario";

const consoleMock = vi
  .spyOn(console, "log")
  .mockImplementation(() => undefined);
afterAll(() => {
  consoleMock.mockReset();
});

describe('suma -> Number', () => {
  test("Deberia devolver un numero", () => {
    expect(ejercitario.suma(2, 5)).toBe(7);
    consoleMock.mockReset();
  });
});

describe('isParBolean -> Boolean', () => {
  test("Deberia devolver un booleano", () => {
    expect(ejercitario.isParBolean(12)).toBe(true);
    expect(ejercitario.isParBolean(7)).toBe(false);
    consoleMock.mockReset();
  });
});

describe('sumaArray -> Number', () => {
  test("Deberia devolver un numero", () => {
    expect(ejercitario.sumaArray([1, 2, 3])).toBe(6);
    expect(ejercitario.sumaArray([1, 2, 3, 7, 8, 9, 10, 11])).toBe(51);
    consoleMock.mockReset();
  });
});

describe('longitudMasLargo -> Number', () => {
  test("Deberia devolver un numero", () => {
    expect(
      ejercitario.longitudMasLargo(["yo", "amo", "programando", "paraguay"])
    ).toBe(11);
    consoleMock.mockReset();
  });
});

describe('objetToArray -> Array', () => {
  test.skip("Deberia devolver un array", () => {
    expect(
      ejercitario.objetToArray({ nombre: "mentor jullo 🐈", edad: "22" })
    ).toMatchObject(["mentor jullo 🐈", "22"]);
    consoleMock.mockReset();
  });
});
