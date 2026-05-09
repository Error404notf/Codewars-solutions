function multiTable(number) {
  //Parameter = number
  //Return = multiples of the number from 1 till 10
  //Examples = multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'
  //Pseudocode
  // if loop to check number >= 1 and <= 10
  let num = ''
  if( number >= 1 && number <= 10)
    for(let i = 1; i<=10; i++){
        numf = number * i
      if(i < 10){
         num += `${i} * ${number} = ${numf}\n` 
      }
       else {
        num += `${i} * ${number} = ${numf}` 
       }
        
    }
    return num;
}