var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
  var feedState = {
    name: 'feed',
    url: '/feed',
    template: "<h3>hello world!</h3>"
  }

  var loginState = {
    name: 'login',
    url: '/login',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(feedState);
  $stateProvider.state(loginState);
});
