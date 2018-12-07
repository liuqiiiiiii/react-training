var Events = React.createClass({
  clickHandler: function() {
    console.log('我是你永远得不到的爸爸');
  },

  render: function() {
    return(
      <div onClick={this.clickHandler}>
        hello，世界
      </div>
    )
  }
})

React.render(
  <Events />,
  document.body
);
