let count = 1;
while (count < 5) {
  console.log(count);
  count++;
}

// Sum of numbers from 1 to 10:
let num = 1;
while (num <= 10) {
  // console.log(num);
}

/********************************************************************/
/*1 - 10 r modhe even numbers er sum(chaile amra joto khusi bar korte pari)*/

let number = 1;
let sum = 0;
while (number <= 10) {
  if (number % 2 == 0) {
    sum = sum + number;
  }

  number++;
}
document.write("sum of first even numbers between 1 to 10 is " + sum);

/********************************************************************/

/*or we can also do like this(uporer ta nije value diyechi nicher ta te user er kach thke niyechi)*/

let k = prompt("kitne tak even  number ka sum nikal na chaha rahe ho?");
num = 1;
sum = 0;
while (num <= k) {
  if (num % 2 == 0) {
    sum = sum + num;
  }
  num++;
}
console.log("sum of first even numbers between 1 to " + k + " is " + sum);

/********************************************************************/

/*do while loop*/

let number2 = 12;
do {
  console.log("this is a number2");
  number2++;
} while (number2 <= 10);
/*ekhane akbar holeo print korbe..seta jadi vul o hoy tao 
print korbe..but akbar print korar por jakhn conditon ta vule hoye 
jabe thle r print hbe na false hoye jabe..*/

// do...while loop:
// When you want to execute a block of code at least once before checking the condition for repetition.
// When you want the loop to run at least once regardless of the condition.

/********************************************************************/





/*updating the content of html elements*/
let elm = document.querySelectorAll(".som");

elm.forEach((element) => {
  element.innerHTML = "somnath paul";
  // document.write(element.innerHTML = "somnath paul")
  console.log((element.innerHTML = "somnath paul"));
});


/********************************************************************/

/* for each  loop*/

let numbers = [1, 2, 3, 4, 5]; // Assuming num is an array
numbers.forEach(function(element, index, array) {
    // value + index + array
    console.log(element + element, index, array);
});
