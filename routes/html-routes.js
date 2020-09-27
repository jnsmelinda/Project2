// Dependencies
const path = require("path");

// Routes
module.exports = function(app) {

    app.get("/", function(req, res) {
      res.render("index");
    });

    app.get("/civic", function(req, res) {
      res.render("civic");
    });

    app.get("/main", function(req, res) {
      res.render("layouts/main");
    });
}
