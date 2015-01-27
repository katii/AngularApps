var mainMod = angular.module('MiniMarket', ['ngRoute']);

mainMod.config(function($routeProvider, $locationProvider){
    
    $locationProvider.html5mode(true);
    
    $routeProvider.when('/',{
        templateUrl:'products.html',
        controller:'ProductController'
    });
    
    $routeProvider.when('/add',{
        templateUrl:'userproduct.html'
    });
    
});

mainMod.controller('ProductController',function($scope,ProductFactory){
    
    $scope.products = ProductFactory.getProducts($scope);
});

mainMod.factory('ProductFactory',function($http){
    
    var factory = {};
    factory.getProducts = function($scope){
        
        $http.get('/data').success(function(data, status, headers, config){
            //console.log(data);
            $scope.products = data;
        }).
        error(function(data, status, headers, config){
            console.log('error loading data');
        });
    }
    
    return factory;
});