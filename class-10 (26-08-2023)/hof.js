let radius = [1,2,3,4];

// Circumference = 2 pi r
// Diameter = 2r

function calculateCircumference(radius) {
    return calculateDiameter(radius) * Math.PI;
}

function calculateDiameter(radius) {
    return 2 * radius;
}

function calculate(radiusArr, logic) {
    const output = [];
    for (let i = 0; i < radiusArr.length; i++) {
        output.push(logic(radiusArr[i]));
    }
    return output;
}

const circumArr = calculate(radius, calculateCircumference);
const diArr = calculate(radius, calculateDiameter);

console.log(circumArr, diArr);


// -----------------

function person() {

    function getFullName(fName, lName) {
        return fName + " " + lName;
    }

    return getFullName;
}

const hof = person();
// console.log(hof("Anil", "Kumar"));