function fixTheMeerkat(arr) {
 //your code here 
  //Parameter = arr 
  //Return = postion of arr in the right position
  //Examples = ["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]
  //Pseudocode
  //loop through the array
  // move the last element to the first element
  let arrmeerkat = []
  for(let i = 0; i<arr.length; i++){
    arrmeerkat.unshift(arr[i])
  }
  return arrmeerkat;
}