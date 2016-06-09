myApp.controller('AdminController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
  console.log('admin controller running');
   $scope.dataFactory = DataFactory;

  $scope.favorites = [];
  $scope.favCount = 0;




}]);
