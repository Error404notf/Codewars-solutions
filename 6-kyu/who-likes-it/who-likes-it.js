function likes(names) {
  // TODO
  //Parameter = names
  //Return = people who have liked the post and it's more than or equal to  4 people count the number of people at 4 people
  //Examples = ['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')
  //Pseudocode
  // if names is empty return an empty array
  // if names is one return one name
  // if names is two include and between the two names
  // if names is three include and before the last name
  //if names are less than 4 = include all the names
  //if names are 4 or more include the first two names followed by number of names remainig
  if(names.length == 0){
    return `no one likes this`
  }else if(names.length == 1){
    return `${names} likes this`
  }else if(names.length == 2){
    return `${names[0]} and ${names[1]} like this`
  }else if(names.length == 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else if(names.length >=4){
    const twowords = names.slice(0,2)
    return `${names[0]}, ${names[1]} and ${names.length - twowords.length} others like this`
  }
}