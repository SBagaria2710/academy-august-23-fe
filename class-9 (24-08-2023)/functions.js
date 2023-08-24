// SYNTAX
function nameOfTheFunction() {
    // Do Something
};

// ------------

function sayGoodBye(name) { // Here, name is the parameter
    console.log("GoodBye,", name);
}

function greet(name) {
    console.log("Good Evening, ", name);
};

greet("Shashwat"); // Here, "Shashwat" is the argument

// -------------

// Function Declaration
function sum(a, b) {
    console.log(a + b);
};

// sum(10,20);

// Function Expression
var sum = function(a, b) {
    console.log(a + b);
}

sum(10, 20);

// Arrow Functions
var sum = (a, b) => {
    let val = a + b;
    return val;
}

// Even shorter Arrow Function
var sum = (a, b) => (a + b);

// console.log("Sum of a & b is :", sum(10, 20));
const result = sum(10, 20);
console.log(result);


