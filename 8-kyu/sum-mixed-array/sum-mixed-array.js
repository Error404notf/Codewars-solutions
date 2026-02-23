function sumMix(x){
 //convert str to numbers in the array
  return x.map(num => +num)
  // sum all the values
  // return the answer as a number
  .reduce((a,b)=> a + b , 0)
  
}