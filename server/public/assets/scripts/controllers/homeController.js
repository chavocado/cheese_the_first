myApp.controller('HomeController', ['$scope', '$http', '$location', 'DataFactory', function($scope, $http, $location, DataFactory) {
  console.log('home controller running');
  //injections
  $scope.dataFactory = DataFactory;
  //scope variables
  $scope.activeScholars = [];

  getActiveScholars();

  //retrieve existing active scholars from selected company
  function getActiveScholars() {
    $http.get('/scholars/active')
      .then(function (response) {
        $scope.activeScholars = response.data;
        console.log('GET /scholars ', response.data);
      });
  }

}]);
