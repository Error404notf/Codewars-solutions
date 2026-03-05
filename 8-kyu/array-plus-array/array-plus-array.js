function arrayPlusArray(arr1,arr2) {
//   return arr1 + arr2; //something went wrong
  
  //Parameters = arr1 , arr2
  //Return = sum of the two arrays
  //Examples = ([1, 2, 3], [4, 5, 6]), 21)
  //Pseudocode
  
  // add the sum of each array element first .reduce
  // add both of them together i think it will work
  let arrone = arr1.reduce((a,b) => a + b, 0)
  let arrtwo = arr2.reduce((a,b) => a + b , 0)
​
  return arrone + arrtwo;
}