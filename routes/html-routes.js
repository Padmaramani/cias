// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/bdaypacks", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bdaypacks.html"));
  });

  app.get("/partypacks", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/partypacks.html"));
  });  

  app.get("/bevpacks", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bevpacks.html"));
  });

  app.get("/themepacks", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/themepacks.html"));
  }); 

  app.get("/giftsuse", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/giftsuse.html"));
  }); 

  app.get("/giftsamuse", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/giftsamuse.html"));
  }); 

};