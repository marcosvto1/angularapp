angular.module("starter", ["ngRoute","home.controller","pokemon.controller","pokemon.service"])

.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "app/home/home.html"
	})
	.when('/pokemons',{
		templateUrl: "app/pokemon/pokemon.html",	  	
        controller: 'pokemonController'
	})
	/*.when("/sobre", {
        templateUrl : "app/sobre/sobre.html"
    })*/
	/*  .when("/empresas/:tipo_empresa",{
	  	templateUrl: "app/empresas/empresas.html",	  	
        controller: 'empresasCtrl'

	  })
	*/  

});


