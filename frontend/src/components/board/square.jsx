function Square({squareColor}) {
  if (squareColor === 'dark') {
    return <div className="w-3 h-3 colo bg-sky-900"></div>
  }
  else {
    return <div className="w-3 h-3 colo bg-sky-200"></div>
  }
  
}

export { Square };
