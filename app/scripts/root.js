var app = angular.module("root", []);

// Controller for My Talks Section
app.controller("talksCtrl", function($scope, $http) {
    $http.get("./app/data/talks.json")
        .success(function(response){
            $scope.talks = response;
        });
});