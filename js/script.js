let pokemonList = [

  {
      name: 'Charizard',
      height: 1.7,
      types: ['fire', 'flying']
  },
  {
      name: 'Venusaur',
      height: 2,
      types: ['grass', 'poison']
  },
  {
      name: 'Weedle',
      height: 0.3,
      types: ['bug', 'poison']
  },

];

/* iterates through pokemon list array, first checks if height is greater or equal
to 2, if condition is met a special message is printed with the name and height of pokemon
*/
for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height >=2){
  document.write(pokemonList[i].name + ' (height: ' +  pokemonList[i].height + ') - That is a big pokemon!</br>')}
  else {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</br>')}
  }
  