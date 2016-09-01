var angularMaterial = require('angular-material');
require('angular-material/angular-material.css')
require('./login.styles.css')

var templateUrl = require('ngtemplate!html!./login.template.html')

var loginComponent = angular.module('login.component', [angularMaterial])
    .component('loginComponent', {
        templateUrl: templateUrl,
        controller: ['$filter', '$mdDialog', LoginController],
        bindings: {
        }
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        
    });

function LoginController($filter, $mdDialog) {
    this.manual = {
        rememberMe : true
    };
    this.personas = [
        { name: 'Dick Stifferson', hexColor : '#ff7fdf', avatar: 'https://material.angularjs.org/latest/img/100-1.jpeg', lastLogin : Date.now() - 1000  },
        { name: 'Jordan Wipes', hexColor : '#25ba07', avatar: 'https://material.angularjs.org/latest/img/100-0.jpeg', lastLogin : Date.now() - 1400 },
        { name: 'Donny Dangles', hexColor : '#aa1414', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now() - 4000},
        { name: 'Lacey Long', hexColor : '#7a8ef4', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now()- 3000 },
        { name: 'Lakshmi Tucker', hexColor : '#ff7fdf', avatar: 'https://material.angularjs.org/latest/img/100-0.jpeg', lastLogin: Date.now() - 2000 },
        
        // { name: 'Charlie Rose', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin: Date.now() - 10000 },
        //         { name: 'Lacey Long', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now()- 3000 },
        // { name: 'Lakshmi Tucker', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now() - 2000},
        // { name: 'Charlie Rose', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin: Date.now() - 10000 },
        //         { name: 'Lacey Long', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now()- 3000 },
        // { name: 'Lakshmi Tucker', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now() - 2000},
        // { name: 'Charlie Rose', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin: Date.now() - 10000 },
        //         { name: 'Lacey Long', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now()- 3000 },
        // { name: 'Lakshmi Tucker', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now() - 2000},
        // { name: 'Charlie Rose', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin: Date.now() - 10000 },
        //         { name: 'Lacey Long', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now()- 3000 },
        // { name: 'Lakshmi Tucker', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now() - 2000},
        // { name: 'Charlie Rose', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin: Date.now() - 10000 },
        //         { name: 'Lacey Long', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now()- 3000 },
        // { name: 'Lakshmi Tucker', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now() - 2000},
        // { name: 'Charlie Rose', avatar: 'https://material.angularjs.org/latest/img/100-2.jpeg', lastLogin : Date.now() - 10000},
    ];

    this.recentPersonas = $filter('orderBy')(this.personas, function (i) {
        return i.lastLogin;
    }).slice(0, 3);

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

    this.add = function () {
        alert = $mdDialog.alert({
            title: 'Add Persona',
            textContent: 'Add a new persona',
            ok: 'Close'
        });
        $mdDialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
    }

    this.edit = function (persona) {
         alert = $mdDialog.alert({
            title: 'Edit Persona',
            textContent: 'Edit :' + persona.name,
            ok: 'Close'
        });
        $mdDialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
    };

    this.delete = function () {
         alert = $mdDialog.alert({
            title: 'Delete Persona',
            textContent: 'Delete a persona',
            ok: 'Close'
        });
        $mdDialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
    };
    
}

module.exports = loginComponent;
