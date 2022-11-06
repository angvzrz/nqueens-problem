import * as nqueens from 'nqueens/nqueens';

describe('N Queens Problem module', () => {
  test('Board of size 4 filled with zeroes is generated', () => {
    expect(nqueens.createBoard(4)).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  test('isSafe returns false when searching horizontally', () => {
    const board = [
      [0, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    expect(nqueens.isSafe(board, 1, 0)).toBe(false);
  });

  test('isSafe returns false when searching diagonally upwards', () => {
    const board = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    expect(nqueens.isSafe(board, 2, 2)).toBe(false);
  });

  test('SolveNQueens returns true when col is greater than the board size', () => {
    const board = nqueens.createBoard(4);
    expect(nqueens.solveNQueens(board, 0, 5)).toBe(true);
  });

  test('solveNQueens returns true', () => {
    let board = nqueens.createBoard(4);
    expect(nqueens.solveNQueens(board, 2, 0)).toBe(true);
    nqueens.printBoard(board)
  })
});
