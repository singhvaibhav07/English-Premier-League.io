// First Controller
myApp.controller('EngLea',['$http',function($http){
  var main = this;  
  this.datas = [];
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master';

  this.eplData = function(){
    $http({
      method: 'GET',
      url: main.baseUrl+'/2015-16/en.1.json'
    }).then(function successCallback(response){

          main.rounds = response.data.rounds;
          console.log(main.rounds);

    },function errorCallback(response){
      alert("Not Found");
  })//End of http
  };//End of eplData

}]); //End of controller

myApp.controller('Summary',['$http','$routeParams',function($http,$routeParams){

var main = this;
this.data = [];
this.date = $routeParams.date;
// console.log(this.date);
this.t1Code = $routeParams.Code1;
// console.log(this.t1Code);
this.t2Code = $routeParams.Code2;
// console.log(this.t2Code);
this.t1;  //team 1 
this.t2;  //team 2
this.s1;  //score 1
this.s2;  //score 2
this.winner;

this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master';


this.story = function(){
  $http({
    method:'GET',
    url: main.baseUrl+'/2015-16/en.1.json'

  }).then(function successCallback(response){
    main.rounds = response.data.rounds;
    //console.log(main.rounds);

    // for showing individual match info
    for(var i in main.rounds){
      //console.log(i);
      for(var j in main.rounds[i].matches){

        if(main.rounds[i].matches[j].team1.code == main.t1Code && main.rounds[i].matches[j].team2.code == main.t2Code && main.rounds[i].matches[j].date == main.date){
          main.s1 = main.rounds[i].matches[j].score1;
          //console.log(main.s1);
          main.s2 = main.rounds[i].matches[j].score2;
          //console.log(main.s1);
          main.t1 = main.rounds[i].matches[j].team1.name;
          main.t2 = main.rounds[i].matches[j].team2.name;
          
          if(main.s1 < main.s2){
            main.winner = main.t2+" Won";
          }
          else if(main.s2 < main.s1){
            main.winner = main.t1+" Won";
          }
          else{
            main.winner = "Match Draw";
          }
        }
        // else{
        //   console.log("Please Enter Correct Input");
        // }
      }
    }
    },function errorCallback(response){
    console.log("Not Found");
  })
};
}]);


myApp.controller('EngLeaLatest',['$http',function($http){
  var main = this;  
  this.datas = [];
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master';

  this.eplData = function(){
    $http({
      method: 'GET',
      url: main.baseUrl+'/2016-17/en.1.json'
    }).then(function successCallback(response){

          main.rounds = response.data.rounds;
          console.log(main.rounds);

    },function errorCallback(response){
      alert("Not Found");
  })//End of http
  };//End of eplData

}]); //End of controller


myApp.controller('Third',['$http','$routeParams',function($http,$routeParams){
var main = this;
this.data = [];
this.date = $routeParams.date;
console.log(this.date);
this.t1Code = $routeParams.Code1;
console.log(this.t1Code);
this.t2Code = $routeParams.Code2;
console.log(this.t2Code);
this.t1;  //team 1 
this.t2;  //team 2
this.s1;  //score 1
this.s2;  //score 2
this.winner;

this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master';


this.story = function(){
  $http({
    method:'GET',
    url: main.baseUrl+'/2016-17/en.1.json'

  }).then(function successCallback(response){
    main.rounds = response.data.rounds;
    console.log(main.rounds);

    // for showing individual match info
    for(var i in main.rounds){
      //console.log(i);
      for(var j in main.rounds[i].matches){

        if(main.rounds[i].matches[j].team1.code == main.t1Code && main.rounds[i].matches[j].team2.code == main.t2Code && main.rounds[i].matches[j].date == main.date){
          main.s1 = main.rounds[i].matches[j].score1;
          //console.log(main.s1);
          main.s2 = main.rounds[i].matches[j].score2;
          //console.log(main.s1);
          main.t1 = main.rounds[i].matches[j].team1.name;
          main.t2 = main.rounds[i].matches[j].team2.name;
          
          if(main.s1 < main.s2){
            main.winner = main.t2+" Won";
          }
          else if(main.s2 < main.s1){
            main.winner = main.t1+" Won";
          }
          else{
            main.winner = "Match Draw";
          }
        }
        else{
          console.log("Please Enter Correct Input");
        }
      }
    }
  },function errorCallback(response){
    console.log("Not Found");
  })
};
}]);

// define controller for Team Detail View
myApp.controller('TeamController', ['$http','$routeParams','$q', function($http, $routeParams, $q){
   
//  define context
var main = this;
// function to get data from json
  this.teamDetails = function(){
//define teamId
  main.teamId = $routeParams.teamId;
 
//get JSON data using $http and $q
  var JSON1 = $http.get('en.1.json');
  var JSON2 = $http.get('en.2.json');

  $q.all([JSON1, JSON2]).then(function(response){
//define matchData to store the response
  main.matchData = [];

// define variable for Total no of matches
  var count = 0;

// define variable for Total no of matches won
  var win = 0;

// define variable for Total no of matches lost
  var loss = 0;

// define variable for Total no of matches draw
  var draw = 0;

// define variable for Total no of goal scored
  var goal = 0;

  angular.forEach(response, function(result){
  main.match = result.data.rounds;

// iterate throgh main.match 
angular.forEach(main.match, function(data){

 // iterate throgh data  
angular.forEach(data.matches, function(value){
  // console.log(data.matches);

// condition to get total match played
if(value.team1.name === main.teamId || value.team2.name === main.teamId){
  count++;
}
// show the total match Played in view
document.getElementById("score").innerText = count;
// end


// condition to get total match won
if(value.team1.name === main.teamId && value.score1>value.score2 || value.team2.name === main.teamId && value.score2>value.score1){
  win++;
}
// show the result in view
document.getElementById("win").innerText = win;
// end

// condition to get total match lost
if(value.team1.name === main.teamId && value.score1<value.score2 || value.team2.name === main.teamId && value.score2<value.score1){
  loss++;
}
// show the result in view
document.getElementById("loss").innerText = loss;
// end

// condition to get total match draw
if(value.team1.name === main.teamId && value.score1 == value.score2 || value.team2.name === main.teamId && value.score2==value.score1){
  draw++;
}
// show the result in view
document.getElementById("draw").innerText = draw;
// end

// condition to get total goal scored

if(value.team1.name === main.teamId  ){
  goal += value.score1; 
}
if(value.team2.name === main.teamId  ){
  goal += value.score2; 
}

// show the result in view
document.getElementById("goal").innerText = goal;
// end

});
});
});

    },

// handle the error
    function error(response){
    alert("some error occurred. Check the console.");
    });
 }
  
}])
