//Payoffs represent points scored, first by Player 0 and second by Player 1. The more points, the better.
export type Payoffs = [number, number];
//A GameMatrix is a 2d grid of Payoffs. Each row represents a strategy available to Player 0, and each column a strategy available to Player 1.
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
