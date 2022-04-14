import "./App.css";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [winner, setWinner] = useState({ winner: "none", state: "none" });
  useEffect(() => {
    checkWinner();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (winner.state !== "none") {
      alert(`Game over! Winner: ${winner.winner}`);
    }
  }, [winner]);
  const clickSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index === square && val === "") {
          return player;
        }
        return val;
      }),
    );
  };

  const checkWinner = () => {
    Patterns.forEach((element) => {
      const firstPlayer = board[element[0]];
      if (firstPlayer === "") return;
      let getPattern = true;
      element.forEach((index) => {
        if (board[index] !== firstPlayer) {
          getPattern = false;
        }
      });
      if (getPattern) {
        setWinner({ winner: player, state: "won" });
      }
    });
  };
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            clickSquare={() => {
              clickSquare(0);
            }}
          />
          <Square
            val={board[1]}
            clickSquare={() => {
              clickSquare(1);
            }}
          />
          <Square
            val={board[2]}
            clickSquare={() => {
              clickSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            clickSquare={() => {
              clickSquare(3);
            }}
          />
          <Square
            val={board[4]}
            clickSquare={() => {
              clickSquare(4);
            }}
          />
          <Square
            val={board[5]}
            clickSquare={() => {
              clickSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            clickSquare={() => {
              clickSquare(6);
            }}
          />
          <Square
            val={board[7]}
            clickSquare={() => {
              clickSquare(7);
            }}
          />
          <Square
            val={board[8]}
            clickSquare={() => {
              clickSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
