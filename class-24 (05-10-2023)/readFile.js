const fs = require("fs");

// Callback
// fs.readFile('./files/f1.txt', cb);
// function cb(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("this is File 1 => " + data);
//   }
// }

// Promise
function onRejected(reason) {
  console.log(reason);
}

function onFulfilledP1(data) {
  console.log("this is data file 1 => " + data);
  let f2p = fs.promises.readFile('./files/f2.txt');
  return f2p;
}

function onFulfilledP2(data) {
  console.log("this is data file 2 => " + data);
  let f3p = fs.promises.readFile('./files/f3.txt');
  return f3p;
}

function onFulfilledP3(data) {
  console.log("this is data file 3 => " + data);
  return new Promise(function(resolve) {
    resolve("Hello Dibyaranjan!");
  });
}

function lastTask(txt) {
  console.log(txt);
}

let f1p = fs.promises.readFile('./files/f1.txt');
f1p
.then(onFulfilledP1)
.then(onFulfilledP2)
.then(onFulfilledP3)
.catch(onRejected)
.then(lastTask);