var mainMod = angular.module('MiniMarket', ['ngRoute','mvModule','ngResource']);

// main configuration for our angular application
mainMod.config(function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/',{
        templateUrl:'products.html',
        controller:'ProductController'
    });
    
    $routeProvider.when('/add',{
        templateUrl:'userproduct.html',
        controller:'UserProduct'
    });
});

// this is one syntax to create controller but might get broken if this file is
// minified. Youeman minifier wont break it?
mainMod.controller('ProductController',function($scope,$location,ProductFactory){
    
    //$scope.jotain = "Jeppe Jippu";
    
    $scope.props = {
        
        name:'jeppe'
    }
    
    $scope.next = function(){
        
        $location.path('/add');
    }
    
    // $q promisen jälkeen tämän voi poistaa ja...
    //$scope.products = ProductFactory.getProducts($scope);
    
    // ... lisätä nämä
    // wait here that we get response from server
    ProductFactory.getProducts().then(function(data){
    //ProductFactory.promise.then(function(data){
        $scope.products = data;
    });
    
    // TAI
    // var promise = ProductFactory.getProducts();
    // promise.then(function(data){
    //     $scope.products = data;
    // });

});

// this is another way to create controller or factory/service
// The minifier wont break the code if you use this syntax
mainMod.controller('UserProduct',['$scope','ProductFactory',function($scope,ProductFactory){
    
    // define your scope attributes always in object literal,
    // 
    $scope.product = {
        
        product_name:'',
        product_price:'',
        post_product:function(){
            console.log("$scope.product");
        }
    }
    
}]);
    

mainMod.factory('ProductFactory',function($http,$q){
    
    var factory = {};

    factory.getProducts = function($scope){

        var deferred = $q.defer();
        //factory.promise = deferred.promise;
        
        $http.get('/data').success(function(data, status, headers, config){
            //console.log(data);
            //$scope.products = data;
            deferred.resolve(data);
        }).
        error(function(data, status, headers, config){
            console.log('error loading data');
        });
        
        return deferred.promise;
    }
    
    return factory;
});

// tämä käytössä vain siinä viewssa, mikä käyttää tätä kontrolleria
// voi tehdä toisinkin, katso materiaali
// tämä ennen mainmodulessa
/* siirrettiin myDirectiveen ja tehtiin eri
mainMod.directive('myDirective',function(){
    
    return {
*/        
        // A atribuutti, E elementti, C class
        //restrict:'AEC',
        // eristää direktiivin parentin skoopista
        //scope:{},
        //scope:{
            // merkkijono
        //    kissa:'@',
            // kaksuuntainen (voi muokata sekä direktiivissä että ulkopuolelta) taulukko
        //    products:'='
        //},
        // tämä kirjoitti kaikkiin product viewn hellohin ennen kuin lisättiin tuo scope:{}
        //template:'<h3>Hello: {{name}} </h3>'
        //muuttujan arvo tulee direktiivin ulkopuolelta
        //template:'<h3>Hello: {{kissa}}</h3>'
        //templateUrl:'my_directive.html',
        // voi olla ilmankin tätä
        //controller:DirectiveController
        
/*    }
    
});
    
mainMod.controller('DirectiveController',function(){
});
*/