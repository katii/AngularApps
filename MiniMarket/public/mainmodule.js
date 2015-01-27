var mainMod = angular.module('MiniMarket', ['ngRoute']);

mainMod.config(function($routeProvider, $locationProvider){
    
    $locationProvider.html5mode(true);
    
    $routeProvider.when('/',{
        templateUrl:'products.html'
    });
    
    $routeProvider.when('/add',{
        templateUrl:'userproduct.html'
    });
    
});