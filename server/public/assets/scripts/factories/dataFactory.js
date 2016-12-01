myApp.factory('DataFactory', ['$http', function($http) {
  console.log('dataFactory running');

  var grilledCheeses = {
    gc1 : {name :'The Mac Attack',
           price : 3,
           description : 'Creamy macaroni and cheese, grilled between crisp, buttery bread seasoned with garlic salt.'
    },
    gc2 :  {name :'The OG 3 Cheese',
           price : 3,
           description : 'Cheddar, Swiss and Mozzarella cheeses between crisp buttery bread.'
    },
    gc3 : {name :'Bravo Italiano',
           price : 3,
           description : 'Mozzarella cheese, freshly sliced tomato, with basil pesto sauce.',
    },
    gc4 :  {name :'The Funky Monkey',
           price : 3,
           description : 'A rich combination of banana, melted chocolate chips, peanut butter, and toasty marshmallows.'
    }
  };

  // var grilledCheeses = {};

  function getGrilledCheese() {
    $http.get('/cheese')
      .then(function (response) {
        response.data.forEach(function (order) {
          order.moment_date = moment(order.order_date, "YYYY-MM-DDTHH:mm:ss.SZ").format("MMMM Do YYYY, h:mm a");
        });
        $scope.orders = response.data;
        console.log('GET /sandwich ', response.data);

      });
  }

 return {
   grilledCheeses: grilledCheeses
 };



}]);
