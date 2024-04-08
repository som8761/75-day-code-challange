/* If we have to modify any array using forEach loop, then we need to use 3 parameters and use the last parameter to modify because it represents the index and value of the previous elements in the array... The first parameter (value) is just a copy like map and filter methods, which don't return a new array. */

/* Given an array of names, use forEach to add a greeting "Hello, " in front of each name and update the array. */
console.log('names:');

const names = ["Alice", "Bob", "Charlie"];

function nameFunc(name){
    name.forEach((name)=>{
        console.log(`Hello ${name} :)`);
    })
}
nameFunc(names)

/******************************************************************/
console.log(' ');

/* Given an array of strings, use forEach to find and display the longest string in the array. */

const words = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

let longestWord = "";
function wordsFunc(word){

    word.forEach((word)=>{
      if(word.length > longestWord.length){
        longestWord = word;
      }
    })
    return longestWord;
}

const result = wordsFunc(words)
console.log('the longest word is:', result);

/******************************************************************/

/* Find out the even numbers and return a new array */

const numbersArr = [21,65,78,12,63,98,56]

function evenNumber(num){
    const container = []
    num.forEach((number)=>{
        if(number % 2 === 0){
            container.push(number)
        }
    })
    return container;
}

const resultEven = evenNumber(numbersArr)
console.log(resultEven);

// Since forEach doesn't return a new array, I created a container to push the even numbers and present them as a new array.

console.log('');
/******************************************************************/
/* Find and Display Names Starting with "A" */

const namesArray = ["Alice", "Bob", "Anna", "David", "Eva"];

function namesArrayFunc(names){
    names.forEach((name)=>{
        if(name.startsWith('A')){
            console.log(name);
            // startsWith is a function.
        }
    })
}

namesArrayFunc(namesArray)

// Since forEach doesn't return any new array, the results are printed normally as they come, not pushed into an array.

console.log('');
/******************************************************************/

/* Calculate the Sum of Positive Numbers */
const mixedNumbers = [-2, 5, -8, 10, -3, 7];

const mixedNumberFunc = (mix) =>{
    let sum = 0;
    mix.forEach((num)=>{
        if(num >= 0){
            sum = sum + num;
        }
    })
    return sum;
}

const resultOfMixedNumbers = mixedNumberFunc(mixedNumbers)
console.log('the result of mixed numbers is : ',resultOfMixedNumbers);

/******************************************************************/
console.log('');

/* Filter and Display Long Words */
const longWords = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

longWords.forEach((word)=>{
    if(word.length >= 6){
        console.log('The longest words are :' ,word);
    }
})

/******************************************************************/

/* Modify Array Elements */

const colors = ["red", "blue", "green", "yellow"];

/* with forEach loop */
colors.forEach((color, index,array) => {
    color = color.toUpperCase()
});

console.log(colors);

/* with for loop */
for(let i = 0;i < colors.length;i++){
    // console.log(colors[i].toUpperCase()); 
    colors[i] = colors[i].toUpperCase() 
    // Each element will be stored back into the array.
}
console.log(colors);

console.log('');
/******************************************************************/
/* Similarly, I can modify an element using forEach loop by DOM. */
const div = document.getElementsByTagName('div')

Array.from(div).forEach((val)=>{
    val.innerHTML = '<h1>somnath</h1>';
    val.style.color = 'red'
})
