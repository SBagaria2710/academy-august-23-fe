// Hoisting with VAR

var foo = 10; // Declaring a variable, then initializing it.

var foo; // Declaration
foo = 10; // Assignment

// ----------------

// Hoisting with let/const

if (true) {
    // Start of foo's TDZ/Start of Enclosing Scope
    let bar = 10;
    console.log(bar);

    console.log(foo); // ReferenceError because we're in the TDZ

    let foo = 20; // End of the foo's TDZ/End of the enclosing scope
}

// Function Hoisting
baz(); // baz
greet();
doSomething();
sayGoodBye();

function baz() {
    console.log("baz");
}
function greet() {}
function doSomething() {}
function sayGoodBye() {}
