import { Square } from './square';

function BoardRow({ row, colorPattern }) {
  const darkPattern = Array.from(
    { length: row.length },
    (_, index) => index % 2
  );
  const lightPattern = darkPattern.map((colorCode) => {
    const reversedColor = colorCode === 0 ? 1 : 0;
    return reversedColor;
  });

  const rowPattern = colorPattern === 'dark' ? darkPattern : lightPattern;

  return (
    <tr>
      {row.map((position, index) => {
        const color = rowPattern[index] === 0 ? 'dark' : 'light';
        return (
          <Square key={index} squareColor={color} hasQueen={position === 1} />
        );
      })}
    </tr>
  );
}

export { BoardRow };
