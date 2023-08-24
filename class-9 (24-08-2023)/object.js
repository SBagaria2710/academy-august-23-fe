// Objects are denoted as => { key: value }

const person = {
    fullName: {
        firstName: "Shashwat",
        lastName: "Bagaria",
    },
    age: 26
};

// console.log(person);

console.log(person.fullName.firstName); // Dot Notation
console.log(person['fullName']['firstName']); // Bracket Notation