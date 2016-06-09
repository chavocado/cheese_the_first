myApp.factory('DataFactory', ['$http', function($http) {
  console.log('dataFactory running');

  var grilledCheeses = {
    gc1 : {name :'Uh-huh Honey',
           price : 3
    },
    gc2 : {name :'Bravo Italiano',
           price : 3
    },
    gc3 :  {name :'3 Cheese',
           price : 3
    },
    gc4 :  {name :'Cozy Campfire',
           price : 3
    }
  };

 return {
   grilledCheeses: grilledCheeses
 };





}]);
