(function() {

  var app = angular.module('githubViewer');

  var RepoController = function($scope, $routeParams, github) {
    var username = $routeParams.username;
    var reponame = $routeParams.reponame;

    var onRepo = function(data) {
      $scope.repo = data;
    };

    var onError = function(reason) {
      $scope.error = reason;
    };

    github.getRepoDetails(username, reponame)
      .then(onRepo, onError);
  };

  app.controller("RepoController", ["$scope", "$routeParams", "github", RepoController]);
}());