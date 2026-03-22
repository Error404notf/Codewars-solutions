String.prototype.isUpperCase = function() {
  //Parameters = string
  //Return = false or true
  //Examples = 'hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case'
  //Pseudocode
  // check if str is uppercase all of them if it is write true, str is uppercase else false, str is not uppercase
  if(this.toString() == this.toUpperCase()){
    return true;
  }else {
    return false;
  }
}