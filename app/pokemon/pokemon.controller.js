angular.module('pokemon.controller',[])

.controller('pokemonController',function($scope,pokemonService){
	$scope.pokemins = [];
	pokemonService.getPokemon('http://pokeapi.co/api/v2/pokemon/?limit=100').then(function(data) {
		$scope.pokemons = data;		
    }, function(error) {

  	});
});