function twoSort(s) {
  //Parameter = s
  //Return = first value with *** between xters
  //Examples = (twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' )
  //Pseudocode
  // sort the letters
  //return first splitted word then join with ***
  let sortedWords = s.sort()
  let firstWord = sortedWords[0]
  return firstWord.split('').join('***')
}