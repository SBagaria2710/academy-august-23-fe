// Object.prototype.taste = "Pipeapple"

// let obj = {};
// console.log(obj.taste); // ??

let foo = {
  brainy: true,
  bar: function() {
    console.log("Hello");
  }
};

let human = {
  __proto__: foo.bar(),
  teeth: 32
};

let shashwat = {
  __proto__: human,
  age: 26,
  teeth: 31
}

console.log(shashwat.teeth);

// console.log(human.age); // undefined
// console.log(shashwat.age); // 26

// console.log(human.teeth); // 32
// console.log(shashwat.teeth); // 32 31

// console.log(shashwat.tail); // undefined
// console.log(human.tail); // undefined