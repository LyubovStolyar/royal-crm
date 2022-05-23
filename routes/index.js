const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', function(req, res, next) {
  res.send('this is the home page. use /customers /products or /orders.');
});

router.get('/chat', function (req, res, next) {
  const filePath = path.join(__dirname, '../client', 'chat.html');
  res.sendFile(filePath);
});


module.exports = router;