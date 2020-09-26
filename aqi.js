const fetchUrl = require("fetch").fetchUrl;

function getAQIByLocation(location, callback) {
    fetchUrl(
        `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=9bdca107dee44c8d90c4efabb9b500e4`,
        function(error, meta, body) {
            const lati = JSON.parse(body).results[0].geometry.lat;
            const lng = JSON.parse(body).results[0].geometry.lng;
            fetchUrl(
                `https://airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${lati}&longitude=${lng}&distance=25&API_KEY=CB278A15-984D-44A7-A2DE-AA530CDDFD69`,
                function(error, meta, body) {
                    callback(error, JSON.parse(body)[0].AQI);
                }
            );
        }
    );
}


module.exports = getAQIByLocation
