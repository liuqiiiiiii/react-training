// <!DOCTYPE html>
<html>
  <head>
    <meta http-equiv='Content-type' content='text/html; charset=utf-8' />

    <title>first component</title>

    <script src="http://cdn.bootcss.com/react/0.13.2/react.min.js"></script>
    <script src="http://cdn.bootcss.com/react/0.13.2/JSXTransformer.js"></script>
  </head>

  <body>
    <div id="example"></div>

    <script type="text/jsx">
      var FirstComponent = React.createClass({
        render: function() {
          return <div>hello {this.props.name}</div>
        }
      });

      React.render(
        <FirstComponent name="husky" />,
        document.body
      );
    </script>
  </body>
</html>
