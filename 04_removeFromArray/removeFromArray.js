const removeFromArray = function(array, ...args) {
    for (let i of args) {
        for (let j of array) {
            if (i === j) {
                let ind = array.indexOf(j);
                array.splice(ind, 1);
            }
        }
    }    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;