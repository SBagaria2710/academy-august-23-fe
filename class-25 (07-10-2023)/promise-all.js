const foo = Promise.resolve("pi");
const bar = 3.14;
const baz = new Promise(function (resolve, reject) {
  setTimeout(reject, 2000, "Maths");
});

let returedPromise = Promise.all([foo, baz, bar]);

console.log(returedPromise);

returedPromise
  .then(function (arr) {
    console.log(arr);
  })
  .catch(function (err) {
    console.log("Error =>", err);
  });
