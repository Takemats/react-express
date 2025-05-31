const Square = ({ value, onClick }) => {
    return (
      <button
        style={{ width: "60px", height: "60px", fontSize: "24px" }}
        onClick={onClick}
      >
        {value}
      </button>
    );
  };
  
  export default Square;