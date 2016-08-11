angular.module('pokemon.service',[])

.factory('pokemonService',function($http,$q){

	
	return {	 
            getPokemon: function(url) {             
            		return $http.get(url)
	                .then(function(response) {				
						return response.data;
					});            			
            }                    
    } ;      

});