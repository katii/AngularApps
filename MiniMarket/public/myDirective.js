var module = angular.module('mvModule',['ngResource']);

module.directive('myDirective',function(){
    
    return {
        
        restrict:'AE',
        scope:{
            temp:'@',
            city:'@'
        },
        templateUrl:'my_directive.html',
        controller:'DirectiveController'
    }
    
});
    
module.controller('DirectiveController',function($scope,$resource){
    
    var data = $resource('http://api.openweathermap.org/data/2.5/weather?q="Oulu,fi"').get(function(){
        console.log(data.main.temp);
        $scope.temp = data.main.temp;
        $scope.city = data.name;
    });
    
});