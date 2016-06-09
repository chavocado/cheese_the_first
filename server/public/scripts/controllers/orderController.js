myApp.controller('OrderController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
  console.log('order controller running');
  //scope variables & injection
  $scope.dataFactory = DataFactory;
  $scope.currentOrder = {};
  $scope.grilledCheeses = $scope.dataFactory.grilledCheeses;
  $scope.gcCount = 0;
  $scope.currentOrder.gc1 = 0;
  $scope.currentOrder.gc2 = 0;
  $scope.currentOrder.gc3 = 0;
  $scope.currentOrder.gc4 = 0;
  $scope.currentOrder.gcTotal = 0;
  $scope.quantity = [0,1,2,3,4,5,6,7,8,9,10];

  $scope.addGC = function () {
    $scope.currentOrder.gcTotal = (($scope.currentOrder.gc1 * $scope.grilledCheeses.gc1.price) +
                                   ($scope.currentOrder.gc2 * $scope.grilledCheeses.gc2.price) +
                                   ($scope.currentOrder.gc3 * $scope.grilledCheeses.gc3.price) +
                                   ($scope.currentOrder.gc4 * $scope.grilledCheeses.gc4.price));
  };

  $scope.submitOrder = function () {
  var data = $scope.currentOrder;
  console.log(data);
  $http.post('/orders', data)
    .then(function () {
      console.log('POST /orders');
      //getOrders();
      //$scope.redirect();
    });
  };
  //redirect function
  $scope.redirect = function(){
  $location.url('/thank-you');
  };



}]);
