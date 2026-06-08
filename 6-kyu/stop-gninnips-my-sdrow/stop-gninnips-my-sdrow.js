function spinWords(string){
  //Parameters = string
  //Return = 
  //Examples =
  //Peudocode
  // split the string
  // check each word if it has 5 or more reverse it
  // join the words
  const splittedWords = string.split(' ')
  let results = []
  for(let i = 0; i < splittedWords.length; i++){
    if(splittedWords[i].length >=5){
      results.push(splittedWords[i].split('').reverse().join(''))
    }
    else if(splittedWords[i].length < 5){
      results.push(splittedWords[i])
     }
  }
    return results.join(' ');
}