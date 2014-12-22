var navControllers = angular.module('navControllers', []);

//The TabController
navControllers.controller('tabCtrl', ['$routeParams', '$scope', '$compile', '$log', function($routeParams, $scope, $compile, $log){
	$scope.tabs = [
		{
			url: 'me', 
			label: 'Me',
			directive: function(){return $compile("<me></me>");}
		},
		{
			url: 'career', 
			label: 'Career',
			directive: function(){return $compile("<career></career>");}
		},
		{
			url: 'stats', 
			label: 'Stats',
			directive: function(){return $compile("<stats></stats>");}
		},
		{
			url: 'map', 
			label: 'Map',
			directive: function(){$log.log('map'); return $compile("<map></map>");}
		}
	];
	$scope.isSet = function(tabId){
    	return tabId === $routeParams.tabId;
    };
}]);