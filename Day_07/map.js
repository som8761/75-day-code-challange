// Map

/*Square the Numbers:(array ta upor thekei nilam)*/
const arrayOfNum = [1, 2, 3, 4, 5]

const suareOfNumbers = (numbers) =>{
    let square = numbers.map((num)=>{
        return num * num;
    })
    return square;
}

console.log('square of numbers are : ',suareOfNumbers(arrayOfNum));

/****************************************************************/

/*Extract Length of Words:*/

const extractElm = ["apple", "banana", "cherry"];

const extractFunc = (elements) =>{
    return elements.map((elm)=>{
        return elm.length;
    })
}

console.log('The length of this elements are : ',extractFunc(extractElm));

/****************************************************************/

/*Given an array of objects, each containing a name property, use the map() method to create a new array containing only the names.*/

const objectArray = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

const objArrayFunc = (objects)=>{
    return objects.map((obj)=>{
        return obj.name;
    })
}

console.log(objArrayFunc(objectArray));

/****************************************************************/

/*Multiply Corresponding Elements of Two Arrays:*/

 const arr1 = [1, 2, 3];
 const arr2 = [4, 5, 6];

function multiply(elm1,elm2){
    let mul = elm1.map((el1,el2)=>{
        return el1 * elm2[el2]
    })
    return mul;
}

console.log(multiply(arr1,arr2));



const reverseArray = ["apple", "banana", "cherry"]

const reverseFunc = reverseArray.map((str)=>{
    return str.split('').reverse().join('')
    // split venge dilo
    // reverse method revrse kore dilo
    // join , gulo soriye dilo.
})

console.log(reverseFunc);