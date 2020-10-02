const db = require('../models');
const getAQIByLocation = require('../aqi.js');

module.exports = function(app) {
    app.get("/api/aqi/:location", function(req, res, next) {
        getAQIByLocation(
            req.params.location,
            aqi => res.json({aqi}),
            error => next(error)
        );
    });

    app.post("/api/feedbacks", function(req, res, next) {
        db.Feedback.create(req.body)
        .then((result) => res.json(result))
        .catch((err) => next(err));
    });

    app.get("/api/feedbacks", function(req, res, next) {
        db.Feedback.findAll()
        .then((result) => res.json(result))
        .catch((err) => next(err));
    });

    app.get("/api/feedbacks/:id", function(req, res, next) {
        db.Feedback.findByPk(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => next(err));
    });
}
