
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information about the potentional friends etc.
// ===============================================================================

var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    // This post first calculates the best compatible friend
    // It then adds the newprofile to the friends table on the server
    // And finally provides the image and name of the best match for the modal.
    app.post("/api/friends", function (req, res) {

        
        // Assign scores of newProfile to variable trough the use of parser, in reference the "friends.js"
        var newProfile = req.body;
        var newProfileScores = req.body.scores;

        // Profiles with similar scores are most compatible. We calculate compatibility by taking the summation of the difference in scores.
        // The lower the the number, the greater the compatibility. 

        // Create variable to store level of compatability.. 
        //To start, maximum value + 1, [(5*10)+1] =51, is assigned to ensure first candidate is given best compatibility.
        var bestCompatibility = 51;

        //These variables will house the name and image of the current best candidate.
        var bestFriendName;
        var bestFriendImage;

        //this variable will house the compatibility score with each candidate.
        var difference;

        //Loop through each of the profiles in friendsData array.
        for (var i = 0; i < friendsData.length; i++) {
            // reset variable for each comparison.
            difference = 0;
            for (var ii = 0; ii < friendsData.scores.length; ii++) {
                // Calculate the absolute value of the sum of score differences of scores.
                difference += Math.abs(newProfileScores[ii] - friendsData[i].scores[ii]);
            }
            // if comparison shows that the candidate has better compatibility, assign candidate as bestFriend.
            if (difference < bestCompatibility) {
                bestCompatibility = difference;
                bestFriendName = friendsData[i].name;
                bestFriendImage = friendsData[i].photo;
            }
        }
        // Add new profile to array
        friendsData.push(newProfile);

        // Send Name and Image of best friend for modal to use.
        res.json({status: 'OK', bestFriendName: bestFriendName, bestFriendImage: bestFriendImage});

    });
}