myApp.controller('EditMenuController', ['$scope', '$http',  '$location', '$window',  function($scope, $http, $location, $window){
  console.log('edit Menu controller running');

  getMenu();


  function getMenu() {
    console.log('this ran');
    $http.get('/editMenu').then(function(response) {
      $scope.sandwiches = response;
      console.log( "sandwiches: ", $scope.sandwiches);

      });
    }






}]);
