//@ts-check

socialRouterApp.config(["$routeProvider", function config($routeProvider) {
    $routeProvider.
        when("/feed", {
            templateUrl: "routes/feed.html"
        }).
        when("/profile", {
            templateUrl: "routes/profile.html"
        }).
        otherwise("/feed");
}
]);