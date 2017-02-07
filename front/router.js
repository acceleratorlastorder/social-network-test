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
myApp.controller('ExampleController', ['$scope', '$http', function($scope, $http) {
    $scope.list = ["lol", "lel", "salut"];
    $scope.tweet = localStorage.getItem("tweet");
    $scope.salut = "";
    $scope.submit = function() {
        if ($scope.text) {
            $scope.list.push(this.text);
            localStorage.setItem("tweet", angular.toJson(this.text));
            $scope.text = '';
            console.log(localStorage.getItem("tweet"));
            console.log($scope.tweet);
        }

    };
    $http.get("feezd.json").
    then(function(data, status) {
        $scope.donnees = data;
    }).
    error(function(data, status) {
        document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
    });
}]);

saveToStorage = function() {
    localStorage.setItem("tweet", JSON.stringify(this.text));
}

loadFromStorage = function() {
    this.text = JSON.parse(localStorage.getItem("tweet"));
}
