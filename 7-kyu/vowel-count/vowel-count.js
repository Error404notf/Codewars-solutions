function getCount(str) {
// //   Parameters => str
// //   Return => number of vowels in a given string
// //   Examples => ('abra') returns 2 vowels
// //   Pseudocode
//     // extract the string
//   // count the number the vowels in a given string
//   // return the number of vowels
  let vowelscount = 0;
  const vowels = ['a','e','i','o','u']
  for(let i = 0; i < str.length; i ++){
    if(vowels.includes(str[i])){
      vowelscount++
    }
  }
  return vowelscount;
}
​
// const getCount = str => {
// //   Parameters = str
// //   Result = return count of the number of vowels in a given string
// //   Examples = abra outputs 2
// //   Pseudocode 
//   // initialize a variable for the vowelscount
//   // extract the string by looping through it
//   // count the number of vowels
//   // store it in the variable
//   // return the variable
//   let vowelscount = 0;
//   for(let i = 0; i < str.length; i++){
//     if(str[i].includes('a') || str[i].includes('e') || str[i].includes('i') || str[i].includes('o') || str[i].includes('u')){
//       vowelscount += 1;
//     }
//   }
//   return vowelscount;
// }