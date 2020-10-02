const db = require('../models');

module.exports = function(app) {

    app.get("/", function(req, res) {
      res.render("index");
    });

    app.post("/", function(req, res, next) {
        console.log(req.body);

        if (req.body.emotion) {
            db.Feedback.create(req.body)
                .then((result) => res.render("index", {location: req.body.location}))
                .catch((err) => next(err));
        }
        else {
            res.render("index", {location: req.body.location});
        }
    });

    app.get("/civic", function(req, res) {
      res.render("civic");
    });
}
