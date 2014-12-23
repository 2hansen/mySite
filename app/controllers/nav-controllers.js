var navControllers = angular.module('navControllers', []);

//The TabController
navControllers.controller('tabCtrl', ['$routeParams', '$scope', function($routeParams, $scope){
	$scope.tabs = [
		{
			url: 'me', 
			label: 'Me',
		},
		{
			url: 'career', 
			label: 'Career',
		},
		{
			url: 'stats', 
			label: 'Stats',
		},
		{
			url: 'map', 
			label: 'Map',
		}
	];
	$scope.isSet = function(tabId){
    	return tabId === $routeParams.tabId;
    };

   $scope.getTemplate = function(template){
    	//$log.log('test: ' + test);
    	if (template != 'undefined')
    		return 'templates/' + template + '.html';
    };
}]);