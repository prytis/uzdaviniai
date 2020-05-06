// function hidrated(time){
//     let round = time*0.5;
    
//     return Number(round.toString().replace(/\.\d*/g, ""));
// }
// console.log(hidrated(9));

// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l + w)
//   };

//   function century(year) {
//     return ((year%100) === 0 ? year/100 : Math.floor(year/100)+1);
//   }
//   console.log(century(408593))
// function countSheeps(arrayOfSheep) {
//     let count = 0;
//     for ( let i = 0; i< arrayOfSheep.length; i++){
//         if (arrayOfSheep[i])
//         count++
//     }
//     return count;
//   }
// function enough(cap, on, wait) {
//     return ((cap -  on - wait ) >= 0 ? 0 :  (cap -  on - wait )*-1);
// }
// console.log(enough(100,50,51));
// function abbrevName(name){
//     let lastName = name.replace(/\w*\s/,'');
//     let abb = name[0].toUpperCase()+'.'+lastName[0].toUpperCase()
//     return abb;

// }
// console.log(abbrevName('Patrick Feenan'));
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