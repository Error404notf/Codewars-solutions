function problem(x){
  //Parameter = x
  //Return = x * 50 + 6 if x != number return 'Error'
  //Examples = ("hello"), "Error") (1.2), 66) 
  //Pseudocode 
  // if x is a number (x*50) + 6 else 'Error'
  return typeof x == 'number' ? (x*50) + 6 : 'Error' 
}