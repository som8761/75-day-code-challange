// Comparison Operators: These operators compare values and return a Boolean value.

// Equal to (==)
// Not equal to (!=)
// Strict equal to (===)
// Strict not equal to (!==)
// Greater than (>)
// Less than (<)
// Greater than or equal to (>=)
// Less than or equal to (<=)



// here I am using the conditional statement for understanding the comparison operator..

// Equal to (==)
const dEqual1 = 10;
const dEqual2 = 10;

if(dEqual1 == dEqual2){
    console.log(true);
}
else{
    console.log(false);
}

// Not equal to (!=)
if(dEqual1 != dEqual2){
    console.log(false);
}
else{
    console.log(true);
}

// Strict equal to (===)
if(dEqual1 === '10'){
    console.log(true);
}
else{
    console.log(false);
}
// 10 is a number that's why  its returns true in '=='
//  '10' is a string that's why its returns false in '===', because the === is a strict operator..


if(dEqual1 === '10'){
    console.log(true);
}
else{
    console.log(false);
}

// Strict not equal to (!==)
if(dEqual1 !== '10'){
    console.log(true);
}
else{
    console.log(false);
}

// Greater than (>)
const j = 2;
const r = 7;
if(j > r){
    console.log(true);
}else{
    console.log(false);
}

// Greater than or equal to (>=)
if(j >= r){
    console.log(true);
}else{
    console.log(false);
}