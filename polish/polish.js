"use strict";
function correctPolishLetters (string) {
    let newString = string;
 for (let i = 0; i < string.length; i++){   
    switch (string[i]) {
    case 'ą' : 
        newString = newString.replace( /ą/g ,"a");
        break;
     case 'ć' : 
        newString = newString.replace(/ć/g,  "c");
        break;
    case  'ę' : 
        newString = newString.replace(/ę/g,  'e');
        break;
    case    'ł' : 
        newString = newString.replace(/ł/g,  'l');
        break;
    case    'ń' : 
        newString = newString.replace(/ń/g,  'n');
        break;
    case    'ó' : 
        newString = newString.replace(/ó/g,  'o');
        break;
    case    'ś' : 
        newString = newString.replace(/ś/g,  's');
        break;
    case    'ź' : 
        newString =newString.replace(/ź/,  'z');
        break;
    case    'ż' : 
        newString =newString.replace(/ż/,  'z');
        break;
    };
    console.log(newString);
    }
    return newString;
}

console.log(correctPolishLetters('Jędrzej Błądziński'))
