// CURRENTLY IN USE

// Declaration
const express = require('express');
const router = express.Router();
const mysql = require ('mysql');

// Create table via MYSQL Terminal
// https://www.w3schools.com/mysql/mysql_create_db.asp
// https://www.w3schools.com/MySQL/mysql_create_table.asp 
// https://www.w3schools.com/mysql/mysql_datatypes.asp 
// CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, 
//                     fname VARCHAR(255) NOT NULL, 
//                     lname VARCHAR(255) NOT NULL, 
//                     phone VARCHAR(255), 
//                     date DATETIME DEFAULT CURRENT_TIMESTAMP, 
//                     PRIMARY KEY (id)
//                 );

const conn = mysql.createConnection({
    host: "127.0.0.1",                      // DB Address
    user: "root",                           // DB User
    password: "Anoluck03",                  // DB Password
    database: "azl_db"
});


router.post('/', (req, res) => {

    // console.log(req.body);  // Output Form Data

    let sql = `INSERT INTO persons (FirstName, 
                                    LastName, 
                                    PhoneNumber,
                                    Email,
                                    Birthday) 

                    VALUES ('${req.body.firstName}', 
                            '${req.body.lastName}',
                            '${req.body.phoneNumber}',
                            '${req.body.email}',
                            '${req.body.birthday}')`;




        conn.query(sql, (err, result) => {

            if (err) throw err; 

            console.log("1 record inserted");

     });
    
    
    res.redirect('/thankyou_redirect.html');
    res.sendStatus(200);    // Send browser acknowlegde 


});

module.exports = router;