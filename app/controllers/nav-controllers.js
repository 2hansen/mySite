	var navControllers = angular.module('navControllers', []);

//The TabController
navControllers.controller('tabCtrl', ['$routeParams', '$scope', function($routeParams, $scope){
	$scope.tabs = [
		{
			url: 'me', 
			label: 'Me',
			visible: true
		},
		{
			url: 'employment', 
			label: 'Employment',
			visible: true
		},
		{
			url: 'education', 
			label: 'Education',
			visible: true
		},
		{
			url: 'publications', 
			label: 'Publications',
			visible: true
		},		
		{
			url: 'stats', 
			label: 'Stats',
			visible: false
		},
		{
			url: 'map', 
			label: 'Map',
			visible: false
		},
		{
			url: 'funfacts', 
			label: 'Fun Facts',
			visible: true
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