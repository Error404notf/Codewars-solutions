// function points(games) {
//   // games in x y format which is an array
//   // if x > y get 3 points
//   // if x < y get 0 points
//   // if x is equal to y get 1 point
//   let totalpoints = 0
//   for(let i = 0; i < games.length; i++){
//     if(games[i][0] > games[i][2]){
//       totalpoints += 3;
//     }else if(games[i][0] == games[i][2]){
//       totalpoints += 1;
//     }
//   }
//   return totalpoints;
// }
​
​
  // games in x y format which is an array
  // if x > y get 3 points
  // if x < y get 0 points
  // if x is equal to y get 1 point
const points = games => games.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y ? 1 : 0), 0)