function capitalizeWord(word) {
  //Parameter = word
  //Return =  the first letter capitalized
  //Examples = ('i'), 'I') 
  //Pseudocode
  // split the word
  // first word to be capitalized
  //join the word
  return word.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join('')
}