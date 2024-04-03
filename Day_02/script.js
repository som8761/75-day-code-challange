// Data Types : 
// there are two data types : 1) primitive 2) non-primitive .


/***************************Primitve data types*************************/
// Number:
let age = 29;
console.log(typeof age);

// string:
const name = "somnath";
console.log(typeof name);

// bollean:
const isStudent = true;
console.log(typeof isStudent);

// undefined:
let city;
console.log(typeof city); 
//When a variable is declared but not assigned a value, it automatically holds the value undefined.

// null:
let result = null;
console.log(typeof result);// I can explicitly assign null to variables to indicate that they currently have no meaningful value.


/************************non-Primitve/composite data types****************/

// object:
const person = {
    name : 'somnath', //string
    age : 25, // number
    isStudent : false, // boolean
    result : null
}
console.log(typeof person, person);
// so its an non-premetive data type which is holding differendt premetive data types..


// function:
function demoFunc(a,b){
    const val = a + b;
    return val;
}
const answer = demoFunc(5 , 5)
console.log('The answer is : ',answer);


// Array:
const numbers = [1,2,4,5,6,7,89,23]
const fruits = ['apple', 'banana', 'orange'];
const mixed = [1, 'two', { key: 'value' }];
console.log(numbers);
console.log(fruits);
console.log(mixed);


