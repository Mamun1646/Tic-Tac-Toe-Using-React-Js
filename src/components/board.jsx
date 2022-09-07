import React from "react";
import Square from "./square";


// const style1 = {
// 	border: "4px solid darkblue",
// 	borderRadius: "10px",
// 	width: "250px",
// 	height: "250px",
// 	margin: "0 auto",
// 	display: "grid",
// 	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
// };
function Board(props) {
  const renderSquare = (i) => (
    <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  );
  return (
    <div  >
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
