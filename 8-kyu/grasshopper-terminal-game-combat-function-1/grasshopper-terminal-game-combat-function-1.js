function combat(health, damage) {
  // Parameter = health, damage
  //Return = the new health
  //Examples = (20, 30), 0, "Health cannot go below 0")
  //Pseudocode 
  // currenthealth = health - damage 
  // if current health is < 0 == health cannot go below 0
  let currentHealth = health - damage 
  if(currentHealth < 0){
    return 0 
  }else{
    return currentHealth;
  }
}