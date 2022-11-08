import { Queen } from "./board/queen";

function Title() {
  return (
    <div className="flex items-baseline items-center ">
      <div className="w-12"><Queen /></div>
      <h1>N Queens Problem</h1>
    </div>
  )
}

export { Title };
