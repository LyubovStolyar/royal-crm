const database = require('./database');

module.exports = {
  
  addCustomer: function (name, phone, email, country_id) {
    
    if (!name || name.length === 0) {
      throw "ERROR: name is empty";
    }

  database.pool.getConnection(function (connErr, connection) {
      if (connErr) throw connErr; //not connected!

      const sql = "INSERT INTO customers( name, phone, email, country_id)" +
      "VALUES ('"+ name +"', '"+ phone +"', '"+ email +"','"+ country_id +"');";
    
  connection.query(
        sql, 
        [name, phone, email, country_id],
        function (sqlErr, result, fields) {
        if (sqlErr) throw sqlErr;

        console.log(fields);
        console.log(result);
      });
    })
  },

    customersList: async function (req, res){
      try{
      const sql = "SELECT * FROM customers";
      const connection = await database.getConnection();
      const result = await database.runQuery (connection, sql);
      res.send(result);
} 
catch (err){
  console.log(err);
}


//       database.getConnection()
//       .then(connection => database.runQuery(connection, sql))
// .then(result => res.send(result))
// .catch(err => console.log(err));
  }

  
};