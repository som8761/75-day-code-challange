
// Logical Operators: These operators are used to combine conditional statements.

// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)
const l = 30;
const k = 39;
// Logical AND (&&) [both condition need to be right]
if(l && k === 39 && 30){
    console.log('both are same');
}
else{
    console.log('both are not same.');
}


// Logical OR (||) [only one condition need to be right]
let age = 30;
if(age < 18 || age > 66){
    console.log('yes you are eligible for today\'s party');
}
else{
    console.log('not eligible');
}

// Logical NOT (!)
const isRainy = false;
const isSunny = !isRainy; // adding the not operator and it becomes true.

console.log(isSunny);