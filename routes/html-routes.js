const db = require('../models');

module.exports = function(app) {
    // get route to render the index page
    app.get('/', function(req, res) {
        res.render('index');
    });

    // post route to render index with emotions
    app.post('/', function(req, res, next) {
        if (req.body.emotion) {
            db.Feedback.create(req.body)
                .then((result) => res.render('index', {location: req.body.location}))
                .catch((err) => next(err));
        } else {
            res.render('index', {location: req.body.location});
        }
    });

    // get route to render civic data
    app.get('/civic', function(req, res) {
        res.render('civic');
    });
};
