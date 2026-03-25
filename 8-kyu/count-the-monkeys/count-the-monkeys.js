function monkeyCount(n) {
  //Parameters = n
  //Return from number to n(included)
  //Examples = monkeyCount(3)), [1, 2, 3]
  //Pseudocode
  // create a variable for an array
  // loop from 1 till n
//   let totalnumber = []
//   for(let i = 1; i <=n; i++){
//     totalnumber.push(i)
//   }
//   return totalnumber;
  
  // or do it this way
    for (var i = 0, arr = []; i <n; arr.push(++i));
  
    return arr;
}