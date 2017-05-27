import angular from 'angular';

import angularMaterialCss from 'angularMaterial/angular-material.css';
import fonts from './common/fonts.scss';
import style from './common/common.scss';

import landing from './landing/landing';

export default angular.module('app', [
  'ui.router',
  'ngMaterial',
  'ngMdIcons',
  landing.name
])
  .config(($locationProvider, $httpProvider) => {
    var interceptor = ($q, $injector) => {
      return {
        'response': response => {
          return response.data;
        },
        'responseError': rejection => {
          if (rejection.status == '401') {
            $injector.get('$state').transitionTo('landing');
          }
          return $q.reject(rejection.data);
        }
      };
    };
    $httpProvider.interceptors.push(interceptor);
    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, stateInfo, current) {

    });
  });



