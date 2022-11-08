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

export const boardsEquals = (board1, board2) => {
  if (JSON.stringify(board1) !== JSON.stringify(board2)) {
    return false;
  }

  return true;
};

export const searchMoreSolutions = (boardSize) => {
  const boardSolutions = [];
  let previousSolution = [];

  for (let initialRow = 0; initialRow < boardSize; initialRow++) {
    const initialBoard = createBoard(boardSize);
    const result = solveNQueens(initialBoard, initialRow, 0);

    if (initialRow === 0 && result) {
      boardSolutions.push(initialBoard);
      previousSolution = [...initialBoard];
    }

    if (result) {
      if (!boardsEquals(initialBoard, previousSolution)) {
        boardSolutions.push(initialBoard);
        previousSolution = [...initialBoard];
      }
    }
  }

  printAllBoardSolutions(boardSolutions);

  return boardSolutions;
};

export const printAllBoardSolutions = (solutions) => {
  solutions.forEach((solution) => printBoard(solution));
};
