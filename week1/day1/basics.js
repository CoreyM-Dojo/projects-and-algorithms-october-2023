// Ternary -> one line conditional statement (can be nested)
// (condition) ? result if true : result if false

let num = 10;

let conditionString = num === 10 ? "Its Equal!" : num > 10 ? "Its greater"  : "Its less";
console.log(conditionString);

if (num === 10) {
    console.log("It is equal");
} else if (num > 10) {
    console.log("Its greater");
} else {
    console.log("Its less")
}

var color = "red"


function trafficLight() {
    console.log("Light is " + color );

    switch(color) {
        case "red":
            color = "green"
            break
        case "green":
            color = "yellow"
            break
        case "yellow":
            color = "red"
            break
        default:
            break;
    }
}

// setInterval(trafficLight, 3000);
// clearInterval(trafficLight);

// for - When the number of iterations is known
for (let i = 0; i < 15; (() => {console.log("Hello"); i++})()) { // IIFE to add a little extra to the end of each iteration
    trafficLight();
}


// while - When we may not know the number of iterations needed to complete the process

// do while - guarantees the loop will be run at least once



