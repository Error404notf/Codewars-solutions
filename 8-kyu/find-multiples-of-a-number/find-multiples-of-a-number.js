function findMultiples(integer, limit) {
  //your code here
  //Parameter = integer, limit
  //Return = multiplier upto limit
  //Examples = findMultiples(5, 25), [5, 10, 15, 20, 25]
  //Pseudocode 
  //loop from 1 till limit
  // the integer should <= limit
 const arr = []
//  for(let i = integer; i <= limit; i+=integer){
 
//     arr.push(i)
    
//   }
//   return arr;
  
  //Or implement it this way 
  for(let i = 1; i <=limit; i++){
    if(integer * i <= limit){
      arr.push(integer * i)
    }
  }
  return arr;
}
​