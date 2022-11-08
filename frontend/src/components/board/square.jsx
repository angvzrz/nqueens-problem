import { Queen } from './queen';

const joinClassNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

function Square({ squareColor, hasQueen }) {
  return (
    <td
      className={joinClassNames(
        'h-auto w-14 bg-clip-padding blur-0 backdrop-blur-sm backdrop-filter ',
        squareColor === 'dark'
          ? 'bg-gray-800 bg-opacity-90'
          : 'bg-gray-400 bg-opacity-50'
      )}
    >
      {hasQueen && <Queen className="fill-yellow-300" />}
    </td>
  );
}

export { Square };
