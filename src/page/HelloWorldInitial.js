
const element = <h1>hello, world</h1>
// JSX 语法的特点就是，凡是使用 JavaScript 的值的地方，都可以插入这种类似 HTML 的语法。

export default () => {
  return <div>hello world</div>;
}

// 上面的 JSX 语法可以被 Babel 转码器转为正常的 JavaScript 语法，如下：
exports.default = function () {
  return React.createElement(
    "div",
    null,
    "hello world"
  );
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
// 上面代码中，<h1>标签的文字内容部分嵌入了 JS 代码。每次生成的文本，取决于函数formatName(user)执行的结果。
