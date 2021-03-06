myApp.controller('OrderController', ['$scope', '$http', '$location', 'DataFactory', function($scope, $http, $location, DataFactory) {
  console.log('order controller running');
  //injections
  $scope.dataFactory = DataFactory;
  $scope.grilledCheeses = $scope.dataFactory.grilledCheeses;
  //scope variables
  $scope.currentOrder = {};
  $scope.gcCount = 0;
  $scope.currentOrder.gc1 = 0;
  $scope.currentOrder.gc2 = 0;
  $scope.currentOrder.gc3 = 0;
  $scope.currentOrder.gc4 = 0;
  $scope.currentOrder.gcTotal = 0;
  $scope.quantity = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  $scope.deliveryFee = 1;

  //function that adds the user selected price dynamically
  $scope.addGC = function () {
    $scope.currentOrder.gcTotal = (($scope.currentOrder.gc1 * $scope.grilledCheeses.gc1.price) +
                                   ($scope.currentOrder.gc2 * $scope.grilledCheeses.gc2.price) +
                                   ($scope.currentOrder.gc3 * $scope.grilledCheeses.gc3.price) +
                                   ($scope.currentOrder.gc4 * $scope.grilledCheeses.gc4.price) +
                                   ($scope.deliveryFee));
  };

  //auxilary function
  // function checkContent() {
  //   if ($scope.currentOrder.specialReq === undefined) {
  //       $scope.currentOrder.specialReq = "none";
  //     }
  // }

  //order submission function
  $scope.submitOrder = function () {
  if ($scope.currentOrder.specialReq === undefined) {
    $scope.currentOrder.specialReq = "none";
      }
  console.log('now here', 2);
  var data = $scope.currentOrder;
  console.log(data);
  $http.post('/orders', data)
    .then(function (response) {
      console.log('POST /orders');
      console.log(response);
      if (response.status == 201 ) {
         $location.path('/thank-you');
      } else {
        alert('Your order was not recieved!');
      }

    });
  };

  //redirect function
  $scope.redirect = function(){
  $location.path('/thank-you');
  };


}]);
