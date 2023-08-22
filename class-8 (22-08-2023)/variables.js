a = "Shashwat";
console.log(typeof a); // String

a = 10;
console.log(typeof a); // Number

a = true;
console.log(typeof a); // Boolean

a = {};
console.log(typeof a); // Object

// Var is functional scope
// Let/Const are block scope

var a = 10;
if (true) {
 var a = 20;
 console.log(a); // 20
}
console.log(a); // 10