let myPromise = new Promise(function(resolve, reject) {
  const a = 4;
  const b = 5;

  if (a === b) resolve("Yes, both numbers are equal");
  else reject("No, both numbers are not equal");
});

const onFulfilled = (data) => {
  console.log(data);
}

const onRejected = (reason) => {
  console.log(reason);
}

myPromise.then(onFulfilled);
myPromise.catch(onRejected);

myPromise.finally(() => {
  console.log("Finally, I am settled");
});