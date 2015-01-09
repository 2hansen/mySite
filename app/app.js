'use strict';

var app = angular.module("2hansenApp", [
	'nvd3', 
	'ngRoute', 
	'navControllers', 
	'employmentControllers',
	'educationControllers',
	'publicationControllers',
	'funFactsControllers',
	'myServices',
	'jokeService'
])

nv.dev = false;


app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/:tabId', {
			templateUrl: 'templates/nav.html',
		}).
		otherwise({
			redirectTo: '/me'
		});
}]);

