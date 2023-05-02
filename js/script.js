let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //   {
  //       name: 'Charizard',
  //       height: 1.7,
  //       types: ['fire', 'flying']
  //   },
  //   {
  //       name: 'Venusaur',
  //       height: 2,
  //       types: ['grass', 'poison']
  //   },
  //   {
  //       name: 'Weedle',
  //       height: 0.3,
  //       types: ['bug', 'poison']
  //   },
  // ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon 
    ) {
      pokemonList.push(pokemon);
    }  else {
      console.log("pokemon is not valid")
    }
  }

  function getAll(){
    return pokemonList;
  }  

  function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
   //click of button dipsplays pokemon information to console
   button.addEventListener("click", function(event){
    showDetails(pokemon);
  });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }) .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }  

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response){
      return response.json();
    }).then(function (details) {
      //add the details of item which come from the API (sprites, height, and types)
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item){
    pokemonRepository.loadDetails(item).then(function() {
    console.log(item)
  });
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

// pokemonRepository.add({ name: 'Bulbasaur', height: '2.2', types: ['grass', 'poison']});

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  });
});

//  //click of button dipsplays pokemon information to console
//   button.addEventListener('click', function (){
//     showDetails(pokemon);
//   });
  


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


