var express = require("express");
var app = express();

app.use(express.static("public"));

var listener = app.listen(process.env.PORT, function() {
  console.log("Website berjalan di port " + listener.address().port);
});
