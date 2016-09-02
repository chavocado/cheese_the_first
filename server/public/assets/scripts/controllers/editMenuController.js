myApp.controller('EditMenuController', ['$scope', '$http',  '$location', '$window', 'CrudResourceFactory', function($scope, $http, $location, $window, CrudResourceFactory){
  getSandwiches();
  $scope.newSandwich = {};




  console.log('edit Menu controller running');
  function getSandwiches(){
    $scope.sandwiches = CrudResourceFactory.query(function(){
      console.log('sandwiches in db: ', $scope.sandwiches);
    })
  }
  $scope.submitSandwich = function(){
    CrudResourceFactory.save($scope.newSandwich, function(){

      getSandwiches();

    })

  }

  // getMenu();
  // function getMenu() {
  //   console.log('this ran');
  //   $http.get('/editMenu').then(function(response) {
  //     $scope.sandwiches = response;
  //     console.log( "sandwiches: ", $scope.sandwiches);
  //
  //     });
  //   }







    $scope.myData = {
      modalShown: false
    }

    $scope.toggleModal = function(){
      $scope.myData.modalShown = !$scope.myData.modalShown;
      console.log("this ran");
    }

    $scope.submitSandwich = function(){

    }



}]);
