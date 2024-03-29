var express = require("express");
var exphbs = require("express-handlebars");
var orm = require("./config/orm.js");

var app = express();
var PORT = process.env.PORT || 8082;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //read json obj, can now use res.json

app.engine("handlebars", exphbs({ defaultLayout: "main" })); //defines this engine and tells us what structure we're using
app.set("view engine", "handlebars"); //can now use res.render

// Use Handlebars to render the main index.html page with the burgers in it.
app.get("/", function (req, res) {
    orm.displayAllBurgers(function (response) {
        res.render("index", { burgers: response }) //returns back html data
    });
});

app.post("/api/burgers/", function (req, res) {
    orm.addBurger(req.body.burgerName, function (response) {
        res.json({ id: response.insertId });
    });
});

app.delete("/api/burgers/:id", function (req, res) {
    orm.deleteBurger(req.params.id, function (response) {
        console.log(response);
        res.send("over")
    });
});

app.put("/api/burgers/:id", function (req, res) {
    orm.updateBurger(req.params.id, function (response) {
        console.log("You ate da burger!");
        res.send("over")
    })
})

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});