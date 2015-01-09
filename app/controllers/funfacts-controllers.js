var funFactsControllers = angular.module('funFactsControllers', []);

funFactsControllers.controller('funfactsCtrl', ['$scope', '$log', 'Joke', function($scope, $log, Joke){
	$scope.joke = Joke.get({firstName: 'Bo Hansen', lastName: 'Hansen'}, function(joke) {
		$scope.funfacts = unescape(joke.value.joke.replace(/&quot;/g, "\""));
	});
}]);
