// function feast(beast, dish) {
//  // first beast letter matches the dish first letter
//   // last beast letter matches the dish last letter
//   return beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length - 1) == dish.charAt(dish.length -1)
// }
​
const feast = (beast, dish) => 
  // access the beast first letter and dish first letter if they meet
  // access the beast last letter and dish last letter if they match
  beast[0] == dish[0] && beast[beast.length - 1 ] == dish[dish.length - 1] ? true : false
​