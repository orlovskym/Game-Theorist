import { Game, Payoffs } from "./game";

function findIndexOfLargestValue(numbers: number[]): number {
  let maxIndex = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

function isAllSameValue(values: number[]): boolean {
  if (!values) throw new Error("Empty array was passed to isAllSameValue");
  if (values.length === 1) {
    return true;
  }
  for (let i = 1; i < values.length; i++) {
    if (values[0] !== values[i]) {
      return false;
    }
  }
  return true;
}

export class Theorist {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  getBestResponse(isPlayer1: boolean, opponentStrategy: number): number {
    //return the index of the best response to given opponent strategy
    //first, get my opponent's strategy
    const possiblePayoffs: Payoffs[] = this.game.getStrategy(
      !isPlayer1,
      opponentStrategy
    );
    //create an array of the possible scores I can get with all of my responses
    const possibleScores: number[] = this.getPlayerResponses(
      isPlayer1,
      possiblePayoffs
    );
    //return the index that corresponds to the highest score I can achieve
    return findIndexOfLargestValue(possibleScores);
  }

  getPlayerResponses(isPlayer1: boolean, strategy: Payoffs[]): number[] {
    return strategy.map((option) => option[isPlayer1 ? 0 : 1]);
  }

  getStrictlyDominantStrategy(isPlayer1: boolean): number {
    //if one strategy is always the best for the given player, return its index. Otherwise, return -1
    //build an array of all possible opponent strategies
    const opposingStrategies: Payoffs[][] = this.game.getAllStrategiesForPlayer(
      !isPlayer1
    );
    //build an array of my best response to each opponent strategy
    const bestResponses: number[] = opposingStrategies.map((_, i) =>
      this.getBestResponse(isPlayer1, i)
    );
    //if the same strategy is always my best choice, return its index. Otherwise, return -1
    return isAllSameValue(bestResponses) ? bestResponses[0] : -1;
  }

  solveByStrictDominance(): number[] | -1 {
    //if each player has a strictly dominant strategy, return their indices. Otherwise, return -1
    const dominantStrategies: number[] = [
      this.getStrictlyDominantStrategy(true),
      this.getStrictlyDominantStrategy(false),
    ];
    return dominantStrategies.includes(-1) ? -1 : dominantStrategies;
  }
}
