var express = require('express');
var app = express();

app.get('/:name',function (req, res) {
  var str = req.params.name;
  res.send(str);
});

app.listen(3000);
