const fetchUrl = require('fetch').fetchUrl;

// calling for the opencage api to get the coordinates of the entered location, then calling the airNow API with coordinates to
// get the air quality index.
function getAQIByLocation(location, callback, next) {
    fetchUrl(
        `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.API_KEY_GEOCODE}`,
        (error, meta, body) => {
            if (error) {
                next(error);
            } else if (meta.status !== 200) {
                const error = new Error(JSON.stringify(meta));
                error.status = meta.status;
                next(error);
            } else {
                const geocode = JSON.parse(body);
                if (geocode.total_results === 0) {
                    const error = new Error(`${location} not found`);
                    error.status = 404;
                    next(error);
                } else {
                    const longitude = geocode.results[0].geometry.lng;
                    const latitude = geocode.results[0].geometry.lat;
                    fetchUrl(
                        // eslint-disable-next-line max-len
                        `https://airnowapi.org/aq/observation/latLong/current/?format=application/json&longitude=${longitude}&latitude=${latitude}&distance=25&API_KEY=${process.env.API_KEY_AIRNOW}`,
                        (error, meta, body) => {
                            if (error) {
                                next(error);
                            } else if (meta.status !== 200) {
                                const error = new Error(JSON.stringify(meta));
                                error.status = meta.status;
                                next(error);
                            } else {
                                const aqis = JSON.parse(body.toString());
                                if (aqis.length === 0 ) {
                                    const error = new Error(`AQI for ${longitude}, ${latitude} not found`);
                                    error.status = 404;
                                    next(error);
                                } else {
                                    const response = {
                                        aqi: aqis[aqis.length-1].AQI,
                                        longitude: longitude,
                                        latitude: latitude
                                    };
                                    callback(response);
                                }
                            }
                        }
                    );
                }
            }
        }
    );
}

module.exports = getAQIByLocation;
