const express = require('express');
const router = express.Router();
const mwAuth = require('../middleware/auth');
const auth = require('../controllers/auth');
const fileMgmt = require('../shared/fileMgmt');
// const PoolCluster = require('mysql2/typings/mysql/lib/PoolCluster');

router.options('*', function(req, res,next) {
  res.send();
});


router.get('/signin', function(req, res, next){
  const filePath = fileMgmt.getHtmlFilePath('login.html');
  res.sendFile(filePath);
})

router.post('/register', auth.registerUser);

router.post('/login', auth.login);

router.get('/logout', mwAuth, function(res, req, next){
  return res
  .clearCookie('access_token')
  .status(200)
  .send('Successfully logget out');
})

router.get('/',  mwAuth, function(req, res, next) {
  res.send('this is the home page. use /customers /products or /orders.');
});

router.get('/chat',  mwAuth, function (req, res, next) {
  const filePath = fileMgmt.getHtmlFilePath('chat.html');
  res.sendFile(filePath);
});


module.exports = router;