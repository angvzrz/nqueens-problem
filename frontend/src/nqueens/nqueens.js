export const createBoard = (boardSize) => {
  const board = Array.from({ length: boardSize }, () =>
    Array.from({ length: boardSize }, () => 0)
  );

  return board;
};

export const printBoard = (board) => {
  console.log(board.join('\n'));
};

// Solution taken from:
// https://www.digitalocean.com/community/tutorials/n-queens-problem-java-c-plus-plus

export const isSafe = (board, row, col) => {
  const boardSize = board.length;

  // check moves horizontally
  for (let square = 0; square < boardSize; square++) {
    if (board[row][square] === 1) {
      return false;
    }
  }

  // check moves diagonally upwards to the left
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) {
      return false;
    }
  }

  // check moves diagonally downwards to the left
  for (let i = row, j = col; i < boardSize && j >= 0; i++, j--) {
    if (board[i][j] === 1) {
      return false;
    }
  }

  return true;
};

export const solveNQueens = (board, initialRow, col) => {
  const boardSize = board.length;

  if (col >= boardSize) {
    return true;
  }

  for (let row = initialRow; row < boardSize; row++) {
    //if it is safe to place the queen at position row,col -> place it
    if (isSafe(board, row, col)) {
      board[row][col] = 1;

      // when the end of the board is reached, exit the function
      if (solveNQueens(board, 0, col + 1)) {
        return true;
      }

      // backtrack if next queen could't find a safe space
      board[row][col] = 0;
    }
  }

  return false;
};

export const compareBoards = (boardA, boardB) => {
  if (JSON.stringify(boardA) !== JSON.stringify(boardB)) {
    return false;
  }

  return true;
};

export function checkMatrix() {
  const matrix = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p'],
  ];

  for (let i = 0; i < 4; i++) {
    console.log(matrix[1][i]);
  }
}
