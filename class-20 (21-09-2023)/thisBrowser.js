// 1st Scenario
// console.log(this); // window object

// 2nd Scenario - Inside a function
function foo() {
  console.log(this);
}

// foo(); // window object

// 3rd Scenario - "this" is inside the function inside an object
let obj = {
  name: "Shashwat",
  age: 26,
  foo: function() {
    console.log(this);
  }
};

// obj.foo(); // obj


// 4th Scenario - "this" keyword from a function that is inside a function inside an object
let obj2 = {
  name: "Shashwat",
  age: 26,
  testFunction: function foo() {
    console.log("Outside =>", this); // obj2
    function bar() {
      console.log("Inside =>", this); // Window Object
    }

    bar();
  }
};

// obj2.testFunction(); // window object
