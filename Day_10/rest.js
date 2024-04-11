// rest operator
// The main purpose of the rest operator in JavaScript is to gather or collect multiple individual elements (arguments) into a single array within a function declaration. This enables functions to accept an indefinite number of arguments, providing flexibility and versatility in handling data. The rest operator simplifies code and makes it more concise, especially when dealing with functions that operate on varying numbers of inputs.

// Function with Variable Number of Arguments:
function sum(...num){
    const b = num.reduce((acc, curr)=>{
        const sum =  acc + curr;
        const avg = sum / num.length;
        return avg;
    },0)
    return b;
}

console.log('The result of avarage is :',sum(5,5,8));

/**********************************************************************/

function combineArrays(...arrays){
    const combinedArrays = arrays.reduce((acc, curr)=>{
        return [...acc , ...curr]; // here its a spread oper means each iteration arrays are spread inside the acc;
    },[])
    return combinedArrays;
}

console.log(combineArrays([1,3], [12,23], [8,3]));

/**********************************************************************/

function removingElms(...arr){
    arr.pop()
    return arr; // here pop modified the original array.
}

console.log(removingElms(1,2,4,5));

// Finding Maximum Number:
// Write a function called maxNumber that takes any number of arguments and returns the maximum number. Use the rest operator to collect all the arguments into an array and then use the Math.max() function to find the maximum value.

// const t = [1,4,200,24,7,34,77,34]
function findMaxVal(...arr){
    return arr.reduce((acc, curr)=>{
        if(acc < curr){
            return curr;
        }
        else{
            acc;
        }
        return acc;
    },[0])
}

console.log('The maximum value is : ',findMaxVal(1,4,200,24,7,34,77,34));
// console.log(findMaxVal(t));
/*IMPORTANT NOTE */

// Using the rest operator allows your function to be more flexible and dynamic. Instead of hard-coding an array with fixed values, you can use the rest operator to accept any number of arguments passed by the user. This makes your function more versatile because it can perform operations based on the values provided by the user at runtime, rather than relying on a predetermined set of values. It enhances the usability and adaptability of your code, as it can handle different scenarios and input data effectively.
