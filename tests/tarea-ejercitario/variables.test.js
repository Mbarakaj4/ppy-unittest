import { expect, test, describe, vi, afterAll } from "vitest";
import  ejercitario  from "../../src/ejercitario";

const consoleMock = vi
  .spyOn(console, "log")
  .mockImplementation(() => undefined);
afterAll(() => {
  consoleMock.mockReset();
});

describe("typeOfNumber -> [Number String]", () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.typeOfNumber();
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.any(Number),
      expect.any(String)
    );
    consoleMock.mockReset();
  });
});

describe("typeOfString -> [String, String]", () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.typeOfString();
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.any(String),
      expect.any(String)
    );
    consoleMock.mockReset();
  });
});

describe("typeOfBooleanTrue -> [true, String]", () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.typeOfBooleanTrue();
    expect(consoleMock).toHaveBeenLastCalledWith(true, expect.any(String));
    consoleMock.mockReset();
  });
});

describe("typeOfBooleanFalse -> [false, String]", () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.typeOfBooleanFalse();
    expect(consoleMock).toHaveBeenLastCalledWith(false, expect.any(String));
    consoleMock.mockReset();
  });
});

describe("typeOfNull -> [Null, String]", () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.typeOfNull();
    expect(consoleMock).toHaveBeenLastCalledWith(null, expect.any(String));
    consoleMock.mockReset();
  });
});

describe("typeOfUndefined -> [Undefined, String]", () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.typeOfUndefined();
    expect(consoleMock).toHaveBeenLastCalledWith(undefined, expect.any(String));
    consoleMock.mockReset();
  });
});

describe("typeOfArray -> [Array, String]", () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.typeOfArray();
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.any(Array),
      expect.any(String)
    );
    consoleMock.mockReset();
  });
});
