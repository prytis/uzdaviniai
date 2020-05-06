function enough(cap, on, wait) {
    return ((cap -  on - wait ) >= 0 ? 0 :  (cap -  on - wait )*-1);
}
console.log(enough(100,50,51));

function abbrevName(name){
    let lastName = name.replace(/\w*\s/,'');
    let abb = name[0].toUpperCase()+'.'+lastName[0].toUpperCase()
    return abb;

}
console.log(abbrevName('Patrick Feenan'));
