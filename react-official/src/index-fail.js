import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

function Square(props) {
    return (
      // 注意如何使用 onClick={() => alert('click')}，将传递“一个函数”作为 onClick prop（属性）。
      // 它只在点击后触发。忘记 () => 并直接编写 onClick={alert('click')} 是一个常见错误，并且每次组件重新渲染时都会触发 alert。
      <button
        className="square"
        onClick={props.onClick}// 当我将 Square 修改为一个函数式组件时，同样将 onClick={() => this.props.onClick()} 更改为更短的 onClick = {props.onClick}（注意两边都去掉了括号）。在类中，我使用箭头函数来访问正确的 this 值，但在函数式组件中不需要担心 this。
      >
        {props.value}
      </button>
      // 通过 Square(方格) 的 render 方法中的 onClick 处理程序调用 this.setState，只要单击 <button> ，我就告诉 React 重新渲染 Square(方格) 。
      // 更新后，Square(方格) 的 this.state.value 的值将是 'X' ，所以会在游戏棋盘上看到 X。
      // 如果你点击任何 Square(方格)，就会出现一个 X。当你在一个组件中调用 setState 时，React 也会自动更新其子组件。
    );
}

class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).full(null),
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0,this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(calculateWinner(this.state.squares || squares[i])) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'x' : 'o';
    this.setState({
      history: history.concat([{// 与数组 push() 方法不同，concat() 方法不会改变原始数组，所以我更喜欢它。
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
      'Go to move #' + move :
      'Go to get start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;

    if(winner) {
      status = 'winner' + winner;
    } else {
      status = 'next player' + (this.state.xIsNext ? 'x' : 'o');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [1, 4, 8],
    [2, 4, 6],
  ];
  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
