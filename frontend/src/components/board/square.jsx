function Square({ squareColor }) {
  if (squareColor === 'dark') {
    return <td className="w-12 h-12 bg-opacity-90 blur-0 bg-clip-padding bg-gray-800 backdrop-filter backdrop-blur-sm"></td>;
  } else {
    return <td className="w-12 h-12 bg-opacity-50 blur-0 bg-clip-padding bg-gray-400 backdrop-filter backdrop-blur-sm"></td>;
  }
}

export { Square };
