var angular = require('angular');
var uiRouter = require('angular-ui-router');
var loginComponent = require('./components/login');
var angularMaterial = require('angular-material');
require('angular-material/angular-material.css')
require('./app.styles.css');


angular.module('app', [uiRouter, angularMaterial, loginComponent])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
     
        $stateProvider
            .state('login', {
                url: "/login",
                template: "<login-component></login-component>"
            })
    });
