var publicationControllers = angular.module('publicationControllers', []);

publicationControllers.controller('publicationCtrl', ['$scope', '$log', 'Publications', function($scope, $log, Publications){
	$scope.publication = Publications.query();
}]);
