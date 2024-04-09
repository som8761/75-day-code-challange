console.log(' ');
console.log(' reduce method :  ');
// reduce
/*calculate the sum of numbers in array with reduce*/
const numbersOfElms = [1, 2, 3, 4, 5];
function sumOfNumbers(num){
    const resultOfSum = num.reduce((acc, curr)=>{
        return acc + curr;
    },0)
    return resultOfSum;
}

const res = sumOfNumbers(numbersOfElms)
console.log('The result of sum is : ',res);

/********************************************************************/

/*Concatenating Strings:*/
const words = ["Hello", " ", "world", "!"];

const a = words.reduce((acc, curr)=>{
    return acc.concat(curr);
})

console.log(a);

/********************************************************************/

/*find longest word with reduce method*/
const word = ["apple", "cherry", "banana","date"];

const b = word.reduce((acc, curr)=>{
    if(acc.length > curr.length){
        return acc;
    }
    else{
        return curr;
    }
    
})

console.log(b);

/*So, let's analyse the process step by step:

Initially, acc is "apple".
When comparing "apple" and "cherry", "cherry" is longer, so acc becomes "cherry".
Then, when comparing "cherry" and "banana", "banana" is longer, so acc becomes "banana".
Finally, when comparing "banana" and "date", "banana" is still longer, so acc remains "banana".
Therefore, the final value of b will be "banana", which is the longest word in the array. */


/************************************************************************/
        

const toSum = [10,20,30,45,78]

function sumFunc(arr){
    const sum = arr.reduce((accumulate,currentElm)=>{
        return accumulate + currentElm;
    })
    return sum;
}

const resultSum = sumFunc(toSum)
console.log('The result of this array is : ',resultSum);

/*summery
(1)in reduce method last right element will return ,jadio first element ta right hok na kano..but map ba filter method a arm hoyna..age pele agei right element ta return korbe r baki guloke dakhbena

(2) reduce method kono new array return kre na,,akta single value return kre..original array ke mpdify korena.

*/