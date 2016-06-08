myApp.factory('DataFactory', ['$http', function($http) {
  console.log('dataFactory running');

  var grilledCheeses = {
    gc1 :'Uh-huh Honey',
    gc2 :'Bravo Italiano',
    gc3 :'3 Cheese',
    gc4 :'Cozy Campfire'
  };

 return {
   grilledCheeses: grilledCheeses
 };





}]);
