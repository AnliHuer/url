var express = require('express');
var app = express();

app.get('/scores/:name', function(req, res) {
  var str = req.params.name;
  var arr = str.split('.')[0];
  res.send(arr);
});

app.listen(3000);
