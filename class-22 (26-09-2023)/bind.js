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

function getEmailFn(sub1, sub2, sub3) {
  console.log(`My email id is ${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@avengers.com and the subjects I teach are ${sub1}, ${sub3}, and ${sub2}`);
};

let scaler = getEmailFn.bind(teacher1, "defence", "leadership");
teacher1.firstName = "Shashwat"
scaler("swimming");
