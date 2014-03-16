angular.module('<%= appName %>', ['ngRoute' ,'<%= appName %>.services', '<%= appName %>.controllers'])

.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeCtrl'
    })
    .otherwise({redirectTo : '/'});
    
});