import { Queen } from './queen';

const joinClassNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

function Square({ squareColor }) {
  return (
    <td
      className={joinClassNames(
        'h-auto w-24 bg-clip-padding blur-0 backdrop-blur-sm backdrop-filter ',
        squareColor === 'dark'
          ? 'bg-gray-800 bg-opacity-90'
          : 'bg-gray-400 bg-opacity-50'
      )}
    >
      <Queen className="fill-yellow-300" />
    </td>
  );
}

export { Square };
