const db = require('../models');
const getAQIByLocation = require('../aqi.js');

module.exports = function(app) {
    // get route a particular location
    app.get('/api/aqi/:location', function(req, res, next) {
        getAQIByLocation(
            req.params.location,
            (aqi) => res.json({aqi}),
            (error) => next(error)
        );
    });

    // post route for a record
    app.post('/api/feedbacks', function(req, res, next) {
        db.Feedback.create(req.body)
            .then((result) => res.json(result))
            .catch((err) => next(err));
    });

    // get route for all the feedbacks
    app.get('/api/feedbacks', function(req, res, next) {
        db.Feedback.findAll()
            .then((result) => res.json(result))
            .catch((err) => next(err));
    });

    // get route for one record by id
    app.get('/api/feedbacks/:id', function(req, res, next) {
        db.Feedback.findByPk(req.params.id)
            .then((result) => res.json(result))
            .catch((err) => next(err));
    });
};
