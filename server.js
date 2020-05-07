// Retrieve the Express package
var express = require ("express");
var htmlroutes = require ("./routes/htmlroutes");
var apiroutes = require ("./routes/apiroute");

// EXPRESS CONFIGURATION

// Tells Node that we are creating an Express server
var app = express()

// Sets an initial port
var PORT = process.env.PORT || 8080 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")) //static assets are found in public folder
//location is relative to the public folder


// ROUTER
// Points the server to the route file. The routes give our server a "map" of how to respond when users visit or request data from various URLs.
app.use("/api", apiroutes);
app.use("/", htmlroutes);

// LISTENER
// The below code starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})
