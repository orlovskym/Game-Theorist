//Payoffs represent points scored, first by Player 1 and second by Player 2. The more points, the better.
export type Payoffs = [number, number];
//A GameMatrix is a 2d grid of Payoffs. Each row represents a strategy available to Player 1, and each column a strategy available to Player 2.
export type GameMatrix = Payoffs[][];

export class Game {
  matrix: GameMatrix;

  constructor(matrix: GameMatrix) {
    this.matrix = matrix.map((row) => [...row]);
  }

  getNumberRows = (): number => {
    return this.matrix.length;
  };

  getNumberColumns = (): number => {
    return this.matrix[0].length;
  };

  getRowByIndex = (i: number): Payoffs[] => {
    //add error checking?
    return this.matrix[i];
  };

  getColumnByIndex = (i: number): Payoffs[] => {
    const column: Payoffs[] = [];
    for (const row of this.matrix) {
      column.push(row[i]);
    }
    return column;
  };

  getStrategy = (isPlayer1: boolean, strategyIndex: number): Payoffs[] => {
    if (isPlayer1) {
      return this.getRowByIndex(strategyIndex);
    } else {
      return this.getColumnByIndex(strategyIndex);
    }
  };

  getAllStrategiesForPlayer = (isPlayer1: boolean): Payoffs[][] => {
    if (isPlayer1) {
      return this.matrix;
    } else {
      const output: Payoffs[][] = [];
      for (let i = 0; i < this.getNumberColumns(); i++) {
        output.push(this.getColumnByIndex(i));
      }
      return output;
    }
  };

  removeRowByIndex = (i: number): void => {
    //add returning the removed row?
    this.matrix.splice(i, 1);
  };

  removeColumnByIndex = (i: number): void => {
    for (const row of this.matrix) {
      row.splice(i, 1);
    }
  };
}
