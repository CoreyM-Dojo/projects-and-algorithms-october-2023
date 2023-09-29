let exampleArray = [];
const objectArray = [];

// document.getElementById("form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(e.target[0].value);

//     const newArray = e.target[0].value.split(",");
//     exampleArray.push(newArray[0]);
//     console.log(exampleArray)


// })

// const objForm = document.forms[1]

// objForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const newObj = {
//         name: objForm["name"].value,
//         favFood: objForm["favFood"].value,
//         favStack: objForm["favStack"].value

//     }
//     objectArray.push(newObj);
//     console.log(objectArray);
// })



// Anatomy of arrays



// push - add to end of an array
exampleArray.push(10);
exampleArray[exampleArray.length] = 10;
console.log(exampleArray.length);
console.log(exampleArray);


// array.push(val)
// What is actually happening?
// exampleArray.with(-1,20)
console.log(exampleArray);




// Get a value from an array
// Arrays are indexed starting with 0
console.log(exampleArray[2]);


// pop
// exampleArray.pop() // removes AND returns the last value in an array
const returnValue = exampleArray[exampleArray.length - 1];
exampleArray.length--;
console.log(exampleArray);
// exampleArray[exampleArray.length - 1] = null;





// unshift - adds to the beginning of an array
const addFront = (arr, val) => {
    arr.length++
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1]
    }
    arr[0] = val;
    arr.length--;
    return arr;
}

console.log("Unshift:",addFront([2,3,4,5],1));



// Shift -> removes the first element of an array and returns the value
const removeFront = (arr) => {
    
    for (let i = 1; i <= arr.length; i++) {
        arr[i-1] = arr[i]
    }
    arr.length--
    return arr;
}

console.log("Shift:",removeFront([2,4,6,8,10,12]));


// Splice/Slice
const names = ["Roberta", "Will", "Corey", "Stephen", "Dan"];
const numbers = [1,2,3,4,5];
const instructors = names.slice(1,3);
console.log(instructors);
names.splice(1,2, "Tyrone");
console.log(names);




// Higher order functions

let example = "";
// ForEach
const newNames = names.forEach((name, idx) => {
    example += name.toUpperCase() + ",";
})

console.log(example);

// map
const lowercaseNames = names.map((name, i) => (
    name.toLowerCase()
))
console.log(lowercaseNames);

// filter
const filteredNumbers = numbers.filter((num) => { return num < 30 })
console.log(filteredNumbers);
// reduce -> takes a sequence of data in an array and reduces it down to one value
const sum = numbers.reduce((num,numSum ) => {return numSum+=num }, 0 )
console.log(sum);




