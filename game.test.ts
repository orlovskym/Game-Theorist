import { describe, expect, it } from "vitest";
import { Game, GameMatrix } from "./game";

const PD_TEST: GameMatrix = [
  [
    [-1, -1],
    [-12, 0],
  ],
  [
    [0, -12],
    [-8, -8],
  ],
];

describe("game", () => {
  it("will count its number of rows", () => {
    //arrange
    const game = new Game(PD_TEST);
    //act
    const result = game.getNumberRows();
    //assert
    expect(result).toEqual(2);
  });
  it("will count its number of columns", () => {
    const game = new Game(PD_TEST);
    const result = game.getNumberColumns();
    expect(result).toEqual(2);
  });
  it("will remove a row by index", () => {
    const game = new Game(PD_TEST);
    game.removeRowByIndex(0);
    expect(game.matrix).toEqual([
      [
        [0, -12],
        [-8, -8],
      ],
    ]);
  });
  it("will remove a column by index", () => {
    const game = new Game(PD_TEST);
    game.removeColumnByIndex(1);
    expect(game.matrix).toEqual([[[-12, 0]], [[-8, -8]]]);
  });
});
