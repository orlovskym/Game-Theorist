export type Payoffs = [number, number];
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
