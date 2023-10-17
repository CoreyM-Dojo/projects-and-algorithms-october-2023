var isPalindrome = function(x) {
    
    if (x === null) return false

    if (typeof x !== "number") return false;




    // ARGUMENTS
    // - Takes in an integer
    // RESULTS
    // returns a boolear
    // TOOLS
    // loops, (Some way to convert a number into a string/array), conditionals
    // 1. Check for early termination if number is negative
    if (x < 0) return false
    // 2. Convert the number into a string
    let numString = "" + x;
    // 3. use a while loop to compare each end of the numString

    // 4. Check if the right value matches the left value in the string
    console.log(numString);
    if (numString.length < 2) return true;
    let left = 0
    let right = numString.length - 1

    while (left <= right) {

        let leftValue = numString[left];
        let rightValue = numString[right]

        if (leftValue === rightValue) {
            left++
            right--
        } else {
            return false
        }
        return true
    }


    return true;
};

console.log(isPalindrome(0));