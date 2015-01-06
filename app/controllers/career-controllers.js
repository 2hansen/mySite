var careerControllers = angular.module('careerControllers', []);

careerControllers.controller('careerCtrl', ['$scope', '$log', 'Education', 'Employment', 'Publications', function($scope, $log, Education, Employment, Publications){
	$scope.education = Education.query();
	$scope.employment = Employment.query();
	$scope.publication = Publications.query();
}]);
