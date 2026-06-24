// return masked string
function maskify(cc) {
  //Parameters = cc
  //Return = masked characters except the last four letters
  //Examples = ('1'), '1') 
  //Pseudocode 
  // create a variable to hold 4 xters
  // variable that holds the rest
  // if length is less than 4 display as is
   let four = []
   for(let i = 0; i < cc.length-4; i ++){
      four.push('#')
   }
   for(let i = cc.length-4; i <= cc.length-1; i++){
      four.push(cc[i])
    }
  return four.join('')
}
​