function duplicateEncode(word){
    //Parameters = word 
    //Return = return ( for non-repeating words and ) for repeating words
    //Examples = ("din"),"(((") 
    //Pseudocode
    // convert word to lowercase
    // create a variable to store encoded xters
    // loop throught the word 
    // if the xters are duplicated put (  else  put )
    let lowerCase = word.toLowerCase()
    let encoded = ''
    for(let i = 0; i < lowerCase.length; i++){
      if(lowerCase.lastIndexOf(lowerCase[i]) == lowerCase.indexOf(lowerCase[i]) ){
        encoded += '('
      }else {
        encoded += ')'
      }
    }
       return  encoded
}
​