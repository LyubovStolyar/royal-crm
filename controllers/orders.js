module.exports = {
orders: [],

addOrder: function () {
    const name = process.argv.slice(2);

    if (!name || name.length ===0){
        throw ('Error: name is empty');
    }

    this.orders.push({
        name: name,
        id: this.orders.length,
    });
   },

orderslist: function(){
    this.orders.forEach (order => {
        console.log(`ok. name: ${orders.name} was created`);
    })
}
}