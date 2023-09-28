let exampleArray = [];
const objectArray = [];

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target[0].value);

    const newArray = e.target[0].value.split(",");
    exampleArray.push(newArray[0]);
    console.log(exampleArray)
})

const objForm = document.forms[1]

objForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newObj = {
        name: objForm["name"].value,
        favFood: objForm["favFood"].value,
        favStack: objForm["favStack"].value

    }
    objectArray.push(newObj);
    console.log(objectArray);
})



// Anatomy of arrays



// push - add to end of an array


// array.push(val)
// What is actually happening?
exampleArray.with(-1,20)
console.log(exampleArray);




// Get a value from an array
// Arrays are indexed starting with 0
console.log(exampleArray[2]);


// pop
// exampleArray.pop() // removes AND returns the last value in an array





// unshift - adds to the beginning of an array



// Shift -> removes the first element of an array and returns the value



// Splice



// Higher order functions

// ForEach

// map

// filter

// reduce




