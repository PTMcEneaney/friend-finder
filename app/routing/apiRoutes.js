var express = require('express');

//require the js file with friends JSON data
var list = require("./../data/friends.js")

var router = express.Router();
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get request for /api/friends
router.get('/friends', function(req, res) {
    res.json(list);
});

//post request for /api/friends
router.post('/friends', function(req, res) {
        var userInput = req.body;
		var userResponses = userInput.scores;

        // Compute best friend match
		var matchName = '';
        var matchImage = '';
        var matchScores = [];
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < list.length; i++) {
			
			// calculate differences for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(list[i].scores[j] - userResponses[j]);
			};
			
			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = list[i].name;
                matchImage = list[i].photo;
                matchScores = list[i].scores;
			};
		};

		// Send response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage, matchScores: matchScores});

        // Add new user
        list.push(userInput);
});  

  
  
module.exports = router;
