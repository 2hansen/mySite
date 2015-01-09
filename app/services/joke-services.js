var jokeService = angular.module('jokeService', ['ngResource']);

jokeService.factory('Joke', ['$resource', function($resource){
    return $resource('http://api.icndb.com/jokes/random/?firstName=:firstName&lastName=:lastName', {}, {
      query: {method:'GET', params:{firstName:'Bo Hansen', lastName:'Hansen'}, isArray:false}
    });
  }]);