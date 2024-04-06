// Loops:

// For Loops:
for(let i = 0; i <= 5; i++){
    console.log(i); // basic syntext
}

console.log(' ');


/*******************************************************************/

/* why i need to use loops? */

// using with array 
const fruits = ['mango','grapes','apple','cherry','luchi']; // suppose i have this array and i need to print each fruits on array..then,,

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

// if i using this method then i need to write 5 lines of codes..but if i am using loops then,,,

for(let i = 0; i < fruits.length; i++){
   console.log(`This is : ${fruits[i]}`);
}

// fruits[i] = index of fruits (fruits er index).
console.log(' ');


/*******************************************************************/

// Examples:

// Even Numbers: Write a for loop that prints all even numbers between 1 and 20.

const num = [1,34,23,12,56,2,7,8,10,89,78]
const evenNumbers = []

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 === 0){
        evenNumbers.push(num[i]);
    }
}
console.log('Even number are : ',evenNumbers);

/*******************************************************************/

// Sum of Numbers: Write a for loop to calculate the sum of all numbers from 1 to 100.
let sum = 0;
for(let i = 0; i <= 10; i++){
    sum += i;
}
console.log(`The sum of 1 to 10 is : ${sum}`);

let arr = [2,4,6,8,9,12,89,23]
let sumOfArr = 0;

for(let i = 0; i < arr.length; i++){
   sumOfArr = sumOfArr + arr[i];
}
console.log(`The sum of this array is : ${sumOfArr}`);

/*******************************************************************/

// Multiplication Table: Write a for loop to print the multiplication table of a given number (e.g., 5) up to a certain limit (e.g., 10).

for(let i = 5; i <= 10; i++){
    console.log(`Table number : ${i}`);
    for(let f = 1; f <= 10; f++){
        let mul = i * f;
        console.log(mul);
      }
 }

