const express = require('express');
const router = express.Router();
const pm = require('../controllers/products');
const fileMgmt = require('../shared/fileMgmt');

router.get('/home', function (req, res, next) {
  const filePath = fileMgmt.getHtmlFilePath('products-home.html');
  res.sendFile(filePath);
  });
  
  router.get('/', pm.productList);
  router.post('/', pm.addProduct);
  router.get('/export', pm.exportProducts);


  module.exports = router;