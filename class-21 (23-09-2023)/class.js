class Person {
  // Constructor Function
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
    this.nationality = "India";
  }

  // Prototype Functions
  hello() {
    console.log("Hello, My name is ", this.firstName);
  }

  // Static Function
  static staticHello() {
    console.log("Static says hello!", this.firstName);
  }

  foo() {
    console.log("Inside Teacher Class");
  }
}

class Teacher extends Person {
  constructor(firstName, subject, age, classStrength) {
    super(firstName, age); // Invoking Parent's constructor function
    this.subject = subject;
    this.classStrength = classStrength;
  }

  getThis() {
    console.log(this);
  }

  foo() {
    console.log("Inside Teacher Class");
  }
}

class Student extends Person {
  constructor(firstName, age, cgpa) {
    super(firstName, age); // Invoking Parent's constructor function
    this.cgpa = cgpa;
  }

  getThis() {
    console.log(this);
  }

  foo() {
    console.log("Inside Student Class");
  }
}

const teacherInstance = new Teacher("Shashwat", "Web Development", 26, 47);
const studentInstance = new Student("Shashwat", 26, 8);
console.log(teacherInstance);
console.log(studentInstance);