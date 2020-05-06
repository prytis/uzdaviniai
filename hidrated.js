function hidrated(time){
    let round = time*0.5;
    
    return Number(round.toString().replace(/\.\d*/g, ""));
}
console.log(hidrated(9));

const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : 2*(l + w)
  };