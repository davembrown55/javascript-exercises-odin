const palindromes = function (str) {
    let removeNonAlpha = /[^A-Za-z0-9]/g;
    let text = str.toLowerCase().replace(removeNonAlpha, "");

    let strArray = text.split("");
    let isPalindrome = false;
    for (let i = strArray.length - 1, x = 0; i > (strArray.length - 1)/2; i--, x++) {

        if (strArray[x] === strArray[i]) {
            isPalindrome = true;
        } else {isPalindrome = false};      
    }
    return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;

let exStr = "racecar"
let exStr1 = "r3ace3car"

console.log(palindromes(exStr1));


