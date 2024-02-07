import { Game, Payoffs } from "./game";

export class Theorist {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  getBestResponse(player: 0 | 1, opponentStrategy: number): number {
    //return the index of the best response to given opponent strategy
    //first, get the row or column that corresponds to the opponent's strategy
    let possibilities: Payoffs[] = [];
    if (player === 0) {
      possibilities = this.game.getColumnByIndex(opponentStrategy);
    } else {
      possibilities = this.game.getRowByIndex(opponentStrategy);
    }
    //create an array of the possible scores I can get with all of my responses
    const possibleScores: number[] = [];
    for (const possibility of possibilities) {
      possibleScores.push(possibility[player]);
    }
    //return the index that corresponds to the highest score I can achieve
    return possibleScores.indexOf(Math.max(...possibleScores));
  }

  getStrictlyDominantStrategy(player: 0 | 1): number {
    //if one strategy is always the best, return its index. Otherwise, return -1
    //build an array of all possible opponent strategies
    let opposingStrategies: Payoffs[][] = [];
    if (player === 0) {
      for (let i = 0; i < this.game.getNumberColumns(); i++) {
        opposingStrategies.push(this.game.getColumnByIndex(i));
      }
    } else {
      opposingStrategies = this.game.matrix;
    }
    //build an array of my best response to each opponent strategy
    const bestResponses: number[] = [];
    for (let i = 0; i < opposingStrategies.length; i++) {
      bestResponses.push(this.getBestResponse(player, i));
    }
    //if the same strategy is always my best choice, return its index. Otherwise, return -1
    for (let i = 1; i < bestResponses.length; i++) {
      if (bestResponses[0] !== bestResponses[i]) {
        return -1;
      }
    }
    return bestResponses[0];
  }

  solveByStrictDominance(): number[] | -1 {
    //if each player has a strictly dominant strategy, return their indices. Otherwise, return -1
    const dominantStrategies: number[] = [
      this.getStrictlyDominantStrategy(0),
      this.getStrictlyDominantStrategy(1),
    ];
    if (dominantStrategies.includes(-1)) {
      return -1;
    }
    return dominantStrategies;
  }
}
