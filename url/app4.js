var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//var server = require('http').createServer(app);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/scores', function(req, res) {
  res.send(req.body);
});


app.listen(3000);
