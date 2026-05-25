function isIsogram(str){
  //Parameter = str
  //Return = true for isogram false if not isogram
  //Examples = "Dermatoglyphics", true  "moOse", false
  //Pseudocode 
  //repeating words = false
  // non-repeating letters, empty string and ignore letter case  = true
  // convert to lowercase
  // split the str
  //sort the str
  // loop through the str
  // check if current str is same as next str
  let lowerCase = str.toLowerCase()
  let splitArray = lowerCase.split('')
  let sortedArray = splitArray.sort()
  for(let i = 0; i < sortedArray.length; i++){
    if(sortedArray[i] == sortedArray[i + 1]){ 
      return false
    }
    }
    return true
}