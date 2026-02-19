// function sumArray(array) {
//   // check for null or empty values
//   if(!array || array.length <= 2  ){
//     return 0;
//   }
//   let sum = 0;
//   array.sort((a,b)=> a - b )
//   // remove the lowest and highest number
//   for(let i = 1; i < array.length - 1; i++){
//      // sum all the numbers in the array
//     sum += array[i]
//   }
//   return sum;
  
 
// }
​
const sumArray = array => {
  if( !array || array.length <= 2  ){
    return 0;
  }
  return array.reduce((a,b) => a + b) - Math.min(...array) - Math.max(...array)
  }