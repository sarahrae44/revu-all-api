var express = require('express');
var app     = express();
var port    = 3001;

app.use(express.static('public'));

app.listen(3001, function() {
  console.log("Noticeboard Frontend running on port: ", port);
});
