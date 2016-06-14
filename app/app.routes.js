angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        // ROUTER PROVIDER ASSIGNS THE DEFAULT URL PAGE
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            // ASSIGNING STATES
            .state('home',{
                url:'/home',
                templateUrl:'home/home.html',
                controller:"homeCtrl"
            })

            // CREATING A CHILD STATE
            .state('home.facebook',{
              url:'/facebook',
              templateUrl:'tabs/facebook.html',
              controller:'homeCtrl'
            })

            .state('home.twitter',{
              url:'/twitter',
              templateUrl:'tabs/twitter.html',
              controller:'homeCtrl'
            })

            .state('home.weather',{
              url:'/weather',
              templateUrl:'tabs/weather.html',
              controller:'homeCtrl'
            })

            .state('home.comments',{
              url:'/comments',
              templateUrl:'tabs/comments.html',
              controller:'homeCtrl'
            })

            .state('home.profile',{
              url:'/profile',
              templateUrl:'tabs/profile.html',
              controller:'homeCtrl'
            })

            .state('home.contact',{
                url:'/contact',
                templateUrl:'tabs/contact.html'
            });
    });
