import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <div>hello, {props.name}</div>;
}

const element = <div><Welcome name="liuqi"/></div>

const App = (
  <div>
    <Welcome name="qiqi" />
    <Welcome name="liuliu" />
    <Welcome name="qiliu" />
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root'),
)
