import React from "react";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick} type="button">
      {value}
    </button>
  );
}

export default Square;
