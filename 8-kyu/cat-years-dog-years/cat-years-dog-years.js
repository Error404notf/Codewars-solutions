var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catyearsfirst = 15;
  let catyearssecond = catyearsfirst + 9 ;
  let catyearslater = catyearssecond + (4*(humanYears-2))
  let dogyearsfirst = 15;
  let dogyearssecond = dogyearsfirst + 9;
  let dogyearslater = dogyearssecond + (5*(humanYears-2))
  if (humanYears == 1) {
    
    return [humanYears,catyearsfirst,dogyearsfirst];
    }else if(humanYears == 2){
      return[humanYears,catyearssecond,dogyearssecond];
    }else {
      return[humanYears,catyearslater,dogyearslater];
    }
//   return [0,0,0];
  //Parameter = humanYears
  //Return = catyears and dogyears based off humanyears 
  //Examples = humanYearsCatYearsDogYears(2), [2,24,24])
  //Pseudocode 
   // if humanyears = 1 then catyears and dogyears is 15 
   // elseif humanyears = 2 then catyears and dogyears is 15 + 9
  // else create a variable with 24 then add 4 for each years for catyears and then add 5 for each for dogyears
}
​