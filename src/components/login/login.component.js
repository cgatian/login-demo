var angularMaterial = require('angular-material');
require('angular-material/angular-material.css')

var templateUrl = require('ngtemplate!html!./login.template.html')

var loginComponent = angular.module('login.component', [angularMaterial])
    .component('loginComponent', {
        templateUrl: templateUrl,
        controller: LoginController,
        bindings: {
        }
    });

function LoginController() {
    this.personas = [
        { name: 'Dick Stifferson', avatar : 'https://material.angularjs.org/latest/img/100-1.jpeg' },        
        { name: 'Jordan Wipes', avatar : 'https://material.angularjs.org/latest/img/100-2.jpeg' }
    ]
}

module.exports = loginComponent;
