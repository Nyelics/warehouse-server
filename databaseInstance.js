const mysql = require("mysql");
require("dotenv").config();
// Export the connection object

/**
 * LIVE DATABASE SERVER
 */
// const host = process.env.LIVE_HOST;
// const db = process.env.LIVE_DATABASE;
// const username = process.env.LIVE_USERNAME;
// const password = process.env.LIVE_PASSWORD;

/**
 * LOCAL HOST
 */

const host = process.env.LOCAL_HOST;
const db = process.env.LOCAL_DATABASE;
const username = process.env.LOCAL_USERNAME;
const password = process.env.LOCAL_PASSWORD;

exports.con = mysql.createConnection({
  host: host,
  user: username,
  password: password,
  database: db,
});
