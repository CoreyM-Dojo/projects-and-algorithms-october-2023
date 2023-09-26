/*
    * Given a string, return whether the string is considered a pangram (true/false)
    * A pangram is a sentence that includes every letter from a-z
*/

/*
    * 1) Write a function
        input: sentence (string)
        output: boolean
    * 2) Create a structure of characters all lowercase
    * 3) Loop through the string
    * 4)check if the current character is in the characters structure
    * 5) If at any time, the character is not included, return false

    * Example: "The quick brown fox jumps over a lazy dog" -> True
    * "" -> false
    * if input is not a string -> false
    * 
    * 
*/

function isPangram(sentence) {
    // Your code here
    if (typeof sentence !== "string") return false;

    const characters = "abcdefghijklmnopqrstuvwxyz";
    let loweredSentence = sentence.toLowerCase();
    for (let char of characters) {
        if (!loweredSentence.includes(char)) {
            return false
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over a lazy dog"));
console.log(isPangram(""));
console.log(isPangram(100));
console.log(isPangram("1 Pack my box with five dozen liquor jugs."));


/*
    * Given a string, return an array of all of the possible combinations of that string with the letters provided
    * cat would return [cat,cta,act,atc,tac,tca]
*/

/*
    * 1) Write a function
    * 2) Create an empty results list
    * 3) Check for empty string input -> return []
    * 4) loop over the string
    * 5) separate the string into two parts -> character at current index, rest of string minus the past characters
    * 6) combine the two parts after
*/ 

