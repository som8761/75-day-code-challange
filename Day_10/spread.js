// Spread operator.

// The spread operator (...) in JavaScript effectively breaks an array into its individual elements. It allows you to take an array and spread its elements wherever multiple elements are expected, such as when creating a new array, passing function arguments, or merging objects. This feature provides a convenient and concise way to work with arrays and make your code more readable and expressive.

const a = [2, 4, 5];
console.log(...a); // This operator is breaking the array.

/******************************************************************/
// Concatenating
const array1 = [1, 2, 3];
const array2 = [23, 51, 60];
const array3 = [...array1, ...array2]; // Concatenating while breaking the array and storing in a single array.

console.log(array3);

/******************************************************************/

// Passing Array Elements as Function Arguments:

const numbers = [1, 2, 3]; 

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...numbers));
// In this example, we have an array, but we need the values as single elements, so we use the spread operator.

/******************************************************************/
// Copying an Array:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
// The spread operator breaks the array and puts it inside another array. It consumes additional memory.

/******************************************************************/
// Merging Objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);


/******************************************************************/
// Cloning Objects (Shallow Copy):
const originalObject = { name: 'John', age: 30 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // The same object is copied and put inside another one.

/******************************************************************/
// Adding New Elements to an Array:

const arr = [1, 3, 67, 89];
const newArray = [...arr, 90, 100];
console.log(newArray);

// 90 and 100 already exist inside this array; however, I am spreading an array.

/******************************************************************/
// Spread Operator for Array Destructuring:

const arrayOfNumbers = [1, 2, 3, 4, 5];

const [first, second, ...restNumbers] = arrayOfNumbers;

console.log(first);
console.log(second);
console.log(...restNumbers); // They were initially within an array, hence I spread them.


/*SUMMERY*/

// The main purpose of the spread operator is to break down an array into its individual elements, allowing you to use that data for various tasks such as creating new arrays, passing function arguments, merging objects, or any other operation where multiple elements are expected. This enables greater flexibility and conciseness in your code, making it easier to work with arrays and improving readability.


