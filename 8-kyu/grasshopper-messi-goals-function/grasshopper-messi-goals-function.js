// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   // add all goals and return
//   // change to an array then you use reduce to calculate
//   return [].reduce.call(arguments, (a,b) => a +b )
// }
  
// convert to an array
// const goals = (...a) => {
//     // add all the elements using reduce
//   return  a.reduce((a,b) => a + b , 0)
//   }
​
// return the result 
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals){
  return Number(laLigaGoals + copaDelReyGoals + championsLeagueGoals)
}
// add all the goals
​