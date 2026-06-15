function divisibleBy(numbers, divisor){
  //Parameter = numbers, divisor
  //Return = numbers divisible by the divisor inclusive of 0, else return an empty arry
  //Examples = [0,1,2,3,4,5,6], 4), [0,4]
  //Pseudocode
  // loop through the array
  // if number % divisor = push it to the new array if not empty array
//   let newArr = []
//   for(let i = 0; i<numbers.length; i++){
    
//     if(numbers[i] % divisor == 0){
//       newArr.push(numbers[i])
//     }
    
// }
//    return newArr;
  // another implementation
  return numbers.filter(v => v % divisor == 0)
}