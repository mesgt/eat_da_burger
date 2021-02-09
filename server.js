var mysql = require("mysql");
var express = require("express");
var exphbs = require("express-handlebars");
var orm = require("./config/orm.js");


// Use Handlebars to render the main index.html page with the burgers in it.
// app.get("/", function (req, res) {
//     connection.query("SELECT * FROM burgers;", function (err, data) {
//         if (err) {
//             return res.status(500).end();
//         }
//         res.render("index", data); //is this data a string b/c user input?
//     });
// });

// ADD a new burger
// app.post("/api/burgers", function (req, res) {
//     console.log(req.body)
    // connection.query("INSERT INTO burgers (burger_name) VALUES ??", [req.body.], function (err, result) {
    //     if (err) {
    //         return res.status(500).end();
    //     }

        // Send back the ID of the new plan
        // res.json({ id: result.insertId });
        // console.log({ id: result.insertId });
    // });
// });



app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });