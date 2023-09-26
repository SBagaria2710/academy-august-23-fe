function getEmailFn() {
  console.log(`${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@avengers.com`);
};

// let student = {
//   firstName: "Peter",
//   lastName: "Parker",
//   age: 18,
//   getEmail: function() {
//     console.log("this obj inside student =>", this);
//     console.log(`${this.firstName?.toLowerCase()}.${this.lastName?.toLowerCase()}@avengers.com`);
//   }
// }

let teacher1 = {
  firstName: "Tony",
  lastName: "Stark",
  age: 42,
};

let teacher2 = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 80,
};

function getEmailFn(sub1, sub2) {
  console.log(`My email id is ${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@avengers.com and the subjects I teach are ${sub1} and ${sub2}`);
};

getEmailFn.call(teacher1,[ "Defence", "Leadership"]);
getEmailFn.call(teacher2, "Shield throwing", "Leadership");


// Call
// student.getEmail.call(teacher);

// Using Call with getEmailFn
// getEmailFn.call(student);
// getEmailFn.call(teacher);

// teacher.getEmail();