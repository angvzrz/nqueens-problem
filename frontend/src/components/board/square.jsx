function Square({ squareColor }) {
  if (squareColor === 'dark') {
    return <td className="w-12 h-12 border bg-sky-900"></td>;
  } else {
    return <td className="w-12 h-12 border bg-sky-200"></td>;
  }
}

export { Square };
