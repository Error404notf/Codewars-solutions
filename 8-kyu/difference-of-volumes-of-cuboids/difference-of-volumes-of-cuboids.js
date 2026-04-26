function findDifference(a, b) {
  //loading...
  //Parameter = a,b
  //Return = difference in volumes between the two arrays
  //Examples = findDifference([11, 2, 5], [1, 10, 8]), 30
  //Pseudocode
  // find the volume of each array
  // find the difference
  let volume = a[0] * a[1] * a[2]
  let volumeTwo = b[0] * b[1] * b[2]
  let highestNumber = Math.max(volume,volumeTwo)
  let lowestNumber = Math.min(volume,volumeTwo)
  return highestNumber - lowestNumber;
  
  //or
  return Math.abs(a.reduce((a,b)=> a * b) - b.reduce((c,d)=> c * d))
}