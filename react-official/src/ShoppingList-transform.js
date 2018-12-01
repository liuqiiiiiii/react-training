import React from 'react';

class ShoppingList extends React.Component {
  render() {
    return (
      React.createElement(
        "div",
        { className: shopping-list},// eslint-disable-line
        React.createElement(
          "h1",
          null,
          "Shopping list for",
          props.name// eslint-disable-line
        ),
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            "Instagram",
          ),
          React.createElement(
            "li",
            null,
            "WhatsApp"
          ),
          React.createElement(
            "li",
            null,
            "Oculus"
          )
        )
      )
    );
  }
}

export default ShoppingList;

// 可以将任何 JavaScript 表达式放在 JSX 中的大括号内，每个 React 元素都是一个真正的 JavaScript 对象，可以将其储存在变量中，或传递给程序。
// ShoppingList 组件仅渲染内置的 DOM 组件，但是可以通过使用 <ShoppingList /> 轻松地编写自定义的 React 组件。
// 每个组件都是封装的，因此它可以独立操作，这允许我从简单的组件构建复杂的 UI。
