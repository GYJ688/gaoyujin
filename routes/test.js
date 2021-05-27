var mysql      = require('mysql');
var connection = mysql.createConnection({
  post     :'183.217.30.30',
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'furniture'
});
 
connection.connect();

var sql = 'insert into register(name,password) values(?,?) ';

connection.query(sql, function (error, results, fields) {
    if(error){
        console.log(error)
        throw error
    }
    console.log(results)
    });

connection.end();
