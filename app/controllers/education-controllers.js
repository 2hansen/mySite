var educationControllers = angular.module('educationControllers', []);

educationControllers.controller('educationCtrl', ['$scope', '$log', 'Education', function($scope, $log, Education){
	$scope.education = Education.query();
}]);
