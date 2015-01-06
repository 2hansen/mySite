var myServices = angular.module('myServices', ['ngResource']);

myServices.factory('Education', ['$resource', function($resource){
    return $resource('/data/education.json', {}, {
      query: {method:'GET', /*params:{phoneId:'phones'},*/ isArray:true}
    });
}]);

myServices.factory('Employment', ['$resource', function($resource){
    return $resource('/data/employment.json', {}, {
      query: {method:'GET', /*params:{phoneId:'phones'},*/ isArray:true}
    });
}]);

myServices.factory('Publications', ['$resource', function($resource){
    return $resource('/data/publications.json', {}, {
      query: {method:'GET', /*params:{phoneId:'phones'},*/ isArray:true}
    });
}]);