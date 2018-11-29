import React from 'react';
import ReactDOM from 'react-dom';

const element = <div>hello</div>;

const element = <div id="root">在此 div 中的所有内容都将由 React DOM 来管理，所以我们将其称之为 “根” DOM 节点。我们用React 开发应用时一般只会定义一个根节点。但如果你是在一个已有的项目当中引入 React 的话，你可能会需要在不同的部分单独定义 React 根节点。</div>

function tick() {
  const element = (
    <div>
      <h1>hello, world.</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById('root'),
  );
}

setInterval(tick, 1000);

ReactDOM.render (
  element,
  document.getElementById('root'),
);
