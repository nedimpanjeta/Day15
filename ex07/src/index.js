const myArray = () => {
    const array1 = [10, 11];
    const array2 = [12, 13, 14, 15];
    "use strict";
    return array1.concat(array2);
};


console.log(myArray());

module.exports = myArray;