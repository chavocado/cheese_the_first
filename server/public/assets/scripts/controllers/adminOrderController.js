myApp.controller('AdminOrderController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
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
        response.data.forEach(function (order) {
          order.moment_date = moment(order.order_date, "YYYY-MM-DDTHH:mm:ss.SZ").format("MMMM Do YYYY, h:mm a");
          // console.log('order', order.order_date);
          // console.log('moment', order.moment_date);
        });
        $scope.orders = response.data;
        console.log('GET /orders ', response.data);

      });
  }

  $scope.updateStatus = function(order) {
    console.log('update', order.id);
    if (order.status == 'Recieved') {
      order.status = 'Cooking';
      $http.put('/orders/status', order)
         .then(function (response) {
         getOrders();
         return;
         });
    } else if (order.status == 'Cooking') {
      order.status = 'Delivery';
      $http.put('/orders/status', order)
         .then(function (response) {
         getOrders();
         return;
         });
    } else if (order.status == 'Delivery') {
      order.status = 'Complete';
      $http.put('/orders/status', order)
         .then(function (response) {
         getOrders();
         return;
         });
    } else {
      order.status = 'Recieved';
      $http.put('/orders/status', order)
         .then(function (response) {
         getOrders();
         return;
         });
    }
  };

  $scope.deleteOrder = function(id) {
    console.log('delete', id);
    $http.delete('/orders/' + id)
       .then(function (response) {
       getOrders();
       return;
       });
  };


}]);
