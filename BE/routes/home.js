const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const express = require('express');
const router = express.Router()

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/api/convert/', urlencodedParser, function(req, res){
    const data = '33'
    console.log(req.body)
    const num = Object.keys(req.body)
    res.send(num)
  });
  
module.exports = router;