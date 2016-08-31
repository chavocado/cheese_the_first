myApp.controller('AdminScholarController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
  console.log('admin scholar controller running');
   //scope variables
   $scope.scholars = [];

   getScholars();

  function getScholars() {
    $http.get('/scholars')
      .then(function (response) {
        $scope.scholars = response.data;
        console.log('GET /scholars ', response.data);
      });
  }


  $scope.deleteScholar = function(id) {
    console.log('delete', id);
    $http.delete('/scholars/' + id)
       .then(function (response) {
       getOrders();
       return;
       });
  };


}]);
