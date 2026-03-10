function removeEveryOther(arr){
  //Parameter = arr
  //Return = remove an arr with the second element removed
  //Examples = [['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]
  //Pseudocode
  
  //extract the array first
  // remove the second element then the 4th element ...
  // return the new array 
  
  let removearr = []
  for(let i = 0; i < arr.length; i = i + 2){
    removearr.push(arr[i])
  }
  return removearr;
}