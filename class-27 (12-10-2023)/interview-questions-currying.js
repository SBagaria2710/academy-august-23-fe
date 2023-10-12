// Question 1: Multiply(2)(3)(3) => 18

function Multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    }
  }
}

console.log(Multiply(2)(3)(2));

// Question 2: cube of a number using currying. cube(10)()();

function cube(a) {
  return function() {
    return function() {
      console.log(a * a * a);
    }
  }
}

console.log(cube(10)()());

// Question 3: 
// calculate("sum")(12)(2) => 14
// calculate("subtract")(12)(2) => 10
// calculate("multiple")(12)(2) => 24
// calculate("divide")(12)(2) => 6

function calculate(operation) {
  return function(a) {
    return function(b) {
      if (operation === "sum") return a+b;
      else if (operation === "subtract") return a-b;
      else if (operation === "multiple") return a*b;
      else if (operation === "divide") return a/b;
      else return "Invalid Operation";
    }
  }
}

console.log(calculate("sum")(12)(2));
console.log(calculate("subtract")(12)(2));
console.log(calculate("multiple")(12)(2));
console.log(calculate("divide")(12)(2));

// Question 4: Infinite Currying
// add(2)(3)(4)...(100)()

function add(a) {
  return function(b) {
    if (b) return add(a+b);
    return a;
  }
}

console.log(add(1)(2)(3)(4)(100)());