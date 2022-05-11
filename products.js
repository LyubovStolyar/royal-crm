const database = require('./database');

module.exports = {
    addProduct: function (name, desc, price){
        if (!name || name.length ===0){
            throw ('Error: name is empty');
        }

pool.getConnection(function (connErr, connection){
    if(connErr) throw connErr //not connected

    const sql = "INSERT INTO products(name, description, price)" + 
    "VALUES(?,?,?);";

connection.query(
    sql,
    [name, desc, price],
    function (cqlErr, result,fields) {
        if (sqlErr) throw sqlErr;

        console.log(result);
    });
});

    },


productList: function (req,res) {
    pool.getConnection(function (connErr, connection){
        if (connErr) throw connErr;

        const sql = "SELECT * FROM products";

        connection.query(sql, function (sqlErr, result, fields){
            if (sqlErr) throw sqlErr;

            res.send(result);
        });
    });
}}