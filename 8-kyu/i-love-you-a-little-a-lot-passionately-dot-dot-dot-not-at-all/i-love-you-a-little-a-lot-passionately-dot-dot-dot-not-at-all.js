function howMuchILoveYou(nbPetals) {
    // your code
  //Parameter = nbPetals
  //Return = the last word 
  //Example = howMuchILoveYou(3),"a lot"
  //Pseudocode
  //initiate variables with the names eg array
  // loop through the array
  // if the nbpetals > 6 add one number to each petal
  // if less the petals will be displayed based off the array
 const petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
 let index = (nbPetals - 1) % petals.length;
  return petals[index]
}
​