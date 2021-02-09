var connection = require("./connection.js");


var orm = { //establishes a relationship between two tables, but we only have 1 table.
  
  addBurger: function(burger_name) {
  var queryString = "INSERT INTO burgers (burger_name) VALUES ??";
  connection.query(queryString, [req.body.burger_name], function (err, result) { //check on the query extension being used.
    if (err) throw err;
    console.log(req)
  });
  },

  displayBurger: function(burger_name) {
    var queryString = "SELECT * FROM burgers WHERE ??";
    connection.query(queryString, [burger_name], function(err, result) {
      if (err) throw err;
      console.log(result);
      //if the result has a consumed value of true, it will be displayed in list "devoured"
      //else if the value is false, it will be displayed in list "!devoured"
    });
  },
}

module.exports = orm;
