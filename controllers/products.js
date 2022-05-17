const { redirect } = require("express/lib/response");
const database = require("./database");

module.exports = {
  addProduct: async function (name, desc, price) {
    const sql =
      "INSERT INTO products (name, description, price)" + "VALUES(?,?,?);";
  },
  productList: async function (req, res, next) {
      
    const sql = "SELECT * FROM products ORDER BY name ASC;";

    try {
      const result = await database.query(sql);
      res.send(result[0]);
    } catch (err) {
      console.lo.
      g(err);
    }
  },
  // todo: search product by name
  exportProducts: async function () {
    const sql =
      "SELECT name,description,price FROM products ORDER BY name ASC;";
  },

  // todo: edit product details
  editProduct: async function () {
    // const sql = UPDATE
  },

  // todo: delete product
  deleteProduct: async function () {
    // const sql = DROP
  },

  // todo: search product by name
  searchProducts: async function () {
    // const sql = SELECT WHERE...
  },

  // todo: sort products by name...
};
