function differenceInAges(ages){
    let min = ages[0];
        let max = 0;
        for (let i = 0 ; i < ages.length; i++ ){
            if (ages[i] > max){
                max = ages[i]}
            if ( ages[i] < min ) {
                min = ages[i]
            }
            
        }
    return [min, max, max-min];
    }