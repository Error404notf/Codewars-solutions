function oddOrEven(array) {
   //Parameters = array
   //Return = odd or even after summation of the array values
   //Examples = (oddOrEven([0]), 'even') (oddOrEven([0]), 'even') if the array is empty return [o]
   //Pseudocode
  // if arr.length == 0 put arr[o]
  // else if arr%2 == 0 put even otherwise put odd
    if(array.length == 0 ) return 'even'
    const sum = array.reduce((a,b)=> a + b, 0)
    return sum%2 == 0 ? "even" : "odd"
}