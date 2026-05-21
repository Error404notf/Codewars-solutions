function getMiddle(s) {
  //Code goes here!
   //Parameter = s
  //Return = middle xter when s is odd and when even return 2 xters
  //Examples = "test", "es"
  //Pseudocode
  // if the s.length % 2 == 0 s.length/2 + s.length/2 + 1
  //else s is s.length/2
  if( s.length % 2 !== 0){
    return s[Math.ceil(s.length/2-1)]
  }else {
    return s[s.length/2 - 1] + s[s.length/2]
  }
}