var myDivElement = <div className="foo" />;
React.render(myDivElement, document.body);

var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
React.render(myElement, document.body);

// JSX
React.render(
  <label classNmae="xx" htmlFor="input">content</label>,
  document.getElementById('example')
);

// 不使用 JSX
React.render(
  React.createElement('label', {className: 'xx', htmlFor='input'}, 'content'),
  document.getElementById('example')
)

var Form = MyFormComponent;
var App = (
  <Form>
    <Form.Row>
      <Form.Label />
      <Form.Input />
    </Form.Row>
  </Form>
);

var MyFormComponent = React.createClass({/* ... */});
MyFormComponent.Row = React.createClass({/* ... */});
MyFormComponent.Label = React.createClass({/* ... */});
MyFormComponent.Input = React.createClass({/* ... */});

var App = (
  React.createElement(Form, null,
    React.createElement(Form.Row, null,
      React.createElement(Form.Label, null,),
      React.createElement(Form.Input, null),
    )
  )
);

// Input (JSX)
var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>;
// Output(JS)
var content = React.createElement(
  Container,
  null,
  window.isLoggedIn ? React.createElement(Nav) : React.createElement(Login)
);

React.render(
  <div className={2 > 1 ? 'class1' : 'class2'}></div>,
  document.body
);

var Liuqi = React.createClass({
  render: function() {
    return <div>liuqi</div>
  }
});

React.render(
  <div>
    {2 > 1 ? <Liuqi /> : <div>div</div>}
  </div>
);

if(condition) {<div id="msg">hello, world</div>}
else {<div>div</div>}