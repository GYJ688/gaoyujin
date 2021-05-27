var express = require('express');
var router = express.Router();

router.get('/',(req,res,next) =>{
    res.render('furniture.html');
})

module.exports = router;