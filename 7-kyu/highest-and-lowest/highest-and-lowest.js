function highAndLow(numbers){
  //Parameters => numbers
  //Return => highest and lowest number
  //Examples => ("1 2 3"), "3 1"
  //Pseudocode
  
  // sort the numbers in descending order
  // pick the first and last number from the list
  // convert into a string with spaces in between
  let sorted = numbers.split(' ').sort((a, b) => b - a)
  return sorted[0] + ' '+ sorted[sorted.length -1] 
 
}