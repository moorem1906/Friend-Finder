var friendList = require('../data/friend.js');

//This section require the content sort/pushed to the friend.js file

module.exports = function(app) {
    app.get('/api/friend', function(req, res) {
        res.json(friendList);

//This section displays the results in json format 
    });

    app.post('/api/friend', function(req, res) {
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var topMatch = 0;


        for (var i = 0; i < friendList.length; i++) {
            var scoresDiff = 0;

            for (var i = 0; i < newFriendScores.length; i++) {
                scoresDiff += (Math.abs(parseInt(friendList[i].scores[i]) - parseInt(newFriendScores[i])));
            }

            scoresArray.push(scoresDiff);
        }


        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[topMatch]) {
                topMatch = i;
            }
        }

        var bff = friendList[topMatch];
        res.json(bff);

        friendList.push(req.body);
    });
};