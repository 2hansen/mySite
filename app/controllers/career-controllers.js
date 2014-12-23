var careerControllers = angular.module('careerControllers', []);

//The TabController
careerControllers.controller('careerCtrl', ['$scope', '$log', 'Education', 'Employment', function($scope, $log, Education, Employment){
	$scope.education = Education.query();
	$scope.employment = Employment.query();
}]);
