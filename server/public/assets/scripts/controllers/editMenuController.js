myApp.controller('EditMenuController', ['$scope', '$http',  '$location', '$window', 'CrudResourceFactory', function($scope, $http, $location, $window, CrudResourceFactory){
  getSandwiches();
  $scope.newSandwich = {};
  $scope.selectedSandwichToEdit = {};
  $scope.crudResourceFactory = new CrudResourceFactory();










  // Modal Related Functions

    $scope.myData = {
      modalShown: false
    }

    $scope.editSandwich = {
      modalShown: false
    }

    $scope.toggleModal = function(){
      $scope.myData.modalShown = !$scope.myData.modalShown;
    }

    $scope.toggleEditModal = function(selectedSandwichToEdit){
      
      if (selectedSandwichToEdit != undefined) {
        $scope.selectedSandwichToEdit = selectedSandwichToEdit;
        $scope.selectedSandwichToEdit.unit_price = $scope.selectedSandwichToEdit.unit_price -0;
        console.log("selected sandwich to edit", selectedSandwichToEdit);
      }

      $scope.editSandwich.modalShown = !$scope.editSandwich.modalShown;
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
        $scope.toggleModal();
      })
    }

    $scope.submitSandwichChanges = function(){

      $scope.selectedSandwichToEdit.$update(function(){
        getSandwiches();
        $scope.toggleEditModal();
      })
    }
  // $scope.deleteSandwich = function(targetSandwichToDelete){
  //         console.log("selected Sandwich here: ", targetSandwichToDelete);
  //   CrudResourceFactory.$delete(targetSandwichToDelete, function(){
  //
  //
  //      getSandwiches();
  //
  //   })
  // }



}]);
