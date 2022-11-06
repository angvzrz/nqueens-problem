import { BoardRow } from './board-row';

function Board({ board }) {
  return (
    <table className="table-auto">
      <tbody>
        {board.map((row, index) => {
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
