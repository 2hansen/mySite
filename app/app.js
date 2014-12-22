'use strict';

var app = angular.module("2hansenApp", [
	'nvd3', 
	'ngRoute', 
	'navControllers', 
	'myServices'
])

nv.dev = false;


app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/:tabId', {
			templateUrl: 'templates/me.html',
		}).
		otherwise({
			redirectTo: '/me'
		});
}]);
	/*.run(function($rootScope){
		$rootScope.employees = [];
	})*/
