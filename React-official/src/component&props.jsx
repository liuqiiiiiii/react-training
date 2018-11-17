import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <div>hello, {props.name}</div>;
}

const element = <div><Welcome name="liuqi"/></div>

ReactDOM.render(
  element,
  document.getElementById('root'),
);

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    )
  }
}

const element = <div />

const element = <Welcome name="liuqi" />

function Welcome(props) {
  return (
    <div>
      <h1>hello, {props.name}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Welcome name="liuqi" />
      <Welcome name="qiqi" />
      <Welcome name="liuliu" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-name">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'i hope you love react',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);

function Avatar(props) {
  return (
    <img
      className="avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  )
}

function comment(props) {
  return (
    <div className="Comment">
      <Avatar user={props.author} />
    </div>
  )
}