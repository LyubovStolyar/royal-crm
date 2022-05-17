const express = require('express');
const router = express.Router();
const cm = require('../controllers/customers');
const pm = require('../controllers/products');
const productsModule = require('../controllers/products');
const ordersModule = require('../controllers/orders');


router.get('/', function(req, res, next) {
  res.send('this is the home page. use /customers /products or /orders.');
});

/* customers */
router.get('/cusomters-home', function (req, res, next) {
  const filePath = path.join(__dirname, '../client', 'customers-home.html');
  res.sendFile(filePath);
})

router.get('/customers', cm.customersList);
router.post('/customers', cm.addCustomer);

// todo: delete customer
router.delete('/customers', cm.deleteCustomer);

// todo: export all customers to file
router.get('/customers/export', cm.exportCustomers);

// todo: edit/update customer
router.patch('/customers', cm.updateCustomer);

// todo: view more details of a customer
router.get('/customer-detailes', cm.viewCustomerDetails);


/* products */
router.get('/products', productsModule.productList);

/* orders */
router.get('/orders', ordersModule.orderList);

module.exports = router;