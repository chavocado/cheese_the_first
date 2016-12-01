var myApp = angular.module('myApp', ['ngRoute','smart-table','ngResource','ngModal']);
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
    .when('/pickles', {
      templateUrl: '/views/admin.html',
      controller: 'AdminController'
    })
    .when('/pickles/orders', {
      templateUrl: '/views/admin-orders.html',
      controller: 'AdminOrderController'
    })
    .when('/pickles/scholars', {
      templateUrl: '/views/admin-scholars.html',
      controller: 'AdminScholarController'
    })
    .when('/thank-you', {
      templateUrl: '/views/thankyou.html',
      controller: 'OrderController'
    })
    .when('/pickles/edit-menu', {
      templateUrl: '/views/editMenu.html',
      controller: 'EditMenuController'
    })
    .when('/login', {
      templateUrl: '/views/login.html',
      controller: 'LoginController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
