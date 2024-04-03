const mysql = require("mysql");

// Export the connection object
exports.con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "warehouse",
});
