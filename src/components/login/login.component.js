var angularMaterial = require('angular-material');
require('angular-material/angular-material.css')

var templateUrl = require('ngtemplate!html!./login.template.html')

var loginComponent = angular.module('login.component', [angularMaterial])
    .component('loginComponent', {
        templateUrl: templateUrl,
        controller: LoginController,
        bindings: {
        }
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        
    });

function LoginController() {
    this.manual = {
        rememberMe : true
    };
    this.personas = [
        { name: 'Dick Stifferson', avatar: 'https://material.angularjs.org/latest/img/100-1.jpeg' },
        { name: 'Jordan Wipes', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg' },
        { name: 'Donny Dangles', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg' },
        { name: 'Lacey Long', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg' },
        { name: 'Lakshmi Tucker', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg' },
        { name: 'Charlie Rose', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg' }
    ];

    this.recentPersonas = [this.personas[0], this.personas[1], this.personas[2]];

    this.login = function (user) {
        if (user) {
            console.log('Logging in with ' + user.name);
        }    
    };

    this.loginManual = function () {
        console.log('Loggin in with ' + this.manual.email + '|' + this.manual.password);
    };

    this.getPersonas = function (query) {
        var lowercaseQuery = angular.lowercase(query);
        return this.personas.filter(function (persona) {
            return angular.lowercase(persona.name).indexOf(lowercaseQuery) === 0;
        })
    };
    
}

module.exports = loginComponent;
