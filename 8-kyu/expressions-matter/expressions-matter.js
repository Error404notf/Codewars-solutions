function expressionMatter(a, b, c) {
  //Parameter = a,b,c
  //Return = return the highest number after executing the operators
  //Examples = expressionMatter(3, 5, 7), 105
  //Pseudocode 
  // create a variable 
  //execute different operation
  // use Math.max to compare the various results obtained
  let resultOne = a * (b + c)
  let resultTwo = a * b * c
  let resultThree = a + b + c
  let resultFour = a + b * c
  let resultFive = (a + b) * c
  return Math.max(resultOne, resultTwo, resultThree, resultFour, resultFive)
}