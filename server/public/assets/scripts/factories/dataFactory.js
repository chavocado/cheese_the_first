myApp.factory('DataFactory', ['$http', function($http) {
  console.log('dataFactory running');

  var grilledCheeses = {
    gc1 : {name :'Uh-huh Honey',
           price : 3,
           description : 'Crisp sliced apples, cheddar cheese, drizzled honey and a sprinkle of cinnamon.'
    },
    gc2 : {name :'Bravo Italiano',
           price : 3,
           description : 'Mozzarella cheese, freshly sliced tomato, with basil pesto sauce.',
    },
    gc3 :  {name :'3 Cheese',
           price : 3,
           description : 'Cheddar, Swiss and Mozzarella cheeses between crisp buttery bread.'
    },
    gc4 :  {name :'Cozy Campfire',
           price : 3,
           description : 'A s\'mores inspired recipe with melted chocolate chips, crushed graham cracker, and toasty marshmallows.' 
    }
  };

 return {
   grilledCheeses: grilledCheeses
 };



}]);