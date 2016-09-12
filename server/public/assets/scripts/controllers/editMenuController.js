myApp.controller('EditMenuController', ['$scope', '$http',  '$location', '$window', 'EditMenuResourceFactory', function($scope, $http, $location, $window, EditMenuResourceFactory){
  getSandwiches();
  $scope.newSandwich = {};
  $scope.selectedSandwichToEdit = {};
  $scope.EditMenuResourceFactory = new EditMenuResourceFactory();

  // Modal Related Functions

    $scope.myData = {
      modalShown: false
    };

    $scope.editSandwich = {
      modalShown: false
    };

    $scope.toggleModal = function(){
      $scope.myData.modalShown = !$scope.myData.modalShown;
    };

    $scope.toggleEditModal = function(selectedSandwichToEdit){

      if (selectedSandwichToEdit !== undefined) {
        $scope.selectedSandwichToEdit = selectedSandwichToEdit;
        $scope.selectedSandwichToEdit.unit_price = $scope.selectedSandwichToEdit.unit_price -0;
        console.log("selected sandwich to edit", selectedSandwichToEdit);
      }

      $scope.editSandwich.modalShown = !$scope.editSandwich.modalShown;
    };


  // Crud Functions

  function getSandwiches(){
    $scope.sandwiches = EditMenuResourceFactory.query(function(){
      console.log('sandwiches in db: ', $scope.sandwiches);
    });
  }

    $scope.submitSandwich = function(){
      console.log($scope.newSandwich);
      EditMenuResourceFactory.save($scope.newSandwich, function(){

        getSandwiches();
        $scope.toggleModal();
      });
    };

    $scope.submitSandwichChanges = function(){

      $scope.selectedSandwichToEdit.$update(function(){
        getSandwiches();
        $scope.toggleEditModal();
      });
    };
  // $scope.deleteSandwich = function(targetSandwichToDelete){
  //         console.log("selected Sandwich here: ", targetSandwichToDelete);
  //   EditMenuResourceFactory.$delete(targetSandwichToDelete, function(){
  //
  //
  //      getSandwiches();
  //
  //   })
  // }
}]);
