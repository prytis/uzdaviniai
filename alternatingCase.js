"use strict";
String.prototype.toAlternatingCase = function () {
    myString = this;
    let newString = '';
    for ( let i = 0 ; i < myString.length; i++) {
        myString[i] == myString[i].toUpperCase() ?
            newString = newString + myString[i].toLowerCase() :
            newString = newString + myString[i].toUpperCase()
  
    }
    return newString;
  } 
  
  console.log('000HhGgFFFAsDfHh1E'.toAlternatingCase());

