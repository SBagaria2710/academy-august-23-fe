// let car1 = {
//   name: "Alto",
//   color: "gray",
//   topSpeed: "120km/hr"
// };

// let car2 = {
//   name: "bmw",
//   color: "white",
//   topSpeed: "150km/hr"
// }


function Car(nameParam, colorParam, topSpeedParam) {
  this.name = nameParam;
  this.color = colorParam;
  this.topSpeed = topSpeedParam;
}

const car1 = new Car("Alto", "gray", "120km/hr");
const car2 = new Car("BMW", "white", "150km/hr");

// ------

function Phone(color, name, storage) {
  this.color = color;
  this.name = name;
  this.storage = storage;
  this.getInfo = function() {
    console.log("My phone has the following specs: ", this.color, this.name, this.storage);
  }
}

const phone1 = new Phone("black", "nokia", "64GB");
const phone2 = new Phone("white", "iphone", "256GB");

console.log(phone1.getInfo());
