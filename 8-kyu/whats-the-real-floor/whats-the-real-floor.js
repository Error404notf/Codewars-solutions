function getRealFloor(n) {
  //Parameters = n
  //Return = the given floor 
  //Examples = getRealFloor( 5),  4 
  //Pseudocode
  // for floors >= 13 remove two floors for floors < 13 remove the ground floor
  if(n >= 13){
    return n - 2;
  }else if(n < 13 && n > 0){
    return n - 1;
  }else if(n < 0  || n == 0){
    return n;
  }
  
}