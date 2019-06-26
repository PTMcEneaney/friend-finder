var express = require('express');
var path = require("path");

var router = express.Router();
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define the home page route
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Define the survey route
router.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));

});

//host images on server to display them while deployed -- I know this is not the 
//best way to do this, but for some reason I had a lot of trouble accessing them 
//from the local directory. This was a work-around
router.get('/images/page', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/images/page.jpg"));
});
router.get('/images/greg', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/images/greg.jpg"));
});
router.get('/images/andrew', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/images/andrew.jpeg"));
});
router.get('/images/stock', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/images/stock.png"));
});
router.get('/images/jing', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/images/jing.jpg"));
});
router.get('/images/alex', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/images/alex.jpg"));
});
router.get('/images/samantha', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/images/samantha.jpg"));
});
router.get('/images/viktoryia', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/images/viktoryia.jpeg"));
});
router.get('/images/dane', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/images/dane.jpg"));
});

module.exports = router;
