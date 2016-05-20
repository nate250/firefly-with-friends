var express = require('express');
var shortid = require('shortid');

var app = express();

app.use(express.static('../client'));

var sessions = {};

app.post('/user/*', function(req, res) {
  var name = req.url.replace('/user/', '');
  var id = shortid.generate();
  sessions[id] = {
    members: [
      name
    ]
  };

  res.statusCode = 201;
  res.write(JSON.stringify({id: id}));
  res.end();
});

app.get('/session/*', function(req, res) {
  var sid = req.url.replace('/session/', '');
  if (sessions[sid]) {
    res.statusCode = 200;
    res.write(JSON.stringify(sessions[sid]));
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(8081);