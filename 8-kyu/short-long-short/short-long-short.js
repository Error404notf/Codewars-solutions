function solution(a, b){
  //Parameter = a,b
  //Return = string of short outside and long inside
  //Examples = ('U', 'False'), 'UFalseU') 
  //Pseudocode 
  // if a.length > b.length bab else aba
  return a.length > b.length ? `${b}${a}${b}`: `${a}${b}${a}`
}
​