function arrayDiff(a, b) {
  //Parameter = a,b 
  //Examples  = [1,2,2], [2]), [1],
  //Return = the number that's not in the second array
  //Pseudocode 
  // create a new array
  //loop through each array
  // if arr a does not have a number in arr b push that array
  // return the array
​
  
  let diffArr = []
  
  for(let i = 0; i< a.length; i++){
    
    let bContainsAValue = false;
    
    for(let j = 0 ; j< b.length; j++){
      
     if(a[i] == b[j]) bContainsAValue = true
      
    }
    if(!bContainsAValue) diffArr.push(a[i]);
  }
  
  return diffArr;
}