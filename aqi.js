const fetchUrl = require("fetch").fetchUrl;

function getAQIByLocation(location, callback) {
    fetchUrl(
        `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=9bdca107dee44c8d90c4efabb9b500e4`,
        function(error, meta, body) {
            const latitude = JSON.parse(body).results[0].geometry.lat;
            const longitude = JSON.parse(body).results[0].geometry.lng;
            fetchUrl(
                `https://airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${latitude}&longitude=${longitude}&distance=25&API_KEY=CB278A15-984D-44A7-A2DE-AA530CDDFD69`,
                function(error, meta, body) {
                    const response = {
                        aqi: JSON.parse(body)[0].AQI,
                        latitude: latitude,
                        longitude: longitude
                    };
                    callback(error, response);
                }
            );
        }
    );
}


module.exports = getAQIByLocation
