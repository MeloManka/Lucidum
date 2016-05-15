'use strict';

import angular from 'angular';

import LandingCtrl from './landing-controller';
import login from '../login/login';
import register from '../register/register';
import main from '../main/main';

export default angular.module('landing', [
        login.name,
        register.name,
        main.name
    ])
    .config($stateProvider => {
        $stateProvider.state('landing', {
            url: '/',
            views: {
                'common': {
                    controller: LandingCtrl,
                    controllerAs: 'ctrl',
                    template: require('./landing-tmpl.jade')
                }
            }
        });
    });