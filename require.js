const c = require('./customers');
const p = require('./products');
const o = require('./orders');

c.addCustomer();
c.customersList();

p.addProduct();
p.productList();

p.addOrder();
p.orderList();
