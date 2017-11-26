// routing path 
myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
   // .when('/second/:date/:tCode/:tCode2',{
   //    templateUrl: 'pages/first-view.html',
   //    controller: 'firstController',
   //    controllerAs: 'firstCtrl'
   //  }) 
     .when('/',{
      templateUrl:'views/home.html',
      controller: 'EngLea',
      controllerAs:'EPL'
     })
     .when('/first',{
      templateUrl: 'views/first.html',
      controller: 'EngLea',
      controllerAs:'EPL'
     })
     .when('/sec',{
      templateUrl: 'views/second.html',
      controller: 'EngLeaLatest',
      controllerAs:'EPL2'
     })
     .when('/firsts/:date/:Code1/:Code2',{
      templateUrl: 'views/third.html',
      controller: 'Third',
      controllerAs: 'th'
    })
     .when('/first/:date/:Code1/:Code2',{
      templateUrl: 'views/view.html',
      controller: 'Summary',
      controllerAs: 'stats'
    })
    .when('/match/:teamId',{
    templateUrl : 'views/teamStats-view.html',
    controller  : 'TeamController',
    controllerAs: 'singleTeam'
    })
    .otherwise({redirectTo: '<h2>Page not Found</h2>'});
}]);