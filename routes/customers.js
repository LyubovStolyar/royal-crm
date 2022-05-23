const express = require("express");
const router = express.Router();
const cm = require("../controllers/customers");
const path = require("path");

/* customers */
router.get('/', function (req, res, next) {
  const filePath = path.join(__dirname, "../client", "customers-home.html");
  res.sendFile(filePath);
});

router.get   ("/", cm.customersList);
router.get   ("/export", cm.exportCustomers);
// todo: edit/update customer
router.get   ("/detailes", cm.viewCustomerDetails);
router.post  ("/", cm.addCustomer);
router.patch ("/", cm.updateCustomer);
// todo: view more details of a customer
router.delete("/", cm.deleteCustomer);
// todo: export all customers to file

module.exports = router;