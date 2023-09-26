// Algorithm of the day

/*
    * 1) Given an array of 100 randomly generated values, remove the duplicate values and return a new array
    * 2) Given an array of non-duplicate values between 1-100, return an array of the missing numbers in that sequence.
    * [1-99]
    ! Do not use the 'new Set()' constructor to remove duplicates
*/ 

function generateRandomArray(size) {
    const result = [];
    for (let i = 0; i < size+1; i++) {
        result.push((Math.floor(Math.random() * 20)) + 1);
    }

    return result;
}

const testArray = generateRandomArray(20);

function removeDuplicateValues(arr) {

    if (arr.length < 1) return arr;
    // console.log(arr);
    const resultArray = [];

    for (let value of arr) {
        // console.log(value)
        // if current value is not already in result array
        if (!resultArray.includes(value)) {
            // add the value to result array
            resultArray.push(value);
        }
    }

    // return result array
    return resultArray;
}

// console.log(removeDuplicateValues(testArray));

// console.log(testArray);

/*
    * Write a function
        * input: a sorted array with no duplicates -> Set
        * output: number -> missing number from sequence
    * loop through our data set
    * if the value at i != i+1, return that i+1
*/

function findMissingNumbers(numbersArray) {
    const resultArray = [];
    const arraySet = removeDuplicateValues(numbersArray);
    let i = 1;
    while (i <= numbersArray.length) {
        if (!arraySet.includes(i)) {
            // console.log(i)
            resultArray.push(i);
        } 
        i++;
    }
    // console.log("Result:", resultArray)
    return resultArray;
}

function sortFunction(a,b) {
    if (a > b) {
        return 1;
    } else if (b > a){
        return -1
    } else {
        return 0;
    }
}

console.log(findMissingNumbers(testArray));


