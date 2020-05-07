// LOAD DATA
// Link the routes to the data source 
var path = require("path")
var fs = require("fs")
var router = require('express').Router()

router.get("/notes", function (req, res) {
    fs.readFile("./db/db.json", function (err, data) {
        if (err) throw err;
        var savedNotes = JSON.parse(data)
        res.json(savedNotes)
    })

});

router.post("/notes", function (req, res) {
    var newNote = req.body 
    
    fs.readFile("./db/db.json", function (err, data) {
        if (err) throw err;
        var savedNotes = JSON.parse(data)
        savedNotes.push(newNote)
    
        fs.writeFile("./db/db.json", JSON.stringify(savedNotes), function (err, data) {
            if (err) throw err;
            res.end()
            // savedNotes.push(req.body);
            // res.json(savedNotes);
            // console.log(savedNotes)
        })    
    })

    
})


    module.exports = router;

