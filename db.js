const mysql= require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'artab'
  });

module.exports=connection;
