function finalGrade (exam, projects) {
  //Parameter = exam projects
  //Return = a final grade depending on either the exam score or number of projects
  //Examples = finalGrade(100, 12), 100 finalGrade(85, 5), 90
  //Pseudocode
  // check using a for loop
  // if exam is > 90 || projects > 10
  //else if exam is > 75 || projects >= 5 
  //else if exam > 50 || projects >= 2
  if(exam > 90 || projects > 10){
    return 100;
  }else if(exam > 75 && projects>=5){
    return 90;
  }else if ( exam > 50 && projects >= 2){
    return 75;
  }else {
    return 0;
  }
  return // final grade
}