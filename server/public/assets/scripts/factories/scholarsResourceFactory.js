myApp.factory('ScholarsResourceFactory', ['$http', '$resource', function($http, $resource) {


  return $resource('/scholars/:id', {id: '@_id'}, {
    update: {
      method: 'PUT'
    }
  });

}]);
