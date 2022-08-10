const express = require("express");
const router = express.Router();
const cm = require("../controllers/customers");
const fileMgmt = require('../shared/fileMgmt');

/* customers */
router.get('/', function (req, res, next) {
  const filePath = fileMgmt.getHtmlFilePath("customers-home.html");
  res.sendFile(filePath);
});

router.get('/details/:id', function(req, res, next){
  const filePath = fileMgmt.getHtmlFilePath('customer-details.html');
})


router.get   ("/", cm.customersList);
router.get   ('/find', cm.findCustomer);
router.get   ("/export", cm.exportCustomers);
// todo: edit/update customer
// router.get   ("/detailes", cm.viewCustomerDetails);
router.post  ("/", cm.addCustomer);
router.patch ("/", cm.updateCustomer);
// todo: view more details of a customer
// router.delete("/", cm.deleteCustomer);
// todo: export all customers to file

module.exports = router;