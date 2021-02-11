var connection = require("./connection.js");


var orm = {

    displayAllBurgers: function(cb) { //WORKS
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;
      // console.log(result);
      cb(result);
    });
  },

  addBurger: function(burgerName, cb) {
  var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
  // console.log("random");
  connection.query(queryString, burgerName, function (err, result) { //check on the query extension being used.
    if (err) throw err;
    cb(result);
    console.log(result)
  });
  },

  // deleteBurger: function(id, cb) {
  //   connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
  //     if (err) throw err;
  //     // console.log(result);
  //     cb(result);
  //   });
  // },

  // updateBurger: function(id, cb) {
  //   connection.query("UPDATE burgers SET consumed = 1 WHERE id = ?", [req.params.id], function(req, response) {
  //     if (err) throw err;
  //     // console.log(result);
  //     cb(result);
  //   })
  // }
}

module.exports = orm;
