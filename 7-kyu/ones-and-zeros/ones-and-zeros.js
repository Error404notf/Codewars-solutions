const binaryArrayToNumber = arr => {
  //Parameters = arr
  //Return = binary numbers to whole integers
  //Examples = [0, 0, 0, 1]), 1
  //Pseudocode
  // convert arr to a string
  // use parseInt and base 2 to convert from binary to decimal/number
//   return parseInt(arr.join(''),2)
//   another implementation 
  arr.reverse()
  let count = 0
  for(var i = 0; i<arr.length; i++){
    if(arr[i] == 1){
      count += Math.pow(2,i)
    }
  }
  return count;
};