var app = angular.module("root", []);

// Controller for My Talks Section
app.controller("talksCtrl", function($scope, $http) {
    $http.get("./app/data/talks.json")
        .success(function(response){
            $scope.talks = response;
        });
});

// Controller for My Conferences Section
app.controller("conferencesCtrl", function($scope, $http) {
   $http.get("./app/data/conferences.json")
       .success(function(response){
            $scope.conferences = response;
       });
});

// Controller for My Favorite Songs Section
app.controller("songsCtrl", function($scope, $http) {
    $http.get("./app/data/songs.json")
        .success(function(response){
            $scope.songs = response;
        });
});

// Controller for My Languages Section
app.controller("languagesCtrl", function($scope, $http) {
    $http.get("./app/data/languages.json")
        .success(function(response){
            $scope.languages = response;
        });
});

// Controller for Education Section
app.controller("educationCtrl", function($scope, $http) {
    $http.get("./app/data/education.json")
        .success(function(response){
            $scope.educationData = response;
        });
});

// Controller for Experiences Section
app.controller("experiencesCtrl", function($scope, $http) {
   $http.get("./app/data/experiences.json")
       .success(function(response){
          $scope.experiences = response;
       });

});

// Controller for Projects Section
app.controller("projectsCtrl", function($scope, $http) {
    $http.get("./app/data/projects.json")
        .success(function(response){
            $scope.projects = response;
        });

});