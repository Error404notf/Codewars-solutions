function cockroachSpeed(s) {
  //Parametes = s
  //Return = from km per hour to cm per second rounded down , should be an integer and >= 0
  //Example = (1.08), 30
  //Pseudocode
  
  // change s to cm per second , should be an integer
  return Math.floor( s / 0.036)
}