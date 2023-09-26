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

// getEmailFn.apply(teacher1);
getEmailFn.apply(teacher1, ["defence", "leadership"]);
