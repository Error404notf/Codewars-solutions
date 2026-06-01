function mergeArrays(arr1, arr2) {
  //Parameter = arr1, arr2
  //Return = one array in ascending order with no repeating integers
  //Examples = [1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12]  
  //Pseudocode
  //combine the arrays
  // sort the arrays in ascending order
  // remove duplicate values
  // if empty return an empty array
  if (arr1 == [] && arr2 == [])
    return []
  let combinedarray = arr1.concat(arr2)
  let sortedArray = combinedarray.sort((a,b) => a - b)
  let merged = []
  for(let i = 0; i < sortedArray.length; i++){
    if(sortedArray[i] !== sortedArray[i + 1]){
      merged.push(sortedArray[i])
      }
    }
  return merged;
}