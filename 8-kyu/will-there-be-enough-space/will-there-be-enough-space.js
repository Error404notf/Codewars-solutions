function enough(cap, on, wait) {
  //Parameters = cap, on, wait
  //Return = 0 if all the passengers, if not return how many passengers can't be in the bus 
  //Examples = enough(100, 60, 50), 10
  //Pseudocode
  // check on cap, on, wait
  // minus wait - cap if there's a reminder say that the number if not it is zero
  let result = cap - (on + wait)
  return result > 0 ? 0 : Math.abs(result);
}