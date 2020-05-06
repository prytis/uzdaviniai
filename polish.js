"use strict";
function correctPolishLetters (string) {
    let newString = '';
 
    switch (string.toLowerCase()) {
    case 'jabroni' : 
        newString = "Patron Tequila";
        break;
     case 'school counselor' : 
        newString = "Anything with Alcohol";
        break;
    case  'programmer' : 
        newString = "Hipster Craft Beer";
        break;
    case    'bike gang member' : 
        newString = "Moonshine";
        break;
    case    "politician" : 
        newString = "Your tax dollars";
        break;
    case    "rapper" : 
        newString = "Cristal";
        break;
    default:
        newString = "Beer";
        break;
    };
    return newString;
    }
    


console.log(correctPolishLetters('JabrOni'))
