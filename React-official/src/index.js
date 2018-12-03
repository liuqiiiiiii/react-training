import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

class Square extends React.Component {
  render() {
    return (
      // 注意如何使用 onClick={() => alert('click')}，将传递“一个函数”作为 onClick prop（属性）。
      // 它只在点击后触发。忘记 () => 并直接编写 onClick={alert('click')} 是一个常见错误，并且每次组件重新渲染时都会触发 alert。
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
      // 通过 Square(方格) 的 render 方法中的 onClick 处理程序调用 this.setState，只要单击 <button> ，我就告诉 React 重新渲染 Square(方格) 。
      // 更新后，Square(方格) 的 this.state.value 的值将是 'X' ，所以会在游戏棋盘上看到 X。
      // 如果你点击任何 Square(方格)，就会出现一个 X。当你在一个组件中调用 setState 时，React 也会自动更新其子组件。
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'x';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return(
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    const status = '下一个玩家：X';
    return (
      <div>
        <div className="status">{status}</div>
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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [1, 4, 8],
//     [2, 4, 6],
//   ];
//   for(let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
