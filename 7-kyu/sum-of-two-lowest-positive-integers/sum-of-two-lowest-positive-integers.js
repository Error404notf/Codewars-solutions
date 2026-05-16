function sumTwoSmallestNumbers(numbers) {  
  // Code here
  //Parameters = numbers
  //Return = sum of two smallest numbers
  //Examples = [15, 28, 4, 2, 43], 6
  //Pseudocode
  // sort the arrays
  // adds the first two numbers
  /// displays the sum of the first two numbers
  const asc = numbers.sort((a,b)=> a- b)
  const sum = asc[0] + asc[1]
  return sum
}