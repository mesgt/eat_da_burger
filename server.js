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
    });
});

app.post("/api/burgers", function(req, res) {
    orm.addBurger(function(response) {
        console.log(response);
        res.json({id:response.insertId});
    });
});

app.delete("/api/burgers", function(req, res) {
    orm.deleteBurger(function(response) {
        console.log(response);
        if(response.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

app.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    orm.updateBurger({
        burgerName: 
    })

    if(response.body.consumed === "0") {
        orm.updateBurger(function(response) {
        console.log(response);
        })
    }
})


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });