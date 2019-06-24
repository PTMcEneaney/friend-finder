var express = require("express");
// Sets up the Express App
var app = express();

var htmlR = require("./app/routing/htmlRoutes");
var apiR = require("./app/routing/apiRoutes");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 3000;

app.use("/", htmlR); 
app.use("/api", apiR);

  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });