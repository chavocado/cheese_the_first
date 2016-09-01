myApp.factory('CrudResourceFactory', ['$http', '$resource', function($http, $resource) {





  return $resource('/editMenu/');

}]);
