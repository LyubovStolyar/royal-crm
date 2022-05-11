const mysql = require("mysql2");
const config = require("../config/dev");
const { connectionLimit } = require("./config/dev");

const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_user,
  password: config.DB_PASSWORD,
  database: "royal_crm",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
});

function getConnection(){
    return new Promise (function(resolve, reject){
        pool.getConnection(function (connErr, connection){
            if (connErr) reject (connErr)
            else resolve (connection)
        })
    });
}

function runQuery (){
return new Promise (function(resolve, reject){
    connection.query(sql, function(sqlErr, result, fields){
        if(sqlErr) reject (sqlErr)
        else resolve (result)
        });
});
    
}
module.exports = {
pool,
getConnection,
runQuery,

}