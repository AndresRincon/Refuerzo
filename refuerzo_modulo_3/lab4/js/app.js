angular.module('lab1d',['ngRoute', 'lab1a', 'lab1b', 'lab1c'])
	.config(['$routeProvider', function($routeProvider){

		$routeProvider

		.when('/lab1a', {
                templateUrl : "lab1a.html",
                controller:'lab1aController'
            })
		.when('/lab1b', {
                templateUrl : "lab1b.html",
                controller:'lab1bController'
            })
		.when('/lab1c', {
                templateUrl : "lab1c.html",
                controller:'lab1cController'
            })

		.otherwise({
                redirectTo: '/',
                templateUrl: 'otherwise.html'
            });
		
}]);