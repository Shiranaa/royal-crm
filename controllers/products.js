module.exports = {
  products: [],
const mysql = require('mysql2');
const config = require('../config/dev');

const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
});

  addProduct: function() {
      const name = process.argv.slice(2);

module.exports = {
  addProduct: function (name, desc, price) {
      if (!name || name.length === 0) {
          throw ('ERROR: name is empty');
      }

      orders.push({
          name: name,
          id: this.products.length,
      });        

      pool.getConnection(function (connErr, connection) {
          if (connErr) throw connErr; // not connected!

          const sql = "INSERT INTO products(name, description, price)" +
              " VALUES(?,?,?);";

          connection.query(
              sql,
              [name, desc, price],
              function (sqlErr, result, fields) {
                  if (sqlErr) throw sqlErr;

                  console.log(result);
              });
      });
  },

  productsList: function() {
      this.products.forEach(product => {
          console.log(`ok. name: ${product.name} was created.`);
      })
  productsList: function (req, res) {
      pool.getConnection(function (connErr, connection) {
          if (connErr) throw connErr; // not connected!

          const sql = "SELECT * FROM products";

          connection.query(sql, function (sqlErr, result, fields) {
              if (sqlErr) throw sqlErr;

              res.send(result);
          });
      });
  }
}
