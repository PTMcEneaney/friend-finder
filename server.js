var express = require("express");

var htmlR = require("./app/routing/htmlRoutes");
var apiR = require("./app/routing/apiRoutes");

// Sets up the Express App
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var mysql = require("mysql");

var PORT = 3000;
// console.log(htmlR.home());

app.use("/", htmlR);
// app.use("/survey", htmlR);

app.use("/api", apiR);


// //home page
// app.get("/", function(req, res){
//   res.sendFile(path.join(__dirname, "app/public/home.html"));
//   console.log("home")
// });
// //survey page
// app.get("/survey", function(req, res){
//   res.sendFile(path.join(__dirname, "app/public/survey.html"));
//   console.log("survey")
// });

//api
// app.get("/api/friends", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/routing/apiRoutes.js"));
// });

  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });