function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  //Parameter = marks
  //Return = the average rounded down
  //Examples = getAverage([2,2,2,2]),2
  //Pseudocode
  // get the average of marks then round it down
  // sumation of all the marks
  // average it by the total number of marks = count all elements
  // round it down using math.floor
  return Math.floor(marks.reduce((a,b)=> a + b, 0)/ marks.length)
}