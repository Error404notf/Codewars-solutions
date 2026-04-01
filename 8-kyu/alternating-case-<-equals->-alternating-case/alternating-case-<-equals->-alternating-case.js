String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  //Parameter = this object
  //Return = the string to the alternating case except for numbers
  //Examples = "1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E"
  //Pseudcode 
  // extract the element change to a string
  // check if uppercase to lowercase
  // if lowercase change to uppercase
  return this.split('').map( ac => ac === ac.toUpperCase() ? ac.toLowerCase():ac.toUpperCase()).join('')
  
  let newstr = ''
  for(let i =0; i< this.length; i++){
    if(this[i] === this[i].toUppercase()){
      newstr += this.toLowerCase()
    }else {
      newstr += this.toUpperCase()
    }
  }
  return newstr;
}