myApp.controller('AdminScholarController', ['$scope', '$http', '$location', '$window', 'ScholarsResourceFactory', function($scope, $http, $location, $window, ScholarsResourceFactory) {
console.log('admin scholar controller running');
   //scope variables
  $scope.scholars = [];

  getScholars();

  //scholar retrieval function
  function getScholars() {
    $http.get('/scholars')
      .then(function (response) {
        $scope.scholars = response.data;
        console.log('GET /scholars ', response.data);
      });
  }

  // // alternative resource factory get
  // function getScholars(){
  //   $scope.scholars = EditMenuResourceFactory.query(function(){
  //     console.log('Current scholars: ', $scope.scholars);
  //   });
  // }

  //scope function that adds a new scholar
  $scope.addScholar = function () {
    if ($scope.newScholar.name !== undefined && $scope.newScholar.location !== undefined && $scope.newScholar.bio !== undefined) {
    var data = $scope.newScholar;
    $http.post('/companies', data)
      .then(function (response) {
        console.log('POST /scholars', response);
        if (response.status == 201) {
           $scope.newScholar = {};
           $scope.toggleAddScholarModal();
           getScholars();
           return;
        } else {
          alert('Your scholar was not recieved. Please try again.');
        }
      });
    }
  };

  // //alternative resource factory post of new scholar
  // $scope.addScholar = function(){
  //   console.log($scope.newScholar);
  //   ScholarsResourceFactory.save($scope.newScholar, function(){
  //     $scope.newScholar = {};
  //     $scope.toggleAddScholarModal();
  //     getScholars();
  //     return;
  //   });
  // };

  //scope function to update existing scholar
  $scope.updateScholar = function (scholar) {
    var id = scholar.id;
    $http.put('/scholars/edit/' + id, scholar)
      .then(function (response) {
        console.log('PUT /scholars ', response);
        if (response.status == 204) {
           alert('Scholar updated!');
           $scope.newScholar = {};
           $scope.toggleEditScholarModal();
           getScholars();
           return;
        } else {
          alert('Scholar update was not recieved. Please try again.');
        }
      });
  };

  // deactivate(gives scholar inactive status)
  $scope.deactivateScholar = function(scholar) {
    var id = scholar.id;
    var deactivateScholar = confirm('Are you sure you want to deactivate ' + scholar.name + '?');
    if (deactivateScholar === true){
    $http.put('/scholars/deactivate/' + id)
      .then(function (response) {
        console.log('PUT /scholars/', response);
        $scope.toggleEditScholarModal();
        getScholars();
        return;
      });
    } else {
      $scope.toggleEditScholarModal();
      return;
    }
  };

  //scholar delete function not in use
  $scope.deleteScholar = function(id) {
    console.log('delete', id);
    $http.delete('/scholars/' + id)
       .then(function (response) {
       getOrders();
       return;
       });
  };

  //scholar modal function
  $scope.addScholarModal = {
    modalShown : false
  };

  $scope.toggleAddScholarModal = function() {
    $scope.addScholarModal.modalShown = !$scope.addScholarModal.modalShown;
  };

  $scope.editScholarModal = {
    modalShown : false
  };

  $scope.toggleEditScholarModal = function(selected) {
    $scope.editScholarModal.modalShown = !$scope.editScholarModal.modalShown;
    $scope.scholar = selected;
  };


}]);
