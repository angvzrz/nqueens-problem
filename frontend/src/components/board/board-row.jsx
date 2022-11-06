import { Square } from './square';

function BoardRow({ rowLength, colorPattern }) {
  const darkPattern = Array.from(
    { length: rowLength },
    (_, index) => index % 2
  );
  const lightPattern = darkPattern.map((colorCode) => {
    const reversedColor = colorCode === 0 ? 1 : 0;
    return reversedColor;
  });

  const row = colorPattern === 'dark' ? darkPattern : lightPattern;

  return (
    <tr>
      {row.map((colorCode, index) => {
        const color = colorCode === 0 ? 'dark' : 'light';
        return <Square key={index} squareColor={color} />;
      })}
    </tr>
  );
}

export { BoardRow };
