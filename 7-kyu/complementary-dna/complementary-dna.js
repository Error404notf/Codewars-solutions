function dnaStrand(dna){
  //Parameter = dna
  //Return =  return an inverse of each word where a replace with t , t replace with a,  c replace with g, g replace with c
  //Examples = ("ATTGC"),"TAACG"
  //Pseudocode
  //replace A with T
  //replace T with A
  //replace C with G
  //replace G with C
  //split dna
  // loop through the arr
  const splittedArray = dna.split('')
​
  let arr = []
  for(let i = 0; i<splittedArray.length; i++  ){
      if(splittedArray[i].includes('A')){
          arr.push(splittedArray[i].replace('A','T'))
      }else if(splittedArray[i].includes('T')){
          arr.push(splittedArray[i].replace('T','A'))
      }else if(splittedArray[i].includes('C')){
          arr.push(splittedArray[i].replace('C','G'))
      }else if(splittedArray[i].includes('G')){
          arr.push(splittedArray[i].replace('G','C'))
      }
  }
  return arr.join('')
}