// <!DOCTYPE html>
<html>
  <head>
    <meta http-equiv='Content-type' content='text/html charset=utf-8'/>

    <title>hello world</title>

    <script src="http://cdn.bootcss.com/react/0.13.2/react.min.js"></script>
    <script src="http://cdn.bootcss.com/react/0.13.2/JSXTransformer.js"></script>
  </head>

  <body>
    <div id="example"></div>

    <script type="text/jsx">
      React.render(
        <h1>hello world</h1>,
        document.getElementById('example'),
        function() {
          console.log('ok!')
        }
      )
    </script>
  </body>
</html>
