var app = angular.module('MyApp', ['firebase']);

var config = {
  apiKey: "AIzaSyBdqYZerbf41m8X8ngdpyRSX-kRMRdtDx4",
  authDomain: "steffiyoon-a80a6.firebaseapp.com",
  databaseURL: "https://steffiyoon-a80a6.firebaseio.com",
  projectId: "steffiyoon-a80a6",
  storageBucket: "steffiyoon-a80a6.appspot.com",
  messagingSenderId: "911923476269"
};
firebase.initializeApp(config);
var database = firebase.database();

app.controller('myController', ["$scope", "$firebaseArray", function ($scope, $firebaseArray) {
    $scope.blogdata = $firebaseArray(database.ref("/posts/"));
}]);

var writeinitialData = function(){
    database.ref("posts/" + 0 + "/").set({
        "author": "Steffi Yoon", 
        "time": "3:07PM", 
        "date": "May 1, 2017",
        "story": "hello."
    });
}