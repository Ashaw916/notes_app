const mysql = require("mysql");

// JAWSDB_URL
let connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
    mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "notes_db",
      });
}


// create connection to mysql
connection.connect();

module.exports = connection;
