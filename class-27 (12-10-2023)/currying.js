// Currying

// function fn(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

// let returnedFn = fn(10); // Function
// let nextReturnedFn = returnedFn(20); // Fucntion
// console.log(nextReturnedFn(30)); // 60

// console.log(fn(10)(20)(30)); // 60

// --------- PRACTICAL APPLICATION -----
function converter(toUnit, factor, offset, input) {
    offset = offset || 0;
    return [((offset + input) * factor).toFixed(2), toUnit].join(" ");
}

function currying(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

var milesToKm = currying(converter, 'km', 1.60936, undefined);
var poundsToKg = currying(converter, 'kg', 0.45460, undefined);
var farenheitToCelsius = currying(converter, 'degrees C', 0.5556, -32);

console.log(converter('km', 1.60936, undefined, 10));
console.log(milesToKm(10));            // returns "16.09 km"
// console.log(poundsToKg(2.5));          // returns "1.14 kg"
// console.log(farenheitToCelsius(98)); // 36.37 degrees C