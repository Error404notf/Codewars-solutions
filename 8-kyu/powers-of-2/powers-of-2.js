function powersOfTwo(n){
//   return []
  //Parameter = n
  //Return =  returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive)
  //Examples = powersOfTwo(4), [1, 2, 4, 8, 16]
  //Pseudocode 
  // create an array
  // loop 
  // push to the array
  let poweroftwo = []
  for  ( let i = 0; i <= n ; i++){
    poweroftwo.push( 2 ** i)
  }
  return poweroftwo;
}