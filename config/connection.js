var mysql = require("mysql");

var connection; 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "x9czzi7n8xxgy0hd",
  password: "rjt9gjr6x0iqrcxq",
  database: "lsbba3gnd73kfkua"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;
};
