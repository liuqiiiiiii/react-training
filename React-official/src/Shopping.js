import React from 'react';
import ReactDOM from 'react-dom';

class Shopping extends React.component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping list of {this.props.name}</h1>

        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default Shopping;

// 通过这种标签语法来使用上面我们声明的组件：<Shopping name="liuqi" />

class Instruction extends React.Component {
  render() {
    return (
      <div>
        <p>这样我们就拿到了一个很有趣的看起来像 XML/HTML 的标签。你的组件向 React 描述了你想要渲染的内容。之后 React 会根据你开发应用数据的变化自动渲染和更新组件。</p>
        <p>这里的 ShoppingList 是一种 React 组件类，或者叫 React 组件类型 之类的。一个组件会接受名为 props 的参数，并通过名为 render 的方法返回一个嵌套结构的视图。</p>
        <p>render 返回的是你对你想要渲染内容的描述。React 会根据你的描述将对应的内容在屏幕上渲染出来。讲得更具体一点，render 返回的是一个 React 元素，是一种对渲染内容比较简洁的描述。</p>
        <p>大部分 React 开发者都会使用一种名为 JSX 的语法扩展来更方便地书写这种描述。比方说里面的 &lt;div /&gt; 会被编译为 React.createElement('div') 。上面的那个例子就等同于下方大括号里的内容：</p>
        {
          React.createElement(
            "div",
            { className: "shopping-list" },
            React.createElement(
              "h1",
              null,
              "Shopping list of",
              props.name
            ),
            React.createElement(
              ul,
              null,
              React.createElement(
                "li",
                null,
                "Instagram"
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
              ),
            )
          )
        }
        <p>在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号把表达式括起来。每一个 React 元素事实上都一个 JavaScript 对象，你可以在你的应用中把它当保存在变量中或者作为参数传递。</p>
        <p>我们定义的 ShoppingList 组件只会渲染一些内置的 DOM 组件（&lt;div&gt; 等），但是使用自定义的 React 组件也很简单，通过 &lt;ShoppingList /&gt; 这样的标签你就可以在 React 当中调用整个 ShoppingList 组件。</p>
        <p>每个组件都是独立包装好的，这样也就方便你像搭积木一样组合各种组件来构建复杂的UI界面。</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Instruction />,
  document.getElementById('root'),
)
