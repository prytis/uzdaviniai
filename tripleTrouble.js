function tripleTrouble(one, two, three){
    let n = '';
    let l= Math.max(...[one.length,two.length,three.length]);
    for ( let i=0; i<l;i++){
    n=n+one[i]+two[i]+three[i];
    }
    return n;
   }
   console.log(tripleTrouble(1,2,3));