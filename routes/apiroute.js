// LOAD DATA
// Link the routes to the data source 
var path = require("path")
var fs = require("fs")
var router = require('express').Router()

router.get("/notes", function (req, res) {
    fs.readFile("./db/db.json", function (err, data) {
        if (err) throw err;
        if (data) {
            var savedNotes = JSON.parse(data)
            res.json(savedNotes)
        } else {
            res.end()
        }

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

// DELETE
router.delete("/notes/:title", function (req, res) {
    var title = req.params.title
    
    fs.readFile("./db/db.json", function (err, data) {
        if (err) throw err;
        var savedNotes = JSON.parse(data)
        var indextoRemove = ""
        for (i = 0; i < savedNotes.length; i++ ){
           if (savedNotes[i].title == title) {
            indextoRemove = i
           }
        }
       
        savedNotes.splice(indextoRemove, 1)

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

