function greet(language) {
  //Parameters = languages
  //Return = the word hello in the other person's language
  //Examples = greet('dutch'), 'Welkom'
  //Pseudocode
  // create an array or object
  // refer the language based off the first array or object
  let languages = [["english", "Welcome"], ["czech", "Vitejte"], ["danish", "Velkomst"], ["dutch", "Welkom"], ["estonian", "Tere tulemast"], ["finnish", "Tervetuloa"], ["flemish", "Welgekomen"], ["french", "Bienvenue"], ["german", "Willkommen"], ["irish", "Failte"], ["italian", "Benvenuto"], ["latvian", "Gaidits"], ["lithuanian", "Laukiamas"], ["polish", "Witamy"], ["spanish", "Bienvenido"], ["swedish", "Valkommen"], ["welsh", "Croeso"]]
  const pair = languages.find(([x])=> x === language)
  return pair ? pair[1] : 'Welcome'
}