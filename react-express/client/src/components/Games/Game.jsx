import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Board from "./Board";

const Game = () => {
  const navigate = useNavigate();
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // true: プレイヤー（◯）、false: AI（✗）
  const winner = calculateWinner(squares);

  const status = winner
    ? `勝者: ${winner}`
    : squares.every(Boolean)
    ? "引き分け"
    : `次の手番: ${xIsNext ? "◯（あなた）" : "✗（コンピュータ）"}`;

  const handleClick = (i) => {
    if (squares[i] || winner || !xIsNext) return;

    const newSquares = [...squares];
    newSquares[i] = "◯";
    setSquares(newSquares);
    setXIsNext(false);
  };

  // コンピュータの手をランダムで決定
  useEffect(() => {
    if (!xIsNext && !winner) {
      const timeout = setTimeout(() => {
        const emptyIndices = squares
          .map((v, i) => (v === null ? i : null))
          .filter((v) => v !== null);

        if (emptyIndices.length === 0) return;

        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        const newSquares = [...squares];
        newSquares[randomIndex] = "✗";
        setSquares(newSquares);
        setXIsNext(true);
      }, 1000); // 1秒後にAIが打つ

      return () => clearTimeout(timeout);
    }
  }, [xIsNext, squares, winner]);

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
            flexDirection: "column",
            textAlign: "center" }}>
      <h2>{status}</h2>
      <Board squares={squares} onClick={handleClick} />
        <button onClick={handleReset} style={{ marginTop: "20px" }}>リセット</button>
        <button onClick={() => navigate("/")} style={{ marginTop: "10px" }}>
        トップに戻る
      </button>
    </div>
  );
};

// 勝敗判定関数（再掲）
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // 縦
    [0, 4, 8], [2, 4, 6],           // 斜め
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;