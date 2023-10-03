const fs = require("fs"); // IGNORE FOR NOW
const { after } = require("node:test");

// console.log("Before");

// let data1 = fs.readFileSync('./files/f1.txt');
// let data2 = fs.readFileSync('./files/f2.txt');
// let data3 = fs.readFileSync('./files/f3.txt');

// console.log("Data from File 1 =>" + data1);
// console.log("Data from File 2 =>" + data2);
// console.log("Data from File 3 =>" + data3);

// console.log("After");

// -------- ASYNC FILE READING ----------
console.log("Before");

fs.readFile('./files/f1.txt', readFileCallback1);
function readFileCallback1(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("File 1 data =>");
  }
}

fs.readFile('./files/f2.txt', readFileCallback2);
function readFileCallback2(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("File 2 data =>");
  }
}

fs.readFile('./files/f3.txt', readFileCallback3);
function readFileCallback3(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("File 3 data =>");
  }
}

console.log("After");


// OUTPUT ORDER

// Before
// After
// File 2 data => data
// File 3 data => data
// File 1 data => data
