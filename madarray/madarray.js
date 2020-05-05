"use strict";
function madArray (a,b) {
    let squareSum = 0;
    let cubeSum = 0;
    for ( let i = 0; i < a.length; i++){
        squareSum = squareSum + a[i]*a[i];
    }
    for ( let i = 0; i < b.length; i++){
        cubeSum = cubeSum + b[i]*b[i]*b[i];
    }
    if (squareSum > cubeSum){
        return true;
    } return false;
}

console.log(madArray([4,5,6],[1,2,3,9]));