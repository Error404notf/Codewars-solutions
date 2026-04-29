function peopleWithAgeDrink(old) {
  //Parameters = old
  //Return = the drink
  //Example = peopleWithAgeDrink(22), 'drink whisky'
  //Pseudocode
  // a condition based off the age
  // chidren < 14 = drink toddy
  // children < 17 = drink coke
  // teens < 21 = drink beer
  // adults >= 21 = drink whisky
  if(old < 14){
    return 'drink toddy'
  }else if(old < 18){
    return 'drink coke'
  }else if(old < 21){
    return 'drink beer'
  }else {
     return 'drink whisky';
  }
 
};