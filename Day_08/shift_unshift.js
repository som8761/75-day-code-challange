// removing the first 3 elemnts from the array and return them with a new array.
// this method doesnt return a new array but it affect the original array...
const arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const count = 3;
const newArray = [];
function removeAndAdd(arr, count) {
  for (let i = 0; i < count; i++) {
    newArray.push(arr.shift()); // 3 times it removes and stores in the new array.
  }
  return newArray;
}

console.log("remove array : ", removeAndAdd(arrayOfNum, count));
console.log("original array : ", arrayOfNum); // now you can see it affect the original array.

/**************************************************************/

/*Shift to Empty:
Write a function that uses the shift method to remove elements from an array one by one and stops when the array becomes empty. Log each removed element.*/
// we can approach the question like that(jatokhn na porjonto array er length ta 0 hoche totokhn obdi remove korte thako)


const fruitArr = [1, 22, 3, 4, 5, 64, 7, 18, 99];
const count2 = fruitArr.length;
const newArr = [];

function removeArrayOfElms(arr, count2) {
  for (let i = 0; i < count2; i++) {
    newArr.push(arr.shift());
  }
  return newArr;
}

console.log("remove array : ", removeArrayOfElms(fruitArr, count2));
console.log("original array : ", fruitArr);


// newArr.push(arr.shift()); [firstly i have done this for one and then i put it inside a loop , so the original array has empty now.]


/**************************************************************/
/*Shift and Sum:
        Write a function that uses the shift method to remove elements from an array one by one and calculates the sum of the removed elements. Return the sum.*/
        const numberArray = [1,2,3,4,5,6,7,8,9,10]
        const length = numberArray.length;

        function number(num,length){
            let sum = 0;
            for (let i = 0; i < length; i++) {
                let shiftingNumbers = num.shift()
                sum += shiftingNumbers;
            }
            return sum;
        }
        console.log('the sum is : ' , number( numberArray,length));


        /****************************************************************/

        /*summery : do atleast ones for the first time and after that just put that inside that code on loop (like : for loop) ,,and that will make the code continious*/