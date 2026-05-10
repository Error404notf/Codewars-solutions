function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  //Parameter = birds
  //Return = return an array containing all of the strings in the input array except those that match strings in geese
  //Examples = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
  //Pseudocode
   //Use the birds array
  // return the birds not including the geese list
  // use filter or !=
//   const filtered = birds.filter(bird =>  !geese.includes(bird))
//   return filtered;
  
  // Or a for loop
  let newarr = []
  for(let i = 0; i<birds.length; i++){
    if(!geese.includes(birds[i])){
        newarr.push(birds[i])
    }
  }
  return newarr;
};