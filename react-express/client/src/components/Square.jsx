const Square = ({ value, onClick }) => {
    return (
      <button
        style={{
          width: "120px",
          height: "120px",
          fontSize: "48px",
          margin: "5px"
        }}
        onClick={onClick}
      >
        {value}
      </button>
    );
  };
  
  export default Square;