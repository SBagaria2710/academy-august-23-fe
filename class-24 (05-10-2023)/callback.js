// Callback
// function asyncSumCalculator(a, b, cb) {
//   setTimeout(() => {
//     cb(a + b);
//   }, 1000);
// }

// asyncSumCalculator(2, 3, function(sum) {
//   console.log(sum);
// })

// Promise
function asyncSumCalculator(a, b) {
  return new Promise(function(resolve, _) {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

asyncSumCalculator(2, 3).then(sum => console.log(sum));