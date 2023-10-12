let arr = [1, 2, 3, 4, 5];

// --------- MAP ---------
// myMap
Array.prototype.myMap = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

const multipledByTwo = arr.myMap(function (val) {
  return val * 2;
});
// console.log(multipledByTwo);

// --------- FILTER ---------
// myFilter
Array.prototype.myFilter = function (cb) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

const filterEvenNumbers = arr.myFilter(function (val) {
  return val % 2 === 0;
});
// console.log(filterEvenNumbers);

// --------- REDUCE ---------
// myReduce
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }

  return acc;
};

const sum = arr.myReduce(function (acc, val) {
  return acc + val;
}, 0);

// console.log(sum);