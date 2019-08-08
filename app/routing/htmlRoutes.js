var path = require('path');

module.exports = function(app) {
//This section exports the app folder that contains both the data and friends.js content
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'))
    });

 //The results are then pushed to the home.html 
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'))

//The results are then pused to the survery.html
    })

    app.use(function(req, res, next) {
        res.status(404);
        res.send('Whoops! 404 error, File Not Found!')

//If the results are found then a 404 error/pages is generated
    })
}