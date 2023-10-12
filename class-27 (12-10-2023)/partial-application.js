function sum(a) {
  return function(b, c) {
    return a + b + c;
  }
}

const addByTwo = sum(2);
console.log(addByTwo(10, 10));