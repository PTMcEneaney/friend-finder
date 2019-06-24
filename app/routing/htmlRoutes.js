var express = require('express');
var path = require("path");

var router = express.Router();
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static(path.join(__dirname,'../public')));


  
  // Define the home page route
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  // Define the about route
router.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));

  });

// router.get('/images/PageMcEneaney.jpg', function(req, res) {
//     res.send(path.join(__dirname, "../public/assets/images"));

//   });  

  
  
module.exports = router;
