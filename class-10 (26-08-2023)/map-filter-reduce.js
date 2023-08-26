let numbers = [10, 2, 3, 4, 50];

// MAP FUNCTION
const multipliedBy2 = numbers.map((val) => {
    return 2 * val;
});

// console.log(multipliedBy2, numbers);

// FILTER FUCNTION
const fn = (val) => {
    if (val % 2 === 0) return val;
    return val;
};

const filteredOddNumbers = numbers.filter(fn);

// console.log(filteredOddNumbers, numbers);

// REDUCE FUNCTION
const sum = numbers.reduce((acc, curr, idx) => {
    return acc + curr;
}, 0);

// console.log(sum, numbers);