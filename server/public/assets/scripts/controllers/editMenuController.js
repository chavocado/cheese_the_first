myApp.controller('EditMenuController', ['$scope', '$http',  '$location', '$window', 'CrudResourceFactory', function($scope, $http, $location, $window, CrudResourceFactory){
  console.log('edit Menu controller running');

  var sandwiches = CrudResourceFactory.query(function(){
    console.log(sandwiches);
  })


  // getMenu();
  // function getMenu() {
  //   console.log('this ran');
  //   $http.get('/editMenu').then(function(response) {
  //     $scope.sandwiches = response;
  //     console.log( "sandwiches: ", $scope.sandwiches);
  //
  //     });
  //   }






}]);
