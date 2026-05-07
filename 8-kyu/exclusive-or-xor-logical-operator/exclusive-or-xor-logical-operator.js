function xor(a, b) {
  // TODO: Program Me
  //Parameters = a,b
  //Return = return true if either a or b is true , returns false if true is not explicitly stated or if both a and b are true
  //Examples = (true, false), (true  true, true), false (false, true), true
  //Pseudocode
  // if a = true and  b = false || a = false and  b = true
  // return true
  //else if a = false and b = false || a = true and b = true
  // return false
  
  return a == false && b ==true || a ==true && b ==false ? true: false
  
}