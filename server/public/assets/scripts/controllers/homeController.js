myApp.controller('HomeController', ['$scope', '$http', '$location', 'DataFactory', function($scope, $http, $location, DataFactory) {
  console.log('home controller running');
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
  $scope.quantity = [0,1,2,3,4,5,6,7,8,9,10];

  //function that adds the user selected price dynamically
  $scope.addGC = function () {
    $scope.currentOrder.gcTotal = (($scope.currentOrder.gc1 * $scope.grilledCheeses.gc1.price) +
                                   ($scope.currentOrder.gc2 * $scope.grilledCheeses.gc2.price) +
                                   ($scope.currentOrder.gc3 * $scope.grilledCheeses.gc3.price) +
                                   ($scope.currentOrder.gc4 * $scope.grilledCheeses.gc4.price));
  };

  //order submission function
  $scope.submitOrder = function () {
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
