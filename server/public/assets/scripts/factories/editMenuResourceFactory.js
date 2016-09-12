myApp.factory('EditMenuResourceFactory', ['$http', '$resource', function($http, $resource) {


  return $resource('/editMenu/:id', {id: '@_id'}, {
    update: {
      method: 'PUT'
    }
  });

}]);
