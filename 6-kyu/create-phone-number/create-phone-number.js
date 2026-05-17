function createPhoneNumber(numbers){
  //Parameter = numbers 
  //Examples = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111")
  //Return = in phone number format
  //Pseudocode
  // create 3 variable then concate them by converting them to string
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
}