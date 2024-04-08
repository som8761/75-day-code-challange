 /* concat method is one kind of push method (But the push method doesn't return a new array, whereas concat returns a new array.) */

        // The concat method itself returns a new array, so there's no need to create a new array separately. If we directly return it, that's fine. But if we need to push it into another blank array, then a new array will be created within it, meaning a new array inside an array. So, there's no need to concatenate to another array.

        /* (IMPORTANT) **
        concat is a method used to combine two or more arrays and return a new array containing the elements of the original arrays. It does not modify the original arrays. */

        /* without a function, I have done this, but I need to do something inside a function as it is a good practice. */

        // Concatenating multiple arrays.
        const arra = [1,2,3,4,5,] 
        const array2 = [7,8,9,10]
        const array3 = [17,18,19,20]

        const concatedArray = arra.concat(arra,array3)
        console.log(concatedArray);

        // Concatenating arrays of strings.
        const names1 = ['Alice', 'Bob'];
        const names2 = ['Charlie', 'David'];
        
        const allNames = names1.concat(names2)
        console.log(allNames);

        // Concatenating arrays with empty arrays.
        const originalArray = [1,2,3]
        const blankArray = []

        const copiedArray = originalArray.concat(blankArray)
        console.log(copiedArray);

        // Concatenate Arrays with Strings:
        const array = [1, 2, 3];
        const separator = '-'; // The separator will be added after each element.

        const concatenatedString = array.join(separator)
        console.log(concatenatedString);

        // Concatenate Arrays with Spread Operator:
        const arr11 = [1, 2];
        const arr22 = [3, 4];
        const concatenatedArray = [...arr11,...arr22]
        console.log(concatenatedArray); // Output: [1, 2, 3, 4]

        /****************************EXERCISES*****************************/
        console.log('EXERCISES');

        /* Combine Multiple Arrays: */

        const num1 = [1,2]
        const num2 = [12,14]

        function multipleArrayConcat(number1,number2){
            return number1.concat(number2)
           
        } 

        const concatenateArray = multipleArrayConcat(num1,num2)
        console.log(concatenateArray);

        // The concat method itself returns a new array, so there's no need to create a new array separately. If we directly return it, that's fine. But if we need to push it into another blank array, then a new array will be created within it, meaning a new array inside an array. So, there's no need to concatenate to another array.
        // concat is a method used to combine two or more arrays and return a new array containing the elements of the original arrays. It does not modify the original arrays.

        /* Summary:
        
        push = adds from the end. (Doesn't return a new array)
        unshift = adds from the beginning. (Doesn't return a new array)
        pop = removes from the end. (Doesn't return a new array)
        shift = removes from the beginning. (Doesn't return a new array)
        concat = concatenates two or more arrays. (Returns a new array, doesn't modify the original arrays)
        filter = filters elements based on a condition. (Returns a new array, doesn't modify the original array)
        
        ** Loop is used when something needs to be repeated multiple times, either for a specified number of times or until a specified target is met.

        We use functions to perform the same operation at different places with different values.

        However, a loop is needed to repeat something, i.e., the same task is performed repeatedly. For example, if we loop the music, the same music will play repeatedly.
        */