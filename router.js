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
myApp.controller('ExampleController', ['$scope', function($scope) {
  $scope.list = [];
  $scope.submit = function() {
    if ($scope.text) {
      $scope.list.push(this.text);
      $scope.text = '';
    }
  };
}]);














































































let jasonobject = {
    jason : {
        name : "Jason Lengstorf",
        age : "24",
        gender : "male"
    },
    kyle : {
        name : "Kyle Lengstorf",
        age : "21",
        gender : "shemale"
    },
    Bahamut : {
        name : "bahamut mamouth",
        age : "666",
        gender : "male"
    },
    Odin : {
        name : "odin zantetsuken",
        age : "450",
        gender : "male"
    }

}
