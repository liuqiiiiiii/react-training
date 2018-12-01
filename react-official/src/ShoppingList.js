import React from 'react';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;

// Example usage: <ShoppingList name="LiuQi" />

/*
在这里，ShoppingList 是一个 React 组建类，或 React 组件类型。组件接受参数，称为 props（属性），
并通过 render 方法返回一个显示的视图层次结构。

render 方法返回要渲染的内容描述，然后 React 接受该描述并将其渲染到屏幕上。
特别是，render 返回一个 React 元素，这是一个渲染内容的轻量级描述。
大多数 React 开发人员使用一种名为 JSX 的特殊语法，可以更容易的编写这些结构。
<div /> 语法在构建时被转换为 React.createElement('div')。
*/
