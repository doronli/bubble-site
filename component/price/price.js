'use strict';

var app = angular.module('price',[]);

app.component('price',{
    templateUrl:'component/price/price.html',
    controller: function($scope){
        $scope.numOfPeople = ["עד 10 אנשים", "עד 15 אנשים", "עד 20 אנשים","יותר מ 20 אנשים"];
        $scope.costs = ["80","70","60","50", "50"]
    }
})