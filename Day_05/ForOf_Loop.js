// For Of Loop: Exercises :

const numbers = [1,2,45,6,78,12]

for (const num of numbers) {
    console.log(num); // Basic syntext
}

/*******************************************************************/

// even numbers : 
const num = [1,34,23,12,56,2,7,8,10,89,78]
const storeEven = []
for (const even of num) {
    if(even % 2 === 0){
        storeEven.push(even)
    }
}
console.log(`The even numbers are : ${storeEven}`);

/*******************************************************************/

// sum of an array : 
let arr = [2,4,6,8,9,12,89,23]
let sum = 0;
for (const elm of arr) {
    sum += elm
}
console.log(`The sum of this array is : ${sum}`);

/*******************************************************************/

// Count Vowels: Iterate over a string using for...of and count the number of vowels (a, e, i, o, u) present in it.

const str = "This is a sample string to count vowels";
const vowelString = "aeiou";
const vowelArray = []

for (const char of str) {
   if(vowelString.includes(char.toLocaleLowerCase())){
    // console.log(char);
    vowelArray.push(char)
   }
}
console.log('The vowels are : ',vowelArray);
const numOfVowel = vowelArray.length;
console.log(`Total ${numOfVowel} vowels are added in the str sentence.`);

/*******************************************************************/

// Find Maximum Value: Write a program to find the maximum value in an array using a for...of loop.

const values = [12,46,133,78,342,89,0,12]
let maxVal = values[0]

for (const val of values) {
    if(val > maxVal){
        maxVal = val;
    }    
}
console.log('The maximum value is : ',maxVal);

/*******************************************************************/

// Average of Numbers: Calculate the average of numbers in an array using a for...of loop.

const avgNum = [1,45,7,8,24,6]
let sumOfavg = 0;

for (const num of avgNum) {
    sumOfavg += num;
}
let average = sumOfavg / avgNum.length;
console.log('Avarage is : ',average);