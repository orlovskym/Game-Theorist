import { describe, expect, it } from "vitest";
import { Game } from "./game";
import { Theorist } from "./theorist";
import { Duopoly, PrisonersDilemma } from "./games";

describe("theorist", () => {
  it("will find the best response to an opponent's strategy", () => {
    const theorist = new Theorist(new Game(PrisonersDilemma));
    const result = theorist.getBestResponse(true, 0);
    expect(result).toEqual(1);
  });
  it("will find the strictly dominant strategy for player 0", () => {
    const theorist = new Theorist(new Game(PrisonersDilemma));
    const result = theorist.getStrictlyDominantStrategy(true);
    expect(result).toEqual(1);
  });
  it("will find the strictly dominant strategy for player 1", () => {
    const theorist = new Theorist(new Game(PrisonersDilemma));
    const result = theorist.getStrictlyDominantStrategy(false);
    expect(result).toEqual(1);
  });
  it("will identify when there is no strictly dominant strategy", () => {
    const theorist = new Theorist(new Game(Duopoly));
    const result = theorist.getStrictlyDominantStrategy(true);
    expect(result).toEqual(-1);
  });
  it("will solve games by searching for strict dominance", () => {
    const theorist = new Theorist(new Game(PrisonersDilemma));
    const result = theorist.solveByStrictDominance();
    expect(result).toEqual([1, 1]);
  });
  it("will identify when a game cannot be solved by strict dominance", () => {
    const theorist = new Theorist(new Game(Duopoly));
    const result = theorist.solveByStrictDominance();
    expect(result).toEqual(-1);
  });
});
