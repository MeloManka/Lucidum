'use strict';

import angular from 'angular';

import MainCtrl from './main-controller';
import MainService from './main-service';

export default angular.module('main', [])
    .service('mainService', MainService)
    .config($stateProvider => {
        $stateProvider.state('main', {
            url: '/main',
            views: {
                'common': {
                    controller: MainCtrl,
                    controllerAs: 'ctrl',
                    template: require('./main-tmpl.jade')
                }
            }
        });
    });