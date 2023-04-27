let pokemonRepository = (function () {
  let repository = [

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

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {
      repository.push(pokemon);
    }  else {
      console.log('pokemon is not valid')
    }
  }

  function getAll(){
    return repository;
  }  
  function showDetails(pokemon){
    console.log(pokemon)
  }

  function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button-class');
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);

  //click of button dipsplays pokemon information to console
  button.addEventListener('click', function (){
    showDetails(pokemon);
  });
  }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.add({ name: 'Bulbasaur', height: '2.2', types: ['grass', 'poison']});

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});



// function displayAll(item) {
//   if (item.height >=2){
//     document.write(item.name + '(height: ' + item.height + ') - That is a big pokemon! </br>')
//   }
//   else {
//     document.write(item.name + '(height: ' + item.height + ') </br>')
//   }
// }
/* iterates through pokemon list array, first checks if height is greater or equal
to 2, if condition is met a special message is printed with the name and height of pokemon
*/
// for (let i=0; i < pokemonList.length; i++){
//   if (pokemonList[i].height >=2){
//   document.write(pokemonList[i].name + ' (height: ' +  pokemonList[i].height + ') - That is a big pokemon!</br>')}
//   else {
//     document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</br>')}
//   }


// changed for loop into forEach -- external function


// //internal anymous function
// pokemonList.forEach(function(item) {
//   if (item.height >=2){
//     document.write(item.name + '(height: ' + item.height + ') - That is a big pokemon! </br>')
//   }
//   else {
//     document.write(item.name + '(height: ' + item.height + ') </br>')
//   }
// });

// //arrow function
// pokemonList.forEach( item => {
//   if (item.height >=2){
//     document.write(item.name + '(height: ' + item.height + ') - That is a big pokemon! </br>')
//   }
//   else {
//     document.write(item.name + '(height: ' + item.height + ') </br>')
//   }
// });


