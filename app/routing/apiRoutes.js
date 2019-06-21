var express = require('express');
var path = require("path");

var friends = require("./../data/friends.js")

var router = express.Router();
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  
router.get('/friends', function(req, res) {
    res.json(friends);
});

// router.post("api/friends", function(req, res) {
//     res.sendFile(path.join(__dirname, "../data/friends.js"));
// });
  

  
  
module.exports = router;
