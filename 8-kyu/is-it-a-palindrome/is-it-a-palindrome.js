function isPalindrome(x) {
  //Parameters = x
  //Return = true if palindrome and false if not palindrome
  //Examples = isPalindrome("hello"), false
  //Pseudocode 
  // extract the x then split
  // reverse then join
  // check if it matches the original word
  return x.split('').reverse().join('').toLowerCase() == x.toLowerCase() ? true : false
  
}