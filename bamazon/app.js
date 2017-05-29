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

connection.connect(function (err) {
    if (err) throw err;
    onStart();

});

var onStart = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log ("");
        for (var i = 0; i < res.length; i++) {
            console.log("item #" + res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price );
        }
        console.log("-----------------------------------");
    });
    question();

}
var question = function () {
    inquirer.prompt([
        {
            name: "item_id",
            type: "input",
            message: "Enter the item # of the product that you would wish to buy: ",
        },
        {
            name: "stock_quantity",
            type: "input",
            message: "Specify quantity: "
        }
    ]).then(function (answer) {
        var query = "SELECT stock_quantity, price, product_name FROM products WHERE ?";
        connection.query(query, { item_id: answer.item_id }, function (err, res) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].stock_quantity - answer.stock_quantity > 0) {
                    var newQty = res[i].stock_quantity - answer.stock_quantity;
                    console.log(newQty);
                    var total = res[i].price * answer.stock_quantity;
                    console.log("Your order for " + answer.stock_quantity + " x " + res[i].product_name + "(s) comes to $" + total + "\n Thank you for your order!");
                    connection.query("UPDATE products SET ? WHERE ?", [{
                        stock_quantity: newQty
                    }, {
                        item_id: answer.item_id
                    }], function (err,res) {
                        if (err) throw err
                        
                        
                    }
                  
                    )
                    
                    onStart();

                 
                }
                else if (res[i].stock_quantity >0){
                    console.log("There are only " + res[i]. stock_quantity + "piece(s) left in stock.")
                    onStart();
                }
                else if (res[i].stock_quantity = 0) {
                    console.log("Sorry, we're out of stock!");
                    onStart();

                }
            }
        });
    });
}