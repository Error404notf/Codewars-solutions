// function doubleChar(str) {
//   // extract each letter in the string
  
//   // repeat each letter then return it
//   return str.split('').map(n => n + n).join('')
// }
​
​
const doubleChar = str => {
  let repeatword = ''
  for (let i =0; i < str.length; i++){
    repeatword += str[i] + str[i]
  }
  return repeatword;
}