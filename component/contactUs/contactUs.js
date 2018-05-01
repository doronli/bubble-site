'use strict';

var app = angular.module("contactUs",[]);

app.component("contactUs",{
    templateUrl:"component/contactUs/contactUs.html",
    controller: function ($scope, $http){
        $scope.url = 'contact_form.php';
        $scope.formsubmit = function (isValid) {
            console.log("name " + $scope.name, "email" + $scope.email, "phone" + $scope.phone, "message" +  $scope.message);
            if (isValid) {
                console.log("sasasasa");
                $http.post($scope.url, { "name": $scope.name, "email": $scope.email, "phone": $scope.phone, "message": $scope.message }).
                    success(function (data, status) {
                        $scope.status = status;
                        $scope.data = data;
                        $scope.result = data; // Show result from server in our <pre></pre> element
                    })
                    .error(function(error){
                        console.log("failed " + error);
                    })
            } else {
                alert('Form is not valid');
            }

        }
    }
})