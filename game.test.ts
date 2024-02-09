import { describe, expect, it } from "vitest";
import { Game } from "./game";
import { PrisonersDilemma } from "./presetGames";

describe("game", () => {
  it("will count its number of rows", () => {
    //arrange
    const game = new Game(PrisonersDilemma);
    //act
    const result = game.getNumberRows();
    //assert
    expect(result).toEqual(2);
  });
  it("will count its number of columns", () => {
    const game = new Game(PrisonersDilemma);
    const result = game.getNumberColumns();
    expect(result).toEqual(2);
  });
  it("will get a row by index", () => {
    const game = new Game(PrisonersDilemma);
    const result = game.getRowByIndex(0);
    expect(result).toEqual([
      [-1, -1],
      [-12, 0],
    ]);
  });
  it("will get a column by index", () => {
    const game = new Game(PrisonersDilemma);
    const result = game.getColumnByIndex(0);
    expect(result).toEqual([
      [-1, -1],
      [0, -12],
    ]);
  });
  it("will remove a row by index", () => {
    const game = new Game(PrisonersDilemma);
    game.removeRowByIndex(0);
    expect(game.matrix).toEqual([
      [
        [0, -12],
        [-8, -8],
      ],
    ]);
  });
  it("will remove a column by index", () => {
    const game = new Game(PrisonersDilemma);
    game.removeColumnByIndex(1);
    expect(game.matrix).toEqual([[[-1, -1]], [[0, -12]]]);
  });
});
