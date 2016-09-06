myApp.controller('EditMenuController', ['$scope', '$http',  '$location', '$window', 'CrudResourceFactory', function($scope, $http, $location, $window, CrudResourceFactory){
  getSandwiches();
  $scope.newSandwich = {};












  // Modal Related Functions

    $scope.myData = {
      modalShown: false
    }

    $scope.toggleModal = function(){
      $scope.myData.modalShown = !$scope.myData.modalShown;
      console.log("this ran");
    }



  // Crud Functions

  function getSandwiches(){
    $scope.sandwiches = CrudResourceFactory.query(function(){
      console.log('sandwiches in db: ', $scope.sandwiches);
    })
  }

    $scope.submitSandwich = function(){
      console.log($scope.newSandwich);
      CrudResourceFactory.save($scope.newSandwich, function(){

        getSandwiches();

      })
    }

  $scope.deleteSandwich = function(){
    
  }


}]);
