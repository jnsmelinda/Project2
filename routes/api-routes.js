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

    app.post("/api/users", function(req, res, next) {
        db.User.create(req.body)
        .then((result) => res.json(result))
        .catch((err) => next(err));
    });

    app.get("/api/users", function(req, res, next) {
        db.User.findAll()
        .then((result) => res.json(result))
        .catch((err) => next(err));
    });
}
