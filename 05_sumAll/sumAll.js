const sumAll = function(int1, int2) {
    if(int1 < 0 || int2 < 0) {
        return "ERROR"
    } 
    if (typeof int1 != "number" || typeof int2 != "number") {
        return "ERROR";
    } 
    
    if (int1 < int2) {
        let sum = 0;
        for (let i=int1; i <= int2; i++) {
            sum += i;
        } 
        return sum;
    } else if (int1 > int2) {
        let sum = 0;
        for (let i=int2; i <= int1; i++) {
            sum += i;
        } 
        return sum;
        }
    }

// Do not edit below this line
module.exports = sumAll;

// let num1 = 4;
// let num2 = 1;
// console.log(sumAll(num1, num2));


