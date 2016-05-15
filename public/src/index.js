'use strict';

import '../vendor/normalize/normalize.css';
import './styles.js';

import angular from 'angular';

import landing from './landing/landing';
import AuthService from './common/service/auth-service';
import SessionStorageService from './common/service/session-storage-service';
import CookiesService from './common/service/cookies-service';

export default angular.module('app', [
        'ui.router',
        'ngCookies',
        'ngStorage',
        landing.name
    ])
    .service('authService', AuthService)
    .service('sessionStorageService', SessionStorageService)
    .service('cookiesService', CookiesService)
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
    .run(function ($rootScope, $state, authService) {
        $rootScope.$on('$stateChangeStart', function (event, stateInfo, current) {
            if (stateInfo.name != 'landing' && stateInfo.name != 'login' && stateInfo.name != 'register') {
                authService.isAuth()
                    .then(() => {

                    })
                    .catch(() => {
                        event.preventDefault();
                        $state.go('landing');
                    });
            }
        });
    });



