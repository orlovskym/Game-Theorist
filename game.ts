type Payoffs = [number, number];
export type GameMatrix = Payoffs[][];

export class Game {
  matrix: GameMatrix;

  constructor(matrix: GameMatrix) {
    this.matrix = matrix;
  }

  getNumberRows = (): number => {
    //TODO
    return 0;
  };

  getNumberColumns = (): number => {
    //TODO
    return 0;
  };

  getRowByIndex = (i: number): Payoffs[] => {
    //TODO
    return [];
  };

  getColumnByIndex = (i: number): Payoffs[] => {
    //TODO
    return [];
  };

  removeRowByIndex = (i: number): void => {
    //TODO
  };

  removeColumnByIndex = (i: number): void => {
    //TODO
  };
}
