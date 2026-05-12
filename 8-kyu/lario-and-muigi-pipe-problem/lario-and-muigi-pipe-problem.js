function pipeFix(numbers){
 //Parameter = numbers
  //Return the numbers in ascending order using the range provided
  //Examples = ([-1,4]),[-1,0,1,2,3,4]
  //Pseudocode
  // start the loop with the numbers[0]
  // condition <= numbers[1]
  // i++
 
  let arr = []
  for(let i = numbers[0]; i<=numbers[numbers.length-1]; i++){
    arr.push(i)
  }
  return arr;
}