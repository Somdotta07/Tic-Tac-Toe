import React from 'react';
import "../App.css";

function Square({ val, clickSquare}) {
  return (
      <div className="square" onClick={clickSquare}>{val}</div>
  )
}

export default Square