// REFERENCE TYPE EXAMPLE

let arr1 = [1,2,3,4,5];
let arr2 = arr1;

console.log("Before =>", arr1, arr2);

arr2.push(6);
console.log("After =>", arr1, arr2);

// ---------------

// PRIMITIVE TYPE EXAMPLE
let foo = 10;
let bar = foo;

console.log("Before =>", foo, bar);

// foo++;
console.log("After =>", foo++, bar);
