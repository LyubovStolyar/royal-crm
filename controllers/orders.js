const { redirect } = require("express/lib/response");
const database = require("./database");

module.exports = {
    addOrder: async function (customer_id, product_id, price, quantity) {
        const sql =
          "INSERT INTO orders (customer_id, product_id, price, quantity)" + "VALUES(?,?,?);";
      },
      orderList: async function (req, res, next) {
          
        const sql = "SELECT * FROM orders;";
    
        try {
          const result = await database.query(sql);
          res.send(result[0]);
        } catch (err) {
          console.log(err);
        }
      },
      // todo: search product by name
      exportOrder: async function () {
        const sql =
          "SELECT customer_id, product_id, price, quantity FROM orders ORDER BY name ASC;";
      },
    
      // todo: edit product details
      editOrder: async function () {
        const sql = 
        "UPDATE * FROM orders ORDER BY name ASC;";
      },
    
      // todo: delete product
      deleteOrder: async function () {
        const sql = 
        "DROP * FROM orders ORDER;";
      },
    
      // todo: search product by name
      searchOrder: async function () {
        // const sql = SELECT WHERE...
      },
    
      // todo: sort products by name...
      sortOrder: async function () {
          "SELECT * FROM `orders`"
      }
};