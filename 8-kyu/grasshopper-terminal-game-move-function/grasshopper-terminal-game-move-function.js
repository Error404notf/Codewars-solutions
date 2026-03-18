function move (position, roll) {
  //Parameters = position, roll
  //Return = the number of rolls from the initial position
  //Examples = move(0, 4), 8
  //Pseudocode =
   // the initial position indicated by position
  // the roll multiply by two
  // get the new position will be initial position + roll * 2
  return position + (roll * 2)
}