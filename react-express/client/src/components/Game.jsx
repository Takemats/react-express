import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `勝者: ${winner}`
    : `次の手番: ${xIsNext ? "◯" : "✗"}`;

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "◯" : "✗";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column"
    }}>
      <h2>{status}</h2>
      <Board squares={squares} onClick={handleClick} />
      <button onClick={handleReset}>リセット</button>
    </div>
  );
};

// 勝敗判定関数
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // 横
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // 縦
    [0, 4, 8],
    [2, 4, 6], // 斜め
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;