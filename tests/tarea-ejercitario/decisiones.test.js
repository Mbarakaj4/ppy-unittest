import { expect, test, describe, vi, afterAll } from "vitest";
import ejercitario from "../../src/ejercitario";

const consoleMock = vi
  .spyOn(console, "log")
  .mockImplementation(() => undefined);
afterAll(() => {
  consoleMock.mockReset();
});

describe('mayorMenorIgual -> String', () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.mayorMenorIgual(11);
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.stringMatching(/.*mayor.*/i)
    );
  
    ejercitario.mayorMenorIgual(1);
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.stringMatching(/.*menor.*/i)
    );
  
    ejercitario.mayorMenorIgual(10);
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.stringMatching(/.*igual.*/i)
    );
    consoleMock.mockReset();
  });
});

describe('isPar -> String', () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.isPar(2);
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.stringMatching(/.*par.*/i)
    );
    ejercitario.isPar(3);
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.stringMatching(/.*impar.*/i)
    );
    consoleMock.mockReset();
  });
});

describe('isVocal -> String', () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.isVocal("u");
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.stringMatching(/.*vocal.*/i)
    );
    ejercitario.isVocal("m");
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.stringMatching(/.*consonante.*/i)
    );
    consoleMock.mockReset();
  });
  
});

describe('mayorMenorEdad -> String', () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.mayorMenorEdad(19);
    expect(consoleMock).toHaveBeenLastCalledWith(
      expect.stringMatching(/.*mayor.*/i)
    );
    ejercitario.mayorMenorEdad(17);
    expect(consoleMock).toHaveBeenLastCalledWith(expect.anything());
    consoleMock.mockReset();
  });
});

describe('diaDeLaSemana -> String', () => {
  test("Deberia devolver (1) log", () => {
    ejercitario.diaDeLaSemana(1);
    expect(consoleMock).toHaveBeenLastCalledWith(expect.any(String));
    ejercitario.diaDeLaSemana(2);
    expect(consoleMock).toHaveBeenLastCalledWith(expect.any(String));
    ejercitario.diaDeLaSemana(3);
    expect(consoleMock).toHaveBeenLastCalledWith(expect.any(String));
    ejercitario.diaDeLaSemana(4);
    expect(consoleMock).toHaveBeenLastCalledWith(expect.any(String));
    ejercitario.diaDeLaSemana(5);
    expect(consoleMock).toHaveBeenLastCalledWith(expect.any(String));
    ejercitario.diaDeLaSemana(6);
    expect(consoleMock).toHaveBeenLastCalledWith(expect.any(String));
    ejercitario.diaDeLaSemana(7);
    expect(consoleMock).toHaveBeenLastCalledWith(expect.any(String));
    consoleMock.mockReset();
  });
});
