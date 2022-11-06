import { Board } from 'components/board/board';
import { createBoard, solveNQueens } from 'nqueens/nqueens';
import { useState } from 'react';

function Home() {
  const [isSolved, setIsSolved] = useState(false);
  const board = createBoard(8);
  const solution = new Promise((resolve, reject) => {
    const result = solveNQueens(board, 0, 0);
    resolve(result);
  });

  solution.then((result) => setIsSolved(result));

  if (!isSolved) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h2>Please select a board size</h2>
      <input
        type="number"
        name="boardSize"
        id="boardSize"
        min="4"
        defaultValue={4}
      />
      {isSolved && <Board board={board} />}
    </div>
  );
}

export { Home };
