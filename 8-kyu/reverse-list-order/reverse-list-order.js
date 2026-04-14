function reverseList(list) {
  //Parameter = list
  //Return = return a list in reversal order
  // Examples = [1,2,3,4]), [4,3,2,1]
  //Pseudocode
  // either I can create a loop or reverse the array
  return list.reverse();
  //Or
  let reverseArr = []
  for(let i = list.length-1 ; i >= 0;  i--){
    reverseArr.push(list[i])
  }
  return reverseArr;
}