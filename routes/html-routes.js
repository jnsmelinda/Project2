// Dependencies
const path = require("path");

// Routes
module.exports = function(app) {

    app.get("/", function(req, res) {
      res.render("index");
    });

    app.post("/", function(req, res) {
        res.render("index", {location: req.body.location});
    });

    app.get("/civic", function(req, res) {
      res.render("civic");
    });
}
