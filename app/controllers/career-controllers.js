var careerControllers = angular.module('careerControllers', []);

careerControllers.controller('careerCtrl', ['$scope', '$log', 'Education', 'Employment', function($scope, $log, Education, Employment){
	$scope.education = Education.query();
	$scope.employment = Employment.query();
}]);
