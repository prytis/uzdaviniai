"use strict";
function checkValue( myArray, myValue ) {
   
        let ilgis = myArray.length;
        console.log(ilgis);
    for (let i = 0; i < ilgis; i++){
        if ( myArray[i] === myValue){
            return true;
        }
            
    } return false;
}
console.log(checkValue(['cat', 'mouse'], 'mouse'));