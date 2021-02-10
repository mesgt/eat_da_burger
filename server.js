var express = require("express");
var exphbs = require("express-handlebars");
var orm = require("./config/orm.js");

var app = express();
var PORT = process.env.PORT || 8082;

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //read json obj, can now use res.json

app.engine("handlebars", exphbs({ defaultLayout: "main" })); //defines this engine and tells us what structure we're using
app.set("view engine", "handlebars"); //can now use res.render

// Use Handlebars to render the main index.html page with the burgers in it.
app.get("/", function (req, res) {
    orm.displayAllBurgers(function(response) {
        console.log(response);
        res.render("index", {burgers:response})
    })
});

// ADD a new burger
// app.post("/api/burgers", function (req, res) {
//     console.log(req.body)
//     connection.query("INSERT INTO burgers (burger_name) VALUES ??", [req.body.], function (err, result) {
//         if (err) {
//             return res.status(500).end();
//         }

//         // Send back the ID of the new plan
//         res.json({ id: result.insertId });
//         console.log({ id: result.insertId });
//     });
// });



app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });