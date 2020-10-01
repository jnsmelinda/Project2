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
}
