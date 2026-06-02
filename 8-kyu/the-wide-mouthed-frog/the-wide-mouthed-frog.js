function mouthSize(animal) {
  //Parameter = animal
  //Return = small for alligator and wide for all other animals and it case insensitive
  //Examples = ("toucan"),"wide") , ("alligator"),"small")  
  //Pseudocode
  // if animal is alligator output small while the rest should be wide
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide'
}