function bonusTime(salary, bonus) {
  // Parameter = salary, bonus
  //Return = total salary in '£salary value' if bonus = false return salary as is , if salary is true multiply salary by 10.
  //Examples = (25000, true), '£250000') , (10000, false), '£10000') 
  //Pseudocode
  // if salary is true : return `£ ${salary}* 10` : return salary
  if( bonus == true){
    return `£${salary*10}`
  }else{
    return `£${salary}` 
  }
}