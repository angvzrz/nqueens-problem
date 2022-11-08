import { Board } from 'components/board/board';
import { useRef, useState } from 'react';

function Home() {
  const [boardSize, setBoardSize] = useState(4);
  const inputBoardSizeRef = useRef(null);

  const handleBoardSizeInput = async () => {
    const userBoardInput = inputBoardSizeRef.current.value;
    setBoardSize(userBoardInput);
  };

  return (
    <>
      <div className="my-12 px-10 sm:max-w-md">
        <span className="text-lg text-cyan-200">Try other board sizes!</span>
        <div className="flex items-baseline gap-x-4">
          <input
            type="number"
            name="boardSize"
            id="boardSize"
            min="4"
            defaultValue={4}
            ref={inputBoardSizeRef}
            className="mb-5 rounded-md px-5 py-1"
          />
          <button
            onClick={handleBoardSizeInput}
            className="text-md rounded-md bg-indigo-600 px-5 py-1 font-normal text-cyan-100 shadow-sm hover:bg-indigo-700"
          >
            Ok
          </button>
        </div>
      </div>
      <Board boardSize={boardSize} />
    </>
  );
}

export { Home };
