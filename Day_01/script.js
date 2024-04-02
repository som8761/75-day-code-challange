/********************************************************************/
/*First example of three variables:[same scope] */
/********************************************************************/

/*{Global scope, redeclarable,can re-assign}*/
var first = 10;
console.log(first);

var first = 15;
console.log(first);

// summery: i am redeclared the same variable with different value..however the var print these different values with in the same scope..



/*{block scope,cant re-declared,but can be re-assign}*/
let second = 1;
console.log(second);
// let second = 23;
// console.log(second);

// summery : i am not able to print the same value with the same let variable with in the same scope..



/*{block scope,cant re-decalred,cant re-assigned}*/
const third = 1;
console.log(third);
// const third = 23;
// console.log(third);
// Summary: I am unable to redeclare the same const variable to assign a different value within the same scope.



/********************************************************************/
/*Second example of three variables:[different scope] */
/********************************************************************/



// For let
{
    let x = 10;
    // let x = 49; // can not redeclared 
    // x = 49; // but can be re-assign 
    console.log(x);
}
// let x = 49
// console.log(x);  // ReferenceError: x is not defined, as x is out of scope here.

// For const

// {
//   const y = 69;
//   // const y = 100; // can not re-declared
//   // y = 100; // can not re-assign
//   console.log(y);
// }
// y = 100;
// console.log(y); // ReferenceError: y is not defined, as y is out of scope here.





/*                              "summery"
var : 
* we can access the var for globally
* we can re-declare the var
* we can re-assign the var


let : 
* let is a block scope.
* we "can not re-declared" the let in the same scope but can be declared in the different or outer the scope.
* we "can re-assign" any variable with let in the same scope and the different scope as well.


const : 
* const is a block scope.
* we "can not re-declared" the const in the same scope.
* we "can not re-assign" the const in the same scope.

* outer the scope we can do anything(but that no be considered in the good practice)



**
Tips: but some times we need re-assign the same variable ,in that situation "let" can be usefull.
*/
