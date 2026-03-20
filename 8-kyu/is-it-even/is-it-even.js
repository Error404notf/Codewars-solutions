function testEven(n) {
    //Parameters = n
    //Return = true or false
    //Examples = testEven(-4), true  testEven(0.5), false
    //Pseudocode 
  // check if a number is even = true or false
  // -numbers also included 
  // floating numbers are considered false
    if( n % 2 === 0){
      return true;
    }else if(n < 0){
      return Math.abs(n) % 2 === 0 ? true : false
    }else {
      return false;
    }
}