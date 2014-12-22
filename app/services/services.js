var myServices = angular.module('myServices', ['ngResource']);

myServices.factory('Education', ['$resource', function($resource){
    return $resource('/data/education.json', {}, {
      query: {method:'GET', /*params:{phoneId:'phones'},*/ isArray:true}
    });
}]);


