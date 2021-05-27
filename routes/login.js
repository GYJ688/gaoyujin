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
  res.render('login.html');
});

// connection.connect();
router.post('/login',(req,res) =>{
  var sql1 = 'insert into login(name,password) values(?,?) ';
  var mysqlPramry1 = [
    req.body.name,
    req.body.pass
  ];
  connection.query(sql1,mysqlPramry1, function (error, results, fields) {
    if(error){
      console.log(error)
      throw error
  }else{
      res.redirect('/furniture');
      console.log('login success');
      console.log(results)
  }
  });
})

// connection.end();
module.exports = router;