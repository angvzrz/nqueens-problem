import { createBoard, solveNQueens } from 'nqueens/nqueens';
import { useEffect, useState } from 'react';
import { BoardRow } from './board-row';

function Board({ boardSize }) {
  const [board, setBoard] = useState(createBoard(boardSize));

  useEffect(() => {
    const newBoard = createBoard(boardSize);
    solveNQueens(newBoard, 0, 0);
    setBoard(newBoard);
  }, [boardSize]);

  return (
    <table className="table-auto rounded-lg shadow-xl">
      <tbody className="">
        {board != null &&
          board.map((row, index) => {
            const colorPattern = index % 2 === 0 ? 'dark' : 'light';
            return (
              <BoardRow
                key={index}
                rowLength={row.length}
                colorPattern={colorPattern}
              />
            );
          })}
      </tbody>
    </table>
  );
}

export { Board };
