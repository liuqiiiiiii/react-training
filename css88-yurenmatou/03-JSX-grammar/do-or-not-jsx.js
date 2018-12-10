// 使用 JSX
React.render(
  <div>
    <div>
      <div>content</div>
    </div>
  </div>,
  document.getElementById('example')
)

// 不使用 JSX
React.render(
  React.createElement('div', null,
    React.createElement('div', null,
      React.createElement('div', null, 'content')
    )
  ),
  document.getElementById('example')
)

// JSX
ReactElement createEelement(
  string/ReactClass type,// 可以是一个字符串，表示是一个 HTML 标准内的元素，或者是一个 ReactClass 类型的对象，表示之前封装好的自定义组件
  [object props],// 是一个对象，或者说是字典也可以，它保存了这个元素的所有固有属性（即传入后基本不会改变的值）
  [children ...]// 从这里开始，之后的参数都被认作是元素的子元素
)
