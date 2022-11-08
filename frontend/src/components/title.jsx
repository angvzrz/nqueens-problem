import { Queen } from "./board/queen";

function Title() {
  return (
    <div className="flex items-center ">
      <div className="w-12 fill-amber-400"><Queen /></div>
      <h1 className="text-3xl font-bold text-white">N Queens Problem</h1>
    </div>
  )
}

export { Title };
