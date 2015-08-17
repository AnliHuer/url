var express = require('express');
var app = express();

app.get('/shoes', function (req, res) {
  res.send(req.query);
});

app.listen(3000);
