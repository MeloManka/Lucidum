'use strict';

import angular from 'angular';

import LoginCtrl from './login-controller';
import LoginService from './service/login-service';
import LoginAPIService from './service/login-api-service';
import CookiesService from '../common/service/cookies-service';
import SessionStorageService from '../common/service/session-storage-service';

export default angular.module('login', [])
    .service('loginService', LoginService)
    .service('loginAPIService', LoginAPIService)
    .service('cookiesService', CookiesService)
    .service('sessionStorageService', SessionStorageService)
    .config($stateProvider => {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                'common': {
                    controller: LoginCtrl,
                    controllerAs: 'ctrl',
                    template: require('./login-tmpl.jade')
                }
            }
        });
    });
