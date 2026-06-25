function distinct(a) {
  //Parameters = a
  //Return = non-duplicate values 
  //Examples = [1,1,2]), [1,2]
  //Pseudocode
  // create an empty array []
  // sort the numbers and assign it a value
  // loop through the array
  // if the next value is not the same as the previous one push it to the array
  return [...new Set(a)];
}