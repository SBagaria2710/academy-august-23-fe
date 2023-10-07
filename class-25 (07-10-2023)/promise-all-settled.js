const foo = Promise.resolve("pi");
const bar = 3.14;
const baz = new Promise(function (resolve, reject) {
  setTimeout(reject, 2000, "Maths");
});

let returedPromise = Promise.allSettled([foo, baz, bar]);

console.log(returedPromise);

returedPromise
  .then(function (arr) {
    console.log(arr);
    // Output for "arr" 👇🏼
    // [
    //   { status: 'fulfilled', value: 'pi' },
    //   { status: 'rejected', reason: 'Maths' },
    //   { status: 'fulfilled', value: 3.14 }
    // ]
  })
  .catch(function (err) {
    console.log("Error =>", err);
  });
