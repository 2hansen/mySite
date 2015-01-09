var employmentControllers = angular.module('employmentControllers', []);

employmentControllers.controller('employmentCtrl', ['$scope', '$log', 'Employment', function($scope, $log, Employment){
	$scope.employment = Employment.query();
}]);
