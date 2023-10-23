const fibonacci = function(val) {
    if (val < 0){ return "OOPS"}
    if (+val === 0) {return 0}
    if (val > 0 && val <3) {return 1;}

    let num1 = 1, num2 = 1, tot;
    
    for (let i = 3; i <= +val; i++) {
        tot = num1 + num2;
        num1 = num2;
        num2 = tot;
    }
    return tot;

};

// Do not edit below this line
module.exports = fibonacci;

// let num = 4;
// console.log(fibonacci(25));
