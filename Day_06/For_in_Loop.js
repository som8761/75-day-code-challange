// for in loop
// Define an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "London"
  };

  for (const key in person) {
    // console.log(key);
    // console.log(person[key]);

    console.log(`${key} : ${person[key]}`);
  }

console.log(' ');
/*******************************************************************/

// Checking if a specific property exists in an object:

const empl = {
    name: "Alice",
    age: 25,
    city: "Manchester"
};
  
const propertyToCheck = 'age';

for (const key in empl) {
   if(key === propertyToCheck){
    console.log(` ${propertyToCheck} exists in the person`);
   }
}

console.log(' ');
/*******************************************************************/

// Modifying the values of object properties:
const student = {
    name: "Bob",
    age: 20,
    grade: "B"
};

let grade = 'grade';
for (const key in student) {
    if(key === grade){
        student[key] = 'A';
    }
}
console.log(`Modified the grade :`,student);

