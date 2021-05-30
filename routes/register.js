var express = require('express');
var router = express.Router();
let User  = require('./bean/login');
var mysql  = require('mysql');
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'root',
  post     : '3306',
  password : '123456',
  database : 'furniture'
});

router.get('/', function(req, res, next) {
  res.render('register');
});

// connection.connect();
router.post('/register',(req,res) =>{
  var sql2 = 'insert into register(name,password,pass1,other_name,hobby) values(?,?,?,?,?) ';
  var mysqlPramry2 = [
    req.body.name,
    req.body.pass,
    req.body.pass1,
    req.body.other_name,
    req.body.hobby
  ];
  connection.query(sql2,mysqlPramry2, function (error, results, fields) {
    if(error){
      console.log(error)
      throw error
  }else{
      res.redirect('/');
      console.log('register success');
      console.log(results)
  }
  });
})

// connection.end();


module.exports = router;