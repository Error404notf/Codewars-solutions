function between(a, b) {
  //Parameters = a,b
  //Return = numbers between a and b
  //Examples = between(1, 4), [1, 2, 3, 4])
  //Pseudocode
  // create an empty array
  // loop through the array starting at position 1
  // loop until it is less than b
  let betweenNum = []
  for(let i = a; i <=b; i++){
    betweenNum.push(i)
  }
  return betweenNum;
}