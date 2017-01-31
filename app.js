var myApp = angular.module('routing', ['ui.router']);

myApp.config(function($stateProvider) {
  var feedState = {
    name: 'feed',
    url: '/feed',
    templateUrl: 'partials/feed.html'
  }
  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'partials/login.html'
  }
  $stateProvider.state(feedState);
  $stateProvider.state(loginState);
});
