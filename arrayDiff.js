"use strict";
function arrayDiff(a, b) {
    let inerationNR =  a.length;
      for ( let i = 0; i < inerationNR; i++ ) {
         for ( let y = 0; y < b.length; y++){
             if ( a[i] === b[y] ) {
                  a.splice(i,1);
                  i--;
             }
  
         }
      }
     
     return a;
  }