// // const arr1 = [1,2,"Shashwat"];
// // const arr2 = [3, 4, ...arr1, 5, 6]; // const arr2 = [1, 2, 3, 4, 5, 6];

// // console.log(arr2);

// // Spread Operator with object
// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3, y: 20 };

// const obj3 = {...obj2, ...obj1 };

// console.log(obj3);

// // Clone Array Using Spread Operator
// let arr1 = [1,2,3];
// let arr2 = [...arr1];

// arr1.push(4);
// console.log(arr1, arr2);

// // Destructuring in Functions
// function doSomething(...scaler) {
//     console.log(scaler);
// }

// doSomething("1",2,3,4,"5");


// DOUBT SOLVING
const [first, ...rest] = [1, 2, 3];
console.log(first, rest);
