// DATABASE FOR AZL FORM **NEED TO ADD ID-PRIMARY KEY

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Anoluck03"
});

con.connect(function(err) {
	
  if (err) throw err;
  
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});