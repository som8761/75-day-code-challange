// IF ELSE STATEMENT AND SWITCH CASE

// Example number 1:
const age = parseFloat(prompt('submit your age!'))

if(age <= 5){
    console.log('you are not even think about drive');
}
else if(age > 5 && age <= 15){
    console.log('you are a child , you dont drive');
}
else if(age > 15 && age < 20){
    console.log('you need some time to eligible for driving');
}
else{
    console.log('you can drive!');
}
/*********************************************************************/
// Example number 2:
// Create a program that asks the user to enter their exam score. Depending on the score, output different messages such as "Excellent", "Good", "Average", "Below Average", or "Poor".

const score = parseFloat(prompt('write your score!'))

if(score < 25){
    console.log("Below Average or Poor");
}
else if(score >= 25 && score < 60){
    console.log('average!');
}
else if(score >= 60 && score <= 80){
    console.log('Good');
}
else{
    console.log('Excellent!');
}

/*********************************************************************/


// Exercise 3:
// Write a program that prompts the user to enter a number. Check if the number is positive, negative, or zero, and output an appropriate message.

const number = parseFloat(prompt('write a number!')); 

if(number === 0){
    console.log('zero');
}
else if(number <= 0){
    console.log('negative');
}
else{
    console.log('positive');
}

// i use parseFloat for convert the data type of number ..in the number variable i am getting sting as a value..and i am using '===' so, strickt comparison operator always check the value and the data type as well... 

