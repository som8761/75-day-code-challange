// Array_Methods:
// filterMethod

// return the even and odd numbers from an array.
let oddNum = [];
function evenNumbers(number) {
  let evenNum = number.filter((num) => {
    if (num % 2 === 0) {
      return num;
    } else {
      oddNum.push(num);
    }
  });
  return { evenNum, oddNum };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const resultOfEvenNum = evenNumbers(numbers);
console.log(resultOfEvenNum);

/******************************************************************/

const wordsArray = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const filterFruits = (fruits) => {
  const filteredFruit = fruits.filter((fruit) => {
    if (fruit.length > 5 && fruit.includes("y")) {
      return fruit;
    }
  });

  return filteredFruit;
};

console.log(filterFruits(wordsArray));

/******************************************************************/

/*Given an array of objects representing people with name and age properties, filter out all people who are under the age of 30.*/

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 },
];

const under30AgePersons = (persons) => {
  let below30Age = persons.filter((person) => {
    if (person.age < 30) {
      return person;
    }
  });
  return below30Age;
};

console.log(`below 30 age persons : `, under30AgePersons(people));

/******************************************************************/

// creating two variables for two array for containing postitive and negative numbers.
const postiveAndNegativeNumbers = [2, -3, 5, -3, 2, 8, -1, 9, -1];

function pnFunc(pn) {
  let uniqueArray = [];
  pn.filter((po_no) => {
    if (!uniqueArray.includes(po_no)) {
      uniqueArray.push(po_no);
    }
  });
  const postitive = uniqueArray.filter((unique) => {
    return 0 > unique;
  });
  const negative = uniqueArray.filter((unique) => {
    return 0 < unique;
  });

  return { postitive, negative };
}

console.log(pnFunc(postiveAndNegativeNumbers));

/******************************************************************/

/* Given an array of product objects with a `price` property, filter the products within a specific price range, e.g., between $20 and $50.*/

const products = [
  { name: "Product A", price: 15 },
  { name: "Product B", price: 25 },
  { name: "Product C", price: 40 },
  { name: "Product D", price: 55 },
  { name: "Product E", price: 30 },
];


const twentyToFiftyRange = products.filter((product)=>{
    if(product.price >= 20 && product.price <= 50){
        return product;
    }
})

console.log(twentyToFiftyRange);