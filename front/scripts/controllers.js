socialRouterApp.controller("socialNetworkController",function ($scope, $route, $routeParams, $location, $http, $q) {
    
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

socialRouterApp.controller("searchController",function ($scope, $http) {
    console.log("yolo");
});

socialRouterApp.controller("profileController",function ($scope, $http) {
});

socialRouterApp.controller("feedController",function ($scope, $http) {

    $http({
        method: 'GET',
        url: 'staticData/feed.json'
    }).then(function successCallback(response) {
        const data =  response.data;
        const status = response.status;
        
        $scope.feeds = data.feeds;

        console.log("succes on the json get");
        console.log("response: ", response);
        console.log("status: ", response.status);
        console.log("data: ", response.data);
        console.log("tweets: ", response.data.tweets);

    }, function errorCallback(response) {
        console.log("error can't get the JSON file from the server");
        document.getElementById("error").innerHTML = "Erreur lors de l'appel du json"
    });
});