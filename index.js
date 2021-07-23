var path = require("path");
var { absolutePath } = require("swagger-ui-dist");
var express = require("express");
var app = express();
var port = 3000;

app.use("/spec", express.static(path.join(__dirname, "./spec")));
app.use(express.static(absolutePath()));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
