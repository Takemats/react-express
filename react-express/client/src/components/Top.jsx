import { useNavigate } from "react-router-dom";

const Top = () => {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/game");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>◯✗ゲーム</h1>
      <button onClick={goToGame} style={{ padding: "10px 20px", fontSize: "18px" }}>
        ゲーム開始
      </button>
    </div>
  );
};

export default Top;