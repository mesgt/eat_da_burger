var connection = require("./connection.js");


var orm = { //establishes a relationship between two tables, but we only have 1 table.
  
  addBurger: function(burgerName) {
  var queryString = "INSERT INTO burgers (burger_name) VALUES ?";
  connection.query(queryString, [burgerName], function (err, result) { //check on the query extension being used.
    if (err) throw err;
    console.log(result)
  });
  },

  displayAllBurgers: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;
      // console.log(result);
      cb(result);
    });
  },
}

module.exports = orm;
