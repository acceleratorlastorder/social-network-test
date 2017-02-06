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
    $scope.list = ["lol", "lel", "salut"];
    $scope.tweet = localStorage.getItem(angular.fromJson("tweet"));
    $scope.submit = function() {
        if ($scope.text) {
            $scope.list.push(this.text);
            localStorage.setItem("tweet", angular.toJson(this.text));
            $scope.text = '';
            console.log(localStorage.getItem("tweet"));
        }

    };

}]);

saveToStorage = function() {
   localStorage.setItem("tweet", JSON.stringify(this.text));
 }

 loadFromStorage = function() {
   this.text = JSON.parse(localStorage.getItem("tweet"));
}
