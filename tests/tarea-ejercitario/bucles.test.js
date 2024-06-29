import { expect, test, describe, vi, afterAll } from "vitest";
import  ejercitario  from "../../src/ejercitario";

const consoleMock = vi
  .spyOn(console, "log")
  .mockImplementation(() => undefined);
afterAll(() => {
  consoleMock.mockReset();
});

describe('imprimirFor -> Anything', () => {
  test("Deberia devolver (10) log", () => {
    ejercitario.imprimirFor();
    expect(consoleMock).toBeCalledTimes(10);
    consoleMock.mockReset();
  });
});

describe('imprimirWhile -> Anything', () => {
  test("Deberia devolver (5) log", () => {
    ejercitario.imprimirWhile();
    expect(consoleMock).toBeCalledTimes(5);
    consoleMock.mockReset();
  });
});

describe('imprimirArray -> Anything', () => {
  test("Deberia devolver (5) log", () => {
    ejercitario.imprimirArray([1, 2, 3, 4, 5]);
    expect(consoleMock).toBeCalledTimes(5);
    consoleMock.mockReset();
  });
});

describe('sumaAcumulada -> Number', () => {
  test("Deberia devolver un numero", () => {
    expect(ejercitario.sumaAcumulada(10)).toBe(55);
    consoleMock.mockReset();
  });
});

describe('sumaWhile -> Number', () => {
  test("Deberia devolver un numero", () => {
    expect(ejercitario.sumaWhile([1, 2, 3, 4, 5, 6])).toBe(21);
    consoleMock.mockReset();
  });
});