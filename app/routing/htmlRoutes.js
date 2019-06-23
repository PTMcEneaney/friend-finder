var express = require('express');
var path = require("path");

var router = express.Router();
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var public = require('path').join(__dirname,'../public');
app.use(express.static(public));
  
  // Define the home page route
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));;
  });
  
  // Define the about route
router.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  
module.exports = router;
