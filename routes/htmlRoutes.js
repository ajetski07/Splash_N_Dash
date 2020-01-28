var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function() {
      res.render("index", {
        style: "home.css"
      });
    });
  });

  // Load example page //
  app.get("/example", function(req, res) {
    db.Example.findOne({}).then(function() {
      res.render("example", {
        style: "example.css"
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
