let result = window.prompt("Enter your string");

// const REGEX = /^[a-z ,.'-]+$/i
// if (!result.match(REGEX)) alert("Improper format");

// document.getElementById("result").innerText = result.toLocaleLowerCase();

function capitalize(inputString) {
    // Using slice
    // inputString[0] = inputString[0].toUpperCase();
    // return inputString[0].toUpperCase() + inputString.slice(1);

    const charArray = inputString.split('');
    charArray[0] = charArray[0].toUpperCase();
    let resultString = charArray.join('')
    return resultString;
}

document.getElementById("result").innerText = capitalize(result);



// Receiving data -> Everyone has their preferred way of typing
/*

    * Corey Mckeel
    * Corey McKeel
    * corey mckeel
    * Corey mckeel
    * coreymckeel
    
*/

// Formatting

/*

    * Phone numbers
    * Credit card numbers
    * Address
    * Dates
    
*/



