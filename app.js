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
  /*
  var defaultState = {
    name: 'default',
    url: '',
    templateUrl: ''
  }
  $stateProvider.state(defaultState);
  */
  $stateProvider.state(feedState);
  $stateProvider.state(loginState);
});
