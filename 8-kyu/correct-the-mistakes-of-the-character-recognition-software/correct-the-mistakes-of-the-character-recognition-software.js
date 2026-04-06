function correct(string)
{
  // Parameter = string
  //Return = words with the misplaced correctly formatted
  //Examples = ("L0ND0N"),"LONDON"
  //Pseudocode
  // use replace to replace 5 as S , 0 to O AND 1 to I
  return string.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I')
}