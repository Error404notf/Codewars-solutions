// function makeNegative(num) {
 
//   if(num > 0){
//      // change positve to negative
//     return -Math.abs(num)
//   }else if( num < 0){
//     // negative remains negative
//     return num;
//   }else {
//      // o number remains 0
//       return 0
//   }
​
const makeNegative = (num) => 
  // change positive to negative
  // negative remains negative
  // 0 remains 0
  num > 0 ? -Math.abs(num) : num
  
 
​