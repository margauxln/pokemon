// Lecture JSON
var requestURL="https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open('GET', requestURL,false);
request.send(null);

function GET(request) {
    pokemon = request.responseText;
    return pokemon
}

// Nombre de Pokemon
var json_Obj=JSON.parse(GET(request));
var numberPokemon=json_Obj.pokemon.length;

console.log("Nombre de Pokemons: "+numberPokemon);

// Nombre Pokemon > 10kg
let count10k=0;
let poids=0;

for (let i=0;i< numberPokemon;i++){
    poids=json_Obj.pokemon[i]['weight'].split(' ')[0];
    if(poids>10){
        count10k++
    }
}
console.log("number Pokemon > 10kg= "+count10k);

//Tri Tableau sur le Poids des Pokemons
json_Obj.pokemon.sort((a,b) => {
    return a.weight.split(' ')[0]-b.weight.split(' ')[0];
});

// console.log(json_Obj.pokemon)

// Fonction Evolution
var resultEvolution="";
function evolution(nomPokemon){
    for (let i=0;i< numberPokemon;i++){
        if (json_Obj.pokemon[i]['name']==nomPokemon){
            if(json_Obj.pokemon[i]['next_evolution']){
                resultEvolution=nomPokemon;
                let numberEvolution=json_Obj.pokemon[i]['next_evolution'].length;
                for (let j=0;j<numberEvolution;j++){
                    resultEvolution+=" -> "+(json_Obj.pokemon[i]['next_evolution'][j]['name']);
                }
            }
            else {
                resultEvolution="Il n'y a pas de next evolution pour ce pokemon";
            }
        }  
    }
    return resultEvolution;
}

console.log(evolution("Venusaur"));