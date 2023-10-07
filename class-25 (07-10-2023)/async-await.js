function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink.toLowerCase() === "coffee") {
      resolve("Order for coffee placed");
    } else {
      reject("Order cannot be placed");
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 500, `${orderPlaced} and served`);
  });
}

function generateBill(processedOrder) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 500, `${processedOrder} and bill generated for Rs299`);
  });
}

async function serveCoffee() {
  try {
    let orderStatus = await placeOrder("coffee");
    console.log(orderStatus);
    let processedOrder = await processOrder(orderStatus);
    console.log(processedOrder);
    let generatedBill = await generateBill(processedOrder);
    console.log(generatedBill);
  } catch(error) {
    console.log("Error => ", error);
  }
}

serveCoffee();