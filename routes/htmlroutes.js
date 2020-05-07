// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
var path = require("path")
var router = require("express").Router()

// ROUTING
// HTML GET requests. The code handles when users visit a page and HTML content will be displayed

router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

// If no matching route is found default to home (index.html)
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log(__dirname)
})

module.exports = router