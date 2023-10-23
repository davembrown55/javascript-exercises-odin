const reverseString = function(text) {
    let strArray = text.split("");
    let reversed = "";
    for (i = strArray.length - 1; i >= 0; i--) {
        reversed += strArray[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

// let text = "Hello World!";
// console.log(reverseString(text));

