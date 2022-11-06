import { Square } from './square';

function Board({ board }) {
  return (
    <div className='min-w-full'>
      {board.map((value, index) => {
        const squareColor = value === 1 ? 'dark' : 'light';
        return <Square key={index} squareColor={squareColor} />;
      })}
    </div>
  );
}

export { Board };
