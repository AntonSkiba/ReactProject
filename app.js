const express = require("express");
const bodyParser = require("body-parser");

let port = process.env.PORT || 3000;

const jsonParser = bodyParser.json();
const app = express();

app.listen(port, function() {
   console.log(`server started on ${port} port`);
});
