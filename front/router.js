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
myApp.controller('ExampleController', ['$scope', '$http', "$q", function($scope, $http, $q) {

    // Simple GET request example:
    $http({
        method: 'GET',
        url: 'feed.json'
    }).then(function successCallback(response, data, status) {
        $scope.tweets = response.data.tweets;

        let messages = $scope.tweets[0].message;

        console.log("succes on the json get");
        console.log("response: ", response);
        console.log("status: ", response.status);
        console.log("data: ", response.data);
        console.log("tweets: ", response.data.tweets);
        console.log("tweet 1: ", response.data.tweets[0]);
        console.log("tweet 2: ", response.data.tweets[1]);
        console.log("tweet 3: ", response.data.tweets[2]);
        console.log("tweet 3: ", response.data.tweets[3]);
        console.log("test: ", $scope.tweets);
        console.log("message", messages);


        feedthepage($scope.tweets);


    }, function errorCallback(response) {
        console.log("error");
        document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
    });

    $scope.list = ["lol"];
    $scope.tweet = localStorage.getItem("tweet");
    $scope.salut = "";
    $scope.submit = function() {
        if ($scope.text) {
            $scope.list.push(this.text);
            localStorage.setItem("tweet", angular.toJson(this.text));
            $scope.text = '';
            console.log(localStorage.getItem("tweet"));
        }

    };


    function feedthepage(x) {
        console.log("feedthepage function, tweets:", x);
        let i = 0;
        for (i = 0; i < x.length; i++) {
            console.log(i);
            $scope.list.push($scope.tweets[i].message);
        }

        console.log("nombre de tweets :", i);
    }



}]);









/*
saveToStorage = function() {
    localStorage.setItem("tweet", JSON.stringify(this.text));
}

loadFromStorage = function() {
    this.text = JSON.parse(localStorage.getItem("tweet"));
}  */



/*



$http.get("feed.json").$q.then(function(data, status) {
  $scope.donnees = data;
}).
error(function(data, status) {
  document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
});





*/
