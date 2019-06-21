var express = require('express');
var path = require("path");

var list = require("./../data/friends.js")

var router = express.Router();
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  
router.get('/friends', function(req, res) {
    res.json(list);
});

router.post('/friends', function(req, res) {
        var userInput = req.body;
        console.log(userInput);
		var userResponses = userInput.scores;

        // friends.push(userInput);
        res.json(userInput);
        list.push(userInput);


});

// router.post("/friends", function(req, res) {
//    	// Capture the user input object
// 		var userInput = req.body;
		

// 		var userResponses = userInput.scores;
		

// 		// Compute best friend match
// 		var matchName = '';
// 		var matchImage = '';
// 		var totalDifference = 10000; // Make the initial value big for comparison

// 		// Examine all existing friends in the list
// 		for (var i = 0; i < friends.length; i++) {
			

// 			// Compute differenes for each question
// 			var diff = 0;
// 			for (var j = 0; j < userResponses.length; j++) {
// 				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
// 			}
			

// 			// If lowest difference, record the friend match
// 			if (diff < totalDifference) {
				

// 				totalDifference = diff;
// 				matchName = friends[i].name;
// 				matchImage = friends[i].photo;
// 			}
// 		}

// 		// Add new user
// 		friends.push(userInput);

// 		// Send appropriate response
// 		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
// 	});
// });
  

  
  
module.exports = router;
