const database = require("./database");
const joi = require("joi");
const fs = require("fs");
const path = require("path");

module.exports = {
  addProduct: async function (req, res, next) {
    const reqBody = req.body;

    const schema = joi.object({
      name: joi.string().required().min(2).max(200),
      description: joi.string().required().min(2).max(300),
      price: joi.number().required(),
    });

    const { error, value } = schema.validate(reqBody);

    if (error) {
      res.send(`error adding products: ${error}`);
      return;
    }

    const sql =
      "INSERT INTO products(name, description, price)" + " VALUES(?,?,?);";

    try {
      const result = await database.query(
        sql, [
        reqBody.name,
        reqBody.description,
        reqBody.price,
      ]
      );
    } catch (err) {
      console.log(err);
      return;
    }

    res.send(`${reqBody.name} added successfully`);
  },

  productList: async function (req, res, next) {
    const sql = "SELECT * FROM products ORDER BY name ASC;";

    try {
      // const connection = await database.getConnection();
      const result = await database.query(sql); // [rows, fields]
      res.send(result[0]);
    } catch (err) {
      console.log(err);
    }
  },
  // todo: search product by name
  exportProducts: async function (req, res, next) {
    const sql =
      "SELECT name, description, price FROM products ORDER BY name ASC;";
   
    try {
      const result = await database.query(sql);

      const now = new Date().getTime(); // moment.js
      const filePath = path.join(__dirname, "../files", `products-${now}.txt`);
      const stream = fs.createWriteStream(filePath);

      stream.on("open", function () {
        stream.write(JSON.stringify(result[0]));
        stream.end();
      });

      stream.on("finish", function () {
        res.send(`Success. File at: ${filePath}`);
      });
    } catch (err) {
      throw err;
    }
  },

  editProduct: async function (req, res, next) {
    // const sql = UPDATE
    res.send("todo update products");
  },

  // todo: delete product
  deleteProduct: async function (req, res, next) {
    // const sql = DROP

    const schema = joi.object({
      id: joi.number().required()
    })
   
const { error, value } = schema.validate(req.params);

if (error) {
  res.status(400).send('error delete product');
  console.log(error.details[0].message);
  return;
}

const sql = 'DELETE FROM products WHERE id=?';

try {
  const result = await database.query(sql, [value.id]);
  res.json( {
   id: value.id
});
}
catch (err) {
  res.status(400).send('error delete product');
  console.log(error.details[0].message);
}
 
  },

  // todo: search product by name
  searchProducts: async function (req, res, next) {
    // const sql = SELECT WHERE...
    res.send("todo search products");
  },
};
