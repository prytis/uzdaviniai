// "use strict";
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return(blueStart-bluePulled)/(blueStart-bluePulled+redStart-redPulled)
  }
  console.log(guessBlue(2,2,2,2));