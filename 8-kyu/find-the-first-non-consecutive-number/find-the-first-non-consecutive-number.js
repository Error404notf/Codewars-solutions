function firstNonConsecutive (arr) {
  //Parameters = arr
  //Return = return null for empty and non-integer else return non-consecutive number
  //Examples = const first = firstNonConsecutive([1,2,3,4]) assert.strictEqual(first, null)
    
  //Pseudocode
  // loop through the array
  //if the int is !arr[i] + 1 return non-consecutive
  // else if arr == [] || arr is not an integer return null
  for(let i = 1; i < arr.length; i++){
    if(arr[i - 1] + 1 !== arr[i]){
      return arr[i]
    }
  }
  return null;
}
​