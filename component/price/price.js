'use strict';

var app = angular.module('price',[]);

app.component('price',{
    templateUrl:'component/price/price.html',
    controller: function($scope){
        $scope.numOfPeople = ["עד 10 אנשים", "מ 10-15 אנשים", "מ 16-20 אנשים","מ 21-25 אנשים"];
        $scope.costs = ["80","70","60","50", "50"]
    }
})