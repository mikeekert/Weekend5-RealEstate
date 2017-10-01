var App = angular.module('App', ['ngRoute', 'ngMaterial', 'ngMessages']);

App.config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
  var vm = this;
  $routeProvider.when('/', {
    templateUrl: 'views/listings.html',
    controller: 'ListingsController',
    controllerAs: 'lc'
  }).when('/rent', {
    templateUrl: 'views/rentals.html',
    controller: 'RentalsController',
    controllerAs: 'rc'
  }).when('/addhouse', {
    templateUrl: 'views/addhouse.html',
    controller: 'AddhouseController',
    controllerAs: 'ac'
  }).when('/sale', {
    templateUrl: 'views/forsale.html',
    controller: 'SaleController',
    controllerAs: 'sc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('blue');


});
