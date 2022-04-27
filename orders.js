const orders = [];
function addOrder(){
    const name = process.argv.slice(2);

    if (!name || name.length ===0){
        throw ('Error: name is empty');
    }

    orders.push({
        name: name,
        id:orders.length,
    });
    orders.forEach(order=> {
        console.log("ok. name: ${orders.name} was created");
    })
}

addOrder();