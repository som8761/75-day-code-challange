/*Exercise 1: Extract Property
Given an array of objects representing people, extract the "age" property for each person and create a new array with just the ages.*/

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Eva", age: 21 },
];

const extractAges = (persons) => {
  //   return persons.map((person) => {
  //     let persosAges = { age: person.age };
  //     return persosAges;
  //   });

  return persons.map((person) => {
    return { age: person.age };
  }); // one line code (short cut)
};

console.log(`The ages of the perosns are : `, extractAges(people));

/**********************************************************************/
/*Exercise 2: Filter by Property
        Given an array of objects representing products, filter out the products that are priced below a certain threshold (e.g., £500)..,,mane akta specific price er theke kom objects gulo return koro..*/

const products = [
  { name: "Laptop", price: 799.99 },
  { name: "Smartphone", price: 499.99 },
  { name: "Tablet", price: 299.99 },
];

const priceThresHold = 500;

const filterByProduct = (products, priceThresHold) => {
  const filterTheProduct = products.filter((product) => {
    // if(product.price < priceThresHold){
    //     return product.price;
    // }

    return product.price < priceThresHold; // short cut.
  });
  return filterTheProduct;
};

const result = filterByProduct(products, priceThresHold);
console.log("The products are: ", result);

/**********************************************************************/
/*Question: Define an object representing a person with properties for name, age, and city. Write a function that takes a person object as input and returns a string with their information formatted as "Name is AGE years old and lives in CITY."*/
const person = { name: "John", age: 30, city: "London" };

const personDetails = (empl) => {
  /* NORMAL OBJECT */
  // const details = `${person.name} is ${person.age} years Old and lives in ${person.city}`
  // return details;

  /* OBJECT DESTRUCTURING */

  const { name, age, city } = empl;
  const details = `${name} is ${age} years Old and lives in ${city}`;
  return details;
};

console.log(personDetails(person));

/**********************************************************************/
/*You have an array of strings representing names. Convert this array of strings into an array of objects, where each object has a name property.
        
mane amake akhane boleche j array of strings theke array of objets korte..
*/

const names = ["Alice", "Bob", "Charlie", "David"]; // array of strings.

function convertTheArray(array){
    const convert = array.reduce((acc, curr)=>{
        acc.push({name : curr});
        return acc;
    },[])
    return convert;
}
console.log(convertTheArray(names));

/**********************************************************************/

/*You have a string containing key-value pairs separated by commas. Convert this string into an object where each key-value pair becomes a property in the object.*/

const keyValueString = "name:Alice,age:30,city:London";


const splitTheString = keyValueString.split(',')
console.log(splitTheString);

const v = splitTheString.reduce((acc, curr)=>{
    const [key , value] = curr.split(':');
    if(!acc[key]){
        acc[key] = value;
    }
    return acc
},{})
console.log(v);

/**********************************************************************/

/*You have an array of strings where each string contains a product name and its price separated by a comma. Convert this array into an array of objects where each object has name and price properties.*/

const productsArray = ["apple,2.99", "banana,1.50", "cherry,3.99"];

const y = productsArray.reduce((acc, curr)=>{
    const [fruitName , fruitPrice] = curr.split(',')
    
    acc.push({fruitName : fruitName , fruitPrice : fruitPrice});
    return acc;
},[])

console.log(y);

