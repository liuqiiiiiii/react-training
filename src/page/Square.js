import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'qiliu',
    };
  }

  render () {
    return (
      <button
        className="square"
        onClick = {() => this.setState({value: 'liuqi'})}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
