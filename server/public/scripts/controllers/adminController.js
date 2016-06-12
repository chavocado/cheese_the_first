myApp.controller('AdminController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
  console.log('admin controller running');
    //injections
   $scope.dataFactory = DataFactory;
   $scope.grilledCheeses = $scope.dataFactory.grilledCheeses;

   $scope.orders = [];
   $scope.orderCount = 0;

  getOrders();


  function getOrders() {
    $http.get('/orders')
      .then(function (response) {
        console.log(response);
        response.data.forEach(function (order) {
          console.log('premoment', order.order_date);
          order.moment_date = moment(order.order_date, "YYYY-MM-DDTHH:mm:ss.SZ").format("dddd, MMMM Do YYYY, h:mm:ss a");
          console.log('order', order.order_date);
          console.log('moment', order.moment_date);
        });

        $scope.orders = response.data;
        console.log('GET /orders ', response.data);

      });
  }


}]);
