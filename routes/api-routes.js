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


        // //Get Users
        app.get('/api/users', function(req, res) {
            db.User.findAll()
                .then((data) => {
                    console.log('get data: ', data)
                    // instead of sending data back as json send to functions of graph or other functions
                    res.json(data)
                })
                .catch(err => console.log(err));
        });

        // Add Users
        app.post('/api/new', (req,res) => {
            db.User.create({
                name: req.body.name,
                location: req.body.location,
                emotion: req.body.emotion,
                breathe: req.body.breathe,
                message: req.body.message
            }).then(() => res.end());
        });

}
