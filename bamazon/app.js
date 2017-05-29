var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  onStart(question);
 
});

var onStart = function(question){
    connection.query("SELECT * FROM products", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price + " | " + res[i].stock_quantity);
  }
  console.log("-----------------------------------");
});
question();

}
var question = function() {

  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: ["Find songs by artist", "Find all artists who appear more than once",
      "Find data within a specific range", "Search for a specific song"]
  }).then(function() {

  });
}