"use strict";
function sumOfPos(myArray) {
    let mySum = 0;
for (let i = 0; i<myArray.length; i++){
    if (myArray[i]>0 && typeof (myArray[i] === 'number')){
        mySum = mySum + myArray[i];
    }
}
return mySum;
}

console.log(sumOfPos([1,-2,3,4,5]));