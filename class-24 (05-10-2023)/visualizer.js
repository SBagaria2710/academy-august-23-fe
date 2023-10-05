function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { 
  setTimeout(() => {
    console.log('C')
  }, 2000);
}
function logD() { console.log('D') }

// Click the "RUN" button to learn how this works!
logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();