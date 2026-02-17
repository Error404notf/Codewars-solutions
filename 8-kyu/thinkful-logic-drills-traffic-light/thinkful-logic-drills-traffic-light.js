function updateLight(current) {
  // current is green change to yellow
  if(current ==='green'){
    return 'yellow'
  }else if(current ==='yellow'){
     // current is yellow change to red
    return 'red'
  }else {
    // currnent is red change to green
    return 'green'
  }
 
  
  
}