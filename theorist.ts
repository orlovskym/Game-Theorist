import { Game } from "./game";

export class Theorist {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  getBestResponse(player: 0 | 1, opponentStrategy: number): number {
    //return the index of the best response to given opponent strategy
    return 0;
  }

  getStrictlyDominantStrategy(player: 0 | 1): number {
    //if one strategy is always the best, return its index. Otherwise, return -1
    return -1;
  }

  solveByStrictDominance(): number[] | -1 {
    //if each player has a strictly dominant strategy, return their indices. Otherwise, return -1
    return [];
  }
}
