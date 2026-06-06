function accum(s) {
  // your code
  //Parameter = s
  //Return = return number of strings by adding by one from a-z
  //Examples = Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
  //Pseudocode
  // split s
  // convert to uppercase
  // add uppercase with lowercase by adding based on the index
  // join using -
  
    return s.split('').map((item,index) => item.toUpperCase() + item.toLowerCase().repeat(index)).join('-');
}