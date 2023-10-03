const hello1 = "hello1";
const hello2 = "hello2";

console.log(hello1);

setTimeout(function() {
  console.log("This is our Async Function 2");
}, 2000);

setTimeout(function() {
  console.log("This is our Async Function 1");
}, 1000);

console.log(hello2);