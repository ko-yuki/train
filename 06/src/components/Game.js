import React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsFirst: true,
      stepNumber: 0
    };
  }

  handleClick(i) {
    const { history, xIsFirst, stepNumber } = this.state;
    const hty = history.slice(0, stepNumber + 1);
    const current = hty[hty.length - 1];
    const squares = current.squares.slice();
    if (this.judgWinner(squares) || squares[i]) {
      return;
    }
    this.setState(() => {
      squares[i] = xIsFirst ? "X" : "O";
      return {
        history: hty.concat([{ squares }]),
        stepNumber: hty.length,
        xIsFirst: !xIsFirst
      };
    });
  }

  // 判断输赢
  judgWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  goTo = step => {
    this.setState({
      stepNumber: step,
      xIsFirst: step % 2 === 0
    });
  };

  render() {
    const { history, xIsFirst, stepNumber } = this.state;
    const current = history[stepNumber];

    // 历史回溯
    const moves = history.map((step, index) => {
      const desc = index ? `Go to move #${index}` : "Go to game start";
      return (
        <li key={index} className="history">
          <span>{`${index + 1}.`}</span>
          <button type="button" onClick={() => this.goTo(index)}>
            {desc}
          </button>
        </li>
      );
    });

    const winner = this.judgWinner(current.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsFirst ? "X" : "O"}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}

export default Game;
