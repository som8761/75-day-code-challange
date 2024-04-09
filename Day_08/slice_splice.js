console.log(" starts slice and splice ::");

/*slice Method tao akta new array return kore..r atao original array ke modify korena.*/

/*In JavaScript, the slice() method is used to create a new array containing a subset of arrs from an existing array. It does not modify the original array but returns a new array with the selected arrs. The slice() method takes two parameters: the starting index (inclusive) and the ending index (exclusive) of the slice.*/

const fruits = ["apple", "banana", "cherry", "orange", "grape"];

const newFruits = fruits.slice(2, 5);
console.log(newFruits); // reuturn new array..
console.log(fruits); // original array..doesnt modified.

/**************************************************************/

/*Extract a Subarray:

        Question: Given an array of numbers, how would you extract a subarray that includes arrs from index 2 to index 4 (inclusive)?*/

const numbers = [10, 20, 30, 40, 50, 60];

function extractNumbers(extract) {
  return extract.slice(2, 5);
  // 1st parameter ta inclusive r 2nd parameter ta exclusive tai ami ekhane 4 number arr ke anar jonno 2nd parameter hisabe 5 number index ke dilam.
}

const extractResult = extractNumbers(numbers);
console.log(extractResult);

/**************************************************************/
/*Question: How can you create a function that takes an array as an argument and returns a new array that is a copy of the original array using the slice() method?*/

const original = [1, 2, 3];

function originalArray(arr) {
  return arr.slice();
}

console.log("Its remian the same : ", originalArray(original));

/**************************************************************/

/*Question: Write a function that takes an array and removes arrs from the middle of the array. The function should take two arguments: the starting index and the number of arrs to remove using the slice() method.*/

const toRemoveElm = [1, 22, 13, 4, 15, 16, 17, 18, 20];
const starting = 3;

function removeMiddlearrs(arr, starting) {
  const fromTheFirst = arr.slice(0, starting);
  const fromTheLast = arr.slice(6, 9);
  const newArray = fromTheFirst.concat(fromTheLast);
  return newArray;
}

console.log(removeMiddlearrs(toRemoveElm, starting));

/****************************splice********************************* */
/****************************splice********************************* */

const fruit = ["apple", "banana", "date", "grapes", "mango"];
fruits.splice(1, 2, "onion", "cucumber");
// 1 mane jekhan theke index ta remove howa chalu korbe,3 mane joto gulo index delete hobe.
console.log(fruit);

/*********************************************************************/

const fruitArrs = ["apple", "banana", "date"];

const result = fruit.splice(1, 2, "somnath");
console.log(fruitArrs); // jahatu splice original array ke directly affect kore tai original array ke return korlam..taholei mpdified array ta paye galam..ata new array return korena.

console.log(fruitArrs);
// ekhna ami new array return krechi tai jai element gulo remove hpye gache sudhu sei element gulo return hoyeche..

/************************************************************************/
