function placeOrder(drink) {
  return new Promise(function(resolve, reject) {
    if (drink.toLowerCase() === "coffee") {
      resolve("Order for coffee placed");
    } else {
      reject("Order cannot be placed");
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise(function(resolve) {
    setTimeout(resolve, 500, `${orderPlaced} and served`);
  });
}

placeOrder("coffee").then(function(orderStatus) {
  console.log(orderStatus);
  return orderStatus;
}).then(function(orderStatus) {
  let processedOrder = processOrder(orderStatus);
  return processedOrder;
}).then(function(processedOrder) {
  console.log(processedOrder)
});