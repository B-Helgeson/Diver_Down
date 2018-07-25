const express = require("express"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      routes = require("./routes"),
      server = express(),
      PORT = process.env.PORT || 3001;

// Define middleware here
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}
// Add routes, both API and view
server.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactdivelog");

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
