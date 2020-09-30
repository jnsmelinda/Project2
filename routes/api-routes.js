const db = require('../models');
const getAQIByLocation = require('../aqi.js');

module.exports = function(app) {
    app.get("/api/aqi/:location", function(req, res, next) {
        getAQIByLocation(
            req.params.location,
            (error, aqi) => {
                if (error) next(error);
                else res.json({aqi});
            }
        );
    });
}
