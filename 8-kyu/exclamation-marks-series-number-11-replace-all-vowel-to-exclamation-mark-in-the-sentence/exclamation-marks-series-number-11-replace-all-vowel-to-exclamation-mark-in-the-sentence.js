function replace(s) {
  //Parameters = s
  //Return = !! to replace vowels
  //Examples = "aeiou", "!!!!!"
  //Pseudocode
  // replace vowels with !!
//     return s.replace(/a/g, '!').replace(/e/g,'!').replace(/i/g, '!').replace(/o/g,'!').replace(/u/g, '!').replace(/A/g, '!').replace(/E/g,'!').replace(/I/g, '!').replace(/O/g,'!').replace(/U/g, '!');
  // ANOTHER IMPLEMENTATION
  return s.replace(/[aeiou]/ig, '!')
}