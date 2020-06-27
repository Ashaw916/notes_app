const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "notes_db",
});

// create connection to mysql
connection.connect();

module.exports = connection;
