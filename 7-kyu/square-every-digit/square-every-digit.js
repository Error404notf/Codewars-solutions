function squareDigits(num){
  //Parameter => num
  //Return => squared digits combined together
  //Example =>   765 = 493625 
  //Pseudocode
  
  // extract the number
  // split the number
  // square each number
  // then join back to an integer
  //Convert it back to a Number
//   return +(String(num).split('').map(n => n**2).join(''))
//   return Number(String(num).split('').map(n => n**2).join(''))
  return parseInt(String(num).split('').map(n => n**2).join(''))
}
​
// const squareDigits = (num) => {
//   let squared  = 0;
//   for(let i = 0; i < num.length; i++){
//     squared += num[i]**2
//   }
//   return squared;
// }
​