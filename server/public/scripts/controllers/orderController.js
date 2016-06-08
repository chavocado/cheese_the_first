myApp.controller('OrderController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
  console.log('order controller running');
  //scope variable & injection
  $scope.dataFactory = DataFactory;
  $scope.currentOrder = {};
  $scope.grilledCheeses = $scope.dataFactory.grilledCheeses;
  $scope.gcCount = 0;
  $scope.gcTotal = 0;

  $scope.submitOrder = function () {
  var data = $scope.currentOrder;
  $http.post('/orders', data)
    .then(function () {
      console.log('POST /orders');
      //getOrders();
    });
};

  //
  // if($scope.dataFactory.factoryGetFavorites() === undefined) {
  //   $scope.dataFactory.factoryRefreshFavoriteData().then(function() {
  //     $scope.favorites = $scope.dataFactory.factoryGetFavorites();
  //     $scope.favCount = $scope.favorites.length;
  //   });
  // } else {
  //   $scope.favorites = $scope.dataFactory.factoryGetFavorites();
  //   $scope.favCount = $scope.favorites.length;
  // }

}]);
