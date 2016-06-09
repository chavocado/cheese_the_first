var myApp = angular.module('myApp', ['ngRoute']);
// ng routing
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'OrderController'
    })
    .when('/grilled-cheese', {
      templateUrl: '/views/gcheese.html',
      controller: 'OrderController'
    })
    .when('/orders', {
      templateUrl: '/views/admin.html',
      controller: 'AdminController'
    })
    .when('/thank-you', {
      templateUrl: '/views/thankyou.html',
      controller: 'OrderController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
