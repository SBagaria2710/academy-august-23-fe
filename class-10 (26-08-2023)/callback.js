function displayResult(result, cb) {
    cb(result);
}

function displayResultWithMessage(result) {
    console.log("Answer to your equation was: ", result);
}



function calculateSum(a, b, cb) {
    let sum = a + b;
    cb(sum, displayResultWithMessage);
}

calculateSum(1, 2, displayResult);
