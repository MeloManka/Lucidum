'use strict';

import angular from 'angular';

import MainCtrl from './main-controller';
import MainService from './main-service';
import MainAPIService from './main-api-service';
import CookiesService from '../common/service/cookies-service';
import SessionStorageService from '../common/service/session-storage-service';

import schemaUser from './user/views/schema/schema';
import auctionUser from './user/views/auction/auction';
import participateUser from './user/views/participate/participate';
import profileUser from './user/views/profile/profile';

import schemaAdmin from './admin/views/schema/schema';
import auctionAdmin from './admin/views/auction/auction';
import participateAdmin from './admin/views/participate/participate';
import profileAdmin from './admin/views/profile/profile';

export default angular.module('main', [
        schemaUser.name,
        auctionUser.name,
        participateUser.name,
        profileUser.name,
        schemaAdmin.name,
        auctionAdmin.name,
        participateAdmin.name,
        profileAdmin.name
    ])
    .service('mainService', MainService)
    .service('mainAPIService', MainAPIService)
    .service('cookiesService', CookiesService)
    .service('sessionStorageService', SessionStorageService)
    .config(function ($mdIconProvider) {

    })
    .config(($stateProvider) => {
        $stateProvider
            .state('admin', {
                url: '/admin',
                abstract: true,
                views: {
                    'common': {
                        controller: MainCtrl,
                        controllerAs: 'ctrl',
                        template: require('./main-tmpl.jade')
                    }
                }
            })
            .state('user', {
                url: '/users',
                abstract: true,
                views: {
                    'common': {
                        controller: MainCtrl,
                        controllerAs: 'ctrl',
                        template: require('./main-tmpl.jade')
                    }
                }
            });
    });