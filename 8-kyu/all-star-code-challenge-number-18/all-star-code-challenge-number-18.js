function strCount(str, letter){  
  //Parameters = str, letter
  //Return =  how many times the letter appeared in the str and if no occurences it will be zero
  //Examples = strCount('Hello', 'l'), 2
  //Pseudocode
  // create a variable
  // loop through the string
  // find if a letter is the same then add to it
  let wordcount = 0;
  for(let i = 0; i <str.length; i++){
    if(str[i] === letter ){
      wordcount++;
      }
    }
  return wordcount;
}