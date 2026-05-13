function saleHotdogs(n){
  //Parameter = n 
  //Return =  how much will be paid based off the number of hotdogs a customer will buy
  //Examples = (  5),  475), ( 10),  900).
  //Pseudocode
  // if n < 5 then each hotdog will cost ksh 100 if n >= 5 and n < 10 then each hotdog will cost 95ksh and if it's more then it will cost 90ksh to buy each hotdog
  
  return  n < 5 ? n*100 : n >= 5 && n < 10 ? n * 95 : n * 90
}