import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function greeting(user) {
  if(user) {
    return <h1>hi {formatName(user)}</h1>;
  }
  return <h1>hello SB</h1>
}

const user = {
  firstName: 'liu',
  lastName: 'qi',
};

const elements = <h1>这种看起来有些奇怪的标签语法既不是字符串也不是 HTML，它被称为 JSX， 一种 JavaScript 的语法扩展。 我们推荐在 React 中使用 JSX 来描述用户界面。JSX 乍看起来可能比较像是模版语言，但事实上它完全是在 JavaScript 内部实现的，JSX 用来声明 React 当中的元素。</h1>;

const example = <div tabIndex="0"></div>

const example = <img src={user.avatarUrl}/>

const element = (
  <h1>format{formatName(user)}</h1>
);

const title = example.liuqi;

const title = <h1>{title} —— JSX 防注入攻击</h1>

const content = <h1 className="content">hello, world.</h1>

const content = React.createElement(
  'h1',
  {className: content},
  'hello, world'
);

// const content = (
//   type: 'h1',
//   props: {
//     className: 'content',
//     children: 'hello, world',
//   }
// );

ReactDOM.render(
  element,
  document.getElementById('root'),
)
