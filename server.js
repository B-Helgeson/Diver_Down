const   express = require("express"),
        bodyParser = require("body-parser"),
        logger = require("morgan"),
        mongoose = require("mongoose"),

// Require all models
        db = require("./models"),

// Configure Port
        PORT = 3000,

// Initialize Express
        app = express();

// Use morgan logger for logging requests



app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB (locally for now)
mongoose.connect("mongodb://localhost/DiveLog");

//Routes to be added here




// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});
