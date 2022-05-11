const express = require('express');
const router = express.Router();
const customersModule = require('../customers');
const productsModule = require('../controllers/products');


router.get('/', function(req, res, next){
    res.send('hello again');
    customersModule.addCustomer('Lola', '053222222', 'hi@gmail.com', 1);
    customersModule.customersList(req, res);
});

router.get('/products', function (req, res, next) {
    productsModule.addProduct('Good Product', 'A very good product', 50);
    productsModule.productsList(req, res);
  });
  
  module.exports = router;

module.exports = router;