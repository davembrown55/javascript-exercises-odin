const leapYears = function(num) {
    if(num % 4 == 0 && !(num % 100 == 0) ||
    num % 400 == 0
    ) {
        return true;
    } else {return false;}  
};

// Do not edit below this line
module.exports = leapYears;

// let leapYear1 = 4;
// let leapYear2 = 1984;
// let leapYear3 = 2004;
// let leapYear4 = 1800;
// let leapYear5 = 1900;
// let leapYear6 = 1600;
// let leapYear7 = 2000;

// console.log(leapYears(leapYear1));
// console.log(leapYears(leapYear2));
// console.log(leapYears(leapYear3));
// console.log(leapYears(leapYear4));
// console.log(leapYears(leapYear5));
// console.log(leapYears(leapYear6));
// console.log(leapYears(leapYear7));
