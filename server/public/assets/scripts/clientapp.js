var myApp = angular.module('myApp', ['ngRoute','smart-table']);
// ng routing
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController'
    })
    .when('/grilled-cheese', {
      templateUrl: '/views/gcheese.html',
      controller: 'OrderController'
    })
    .when('/admin', {
      templateUrl: '/views/admin.html',
      controller: 'AdminController'
    })
    .when('/thank-you', {
      templateUrl: '/views/thankyou.html',
      controller: 'OrderController'
    })
    .when('/menu', {
      templateUrl: '/views/menu.html',
      controller: 'MenuController'
    })
    .when('/login', {
      templateUrl: '/views/login.html',
      controller: 'LoginController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
