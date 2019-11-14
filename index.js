var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "1234567"
});

con.connect(function(err) {
  if (err) throw err;
});
