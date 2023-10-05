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
let f1p = fs.promises.readFile('./files/f1.txt');
let f2p = fs.promises.readFile('./files/f2.txt');
let f3p = fs.promises.readFile('./files/f3.txt');

function onFulfilled(data) {
  console.log("this is data => " + data);
}

function onRejected(reason) {
  console.log(reason);
}

f1p.then(onFulfilled);
f2p.then(onFulfilled);
f3p.then(onFulfilled);

f1p.catch(onRejected);
f2p.catch(onRejected);
f3p.catch(onRejected);